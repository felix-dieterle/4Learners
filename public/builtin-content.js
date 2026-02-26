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

    // ── Music ─────────────────────────────────────────────────────────────────
    {
      name: 'Music',
      topics: ['Music'],
      levels: {
        1: {
          sentences: [
            { id: 'mu1-s1', topic: 'Music', text: 'Music is organised sound arranged in time, built from elements including melody, harmony, rhythm, and timbre.', detail: 'Melody is a sequence of single notes perceived as one entity. Harmony is the combination of simultaneously sounded notes. Rhythm is the pattern of beats over time, and timbre is the characteristic tone colour that distinguishes one instrument from another.' },
            { id: 'mu1-s2', topic: 'Music', text: 'A time signature, such as 4/4 or 3/4, tells performers how many beats are in each measure and which note value counts as one beat.', detail: '4/4 (common time) has four quarter-note beats per measure and is used in most pop, rock, and classical music. 3/4 (waltz time) has three beats, giving it a distinctive swinging feel.' },
            { id: 'mu1-s3', topic: 'Music', text: 'The Western musical scale divides an octave into 12 equally spaced semitones, forming the chromatic scale from which all keys and modes are derived.', detail: 'An octave is the interval between one musical pitch and another with double the frequency. The 12-tone chromatic scale is the basis of most Western music, with major and minor scales selecting 7 of those 12 notes.' },
            { id: 'mu1-s4', topic: 'Music', text: 'Jazz originated in New Orleans in the early 20th century, blending African rhythmic traditions with European harmony to create a uniquely improvisational style.', detail: "Jazz relies heavily on improvisation — musicians invent melodies spontaneously over a chord progression. Key jazz innovations include swing rhythms, blue notes (slightly flattened pitches), and call-and-response patterns." },
            { id: 'mu1-s5', topic: 'Music', text: "Ludwig van Beethoven composed nine symphonies that bridged the Classical and Romantic periods, with his Ninth Symphony—written while deaf—premiering in 1824 to a legendary standing ovation.", detail: "Beethoven's deafness began around age 28 yet he continued composing entirely from memory and imagination. His Ninth Symphony was the first major symphony to include a choir and vocal soloists, setting the text of Schiller's 'Ode to Joy'." },
          ],
          questions: [
            { id: 'mu1-q1', topic: 'Music', question: 'What does a time signature indicate?', options: ['The tempo of a piece', 'The number of beats per measure', 'The key of a song', 'The instrument to use'], correctIndex: 1 },
            { id: 'mu1-q2', topic: 'Music', question: 'How many semitones are in a Western chromatic scale?', options: ['7', '8', '12', '24'], correctIndex: 2 },
            { id: 'mu1-q3', topic: 'Music', question: 'Where did jazz originate?', options: ['Chicago', 'New York', 'New Orleans', 'Memphis'], correctIndex: 2 },
            { id: 'mu1-q4', topic: 'Music', question: 'How many symphonies did Beethoven compose?', options: ['5', '7', '9', '12'], correctIndex: 2 },
          ],
        },
        2: {
          sentences: [
            { id: 'mu2-s1', topic: 'Music', text: 'The Circle of Fifths is a diagram showing relationships between the 12 major and minor keys, with adjacent keys sharing the most common notes.', detail: 'Moving clockwise around the circle adds one sharp to the key signature; moving counter-clockwise adds one flat. Composers use the circle to plan harmonic progressions and modulations between related keys.' },
            { id: 'mu2-s2', topic: 'Music', text: 'Counterpoint is the art of combining two or more independent melodic lines so they sound harmonious together — a technique mastered by J.S. Bach in his fugues and inventions.', detail: "Bach's fugues start with a theme (subject) introduced by one voice, then imitated by others at different pitches while the first voice continues with a counter-subject. The interlocking voices create complex yet coherent textures." },
            { id: 'mu2-s3', topic: 'Music', text: 'Timbre (tone colour) is what makes a violin and a flute sound different even when playing the same pitch at the same volume, determined by the blend of overtones each instrument produces.', detail: 'Every musical note is actually a mixture of a fundamental frequency and higher harmonics (overtones). The relative strengths of these harmonics differ by instrument, creating the characteristic sound each one has.' },
            { id: 'mu2-s4', topic: 'Music', text: 'Musical modulation is the process of transitioning from one key to another within a piece, giving composers a way to build tension, contrast, and emotional variety.', detail: "A common modulation technique is the pivot chord — a chord shared by both the original and destination key. Beethoven was famous for dramatic modulations to distant keys, while Classical composers like Haydn typically modulated to closely related keys." },
            { id: 'mu2-s5', topic: 'Music', text: "Electronic music production relies on synthesisers, samplers, and digital audio workstations (DAWs) to create sounds that exist purely as electrical signals, transforming composition and performance from the 1960s onwards.", detail: 'Early synthesisers like the Moog used voltage-controlled oscillators to generate waveforms. Modern DAWs allow musicians to record, sequence, and process unlimited tracks of audio, effectively turning a laptop into a complete recording studio.' },
          ],
          questions: [
            { id: 'mu2-q1', topic: 'Music', question: 'What does moving clockwise on the Circle of Fifths do to a key signature?', options: ['Adds flats', 'Adds sharps', 'Changes tempo', 'Lowers pitch'], correctIndex: 1 },
            { id: 'mu2-q2', topic: 'Music', question: 'What is counterpoint?', options: ['A way to tune instruments', 'Combining independent melodies harmoniously', 'The study of rhythm', 'A type of scale'], correctIndex: 1 },
            { id: 'mu2-q3', topic: 'Music', question: 'What determines an instrument\'s timbre?', options: ['Its volume', 'Its pitch', 'Its blend of overtones', 'Its size'], correctIndex: 2 },
            { id: 'mu2-q4', topic: 'Music', question: 'What is a pivot chord in musical modulation?', options: ['The first chord of a piece', 'A chord shared by two keys', 'The loudest chord', 'A dissonant chord'], correctIndex: 1 },
          ],
        },
        3: {
          sentences: [
            { id: 'mu3-s1', topic: 'Music', text: 'Serialism, developed by Arnold Schoenberg, organises pitches using a fixed sequence (tone row) in which all 12 notes must appear before any repeats, replacing traditional tonal harmony.', detail: "Schoenberg's twelve-tone technique reacts against the idea of a tonal centre. The row can be used in its original form, inverted, retrograde (backwards), or retrograde inversion, providing four transformations as compositional material." },
            { id: 'mu3-s2', topic: 'Music', text: "Equal temperament divides the octave into 12 mathematically equal semitones, making it possible to play in all 24 major and minor keys on a fixed-pitch instrument like the piano without retuning.", detail: "Before equal temperament, tuning systems like meantone and just intonation sounded pure in some keys but produced harsh intervals in others — the so-called 'wolf interval'. Equal temperament compromises so that every key is equally slightly out of tune, enabling modern chromatic harmony." },
            { id: 'mu3-s3', topic: 'Music', text: 'Spectral music, pioneered in France in the 1970s by composers like Gérard Grisey, derives its harmonic language directly from the physical properties of sound waves — the overtone series.', detail: 'Spectralism uses computer analysis of real sounds to extract their overtone structures, then composes music that reflects those structures. This blurs the distinction between harmony, timbre, and orchestration.' },
            { id: 'mu3-s4', topic: 'Music', text: 'Microtonality explores intervals smaller than the semitone, present in Turkish maqam, Indian ragas, Arabic maqamat, and contemporary Western experimental music.', detail: 'Many world music traditions use quarter-tones (half a semitone) or even finer divisions, enabling emotional nuances that equal temperament cannot capture. Composer Harry Partch built custom instruments to realise his 43-tone-per-octave tuning system.' },
            { id: 'mu3-s5', topic: 'Music', text: "Psychoacoustics studies how the human auditory system perceives sound, revealing phenomena such as the missing fundamental — where the brain infers a low pitch from overtones even when that pitch is absent.", detail: 'The missing fundamental effect is exploited in telephone audio compression: low bass frequencies are removed to save bandwidth, yet listeners still perceive them because higher harmonics are present. Composers like Ligeti used psychoacoustic effects to create illusions of impossible pitch paradoxes.' },
          ],
          questions: [
            { id: 'mu3-q1', topic: 'Music', question: 'What is the tone row in serialism?', options: ['A chord progression', 'A fixed sequence of all 12 notes', 'A type of scale', 'A rhythmic pattern'], correctIndex: 1 },
            { id: 'mu3-q2', topic: 'Music', question: 'What advantage does equal temperament provide?', options: ['Perfect tuning in all keys', 'Playing in all 24 keys without retuning', 'Louder sound', 'More overtones'], correctIndex: 1 },
            { id: 'mu3-q3', topic: 'Music', question: 'What does spectral music derive its harmony from?', options: ['Traditional chord progressions', 'The physical properties of sound waves', 'Folk melodies', 'Random chance'], correctIndex: 1 },
            { id: 'mu3-q4', topic: 'Music', question: 'What is the missing fundamental in psychoacoustics?', options: ['A lost musical note', 'The brain inferring a low pitch from overtones', 'A broken instrument string', 'Silence between notes'], correctIndex: 1 },
          ],
        },
      },
    },

    // ── Philosophy ───────────────────────────────────────────────────────────
    {
      name: 'Philosophy',
      topics: ['Philosophy'],
      levels: {
        1: {
          sentences: [
            { id: 'ph1-s1', topic: 'Philosophy', text: "Philosophy is the systematic study of fundamental questions about existence, knowledge, values, reason, and language — seeking understanding through rigorous argument rather than observation alone.", detail: 'The word philosophy comes from the Greek words for love (philo) and wisdom (sophia). Its main branches include metaphysics (what exists), epistemology (what we can know), ethics (how we should act), logic (how to reason correctly), and aesthetics (what is beauty).' },
            { id: 'ph1-s2', topic: 'Philosophy', text: "Socrates, who left no writings, used a method of questioning called the Socratic method to expose contradictions in people's beliefs and arrive at more defensible definitions.", detail: "Socrates believed that wisdom begins with recognising one's own ignorance. He was tried and sentenced to death in 399 BCE for allegedly corrupting Athenian youth. His student Plato preserved his ideas through dramatic dialogues." },
            { id: 'ph1-s3', topic: 'Philosophy', text: "Plato's Theory of Forms argues that the physical world is an imperfect shadow of a perfect realm of abstract forms — like a chair being an imperfect copy of the ideal Form of chairness.", detail: "Plato illustrates this in the Allegory of the Cave: prisoners chained in a cave mistake shadows on a wall for reality. The philosopher escapes and sees the real world — the realm of Forms — illuminated by the Form of the Good." },
            { id: 'ph1-s4', topic: 'Philosophy', text: "Aristotle departed from Plato and argued that universal forms exist within particular things themselves, making direct observation of the natural world the key to knowledge.", detail: "Aristotle founded the discipline of logic, wrote the first systematic works on biology, physics, ethics, and politics, and established the Lyceum school. His works were translated into Arabic and Latin, forming the intellectual backbone of medieval scholarship." },
            { id: 'ph1-s5', topic: 'Philosophy', text: "Ethics is the branch of philosophy that studies morality — how we should act and what makes actions right or wrong — with major theories including utilitarianism, deontology, and virtue ethics.", detail: 'Utilitarianism (Bentham, Mill) judges actions by outcomes: the right action maximises overall well-being. Deontology (Kant) judges actions by adherence to universal duties or rules regardless of consequences. Virtue ethics (Aristotle) focuses on character: cultivating virtues like courage and justice.' },
          ],
          questions: [
            { id: 'ph1-q1', topic: 'Philosophy', question: 'What is the main aim of the Socratic method?', options: ['Teaching facts through lectures', 'Exposing contradictions through questioning', 'Writing philosophical texts', 'Observing nature'], correctIndex: 1 },
            { id: 'ph1-q2', topic: 'Philosophy', question: "What does Plato's Theory of Forms argue?", options: ['The physical world is the only reality', 'Abstract perfect Forms are the true reality', 'The mind creates the world', 'Knowledge comes from experience'], correctIndex: 1 },
            { id: 'ph1-q3', topic: 'Philosophy', question: 'Which philosopher argued that universal forms exist within particular things?', options: ['Socrates', 'Plato', 'Aristotle', 'Descartes'], correctIndex: 2 },
            { id: 'ph1-q4', topic: 'Philosophy', question: 'What does utilitarianism use to judge actions?', options: ['Universal duties', 'Virtuous character', 'Consequences for overall well-being', 'Religious rules'], correctIndex: 2 },
          ],
        },
        2: {
          sentences: [
            { id: 'ph2-s1', topic: 'Philosophy', text: "Descartes' method of radical doubt strips away all beliefs that can be questioned, arriving at the one certainty: 'Cogito, ergo sum' — I think, therefore I am.", detail: "Descartes doubted the reliability of the senses, the external world, and even mathematics (invoking an evil demon that could deceive him). Only the act of thinking itself could not be doubted — if he was deceived, he must exist to be deceived." },
            { id: 'ph2-s2', topic: 'Philosophy', text: "Kant's categorical imperative states that one should act only according to principles one could will to become universal laws — a rational test for moral actions that does not rely on consequences.", detail: "A classic application: could you universalise lying? If everyone lied, promises and communication would be meaningless, undermining the very act of lying. Kant argues that reason itself reveals which actions are morally permissible." },
            { id: 'ph2-s3', topic: 'Philosophy', text: "Existentialism holds that existence precedes essence: humans have no predetermined nature or purpose, and so we are radically free — and burdened with the responsibility of creating our own meaning.", detail: "Sartre's example of 'bad faith' is a waiter who acts as if his role wholly defines him, denying his freedom to choose otherwise. Camus added the concept of the absurd — the conflict between our desire for meaning and the universe's silence — resolved not by despair but by revolt." },
            { id: 'ph2-s4', topic: 'Philosophy', text: "Hume's problem of induction shows that no amount of observed regularities can logically guarantee future regularities — we cannot prove the sun will rise tomorrow through reason alone.", detail: "Hume argued that our belief in cause and effect is a psychological habit, not a logical necessity. This was the 'problem of induction' that awakened Kant from his 'dogmatic slumber' and drove much of subsequent epistemology and philosophy of science." },
            { id: 'ph2-s5', topic: 'Philosophy', text: "The mind-body problem asks how mental states (thoughts, feelings) relate to physical brain states — a question at the intersection of philosophy and neuroscience with no consensus answer.", detail: "Dualism (Descartes) holds that mind and body are distinct substances. Physicalism argues that mental states are reducible to or identical with brain states. Functionalism says mental states are defined by their causal roles, not their physical substrate — meaning they could in principle run on any hardware." },
          ],
          questions: [
            { id: 'ph2-q1', topic: 'Philosophy', question: "What did Descartes conclude could not be doubted?", options: ['The existence of God', 'The external world', 'His own act of thinking', 'Mathematical truths'], correctIndex: 2 },
            { id: 'ph2-q2', topic: 'Philosophy', question: "What is Kant's categorical imperative?", options: ['Do whatever produces the most happiness', 'Act only by principles you could universalise', 'Follow your instincts', 'Obey authority'], correctIndex: 1 },
            { id: 'ph2-q3', topic: 'Philosophy', question: 'What does existentialism claim about human nature?', options: ['It is determined at birth', 'It is given by God', 'It is created by each individual through choices', 'It is the same for everyone'], correctIndex: 2 },
            { id: 'ph2-q4', topic: 'Philosophy', question: "What is Hume's problem of induction?", options: ['We cannot trust our memories', 'Past observations cannot logically guarantee future regularities', 'Science is impossible', 'Reason is unreliable'], correctIndex: 1 },
          ],
        },
        3: {
          sentences: [
            { id: 'ph3-s1', topic: 'Philosophy', text: "Quine's web of belief argues that no single belief faces the tribunal of experience alone — any belief can be retained by adjusting others, so the choice of which beliefs to revise is a matter of pragmatic economy.", detail: "Quine attacked the analytic–synthetic distinction: there are no statements true by meaning alone, safe from empirical revision. This 'holism' influenced philosophy of science, epistemology, and the idea that our conceptual scheme is a tool for predicting experience." },
            { id: 'ph3-s2', topic: 'Philosophy', text: "Wittgenstein's late philosophy argues that meaning arises from use within social practices ('language games'), not from private mental associations — dissolving many philosophical puzzles as misuses of language.", detail: "The private language argument holds that a language intelligible only to one person is impossible: without external criteria for correct use, there is no standard to distinguish correct from incorrect application. This challenges Cartesian privacy of inner experience." },
            { id: 'ph3-s3', topic: 'Philosophy', text: "The free will debate pits hard determinism (all events are causally necessitated, so free will is an illusion) against compatibilism (free will and determinism can coexist if freedom means acting from one's own desires without coercion).", detail: "Compatibilists like Hume and Frankfurt argue that what matters morally is not whether actions are causally determined, but whether they flow from the agent's own reflective desires. Hard incompatibilists like Galen Strawson argue no causal history can make an agent ultimately responsible for their character." },
            { id: 'ph3-s4', topic: 'Philosophy', text: "Phenomenology, founded by Husserl and developed by Heidegger and Merleau-Ponty, studies the structure of first-person conscious experience — how things appear to a subject — rather than objective facts about the world.", detail: "Heidegger's concept of 'being-in-the-world' argues that we are not primarily detached observers of objects but engaged agents embedded in a practical context. Tools become visible as objects only when they break; normally they are transparent extensions of our purposes." },
            { id: 'ph3-s5', topic: 'Philosophy', text: "Rawls' theory of justice as fairness uses the 'veil of ignorance' thought experiment: principles of justice are those you would choose if you did not know your position in society — your wealth, talents, or social status.", detail: "Behind the veil of ignorance, Rawls argues, rational agents would choose two principles: equal basic liberties for all, and social inequalities only if they benefit the least advantaged members of society — the difference principle. This provides a philosophical foundation for liberal egalitarianism." },
          ],
          questions: [
            { id: 'ph3-q1', topic: 'Philosophy', question: "What does Quine's web of belief imply about individual beliefs?", options: ['Each belief can be tested independently', 'Any belief can be retained by revising other beliefs', 'Beliefs are purely subjective', 'Some beliefs are immune to revision'], correctIndex: 1 },
            { id: 'ph3-q2', topic: 'Philosophy', question: "According to Wittgenstein's late philosophy, where does meaning come from?", options: ['Private mental images', 'The structure of logic', 'Use within social practices', 'Dictionary definitions'], correctIndex: 2 },
            { id: 'ph3-q3', topic: 'Philosophy', question: 'What do compatibilists argue about free will?', options: ['Free will is an illusion', 'Free will requires the absence of causation', 'Free will and determinism can coexist', 'Only God has free will'], correctIndex: 2 },
            { id: 'ph3-q4', topic: 'Philosophy', question: "What is the purpose of Rawls' veil of ignorance?", options: ['To test moral intuitions about strangers', 'To choose principles without knowing your social position', 'To eliminate personal bias in science', 'To test laws without knowing their consequences'], correctIndex: 1 },
          ],
        },
      },
    },

    // ── Geography ────────────────────────────────────────────────────────────
    {
      name: 'Geography',
      topics: ['Geography'],
      levels: {
        1: {
          sentences: [
            { id: 'ge1-s1', topic: 'Geography', text: "Earth has seven continents — Africa, Antarctica, Asia, Australia/Oceania, Europe, North America, and South America — covering about 29% of the planet's surface.", detail: "Asia is the largest continent by both area and population, home to about 60% of humanity. Antarctica is the coldest and least accessible, covered by an ice sheet up to 4.8 km thick that contains about 70% of Earth's fresh water." },
            { id: 'ge1-s2', topic: 'Geography', text: "The equator is an imaginary circle dividing Earth into the Northern and Southern Hemispheres, where the Sun is directly overhead at the March and September equinoxes.", detail: "Countries on the equator include Ecuador, Brazil, Democratic Republic of Congo, Kenya, and Indonesia. The equatorial region receives intense, year-round solar radiation and hosts the world's largest tropical rainforests." },
            { id: 'ge1-s3', topic: 'Geography', text: "Mount Everest in the Himalayas stands 8,849 m above sea level — the highest point on Earth — formed by the ongoing collision between the Indian and Eurasian tectonic plates.", detail: "The Himalayan range continues to rise about 5 mm per year as the Indian Plate pushes northward. The name Everest comes from Sir George Everest, the British surveyor who helped map South Asia; the Nepali name is Sagarmatha and the Tibetan name is Chomolungma." },
            { id: 'ge1-s4', topic: 'Geography', text: "The Amazon River in South America carries more water than any other river on Earth, discharging about 20% of all freshwater that flows into the world's oceans.", detail: "The Amazon basin covers about 7 million km², and the river flows roughly 6,400 km from the Andes to the Atlantic. The surrounding rainforest is the most biodiverse ecosystem on land, housing an estimated 10% of all species on Earth." },
            { id: 'ge1-s5', topic: 'Geography', text: "The Sahara Desert, covering around 9 million km² across North Africa, is the world's largest hot desert and one of the harshest environments on Earth.", detail: "Despite its arid reputation, the Sahara was a green, humid region about 6,000 years ago during the African Humid Period. Ancient cave paintings in Algeria and Libya depict hippos, crocodiles, and cattle — indicating a very different landscape." },
          ],
          questions: [
            { id: 'ge1-q1', topic: 'Geography', question: 'How many continents are there on Earth?', options: ['5', '6', '7', '8'], correctIndex: 2 },
            { id: 'ge1-q2', topic: 'Geography', question: 'What does the equator divide?', options: ['East and West hemispheres', 'North and South hemispheres', 'Land and sea', 'Tropics and polar regions'], correctIndex: 1 },
            { id: 'ge1-q3', topic: 'Geography', question: 'How was Mount Everest formed?', options: ['By volcanic activity', 'By glacial erosion', 'By collision of tectonic plates', 'By meteorite impact'], correctIndex: 2 },
            { id: 'ge1-q4', topic: 'Geography', question: 'What percentage of global river discharge does the Amazon contribute?', options: ['5%', '10%', '20%', '40%'], correctIndex: 2 },
          ],
        },
        2: {
          sentences: [
            { id: 'ge2-s1', topic: 'Geography', text: "Tectonic plates are massive segments of Earth's lithosphere that float on the semi-molten asthenosphere, moving a few centimetres per year and causing earthquakes, volcanoes, and mountain building.", detail: "The theory of plate tectonics was consolidated in the 1960s. There are about 15 major plates, driven by convection currents in the mantle. Plate boundaries come in three types: convergent (colliding), divergent (spreading apart), and transform (sliding past each other)." },
            { id: 'ge2-s2', topic: 'Geography', text: "Ocean gyres are large circular current systems driven by wind and the Coriolis effect, rotating clockwise in the Northern Hemisphere and counter-clockwise in the Southern Hemisphere.", detail: "Gyres redistribute heat around the planet and concentrate floating debris in their centres, forming vast 'garbage patches' of micro-plastics. The Gulf Stream, part of the North Atlantic Gyre, warms north-western Europe by 5–10 °C compared to similar latitudes on the east coast of North America." },
            { id: 'ge2-s3', topic: 'Geography', text: "Monsoons are seasonal reversals of wind direction that bring heavy summer rainfall to South and South-East Asia, sub-Saharan Africa, and other tropical regions, supporting billions of people.", detail: "The South Asian monsoon delivers about 80% of India's annual rainfall between June and September, filling reservoirs and rivers that supply agriculture and drinking water. Failure of the monsoon causes severe droughts, while excessive rainfall causes devastating floods." },
            { id: 'ge2-s4', topic: 'Geography', text: "Permafrost — ground that remains below 0 °C for at least two consecutive years — underlies about 25% of the Northern Hemisphere's land surface, storing roughly twice the carbon in the atmosphere.", detail: "As global temperatures rise, permafrost thaws and releases methane and CO₂, creating a positive feedback loop that accelerates warming. Permafrost also supports infrastructure in Russia, Canada, and Alaska; its thawing is causing buildings and roads to sink and collapse." },
            { id: 'ge2-s5', topic: 'Geography', text: "Biomes are large-scale ecosystems defined by climate and vegetation, including tropical rainforests, temperate grasslands, tundra, deserts, and boreal forests (taiga).", detail: "Biomes broadly follow latitude: tropical forests near the equator, deserts in the subtropical high-pressure belts (around 30°), temperate forests at mid-latitudes, and tundra and taiga near the poles. Altitude can create the same sequence on a single mountain — a 'mountain biome gradient'." },
          ],
          questions: [
            { id: 'ge2-q1', topic: 'Geography', question: 'What drives the movement of tectonic plates?', options: ['Ocean tides', 'Convection currents in the mantle', 'Earth\'s magnetic field', 'Gravitational pull of the Moon'], correctIndex: 1 },
            { id: 'ge2-q2', topic: 'Geography', question: 'In which direction do ocean gyres rotate in the Northern Hemisphere?', options: ['Counter-clockwise', 'Clockwise', 'North to south', 'East to west'], correctIndex: 1 },
            { id: 'ge2-q3', topic: 'Geography', question: 'What percentage of India\'s annual rainfall does the monsoon deliver?', options: ['20%', '50%', '80%', '100%'], correctIndex: 2 },
            { id: 'ge2-q4', topic: 'Geography', question: 'What factor primarily defines different biomes?', options: ['Soil type', 'Altitude alone', 'Climate and vegetation', 'Proximity to oceans'], correctIndex: 2 },
          ],
        },
        3: {
          sentences: [
            { id: 'ge3-s1', topic: 'Geography', text: "The demographic transition model describes how industrialisation shifts societies through four stages — from high birth and death rates to low birth and death rates — causing a population explosion in intermediate stages.", detail: "Stage 2 (falling death rates, still high birth rates) drives rapid population growth seen in 19th-century Europe and today in parts of Africa. Stage 4 (low birth and death rates) leads to ageing populations and below-replacement fertility rates, as in Japan and Germany." },
            { id: 'ge3-s2', topic: 'Geography', text: "Geopolitics studies how geography — coastlines, mountains, resources, and location — shapes political power, strategy, and international relations, from Mackinder's Heartland Theory to contemporary energy security.", detail: "Halford Mackinder's 1904 Heartland Theory argued that whoever controls the Eurasian heartland controls the world. Modern geopolitics highlights chokepoints like the Strait of Hormuz (through which ~20% of global oil passes) and the Strait of Malacca as strategic vulnerabilities." },
            { id: 'ge3-s3', topic: 'Geography', text: "Urban heat islands occur when cities are significantly warmer than surrounding rural areas — by up to 10 °C at night — because built surfaces absorb and retain heat while vegetation and evaporative cooling are reduced.", detail: "Strategies to reduce urban heat islands include green roofs, urban trees, reflective 'cool pavements', and increasing urban water features. Heat islands raise cooling energy demand, worsen air quality, and increase heat-related mortality during heat waves." },
            { id: 'ge3-s4', topic: 'Geography', text: "The Coriolis effect, caused by Earth's rotation, deflects moving fluids (air and water) to the right in the Northern Hemisphere and to the left in the Southern Hemisphere, shaping global wind patterns, ocean currents, and storm rotation.", detail: "The Coriolis effect makes Northern Hemisphere hurricanes (cyclones) rotate counter-clockwise and Southern Hemisphere cyclones rotate clockwise. It is zero at the equator and strongest at the poles. Despite popular belief, it does not noticeably affect which way water drains in a bathtub." },
            { id: 'ge3-s5', topic: 'Geography', text: "The concept of the Anthropocene proposes that human activity has become the dominant force shaping Earth's geology and ecosystems, marking a new geological epoch beginning around the mid-20th century.", detail: "Stratigraphic markers of the Anthropocene include the global distribution of artificial radionuclides from nuclear tests, a layer of plastics in sediments, and a worldwide spike in nitrogen from synthetic fertilisers. The proposal remains under formal review by the International Commission on Stratigraphy." },
          ],
          questions: [
            { id: 'ge3-q1', topic: 'Geography', question: 'What causes the population explosion in Stage 2 of the demographic transition model?', options: ['Rising birth rates', 'Falling death rates with still high birth rates', 'Falling birth rates', 'Mass immigration'], correctIndex: 1 },
            { id: 'ge3-q2', topic: 'Geography', question: "What is the Strait of Hormuz strategically significant for?", options: ['Global food trade', 'Roughly 20% of global oil passage', 'Container shipping from China', 'Military exercises'], correctIndex: 1 },
            { id: 'ge3-q3', topic: 'Geography', question: 'In which direction do Northern Hemisphere hurricanes rotate due to the Coriolis effect?', options: ['Clockwise', 'Counter-clockwise', 'North to south', 'Randomly'], correctIndex: 1 },
            { id: 'ge3-q4', topic: 'Geography', question: 'What proposed geological marker characterises the Anthropocene?', options: ['Dinosaur extinction layer', 'Global distribution of nuclear radionuclides', 'Volcanic ash deposits', 'Dramatic drop in sea levels'], correctIndex: 1 },
          ],
        },
      },
    },
  ];

}(typeof globalThis !== 'undefined' ? globalThis : window));
