/**
 * drum-kit.js — Interactive drum kit canvas component for 4Learners
 *
 * Features:
 * - Cymbal (Becken) touch areas are ellipses that match the visual drawing
 *   (correct vertical radius, not too tall)
 * - Cymbal stands (Ständer) move together with the cymbal when dragged
 * - Supports both mouse and touch input for drag-to-reposition
 */
'use strict';

// ── Utility ──────────────────────────────────────────────────────────────────

/** Lighten (positive) or darken (negative) a hex colour by `amount`. */
function shadeColor(hex, amount) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r   = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g   = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + amount));
  const b   = Math.min(255, Math.max(0, (num & 0xff) + amount));
  return '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('');
}

// ── DrumKit class ─────────────────────────────────────────────────────────────

class DrumKit {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    // Each cymbal stores drawRx/drawRy for visual rendering and
    // touchRx/touchRy for hit detection — the touch area matches the
    // visual ellipse exactly so it is not vertically too large.
    // The stand offset is relative to the cymbal centre and moves with it.
    this.pieces = [
      {
        id: 'hihat',  label: 'Hi-Hat',
        x: 140, y: 230,
        drawRx: 52,  drawRy: 11,
        touchRx: 52, touchRy: 11,  // matches visual — not too tall
        stand: { dy: 120 },
        type: 'cymbal', color: '#c8a000',
      },
      {
        id: 'crash',  label: 'Crash',
        x: 265, y: 175,
        drawRx: 63,  drawRy: 13,
        touchRx: 63, touchRy: 13,
        stand: { dy: 140 },
        type: 'cymbal', color: '#d4aa00',
      },
      {
        id: 'ride',   label: 'Ride',
        x: 490, y: 205,
        drawRx: 73,  drawRy: 15,
        touchRx: 73, touchRy: 15,
        stand: { dy: 130 },
        type: 'cymbal', color: '#b89000',
      },
      {
        id: 'tom1',   label: 'Tom 1',
        x: 230, y: 295,
        drawRx: 46,  drawRy: 20,
        touchRx: 46, touchRy: 20,
        type: 'drum',  color: '#3a3a5c',
      },
      {
        id: 'tom2',   label: 'Tom 2',
        x: 385, y: 290,
        drawRx: 50,  drawRy: 21,
        touchRx: 50, touchRy: 21,
        type: 'drum',  color: '#3a3a5c',
      },
      {
        id: 'snare',  label: 'Snare',
        x: 185, y: 370,
        drawRx: 58,  drawRy: 24,
        touchRx: 58, touchRy: 24,
        type: 'drum',  color: '#555577',
      },
      {
        id: 'bass',   label: 'Bass',
        x: 310, y: 430,
        drawRx: 95,  drawRy: 42,
        touchRx: 95, touchRy: 42,
        type: 'drum',  color: '#2a2a40',
      },
    ];

    this.dragging    = null;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;

