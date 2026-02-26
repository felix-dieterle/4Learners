/**
 * builtin-content.js — Pre-built learning content bundled with 4Learners.
 *
 * Provides 6 topic categories, each with sentences and quiz questions across
 * 3 depth levels, so the app can be used without an OpenRouter API key.
 *
 * Exposed as window.BUILTIN_CATEGORIES for use by engine.js.
 */
(function (global) {
  'use strict';

  global.BUILTIN_CATEGORIES = [
    // ── Solar System ──────────────────────────────────────────────────────────
    {
      name: 'Solar System',
      topics: ['Solar System'],
      levels: {
        1: {
          sentences: [
            { id: 'ss1-s1', topic: 'Solar System', text: 'The Solar System consists of the Sun and everything gravitationally bound to it, including 8 planets, dozens of moons, and millions of asteroids and comets.', detail: 'The Solar System formed about 4.6 billion years ago from a giant molecular cloud. Gravity pulled material together to form the Sun, and the remaining disc of gas and dust clumped into the planets and smaller bodies we see today.' },
            { id: 'ss1-s2', topic: 'Solar System', text: 'Earth is the third planet from the Sun and the only known world that supports life, thanks to liquid water, a breathable atmosphere, and a stable climate.', detail: "Earth's distance from the Sun places it in the \"habitable zone\", where temperatures allow liquid water to exist. Our planet also has a magnetic field that shields life from harmful solar radiation." },
            { id: 'ss1-s3', topic: 'Solar System', text: 'Jupiter is the largest planet in the Solar System—more than twice as massive as all the other planets combined.', detail: "Jupiter is a gas giant with no solid surface. Its famous Great Red Spot is a storm that has been raging for at least 350 years. Jupiter's strong gravity protects the inner planets by deflecting many incoming comets and asteroids." },
            { id: 'ss1-s4', topic: 'Solar System', text: 'The Sun is a medium-sized star that generates energy by fusing hydrogen atoms into helium in its core, releasing enormous amounts of light and heat.', detail: 'Every second, the Sun converts about 600 million tonnes of hydrogen into helium. It has enough hydrogen fuel to continue shining for another 5 billion years before eventually expanding into a red giant.' },
            { id: 'ss1-s5', topic: 'Solar System', text: 'Mars is known as the Red Planet because iron oxide (rust) on its surface gives it a reddish colour. It has the tallest volcano in the Solar System—Olympus Mons.', detail: "Olympus Mons stands about 22 km high—nearly three times the height of Mount Everest. Mars also has a canyon system, Valles Marineris, that stretches 4,000 km, dwarfing Earth's Grand Canyon." },
          ],
          questions: [
            { id: 'ss1-q1', topic: 'Solar System', question: 'How many planets are in our Solar System?', options: ['7', '8', '9', '10'], correctIndex: 1 },
            { id: 'ss1-q2', topic: 'Solar System', question: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], correctIndex: 1 },
            { id: 'ss1-q3', topic: 'Solar System', question: 'What process powers the Sun?', options: ['Chemical burning', 'Nuclear fission', 'Nuclear fusion', 'Gravity compression'], correctIndex: 2 },
            { id: 'ss1-q4', topic: 'Solar System', question: 'Which is the largest planet in the Solar System?', options: ['Saturn', 'Neptune', 'Jupiter', 'Uranus'], correctIndex: 2 },
          ],
        },
        2: {
          sentences: [
            { id: 'ss2-s1', topic: 'Solar System', text: "Saturn's iconic rings are made of ice particles, rocky debris, and dust ranging from tiny grains to chunks as large as a house.", detail: "Saturn's rings are surprisingly thin—sometimes only about 10 metres deep despite spanning hundreds of thousands of kilometres in width. Scientists believe the rings formed relatively recently in geological terms, possibly from a destroyed moon." },
            { id: 'ss2-s2', topic: 'Solar System', text: 'Venus has a runaway greenhouse effect that makes it the hottest planet (~465 °C) despite being farther from the Sun than Mercury.', detail: "Venus's dense atmosphere is 96% carbon dioxide, trapping heat so effectively that surface temperatures remain constant day and night. Atmospheric pressure on Venus is 90 times greater than on Earth." },
            { id: 'ss2-s3', topic: 'Solar System', text: "Europa, one of Jupiter's moons, has a vast subsurface ocean beneath its icy crust, making it one of the top candidates for extraterrestrial life.", detail: "Europa's ocean is kept liquid by tidal heating from Jupiter's gravity. The moon likely has more liquid water than all of Earth's oceans combined, and hydrothermal vents on its seafloor could provide energy for microbial life." },
            { id: 'ss2-s4', topic: 'Solar System', text: 'The asteroid belt between Mars and Jupiter contains millions of rocky bodies—remnants from the early Solar System that never coalesced into a planet due to Jupiter\'s gravitational influence.', detail: "Despite containing millions of objects, the total mass of the asteroid belt is less than 4% of the Moon's mass. Spacecraft have crossed it multiple times with very little risk of collision." },
            { id: 'ss2-s5', topic: 'Solar System', text: "Neptune's supersonic winds can reach 2,100 km/h—the fastest recorded on any planet in the Solar System.", detail: "Despite being the coldest planet at −214 °C, Neptune has an unexpectedly active atmosphere driven by internal heat. The planet radiates about 2.6 times more energy than it receives from the Sun." },
          ],
          questions: [
            { id: 'ss2-q1', topic: 'Solar System', question: "What are Saturn's rings primarily composed of?", options: ['Gas', 'Lava', 'Ice and rock', 'Iron'], correctIndex: 2 },
            { id: 'ss2-q2', topic: 'Solar System', question: 'Which planet has the highest average surface temperature?', options: ['Mercury', 'Mars', 'Venus', 'Jupiter'], correctIndex: 2 },
            { id: 'ss2-q3', topic: 'Solar System', question: "Which of Jupiter's moons likely harbours a subsurface ocean?", options: ['Io', 'Ganymede', 'Callisto', 'Europa'], correctIndex: 3 },
            { id: 'ss2-q4', topic: 'Solar System', question: 'Where is the asteroid belt located?', options: ['Between Earth and Mars', 'Between Mars and Jupiter', 'Beyond Neptune', 'Between Jupiter and Saturn'], correctIndex: 1 },
          ],
        },
        3: {
          sentences: [
            { id: 'ss3-s1', topic: 'Solar System', text: 'The Kuiper Belt is a disc-shaped region of icy bodies beyond Neptune that includes dwarf planets like Pluto, Eris, and Makemake.', detail: "The Kuiper Belt extends from about 30 to 50 AU from the Sun and is far larger than the asteroid belt. It is thought to be the source of short-period comets." },
            { id: 'ss3-s2', topic: 'Solar System', text: "The Roche limit is the minimum distance at which a celestial body can orbit a larger planet without being torn apart by tidal forces—explaining why planetary rings form rather than moons.", detail: "Inside the Roche limit, tidal forces overcome the self-gravity holding a body together. Material that crosses inward breaks apart and spreads into a ring. Saturn's inner moons sit just outside its Roche limit." },
            { id: 'ss3-s3', topic: 'Solar System', text: "Solar winds—streams of charged particles emitted by the Sun—create the heliosphere, a vast magnetised bubble that extends well beyond Pluto and shields the Solar System from interstellar radiation.", detail: 'Voyager 1 crossed the heliopause (the outer edge of the heliosphere) in 2012, becoming the first human-made object to enter interstellar space. The heliosphere is shaped by the Sun\'s magnetic field rotating in a spiral pattern known as the "Parker spiral".' },
            { id: 'ss3-s4', topic: 'Solar System', text: 'Planetary migration models propose that Jupiter and Saturn shifted significantly in their orbits during the early Solar System, destabilising and reshaping the arrangement of all the planets.', detail: "The Grand Tack hypothesis suggests Jupiter first migrated inward to about 1.5 AU before being pulled back outward by Saturn. This migration may explain why Mars is smaller than expected and why the asteroid belt is so depleted." },
            { id: 'ss3-s5', topic: 'Solar System', text: "Lagrange points are five gravitational equilibrium positions where a small object can maintain a stable position relative to two larger bodies—used to park spacecraft like the James Webb Space Telescope.", detail: "At Lagrange points, the combined gravitational forces of two large bodies and the centrifugal force balance precisely. L2 (1.5 million km from Earth, away from the Sun) is particularly useful for space telescopes because it provides a stable thermal environment." },
          ],
          questions: [
            { id: 'ss3-q1', topic: 'Solar System', question: 'What region of icy bodies lies beyond Neptune?', options: ['Asteroid Belt', 'Oort Cloud', 'Kuiper Belt', 'Heliosphere'], correctIndex: 2 },
            { id: 'ss3-q2', topic: 'Solar System', question: 'What does the Roche limit define?', options: ["The Sun's gravitational reach", 'The minimum orbital distance before tidal disruption', 'The edge of the Solar System', "Jupiter's magnetic field boundary"], correctIndex: 1 },
            { id: 'ss3-q3', topic: 'Solar System', question: 'Which spacecraft first entered interstellar space?', options: ['Voyager 2', 'New Horizons', 'Pioneer 10', 'Voyager 1'], correctIndex: 3 },
            { id: 'ss3-q4', topic: 'Solar System', question: 'Where is the James Webb Space Telescope positioned?', options: ['Moon orbit', 'L1 Lagrange point', 'L2 Lagrange point', 'Mars orbit'], correctIndex: 2 },
          ],
        },
      },
    },

    // ── Human Body ────────────────────────────────────────────────────────────
    {
      name: 'Human Body',
      topics: ['Human Body'],
      levels: {
        1: {
          sentences: [
            { id: 'hb1-s1', topic: 'Human Body', text: 'The human body is made up of approximately 37 trillion cells, each performing specific functions to keep you alive and healthy.', detail: 'Cells are the basic unit of life. Different types—such as muscle cells, nerve cells, and blood cells—are specialised for different tasks. Every cell contains your complete DNA blueprint.' },
            { id: 'hb1-s2', topic: 'Human Body', text: 'The heart beats about 100,000 times a day, pumping roughly 7,000 litres of blood through 96,000 kilometres of blood vessels.', detail: "The heart is divided into four chambers. The right side pumps blood to the lungs to collect oxygen, while the left side pumps oxygen-rich blood to the rest of the body. This entire circuit takes only about 20 seconds." },
            { id: 'hb1-s3', topic: 'Human Body', text: 'The brain contains about 86 billion neurons that form over 100 trillion connections, making it the most complex structure known in the universe.', detail: 'Neurons communicate via electrical signals and chemical messengers called neurotransmitters. The brain uses about 20% of your body\'s total energy despite being only 2% of its weight.' },
            { id: 'hb1-s4', topic: 'Human Body', text: 'Bones are living tissue that continuously remodel themselves—your entire skeleton is replaced roughly every 10 years through a process called bone remodelling.', detail: 'Bone remodelling involves two types of cells: osteoclasts, which break down old bone, and osteoblasts, which build new bone. This process is regulated by hormones and mechanical stress from exercise.' },
            { id: 'hb1-s5', topic: 'Human Body', text: 'The immune system is your body\'s defence network, identifying and destroying pathogens like bacteria and viruses using specialised white blood cells.', detail: 'The immune system has two main components: the innate immune response (rapid, non-specific) and the adaptive immune response (slower but highly targeted). Vaccines work by training the adaptive immune system to recognise specific pathogens.' },
          ],
          questions: [
            { id: 'hb1-q1', topic: 'Human Body', question: 'Approximately how many cells are in the human body?', options: ['3.7 million', '37 billion', '37 trillion', '370 trillion'], correctIndex: 2 },
            { id: 'hb1-q2', topic: 'Human Body', question: 'What is the approximate length of all blood vessels in the human body?', options: ['1,000 km', '10,000 km', '50,000 km', '96,000 km'], correctIndex: 3 },
            { id: 'hb1-q3', topic: 'Human Body', question: 'How many neurons are in the human brain?', options: ['86 million', '86 billion', '1 trillion', '100 trillion'], correctIndex: 1 },
            { id: 'hb1-q4', topic: 'Human Body', question: 'What cells build new bone tissue?', options: ['Osteoclasts', 'Osteoblasts', 'Neurons', 'Leukocytes'], correctIndex: 1 },
          ],
        },
        2: {
          sentences: [
            { id: 'hb2-s1', topic: 'Human Body', text: 'The gut microbiome—trillions of bacteria, viruses, and fungi living in your intestines—plays a crucial role in digestion, immunity, and even mood regulation.', detail: 'Your gut contains about 38 trillion microbial cells, nearly equal to the number of human cells. These microbes produce vitamins, digest fibre, and communicate with the brain via the gut-brain axis, influencing mental health.' },
            { id: 'hb2-s2', topic: 'Human Body', text: 'Telomeres are protective caps on the ends of chromosomes that shorten every time a cell divides—their length is considered a biological clock linked to ageing.', detail: "When telomeres become too short, cells can no longer divide and become senescent (aged). The enzyme telomerase can rebuild telomeres, and researchers are studying how to harness it to slow ageing without promoting cancer." },
            { id: 'hb2-s3', topic: 'Human Body', text: 'Epigenetics studies how environmental factors like diet, stress, and exercise can switch genes on or off without changing the DNA sequence itself.', detail: 'Epigenetic changes occur through chemical modifications such as DNA methylation and histone modification. These changes can persist across cell divisions and even be inherited by the next generation.' },
            { id: 'hb2-s4', topic: 'Human Body', text: 'The lymphatic system is a network of vessels and nodes that drains excess fluid from tissues, transports fats from the gut, and carries immune cells throughout the body.', detail: "Unlike the circulatory system, the lymphatic system has no pump—lymph moves through the vessels because of muscle contractions and breathing. The spleen, thymus, and tonsils are all part of this system." },
            { id: 'hb2-s5', topic: 'Human Body', text: "Stem cells are undifferentiated cells that can divide and develop into many different cell types, giving the body the ability to repair and regenerate tissues.", detail: 'Embryonic stem cells can become any cell type (pluripotent). Adult stem cells, found in bone marrow and other tissues, are more limited but are already used in bone marrow transplants to treat leukaemia.' },
          ],
          questions: [
            { id: 'hb2-q1', topic: 'Human Body', question: 'What role does the gut microbiome play in health?', options: ['Only digestion', 'Only immunity', 'Digestion, immunity, and mood', 'Only mood regulation'], correctIndex: 2 },
            { id: 'hb2-q2', topic: 'Human Body', question: 'What are telomeres?', options: ['Types of proteins', 'Protective caps on chromosomes', 'Enzymes that repair DNA', 'Brain neurotransmitters'], correctIndex: 1 },
            { id: 'hb2-q3', topic: 'Human Body', question: 'What does epigenetics study?', options: ['DNA mutations', 'Gene expression without DNA sequence changes', 'Protein synthesis', 'Cell division'], correctIndex: 1 },
            { id: 'hb2-q4', topic: 'Human Body', question: 'Which type of stem cell can become any cell type in the body?', options: ['Adult stem cells', 'Neural stem cells', 'Embryonic stem cells', 'Haematopoietic stem cells'], correctIndex: 2 },
          ],
        },
        3: {
          sentences: [
            { id: 'hb3-s1', topic: 'Human Body', text: 'CRISPR-Cas9 is a gene-editing tool that acts like molecular scissors, allowing scientists to cut and alter DNA at precise locations to potentially cure genetic diseases.', detail: "CRISPR was discovered as a natural defence mechanism in bacteria. The Cas9 protein uses a guide RNA to locate a specific DNA sequence, then cuts both strands of the double helix. Clinical trials are already using CRISPR to treat sickle-cell disease." },
            { id: 'hb3-s2', topic: 'Human Body', text: 'The blood-brain barrier is a selective semi-permeable membrane formed by tightly packed endothelial cells that shields the brain from pathogens and toxins while allowing essential nutrients through.', detail: 'The blood-brain barrier is both a protective asset and a challenge for drug delivery. Most therapeutic molecules are too large to cross it, which complicates treating brain tumours and neurological diseases.' },
            { id: 'hb3-s3', topic: 'Human Body', text: 'Neuroplasticity is the brain\'s ability to reorganise its structure and function throughout life in response to learning, experience, or injury.', detail: 'Every time you learn something new, synaptic connections are strengthened or pruned in a process called long-term potentiation. This mechanism underlies memory formation and recovery from brain injuries.' },
            { id: 'hb3-s4', topic: 'Human Body', text: "mRNA vaccines work by delivering genetic instructions to your cells, prompting them to produce a harmless protein piece that trains the immune system to recognise a pathogen.", detail: 'Unlike traditional vaccines, mRNA vaccines never enter the cell nucleus and do not interact with DNA. The mRNA is quickly broken down by the cell after use, leaving only the trained immune memory behind.' },
            { id: 'hb3-s5', topic: 'Human Body', text: 'The complement system is a cascade of proteins in the blood that, once activated, can destroy pathogens directly, recruit immune cells, and mark invaders for destruction by phagocytes.', detail: 'The complement cascade has three activation pathways: classical (triggered by antibodies), lectin (triggered by sugar patterns on pathogens), and alternative (triggered by foreign surfaces). All three converge to form the membrane attack complex that punches holes in bacterial membranes.' },
          ],
          questions: [
            { id: 'hb3-q1', topic: 'Human Body', question: 'What does CRISPR-Cas9 use to locate specific DNA sequences?', options: ['Antibodies', 'Guide RNA', 'Restriction enzymes', 'Telomerase'], correctIndex: 1 },
            { id: 'hb3-q2', topic: 'Human Body', question: 'What is the main challenge posed by the blood-brain barrier?', options: ['It causes inflammation', 'It blocks most drugs from reaching the brain', 'It produces excess fluid', 'It prevents oxygen delivery'], correctIndex: 1 },
            { id: 'hb3-q3', topic: 'Human Body', question: "What molecular mechanism underlies memory formation?", options: ['Neurogenesis', 'Apoptosis', 'Long-term potentiation', 'Myelination'], correctIndex: 2 },
            { id: 'hb3-q4', topic: 'Human Body', question: 'How do mRNA vaccines interact with the cell\'s DNA?', options: ['They edit DNA sequences', 'They replace DNA', 'They do not interact with DNA', 'They insert into DNA'], correctIndex: 2 },
          ],
        },
      },
    },

    // ── World History ─────────────────────────────────────────────────────────
    {
      name: 'World History',
      topics: ['World History'],
      levels: {
        1: {
          sentences: [
            { id: 'wh1-s1', topic: 'World History', text: "Ancient Egypt was one of humanity's earliest and longest-lasting civilisations, spanning over 3,000 years along the Nile River, famous for its pyramids and hieroglyphic writing.", detail: "The Old, Middle, and New Kingdoms were the three major periods of ancient Egyptian history. The Great Pyramid of Giza, built around 2560 BC for Pharaoh Khufu, was the tallest man-made structure on Earth for over 3,800 years." },
            { id: 'wh1-s2', topic: 'World History', text: 'The Roman Empire at its peak controlled about 5 million km² of territory and 70 million people—roughly 21% of the world\'s population at the time.', detail: "Rome's network of roads stretched over 400,000 km, enabling rapid movement of armies and trade goods. Roman law, architecture, and language (Latin) had a profound and lasting influence on Western civilisation." },
            { id: 'wh1-s3', topic: 'World History', text: 'The Silk Road was an ancient network of trade routes connecting China to the Mediterranean world, facilitating the exchange of goods, ideas, religions, and diseases for over 1,500 years.', detail: "The Silk Road was not a single road but a web of overland and sea routes. Along with silk, it carried spices, gold, glassware, and paper—and also spread Buddhism, Islam, and the bubonic plague." },
            { id: 'wh1-s4', topic: 'World History', text: 'The invention of the printing press by Johannes Gutenberg around 1440 revolutionised the spread of information, making books affordable and fuelling the Renaissance and the Reformation.', detail: "Before the printing press, books had to be copied by hand, making them extremely expensive and rare. Within 50 years of Gutenberg's invention, over 20 million books had been printed in Europe, transforming literacy rates." },
            { id: 'wh1-s5', topic: 'World History', text: 'The French Revolution (1789–1799) overthrew the monarchy and established principles of liberty, equality, and popular sovereignty that shaped modern democracy worldwide.', detail: "The Revolution produced the Declaration of the Rights of Man and of the Citizen—a foundational document of liberal democracy. It led to the rise of Napoleon Bonaparte and inspired revolutionary movements across Europe and the Americas." },
          ],
          questions: [
            { id: 'wh1-q1', topic: 'World History', question: 'How long did ancient Egyptian civilisation last?', options: ['500 years', '1,000 years', '2,000 years', 'Over 3,000 years'], correctIndex: 3 },
            { id: 'wh1-q2', topic: 'World History', question: 'What percentage of the world\'s population lived under the Roman Empire at its peak?', options: ['5%', '10%', '21%', '35%'], correctIndex: 2 },
            { id: 'wh1-q3', topic: 'World History', question: 'Who invented the printing press around 1440?', options: ['Leonardo da Vinci', 'Johannes Gutenberg', 'Martin Luther', 'Isaac Newton'], correctIndex: 1 },
            { id: 'wh1-q4', topic: 'World History', question: 'What revolution in 1789 established principles of liberty and equality?', options: ['American Revolution', 'Industrial Revolution', 'French Revolution', 'Russian Revolution'], correctIndex: 2 },
          ],
        },
        2: {
          sentences: [
            { id: 'wh2-s1', topic: 'World History', text: "The Mongol Empire, founded by Genghis Khan in 1206, became the largest contiguous land empire in history, stretching from the Pacific Ocean to Eastern Europe.", detail: "At its peak, the Mongol Empire covered about 24 million km². While the Mongols were feared for their military campaigns, they also facilitated the Pax Mongolica—a period of relative stability that boosted Silk Road trade." },
            { id: 'wh2-s2', topic: 'World History', text: "The Black Death (1347–1351) killed an estimated 30–60% of Europe's population and had profound social, economic, and religious consequences that shaped the late medieval world.", detail: "The plague, caused by the bacterium Yersinia pestis, spread via flea-infested rats on trading ships. Its devastation led to labour shortages that empowered surviving peasants, weakened feudalism, and may have accelerated the Renaissance by forcing intellectual and social change." },
            { id: 'wh2-s3', topic: 'World History', text: "The Industrial Revolution, beginning in Britain around 1760, transformed manufacturing through mechanisation, shifting populations from rural agriculture to urban factories and fundamentally changing the global economy.", detail: "Key inventions included the steam engine (James Watt), the spinning jenny, and the power loom. Urbanisation, child labour, pollution, and new class structures emerged. Britain's head start gave it global economic dominance throughout the 19th century." },
            { id: 'wh2-s4', topic: 'World History', text: "World War I (1914–1918) was triggered by the assassination of Archduke Franz Ferdinand and resulted in over 20 million deaths, redrawing the map of Europe and dismantling empires.", detail: "The war introduced industrial-scale killing through machine guns, artillery, chemical weapons, and trench warfare. The Treaty of Versailles imposed harsh conditions on Germany, contributing to economic instability and ultimately setting the stage for World War II." },
            { id: 'wh2-s5', topic: 'World History', text: 'The decolonisation movement of the 20th century saw over 70 colonial territories gain independence, fundamentally reshaping the geopolitical order established by European empires.', detail: "By 1960, 17 African nations had gained independence—a year known as the \"Year of Africa\". Decolonisation was driven by nationalist movements, the economic exhaustion of European powers after WWII, and the United Nations charter's commitment to self-determination." },
          ],
          questions: [
            { id: 'wh2-q1', topic: 'World History', question: 'Who founded the Mongol Empire in 1206?', options: ['Kublai Khan', 'Attila the Hun', 'Genghis Khan', 'Timur'], correctIndex: 2 },
            { id: 'wh2-q2', topic: 'World History', question: 'What percentage of Europe\'s population died in the Black Death?', options: ['5–15%', '15–25%', '30–60%', 'Over 70%'], correctIndex: 2 },
            { id: 'wh2-q3', topic: 'World History', question: 'Where did the Industrial Revolution begin?', options: ['France', 'Germany', 'United States', 'Britain'], correctIndex: 3 },
            { id: 'wh2-q4', topic: 'World History', question: 'What event triggered World War I?', options: ["Invasion of Poland", "Assassination of Archduke Franz Ferdinand", "Sinking of the Lusitania", "Russian Revolution"], correctIndex: 1 },
          ],
        },
        3: {
          sentences: [
            { id: 'wh3-s1', topic: 'World History', text: "The Cold War (1947–1991) was a geopolitical struggle between the United States and the Soviet Union fought through proxy wars, an arms race, and ideological competition rather than direct military conflict.", detail: "Both superpowers accumulated enough nuclear weapons to destroy civilisation many times over—a doctrine known as Mutually Assured Destruction (MAD). Proxy conflicts in Korea, Vietnam, and Angola claimed millions of lives." },
            { id: 'wh3-s2', topic: 'World History', text: "The Bretton Woods Conference (1944) established the international monetary system after WWII, creating the IMF and World Bank and pegging world currencies to the US dollar.", detail: "Under Bretton Woods, the US dollar became the world's reserve currency, backed by gold at $35 per ounce. The system collapsed in 1971 when President Nixon ended dollar-gold convertibility (the \"Nixon Shock\"), leading to today's system of floating exchange rates." },
            { id: 'wh3-s3', topic: 'World History', text: "The Haitian Revolution (1791–1804) was the only successful slave revolt in history that led to the founding of a nation, creating the first Black republic in the Western Hemisphere.", detail: "Led by figures like Toussaint Louverture and Jean-Jacques Dessalines, formerly enslaved people defeated Spanish, British, and Napoleonic French forces. The revolution terrified slaveholding societies and had a profound, if often suppressed, influence on abolitionist movements." },
            { id: 'wh3-s4', topic: 'World History', text: "The Green Revolution of the 1960s–70s dramatically increased agricultural yields in developing countries through high-yield crop varieties, irrigation, and fertilisers, preventing widespread famine.", detail: "Norman Borlaug, who won the Nobel Peace Prize for his work developing disease-resistant wheat varieties, is credited with saving over a billion lives. However, the revolution also increased dependence on fossil fuel-based fertilisers and raised concerns about biodiversity and land inequality." },
            { id: 'wh3-s5', topic: 'World History', text: "The dissolution of the Soviet Union in 1991 ended the Cold War, resulted in 15 independent states, and triggered a wave of globalisation and liberal democracy expansion.", detail: "The USSR's collapse was driven by economic stagnation, the costs of the Afghan War, Mikhail Gorbachev's reforms (glasnost and perestroika), and nationalist movements. NATO and the EU subsequently expanded eastward, reshaping the geopolitical map of Europe." },
          ],
          questions: [
            { id: 'wh3-q1', topic: 'World History', question: 'What doctrine held both superpowers back from direct nuclear conflict?', options: ['Containment', 'Détente', 'Mutually Assured Destruction', 'Monroe Doctrine'], correctIndex: 2 },
            { id: 'wh3-q2', topic: 'World History', question: 'What did the Bretton Woods Conference create?', options: ['NATO', 'The United Nations', 'The IMF and World Bank', 'The European Union'], correctIndex: 2 },
            { id: 'wh3-q3', topic: 'World History', question: 'Which was the only successful slave revolt to found a nation?', options: ['American Revolution', 'Haitian Revolution', 'Cuban Revolution', 'Spartacus Revolt'], correctIndex: 1 },
            { id: 'wh3-q4', topic: 'World History', question: 'Who won the Nobel Peace Prize for developing high-yield wheat varieties?', options: ['Marie Curie', 'Albert Schweitzer', 'Norman Borlaug', 'Wangari Maathai'], correctIndex: 2 },
          ],
        },
      },
    },

    // ── Mathematics ───────────────────────────────────────────────────────────
    {
      name: 'Mathematics',
      topics: ['Mathematics'],
      levels: {
        1: {
          sentences: [
            { id: 'ma1-s1', topic: 'Mathematics', text: 'Pi (π) is the ratio of a circle\'s circumference to its diameter and equals approximately 3.14159—it is irrational, meaning its decimal expansion never repeats or terminates.', detail: "Pi appears not just in circles but throughout mathematics, physics, and engineering. It has been calculated to over 100 trillion decimal places using computers, yet for most practical purposes 3.14159 is more than sufficient." },
            { id: 'ma1-s2', topic: 'Mathematics', text: 'Prime numbers are whole numbers greater than 1 that can only be divided by 1 and themselves—such as 2, 3, 5, 7, 11—and they are the building blocks of all other whole numbers.', detail: "The Fundamental Theorem of Arithmetic states that every integer greater than 1 can be uniquely expressed as a product of prime numbers. Despite their simplicity, prime numbers are central to modern cryptography and internet security." },
            { id: 'ma1-s3', topic: 'Mathematics', text: 'The Pythagorean theorem states that in a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides: a² + b² = c².', detail: "This theorem was known to the Babylonians over a millennium before Pythagoras. It has hundreds of different proofs, more than any other mathematical theorem. It is fundamental to geometry, trigonometry, and navigation." },
            { id: 'ma1-s4', topic: 'Mathematics', text: 'The Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, 13, …) is formed by adding the two preceding numbers, and it appears frequently in nature—in flower petals, pinecone spirals, and shell growth.', detail: "The ratio of consecutive Fibonacci numbers converges to the golden ratio (≈1.618). This ratio appears in art, architecture, and nature. Spiral galaxy arms and DNA molecule dimensions also approximate Fibonacci patterns." },
            { id: 'ma1-s5', topic: 'Mathematics', text: 'Zero was invented as a number independently in several civilisations including ancient India and Mesoamerica, and without it modern mathematics, computing, and science would be impossible.', detail: "The Babylonians used a placeholder for zero but did not treat it as a number. Indian mathematician Brahmagupta (7th century AD) first described rules for arithmetic with zero as a number. Zero is the foundation of the positional number system that makes large-number arithmetic practical." },
          ],
          questions: [
            { id: 'ma1-q1', topic: 'Mathematics', question: 'What is pi (π)?', options: ['22/7', 'The ratio of diameter to circumference', 'The ratio of circumference to diameter', 'An integer'], correctIndex: 2 },
            { id: 'ma1-q2', topic: 'Mathematics', question: 'Which is NOT a prime number?', options: ['2', '7', '9', '11'], correctIndex: 2 },
            { id: 'ma1-q3', topic: 'Mathematics', question: 'In the Pythagorean theorem a² + b² = c², what does c represent?', options: ['The shortest side', 'Any side', 'The hypotenuse', 'The base'], correctIndex: 2 },
            { id: 'ma1-q4', topic: 'Mathematics', question: 'What is the next number in the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, ?', options: ['11', '12', '13', '15'], correctIndex: 2 },
          ],
        },
        2: {
          sentences: [
            { id: 'ma2-s1', topic: 'Mathematics', text: 'Calculus, developed independently by Newton and Leibniz in the 17th century, provides tools for calculating rates of change (derivatives) and areas under curves (integrals).', detail: "Differential calculus analyses how quantities change—essential for physics, engineering, and economics. Integral calculus computes accumulation, such as areas and volumes. The Fundamental Theorem of Calculus proves these two operations are inverses of each other." },
            { id: 'ma2-s2', topic: 'Mathematics', text: "Euler's number e (≈2.71828) is the base of natural logarithms and arises naturally in many contexts including compound interest, population growth, and the mathematics of exponential decay.", detail: "The number e is defined as the limit of (1 + 1/n)ⁿ as n approaches infinity. Euler's formula e^(iπ) + 1 = 0 links five of mathematics' most fundamental constants in a single equation, often called the most beautiful equation in mathematics." },
            { id: 'ma2-s3', topic: 'Mathematics', text: 'Probability theory quantifies uncertainty by assigning numbers between 0 and 1 to events, where 0 means impossible and 1 means certain, enabling decisions under uncertainty.', detail: "Probability was formalised by Blaise Pascal and Pierre de Fermat while solving a gambling problem in 1654. Bayes\' theorem, a key result, describes how to update the probability of a hypothesis when new evidence is observed—the foundation of Bayesian statistics and machine learning." },
            { id: 'ma2-s4', topic: 'Mathematics', text: 'Graph theory studies networks of nodes (vertices) connected by edges and has applications in social networks, logistics, computer science, and biology.', detail: "Graph theory began with Euler's solution to the Königsberg Bridge Problem in 1736—whether you can walk across all seven bridges without crossing any bridge twice. Modern applications include Google's PageRank algorithm and finding the shortest route in a GPS system." },
            { id: 'ma2-s5', topic: 'Mathematics', text: "Gödel's Incompleteness Theorems (1931) proved that in any sufficiently powerful mathematical system, there are true statements that cannot be proved within that system—placing fundamental limits on mathematics itself.", detail: "This was a shocking result that shattered Hilbert's programme to formalise all of mathematics. Gödel constructed a statement equivalent to 'This statement cannot be proved' and showed it creates an unavoidable paradox, demonstrating that mathematics can never be both complete and consistent." },
          ],
          questions: [
            { id: 'ma2-q1', topic: 'Mathematics', question: 'What does differential calculus primarily study?', options: ['Areas under curves', 'Rates of change', 'Probability of events', 'Prime numbers'], correctIndex: 1 },
            { id: 'ma2-q2', topic: 'Mathematics', question: "What is Euler's famous formula involving e, i, and π?", options: ['e^π = i', 'e^(iπ) + 1 = 0', 'e^i = π', 'iπ = e'], correctIndex: 1 },
            { id: 'ma2-q3', topic: 'Mathematics', question: "What does Bayes' Theorem help us do?", options: ['Compute derivatives', 'Update probabilities with new evidence', 'Find prime numbers', 'Solve differential equations'], correctIndex: 1 },
            { id: 'ma2-q4', topic: 'Mathematics', question: "What did Gödel's Incompleteness Theorems demonstrate?", options: ['All mathematical statements are decidable', 'Mathematics contains statements that cannot be proved', 'Calculus is inconsistent', 'Infinity does not exist'], correctIndex: 1 },
          ],
        },
        3: {
          sentences: [
            { id: 'ma3-s1', topic: 'Mathematics', text: "The Riemann Hypothesis, proposed in 1859, conjectures that all non-trivial zeros of the Riemann zeta function have a real part equal to 1/2—its proof would revolutionise number theory and earn a $1 million Millennium Prize.", detail: "The Riemann zeta function encodes the distribution of prime numbers. If the hypothesis is true, it would imply very tight bounds on how prime numbers are distributed among the integers. Despite being verified for over 10 trillion zeros, no general proof exists." },
            { id: 'ma3-s2', topic: 'Mathematics', text: "Topology is the study of geometric properties preserved under continuous deformations—stretching, bending, and twisting without tearing. A coffee cup and a donut are 'topologically equivalent' because both have one hole.", detail: "Topology has surprising depth: the Möbius strip has only one side and one edge. The Poincaré Conjecture—that a 3D sphere is the only compact manifold in which every loop can be contracted to a point—was proven by Grigori Perelman in 2003." },
            { id: 'ma3-s3', topic: 'Mathematics', text: "Information theory, developed by Claude Shannon in 1948, provides a mathematical framework for quantifying information, data compression, and transmission limits over noisy communication channels.", detail: "Shannon's concept of 'entropy' measures the average information content of a message. He proved that it is possible to transmit information with arbitrarily low error rates as long as the data rate is below the channel capacity—a result known as the Noisy Channel Coding Theorem." },
            { id: 'ma3-s4', topic: 'Mathematics', text: "The P vs NP problem asks whether every problem whose solution can be quickly verified (NP) can also be quickly solved (P)—widely considered the most important open problem in computer science and mathematics.", detail: "If P = NP, many currently intractable problems—like protein folding, optimal logistics, and cryptography—could be solved efficiently. Most mathematicians believe P ≠ NP, but no one has proved it. A proof either way would win a $1 million Millennium Prize." },
            { id: 'ma3-s5', topic: 'Mathematics', text: "Abstract algebra studies algebraic structures like groups, rings, and fields, providing the language used throughout modern mathematics, physics, and cryptography.", detail: "Groups capture the essence of symmetry and underlie particle physics. Galois Theory, built on group theory, proved that there is no general formula to solve polynomial equations of degree 5 or higher using radicals—answering a question that had eluded mathematicians for centuries." },
          ],
          questions: [
            { id: 'ma3-q1', topic: 'Mathematics', question: "What does the Riemann Hypothesis concern?", options: ['The distribution of even numbers', 'Zeros of the Riemann zeta function', 'The value of pi', 'Convergence of infinite series'], correctIndex: 1 },
            { id: 'ma3-q2', topic: 'Mathematics', question: "In topology, why are a coffee cup and a donut considered equivalent?", options: ['They weigh the same', 'Both have one hole', 'Both are circular', 'Both are made of the same material'], correctIndex: 1 },
            { id: 'ma3-q3', topic: 'Mathematics', question: "Who developed information theory in 1948?", options: ['Alan Turing', 'John von Neumann', 'Claude Shannon', 'Norbert Wiener'], correctIndex: 2 },
            { id: 'ma3-q4', topic: 'Mathematics', question: "What would it mean if P = NP?", options: ['All problems would be unsolvable', 'Problems easy to verify could also be solved efficiently', 'Prime numbers would be predictable', 'The Riemann Hypothesis would be true'], correctIndex: 1 },
          ],
        },
      },
    },

    // ── Climate & Nature ──────────────────────────────────────────────────────
    {
      name: 'Climate & Nature',
      topics: ['Climate & Nature'],
      levels: {
        1: {
          sentences: [
            { id: 'cn1-s1', topic: 'Climate & Nature', text: "The greenhouse effect is a natural process where certain gases in Earth's atmosphere—like CO₂ and water vapour—trap heat from the Sun, keeping the planet warm enough to support life.", detail: "Without the natural greenhouse effect, Earth's average temperature would be about −18 °C instead of the current +15 °C. Human activities are intensifying this effect by adding extra greenhouse gases, causing global warming." },
            { id: 'cn1-s2', topic: 'Climate & Nature', text: "Earth's biosphere is divided into distinct biomes—such as tropical rainforests, deserts, grasslands, and tundra—each shaped by characteristic climate, plants, and animals.", detail: "Tropical rainforests cover only 6% of Earth's surface but contain over 50% of the world's plant and animal species. They also act as major carbon sinks, absorbing CO₂ from the atmosphere." },
            { id: 'cn1-s3', topic: 'Climate & Nature', text: "The water cycle continuously moves water between the ocean, atmosphere, and land through evaporation, condensation, and precipitation, distributing fresh water across the planet.", detail: "About 97% of Earth's water is in the salty oceans. Of the 3% fresh water, about two-thirds is locked in glaciers and ice caps. The water cycle also transfers heat around the globe, driving weather patterns." },
            { id: 'cn1-s4', topic: 'Climate & Nature', text: "Coral reefs cover less than 0.1% of the ocean floor but support approximately 25% of all marine species, earning them the nickname 'rainforests of the sea'.", detail: "Coral reefs are built by colonies of tiny coral polyps. When sea temperatures rise even 1–2 °C above normal, corals expel the algae living in their tissues and turn white—a phenomenon called bleaching. Without the algae, corals can starve and die." },
            { id: 'cn1-s5', topic: 'Climate & Nature', text: "Photosynthesis is the process by which plants, algae, and cyanobacteria convert sunlight, water, and CO₂ into glucose and oxygen—the foundation of almost all life on Earth.", detail: "Photosynthesis produces the oxygen in Earth's atmosphere and forms the base of virtually every food chain. It is estimated that photosynthesis removes about 120 billion tonnes of carbon from the atmosphere each year." },
          ],
          questions: [
            { id: 'cn1-q1', topic: 'Climate & Nature', question: "What would Earth's temperature be without the natural greenhouse effect?", options: ['+5 °C', '0 °C', '−18 °C', '−50 °C'], correctIndex: 2 },
            { id: 'cn1-q2', topic: 'Climate & Nature', question: "Despite covering 6% of Earth's surface, what percentage of species do tropical rainforests contain?", options: ['10%', '25%', '50%', '75%'], correctIndex: 2 },
            { id: 'cn1-q3', topic: 'Climate & Nature', question: 'What percentage of the ocean floor do coral reefs cover?', options: ['0.1%', '1%', '10%', '25%'], correctIndex: 0 },
            { id: 'cn1-q4', topic: 'Climate & Nature', question: 'What are the inputs to photosynthesis?', options: ['Glucose and oxygen', 'Sunlight, water, and CO₂', 'CO₂ and nitrogen', 'Water and oxygen'], correctIndex: 1 },
          ],
        },
        2: {
          sentences: [
            { id: 'cn2-s1', topic: 'Climate & Nature', text: "Ocean acidification occurs as the ocean absorbs excess CO₂ from the atmosphere, forming carbonic acid that lowers pH and threatens shellfish, corals, and the marine food web.", detail: "Since the Industrial Revolution, ocean pH has dropped from 8.2 to about 8.1—a 26% increase in acidity. This makes it harder for marine organisms with calcium carbonate shells to build and maintain their structures." },
            { id: 'cn2-s2', topic: 'Climate & Nature', text: "El Niño is a climate pattern in which unusually warm sea surface temperatures in the central-east Pacific disrupt normal weather patterns worldwide, causing floods in some regions and droughts in others.", detail: "El Niño events occur every 2–7 years and can last 9–12 months. The opposite pattern, La Niña, brings cooler-than-average Pacific temperatures. Together they form the El Niño–Southern Oscillation (ENSO), the most powerful driver of year-to-year climate variability." },
            { id: 'cn2-s3', topic: 'Climate & Nature', text: "Biodiversity—the variety of life at genetic, species, and ecosystem levels—is crucial for ecosystem resilience, providing services like pollination, water purification, and medicine discovery.", detail: "Roughly 80% of medicines come from natural sources. Diverse ecosystems recover from disturbances better because different species perform the same ecological functions. The current rate of species extinction is 100–1,000 times the background rate, prompting scientists to declare a sixth mass extinction." },
            { id: 'cn2-s4', topic: 'Climate & Nature', text: "The Amazon rainforest, spanning 5.5 million km², produces 20% of the world's oxygen, stores vast amounts of carbon, and regulates rainfall patterns across South America.", detail: "The Amazon also acts as a \"flying river\"—moisture evaporated from its trees forms aerial rivers of water vapour that carry rainfall thousands of kilometres. Deforestation is pushing parts of the Amazon toward a tipping point beyond which it could transform into savannah." },
            { id: 'cn2-s5', topic: 'Climate & Nature', text: "Permafrost—permanently frozen ground in Arctic regions—stores twice as much carbon as is currently in the atmosphere, and its thawing due to global warming releases CO₂ and methane in a positive feedback loop.", detail: "Methane (CH₄) is 80 times more potent as a greenhouse gas than CO₂ over 20 years. As permafrost thaws, it releases methane from decomposing organic matter, accelerating warming, which thaws more permafrost—a self-reinforcing cycle." },
          ],
          questions: [
            { id: 'cn2-q1', topic: 'Climate & Nature', question: 'What causes ocean acidification?', options: ['Plastic pollution', 'Absorption of excess CO₂', 'Oil spills', 'Overfishing'], correctIndex: 1 },
            { id: 'cn2-q2', topic: 'Climate & Nature', question: 'What is El Niño?', options: ['A hurricane category', 'A warm Pacific ocean pattern disrupting global weather', 'An Arctic weather system', 'A type of monsoon'], correctIndex: 1 },
            { id: 'cn2-q3', topic: 'Climate & Nature', question: 'How much carbon does permafrost store compared to the current atmosphere?', options: ['Half as much', 'The same amount', 'Twice as much', 'Ten times as much'], correctIndex: 2 },
            { id: 'cn2-q4', topic: 'Climate & Nature', question: 'What percentage of the world\'s oxygen does the Amazon produce?', options: ['5%', '10%', '20%', '40%'], correctIndex: 2 },
          ],
        },
        3: {
          sentences: [
            { id: 'cn3-s1', topic: 'Climate & Nature', text: "Tipping points are thresholds in the climate system beyond which self-reinforcing changes become irreversible—examples include the collapse of the West Antarctic Ice Sheet or loss of the Amazon rainforest.", detail: "Scientists have identified nine major planetary tipping elements. Some may be interconnected—crossing one could trigger others in a cascade. The West Antarctic Ice Sheet alone holds enough ice to raise global sea levels by 3.3 metres." },
            { id: 'cn3-s2', topic: 'Climate & Nature', text: "The nitrogen cycle, powered partly by specialised bacteria, converts atmospheric nitrogen into forms usable by living organisms—but human fertiliser use has doubled the rate of nitrogen fixation, causing widespread ecological damage.", detail: "Excess nitrogen washes into waterways, causing algal blooms that deplete oxygen and create dead zones. The Gulf of Mexico dead zone, fed by agricultural runoff from the Mississippi, covers an area the size of New Jersey each summer." },
            { id: 'cn3-s3', topic: 'Climate & Nature', text: "Earth's magnetic field, generated by the movement of molten iron in the outer core, protects life from harmful solar and cosmic radiation—and reverses polarity roughly every 300,000 years.", detail: "During a magnetic reversal, which takes thousands of years, the field weakens significantly and becomes disorganised before reforming with opposite polarity. We are overdue for a reversal. A weak field exposes satellites and power grids to solar storms." },
            { id: 'cn3-s4', topic: 'Climate & Nature', text: "Ecosystem services—benefits humans receive from healthy ecosystems such as clean water, flood control, carbon storage, and pollination—are estimated to be worth $125–145 trillion per year globally.", detail: "More than half of global GDP depends moderately or highly on ecosystem services. Yet nature is rarely given an economic value in policy decisions. Initiatives like payments for ecosystem services try to correct this market failure." },
            { id: 'cn3-s5', topic: 'Climate & Nature', text: "Synthetic biology enables the engineering of organisms with new or enhanced functions—from bacteria that produce biofuels to mosquitoes modified to reduce malaria transmission—raising profound ecological and ethical questions.", detail: "Gene drives—engineered genetic sequences that spread through populations far faster than normal inheritance—could potentially eliminate disease-carrying mosquito species. Critics warn of unpredictable ecological consequences if engineered organisms spread beyond their target area." },
          ],
          questions: [
            { id: 'cn3-q1', topic: 'Climate & Nature', question: 'What is a climate tipping point?', options: ['A weather forecast error', 'A threshold beyond which changes become irreversible', 'The highest global temperature recorded', 'The level of CO₂ in 1850'], correctIndex: 1 },
            { id: 'cn3-q2', topic: 'Climate & Nature', question: 'What problem does excess nitrogen fertiliser cause in waterways?', options: ['Water becomes too alkaline', 'Algal blooms and dead zones', 'Water becomes acidic', 'Fish populations explode'], correctIndex: 1 },
            { id: 'cn3-q3', topic: 'Climate & Nature', question: "What generates Earth's magnetic field?", options: ['Solar wind interaction', 'Radioactive decay in the crust', 'Movement of molten iron in the outer core', 'Earth\'s rotation'], correctIndex: 2 },
            { id: 'cn3-q4', topic: 'Climate & Nature', question: "Approximately how often does Earth's magnetic field reverse polarity?", options: ['Every 10,000 years', 'Every 100,000 years', 'Every 300,000 years', 'Every million years'], correctIndex: 2 },
          ],
        },
      },
    },

    // ── Artificial Intelligence ───────────────────────────────────────────────
    {
      name: 'Artificial Intelligence',
      topics: ['Artificial Intelligence'],
      levels: {
        1: {
          sentences: [
            { id: 'ai1-s1', topic: 'Artificial Intelligence', text: "Artificial Intelligence (AI) is the field of computer science that develops systems able to perform tasks that typically require human intelligence, such as recognising speech, translating languages, and making decisions.", detail: "AI research began in the 1950s with pioneers like Alan Turing, who proposed the Turing Test as a measure of machine intelligence. Modern AI has achieved remarkable milestones, from beating world chess and Go champions to diagnosing diseases from medical images." },
            { id: 'ai1-s2', topic: 'Artificial Intelligence', text: "Machine learning is a branch of AI in which computers learn patterns from large amounts of data to make predictions or decisions without being explicitly programmed for each task.", detail: "Traditional programming involves writing explicit rules for every situation. Machine learning instead feeds a model large datasets and allows it to discover rules automatically. This enables systems to recognise faces, recommend videos, and detect spam with very little human input." },
            { id: 'ai1-s3', topic: 'Artificial Intelligence', text: "Neural networks are computing systems loosely inspired by the human brain, consisting of layers of interconnected nodes (neurons) that process data and learn to identify patterns.", detail: "A deep neural network with many layers (deep learning) has transformed fields like image recognition, speech processing, and natural language understanding. AlexNet's win in the 2012 ImageNet competition sparked the current deep learning revolution." },
            { id: 'ai1-s4', topic: 'Artificial Intelligence', text: "Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language—powering chatbots, translation services, and voice assistants like Siri and Alexa.", detail: "Modern NLP is dominated by transformer models trained on massive text corpora. These models learn statistical relationships between words and can complete sentences, answer questions, and even write essays in a remarkably human-like way." },
            { id: 'ai1-s5', topic: 'Artificial Intelligence', text: "AI is already transforming healthcare by analysing medical images for early disease detection, predicting patient outcomes, and accelerating drug discovery by simulating molecular interactions.", detail: "AI system DeepMind's AlphaFold solved the 50-year-old protein folding problem, predicting the 3D structure of virtually every known protein. This breakthrough is revolutionising drug design and our understanding of diseases." },
          ],
          questions: [
            { id: 'ai1-q1', topic: 'Artificial Intelligence', question: 'Who proposed the Turing Test as a measure of machine intelligence?', options: ['John McCarthy', 'Alan Turing', 'Marvin Minsky', 'Claude Shannon'], correctIndex: 1 },
            { id: 'ai1-q2', topic: 'Artificial Intelligence', question: 'In machine learning, how does a model improve?', options: ['By following explicit rules', 'By learning patterns from data', 'By consulting a database', 'By random guessing'], correctIndex: 1 },
            { id: 'ai1-q3', topic: 'Artificial Intelligence', question: 'What breakthrough did AlphaFold achieve?', options: ['Defeating the world chess champion', 'Solving the protein folding problem', 'Creating a general-purpose AI', 'Automating software programming'], correctIndex: 1 },
            { id: 'ai1-q4', topic: 'Artificial Intelligence', question: 'What does NLP enable computers to do?', options: ['Play video games', 'Control hardware directly', 'Understand and generate human language', 'Perform mathematical calculations'], correctIndex: 2 },
          ],
        },
        2: {
          sentences: [
            { id: 'ai2-s1', topic: 'Artificial Intelligence', text: "The transformer architecture, introduced in 2017, revolutionised AI by using attention mechanisms to process entire sequences simultaneously rather than word by word, enabling unprecedented language model scale.", detail: "The paper 'Attention Is All You Need' introduced the transformer. It enabled models like GPT and BERT to be trained on massive datasets. Attention mechanisms let the model weigh the relevance of each word to every other word in a sentence, capturing context at all distances." },
            { id: 'ai2-s2', topic: 'Artificial Intelligence', text: "Reinforcement learning teaches AI agents to make sequences of decisions by rewarding desired behaviours and penalising unwanted ones—it enabled AI to master complex games like Chess, Go, and StarCraft.", detail: "DeepMind's AlphaGo Zero learned to play Go from scratch by playing against itself millions of times, discovering strategies no human had ever conceived. Reinforcement learning is also used to optimise data centre cooling, robotic control, and personalised recommendations." },
            { id: 'ai2-s3', topic: 'Artificial Intelligence', text: "Bias in AI systems occurs when training data or model design reflects societal prejudices, leading to discriminatory outcomes in areas like facial recognition, hiring, and criminal justice.", detail: "A landmark 2018 study showed that commercial facial recognition systems misidentified Black women at error rates up to 34.7% while misidentifying white men at just 0.8%. AI bias can perpetuate and amplify existing inequalities at scale." },
            { id: 'ai2-s4', topic: 'Artificial Intelligence', text: "Generative AI systems like DALL-E and Stable Diffusion can create photorealistic images from text prompts by learning the statistical relationships between images and their descriptions.", detail: "These models are trained using diffusion—a process that gradually adds noise to training images and then learns to reverse it. They have democratised creative tools but also raised concerns about deepfakes, copyright infringement, and the future of creative professions." },
            { id: 'ai2-s5', topic: 'Artificial Intelligence', text: "Edge AI refers to running machine learning models directly on local devices—smartphones, cameras, or IoT sensors—rather than in the cloud, reducing latency and protecting data privacy.", detail: "Edge AI enables applications like real-time object detection in self-driving cars, offline language translation on phones, and smart manufacturing quality control. Dedicated AI chips (NPUs) in modern smartphones run tens of trillions of operations per second." },
          ],
          questions: [
            { id: 'ai2-q1', topic: 'Artificial Intelligence', question: "What was the key innovation introduced by the transformer architecture?", options: ['Recurrent processing', 'Attention mechanisms', 'Convolutional layers', 'Reinforcement learning'], correctIndex: 1 },
            { id: 'ai2-q2', topic: 'Artificial Intelligence', question: 'How did AlphaGo Zero learn to play Go?', options: ['By watching human games', 'From a large database of moves', 'By playing against itself', 'By following programmed rules'], correctIndex: 2 },
            { id: 'ai2-q3', topic: 'Artificial Intelligence', question: 'What is the main advantage of Edge AI over cloud AI?', options: ['Higher accuracy', 'Lower cost', 'Reduced latency and better privacy', 'More training data'], correctIndex: 2 },
            { id: 'ai2-q4', topic: 'Artificial Intelligence', question: 'What process do image generation models like Stable Diffusion use?', options: ['Reinforcement learning', 'Genetic algorithms', 'Diffusion', 'Symbolic reasoning'], correctIndex: 2 },
          ],
        },
        3: {
          sentences: [
            { id: 'ai3-s1', topic: 'Artificial Intelligence', text: "Large Language Models (LLMs) like GPT-4 are trained on hundreds of billions of parameters using vast amounts of text, enabling emergent capabilities—complex behaviours not explicitly programmed that appear at sufficient scale.", detail: "Emergent capabilities include multi-step reasoning, code generation, and in-context learning (adapting to new tasks with just a few examples). Scaling laws suggest that capabilities improve predictably with model size and training data, but the exact mechanisms of emergence remain poorly understood." },
            { id: 'ai3-s2', topic: 'Artificial Intelligence', text: "Hallucination in AI refers to the tendency of language models to confidently generate plausible-sounding but factually incorrect information—a fundamental challenge stemming from their statistical rather than logical nature.", detail: "LLMs predict the most statistically likely next word, not the most factually accurate one. Techniques like Retrieval-Augmented Generation (RAG) attempt to mitigate hallucination by grounding model responses in verifiable documents retrieved in real time." },
            { id: 'ai3-s3', topic: 'Artificial Intelligence', text: "AI alignment is the challenge of ensuring that AI systems reliably pursue goals that are beneficial to humans—even as they become more capable—a problem considered existential by some researchers.", detail: "RLHF (Reinforcement Learning from Human Feedback) is the leading current technique for alignment, training models to behave in ways that human raters rate positively. Critics argue that RLHF scales poorly and that we lack a rigorous framework for specifying human values." },
            { id: 'ai3-s4', topic: 'Artificial Intelligence', text: "Retrieval-Augmented Generation (RAG) enhances language models by allowing them to access external knowledge bases in real time before generating responses, reducing hallucination and enabling up-to-date answers.", detail: "In a RAG system, a user's query is first used to retrieve relevant documents from a vector database using semantic search. These documents are then included in the model's context window, allowing it to base its answer on authoritative sources rather than solely on training data." },
            { id: 'ai3-s5', topic: 'Artificial Intelligence', text: "Constitutional AI (CAI), developed by Anthropic, trains AI assistants to be helpful, harmless, and honest by having models critique and revise their own responses against a set of stated principles.", detail: "CAI reduces reliance on large amounts of human-labelled feedback for safety. The model uses a constitution—a set of principles—to self-critique potentially harmful outputs and iteratively revise them. This technique was used to train the Claude family of AI assistants." },
          ],
          questions: [
            { id: 'ai3-q1', topic: 'Artificial Intelligence', question: 'What are "emergent capabilities" in Large Language Models?', options: ['Pre-programmed behaviours', 'Complex abilities that appear at sufficient scale', 'Bugs in the model', 'Abilities taught through human feedback'], correctIndex: 1 },
            { id: 'ai3-q2', topic: 'Artificial Intelligence', question: "What does 'hallucination' mean in the context of AI?", options: ['The model generates images', 'The model confidently produces factually incorrect information', 'The model refuses to answer', 'The model runs too slowly'], correctIndex: 1 },
            { id: 'ai3-q3', topic: 'Artificial Intelligence', question: 'How does Retrieval-Augmented Generation (RAG) reduce hallucination?', options: ['By using a larger model', 'By grounding responses in retrieved documents', 'By slowing down generation', 'By filtering all uncertain statements'], correctIndex: 1 },
            { id: 'ai3-q4', topic: 'Artificial Intelligence', question: "What is the goal of 'AI alignment'?", options: ['Making AI faster', 'Ensuring AI reliably pursues goals beneficial to humans', 'Reducing AI energy use', 'Making AI cheaper to run'], correctIndex: 1 },
          ],
        },
      },
    },
  ];

}(typeof globalThis !== 'undefined' ? globalThis : window));