    this._setupEvents();
    this._draw();
  }

  // ── Coordinate helpers ──────────────────────────────────────────────────────

  _getPos(e) {
    const rect   = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width  / rect.width;
    const scaleY = this.canvas.height / rect.height;
    const src    = e.touches ? e.touches[0] : e;
    return {
      x: (src.clientX - rect.left) * scaleX,
      y: (src.clientY - rect.top)  * scaleY,
    };
  }

  // ── Hit detection ───────────────────────────────────────────────────────────

  /** Returns true when (px, py) falls inside the piece's touch ellipse. */
  _hitTest(piece, px, py) {
    const dx = (px - piece.x) / piece.touchRx;
    const dy = (py - piece.y) / piece.touchRy;
    return dx * dx + dy * dy <= 1;
  }

  _pieceAt(px, py) {
    // Iterate in reverse so pieces drawn on top are picked first
    for (let i = this.pieces.length - 1; i >= 0; i--) {
      if (this._hitTest(this.pieces[i], px, py)) return this.pieces[i];
    }
    return null;
  }

  // ── Event handling ──────────────────────────────────────────────────────────

  _setupEvents() {
    const c = this.canvas;
    c.addEventListener('mousedown',  this._onDown.bind(this));
    c.addEventListener('mousemove',  this._onMove.bind(this));
    c.addEventListener('mouseup',    this._onUp.bind(this));
    c.addEventListener('mouseleave', this._onUp.bind(this));
    c.addEventListener('touchstart', this._onDown.bind(this), { passive: false });
    c.addEventListener('touchmove',  this._onMove.bind(this), { passive: false });
    c.addEventListener('touchend',   this._onUp.bind(this));
    c.addEventListener('touchcancel',this._onUp.bind(this));
  }

  _onDown(e) {
    e.preventDefault();
    const pos   = this._getPos(e);
    const piece = this._pieceAt(pos.x, pos.y);
    if (piece) {
      this.dragging    = piece;
      this.dragOffsetX = piece.x - pos.x;
      this.dragOffsetY = piece.y - pos.y;
    }
  }

  _onMove(e) {
    if (!this.dragging) return;
    e.preventDefault();
    const pos        = this._getPos(e);
    // Moving the piece also moves its stand because the stand position is
    // calculated relative to piece.x / piece.y in _drawCymbal().
    this.dragging.x  = pos.x + this.dragOffsetX;
    this.dragging.y  = pos.y + this.dragOffsetY;
    this._draw();
  }

  _onUp() {
    this.dragging = null;
  }

  // ── Drawing ─────────────────────────────────────────────────────────────────

  _drawCymbal(p) {
    const ctx = this.ctx;

    // Stand (Ständer) — anchored relative to the cymbal centre, so it
    // always moves with the cymbal when dragged.
    const standTopX    = p.x;
    const standTopY    = p.y + p.drawRy + 2;
    const standBottomX = p.x;
    const standBottomY = p.y + p.stand.dy;

    ctx.save();
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth   = 3;
    ctx.lineCap     = 'round';
    ctx.beginPath();
    ctx.moveTo(standTopX, standTopY);
    ctx.lineTo(standBottomX, standBottomY);
    ctx.stroke();

    // Small feet at the base of the stand
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(standBottomX - 12, standBottomY);
    ctx.lineTo(standBottomX + 12, standBottomY);
    ctx.stroke();
    ctx.restore();

    // Cymbal body — flat ellipse; touchRx/touchRy match these dimensions
    ctx.save();
    ctx.fillStyle   = p.color;
    ctx.strokeStyle = 'rgba(255,255,255,0.6)';
    ctx.lineWidth   = 1.5;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, p.drawRx, p.drawRy, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Centre dome highlight
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, p.drawRx * 0.12, p.drawRy * 0.8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Label
    ctx.fillStyle  = 'rgba(0,0,0,0.7)';
    ctx.font       = 'bold 10px sans-serif';
    ctx.textAlign  = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(p.label, p.x, p.y);
    ctx.restore();
  }

  _drawDrum(p) {
    const ctx  = this.ctx;
    const side = Math.round(p.drawRy * 0.55);

    ctx.save();

    // Drum shell (side)
    ctx.fillStyle = p.id === 'bass'
      ? '#1e1e30'
      : shadeColor(p.color, -30);
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + side, p.drawRx, p.drawRy * 0.9, 0, 0, Math.PI * 2);
    ctx.fill();

    // Drum head (top)
    ctx.fillStyle   = p.color;
    ctx.strokeStyle = '#999';
    ctx.lineWidth   = 2;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, p.drawRx, p.drawRy, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Rim highlight
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth   = 1;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, p.drawRx - 3, p.drawRy - 2, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Label
    ctx.fillStyle    = 'rgba(255,255,255,0.85)';
    ctx.font         = 'bold 11px sans-serif';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(p.label, p.x, p.y);
    ctx.restore();
  }

  _draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Background
    ctx.fillStyle = '#16162a';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw drums first (behind cymbals and their stands)
    for (const p of this.pieces) {
      if (p.type === 'drum') this._drawDrum(p);
    }

    // Draw cymbals (and their stands) on top
    for (const p of this.pieces) {
      if (p.type === 'cymbal') this._drawCymbal(p);
    }
  }
}
