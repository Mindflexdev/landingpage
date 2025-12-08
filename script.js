// ===== ai.therapy Landing Page JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
    initGoalTabs();
    initFloatingElements();
    initTherapyCards();
    initEngineControls();
    initCreationControls();
    initSmoothScroll();
    initCarouselScroll();
});

// ===== Goal Tabs =====
function initGoalTabs() {
    const tabs = document.querySelectorAll('.goal-tab');
    const grid = document.querySelector('.character-cards-grid');

    // Character data - images matching character names and descriptions
    const goalCharacters = {
        sleep: [
            { name: 'Midnight Cat', desc: 'Wise feline who teaches the art of perfect napping.', img: 'midnight-cat.png' },
            { name: 'Dr. Nightingale', desc: 'Compassionate sleep medicine specialist with 20 years experience.', img: 'dr-nightingale.png' },
            { name: 'Sleepy Bear', desc: 'Cozy hibernation expert who knows all about deep, restful sleep.', img: 'sleepy-bear.png' }
        ],
        performance: [
            { name: 'Coach Blaze', desc: 'High-energy motivator for peak performance.', img: 'coach-blaze.png' },
            { name: 'Focus Fox', desc: 'Master of concentration and clarity.', img: 'photo-1474511320723-9a56873571b7' },
            { name: 'Iron Will', desc: 'Builds mental toughness and resilience.', img: 'photo-1507003211169-0a1dd7228f2d' }
        ],
        'self-worth': [
            { name: 'Mirror Sage', desc: 'Helps you see your true worth.', img: 'photo-1472099645785-5658abf4ff4e' },
            { name: 'Heart Guardian', desc: 'Protects your inner light.', img: 'photo-1534528741775-53994a69daeb' },
            { name: 'Dr. Grace', desc: 'Expert in building self-esteem.', img: 'photo-1580489944761-15a19d654956' }
        ],
        fears: [
            { name: 'Brave Knight', desc: 'Courageous warrior who faces dragons.', img: 'photo-1500648767791-00dcc994a43e' },
            { name: 'Shadow Walker', desc: 'Mystical guide who befriends fears.', img: 'photo-1503185912284-5271ff81b9a8' },
            { name: 'Wise Owl', desc: 'Night guardian with clear vision.', img: 'photo-1558618666-fcd25c85cd64' }
        ],
        stress: [
            { name: 'Calm Waters', desc: 'Flows through chaos with serenity.', img: 'photo-1506794778202-cad84cf45f1d' },
            { name: 'Zen Garden', desc: 'Creates peace in any environment.', img: 'photo-1499557354967-2b2d8910bcca' },
            { name: 'Dr. Balance', desc: 'Restores harmony to busy lives.', img: 'photo-1559839734-2b71ea197ec2' }
        ],
        happier: [
            { name: 'Joy Sprite', desc: 'Finds happiness in every moment.', img: 'photo-1489424731084-a5d8b219a5bb' },
            { name: 'Sunshine Bear', desc: 'Warm companion for brighter days.', img: 'photo-1446477597517-1161e261e27c' },
            { name: 'Dr. Bliss', desc: 'Science-backed path to happiness.', img: 'photo-1573496359142-b8d87734a5a2' }
        ],
        grateful: [
            { name: 'Thanks Keeper', desc: 'Counts blessings every day.', img: 'photo-1507591064344-4c6ce005b128' },
            { name: 'Abundance Spirit', desc: 'Sees the fullness in life.', img: 'photo-1488426862026-3ee34a7d66df' },
            { name: 'Dr. Appreciate', desc: 'Expert in gratitude practices.', img: 'photo-1487412720507-e7ab37603c6f' }
        ]
    };


    function updateCharacters(goal) {
        const characters = goalCharacters[goal] || goalCharacters.fears;
        grid.innerHTML = characters.map(char => {
            // Check if it's a local image file or Unsplash photo
            const imgSrc = char.img.includes('.')
                ? char.img // Local file
                : `https://images.unsplash.com/${char.img}?w=300&h=350&fit=crop&crop=face`; // Unsplash

            return `
            <div class="guide-card">
                <div class="guide-image">
                    <img src="${imgSrc}" alt="${char.name}">
                </div>
                <div class="guide-info">
                    <h3 class="guide-name">${char.name}</h3>
                    <p class="guide-desc">${char.desc}</p>
                </div>
            </div>
        `;
        }).join('');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateCharacters(tab.dataset.goal);
        });
    });
}

// ===== Floating Elements =====
function initFloatingElements() {
    createOrbs();
    createParticles();
    createFeathers();
}

function createOrbs() {
    const container = document.getElementById('orbsContainer');
    const orbCount = 8;

    for (let i = 0; i < orbCount; i++) {
        const orb = document.createElement('div');
        orb.classList.add('orb');

        const size = Math.random() * 100 + 50;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 15 + Math.random() * 20;

        const hue = 250 + Math.random() * 60; // Purple to pink range

        orb.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(circle at 30% 30%, 
                hsla(${hue}, 70%, 70%, 0.3), 
                hsla(${hue}, 70%, 50%, 0.1), 
                transparent 70%);
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            filter: blur(${size / 20}px);
        `;

        container.appendChild(orb);
    }
}

function createParticles() {
    const container = document.getElementById('particlesContainer');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const x = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 10 + Math.random() * 10;
        const size = 2 + Math.random() * 3;

        particle.style.cssText = `
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;

        container.appendChild(particle);
    }
}

function createFeathers() {
    const container = document.getElementById('feathersContainer');
    const featherCount = 6;

    for (let i = 0; i < featherCount; i++) {
        const feather = document.createElement('div');
        feather.classList.add('feather');

        const x = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 20 + Math.random() * 15;
        const scale = 0.5 + Math.random() * 0.8;

        feather.style.cssText = `
            left: ${x}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            transform: scale(${scale});
        `;

        container.appendChild(feather);
    }
}

// ===== Therapy Cards =====
function initTherapyCards() {
    const cards = document.querySelectorAll('.therapy-card');
    const modal = document.getElementById('therapyModal');
    const modalClose = document.getElementById('modalClose');
    const overlay = modal.querySelector('.modal-overlay');

    // Therapy data for modal
    const therapyData = {
        cbt: {
            title: 'Cognitive Behavioral Therapy (CBT)',
            tagline: '"Change your thoughts, change your life."',
            whatIsIt: 'Our thoughts, feelings, and behaviors are interconnected. By changing negative thought patterns, we can change how we feel and act.',
            inventor: 'Aaron Beck',
            era: '1960s',
            originDesc: 'Beck noticed his depressed patients had automatic negative thoughts. He realized identifying and challenging these thoughts could alleviate symptoms.',
            bestFor: ['Anxiety & Depression', 'Phobias', 'OCD', 'Sleep disorders'],
            techniques: ['Cognitive restructuring', 'Exposure therapy', 'Behavioral experiments', 'Thought records']
        },
        act: {
            title: 'Acceptance & Commitment Therapy (ACT)',
            tagline: '"Embrace what you cannot change, commit to what you value."',
            whatIsIt: 'ACT helps you accept difficult thoughts and feelings rather than fighting them, while taking action aligned with your values.',
            inventor: 'Steven C. Hayes',
            era: '1980s',
            originDesc: 'Hayes developed ACT as a form of clinical behavior analysis, combining acceptance and mindfulness strategies with commitment and behavior-change strategies.',
            bestFor: ['Anxiety', 'Depression', 'Chronic pain', 'Stress management'],
            techniques: ['Mindfulness', 'Values clarification', 'Cognitive defusion', 'Committed action']
        },
        dbt: {
            title: 'Dialectical Behavior Therapy (DBT)',
            tagline: '"Finding balance between acceptance and change."',
            whatIsIt: 'DBT combines cognitive-behavioral techniques with concepts of mindfulness and acceptance, helping you manage intense emotions.',
            inventor: 'Marsha M. Linehan',
            era: '1980s',
            originDesc: 'Linehan developed DBT specifically for treating borderline personality disorder, incorporating zen practices with behavioral science.',
            bestFor: ['Borderline personality', 'Self-harm', 'Emotional dysregulation', 'Relationship issues'],
            techniques: ['Distress tolerance', 'Emotion regulation', 'Interpersonal effectiveness', 'Mindfulness skills']
        },
        psychodynamic: {
            title: 'Psychodynamic Therapy',
            tagline: '"Understanding the past to transform the present."',
            whatIsIt: 'Explores how unconscious thoughts and past experiences shape current behavior and relationships.',
            inventor: 'Sigmund Freud (foundations)',
            era: 'Early 1900s',
            originDesc: 'Evolved from psychoanalysis, focusing on unconscious processes and their influence on behavior through the therapeutic relationship.',
            bestFor: ['Depression', 'Anxiety', 'Relationship patterns', 'Identity issues'],
            techniques: ['Free association', 'Dream analysis', 'Transference exploration', 'Insight development']
        },
        humanistic: {
            title: 'Humanistic/Person-Centered Therapy',
            tagline: '"You have within you the resources for growth."',
            whatIsIt: 'Focuses on personal growth and self-actualization, believing people are inherently good and capable of making rational choices.',
            inventor: 'Carl Rogers',
            era: '1950s',
            originDesc: 'Rogers believed that given the right conditions—empathy, unconditional positive regard, and genuineness—people naturally move toward growth.',
            bestFor: ['Self-esteem issues', 'Life transitions', 'Personal growth', 'Relationship problems'],
            techniques: ['Active listening', 'Unconditional positive regard', 'Empathic understanding', 'Genuineness']
        },
        schema: {
            title: 'Schema Therapy',
            tagline: '"Healing deep patterns from the past."',
            whatIsIt: 'Identifies and changes deep-rooted patterns (schemas) developed in childhood that negatively affect adult life.',
            inventor: 'Jeffrey Young',
            era: '1990s',
            originDesc: 'Young integrated CBT with attachment theory and psychodynamic concepts to address chronic psychological problems.',
            bestFor: ['Personality disorders', 'Chronic depression', 'Relationship issues', 'Childhood trauma'],
            techniques: ['Schema identification', 'Limited reparenting', 'Imagery rescripting', 'Mode work']
        },
        gestalt: {
            title: 'Gestalt Therapy',
            tagline: '"Be here now, fully present."',
            whatIsIt: 'Focuses on present-moment awareness and understanding how past experiences influence current perceptions and behaviors.',
            inventor: 'Fritz Perls',
            era: '1940s-1950s',
            originDesc: 'Perls developed this experiential approach emphasizing personal responsibility and the here-and-now experience.',
            bestFor: ['Self-awareness', 'Unfinished business', 'Present-moment issues', 'Creative blocks'],
            techniques: ['Empty chair technique', 'Awareness exercises', 'Dream work', 'Role-playing']
        },
        somatic: {
            title: 'Somatic Therapy',
            tagline: '"The body remembers what the mind forgets."',
            whatIsIt: 'Addresses physical manifestations of trauma and stress, recognizing the mind-body connection in healing.',
            inventor: 'Various (Peter Levine, Pat Ogden)',
            era: '1970s-present',
            originDesc: 'Emerged from observations that trauma is stored in the body and can be released through body-based interventions.',
            bestFor: ['Trauma & PTSD', 'Chronic pain', 'Stress', 'Anxiety'],
            techniques: ['Body awareness', 'Breathwork', 'Movement', 'Touch therapy']
        },
        systemic: {
            title: 'Systemic/Family Therapy',
            tagline: '"Healing happens in relationship."',
            whatIsIt: 'Views problems in context of family and social systems, understanding how relationships influence individual behavior.',
            inventor: 'Murray Bowen, Salvador Minuchin',
            era: '1950s-1960s',
            originDesc: 'Developed from the recognition that individuals are best understood in the context of their family and social relationships.',
            bestFor: ['Family conflicts', 'Couple issues', 'Parenting challenges', 'Communication problems'],
            techniques: ['Genograms', 'Family mapping', 'Circular questioning', 'Reframing']
        },
        mbct: {
            title: 'Mindfulness-Based Cognitive Therapy (MBCT)',
            tagline: '"Observe your thoughts without judgment."',
            whatIsIt: 'Combines cognitive therapy with mindfulness practices to help prevent relapse in depression.',
            inventor: 'Zindel Segal, Mark Williams, John Teasdale',
            era: '1990s',
            originDesc: 'Developed specifically to prevent depression relapse by teaching patients to recognize and disengage from ruminative thought patterns.',
            bestFor: ['Depression relapse prevention', 'Anxiety', 'Stress', 'Rumination'],
            techniques: ['Meditation', 'Body scan', 'Mindful breathing', 'Cognitive awareness']
        },
        psychoanalysis: {
            title: 'Psychoanalysis',
            tagline: '"Where id was, there ego shall be."',
            whatIsIt: 'Deep exploration of the unconscious mind to understand how early experiences shape personality and current struggles.',
            inventor: 'Sigmund Freud',
            era: '1890s',
            originDesc: 'Freud pioneered the talking cure, developing techniques to access unconscious material through free association and dream analysis.',
            bestFor: ['Deep-seated issues', 'Character problems', 'Repeated life patterns', 'Chronic difficulties'],
            techniques: ['Free association', 'Dream interpretation', 'Analysis of resistance', 'Transference analysis']
        },
        eft: {
            title: 'Emotionally Focused Therapy (EFT)',
            tagline: '"Creating secure emotional bonds."',
            whatIsIt: 'Focuses on creating and strengthening emotional bonds between partners through accessing and reprocessing emotional experiences.',
            inventor: 'Sue Johnson, Les Greenberg',
            era: '1980s',
            originDesc: 'Developed by integrating attachment theory with experiential therapy to help couples create secure bonds.',
            bestFor: ['Couple distress', 'Attachment issues', 'Relationship repair', 'Emotional disconnection'],
            techniques: ['Emotion tracking', 'Accessing attachment needs', 'Restructuring interactions', 'Creating new cycles']
        }
    };

    function openModal(therapyKey) {
        const data = therapyData[therapyKey];
        if (!data) return;

        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalTagline').textContent = data.tagline;
        document.getElementById('modalWhatIsIt').textContent = data.whatIsIt;
        document.getElementById('modalInventor').textContent = data.inventor;
        document.getElementById('modalEra').textContent = data.era;
        document.getElementById('modalOriginDesc').textContent = data.originDesc;

        const tagsContainer = document.getElementById('modalBestFor');
        tagsContainer.innerHTML = data.bestFor.map(tag => `<span class="modal-tag">${tag}</span>`).join('');

        const techniquesList = document.getElementById('modalTechniques');
        techniquesList.innerHTML = data.techniques.map(tech => `<li>${tech}</li>`).join('');

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    cards.forEach(card => {
        // Card click - toggle selection
        card.addEventListener('click', () => {
            card.classList.toggle('selected');
        });

        // Info button click - open modal
        const infoBtn = card.querySelector('.info-btn');
        if (infoBtn) {
            infoBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const therapy = card.dataset.therapy;
                openModal(therapy);
            });
        }

        // 3D tilt effect on hover
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Close modal handlers
    modalClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function createRipple(element) {
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(147, 112, 219, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: rippleEffect 0.6s ease-out forwards;
        pointer-events: none;
    `;

    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

// Add ripple animation to stylesheet
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===== Integrative Engine Controls =====
function initEngineControls() {
    const modules = document.querySelectorAll('.module-card');
    const coreBrain = document.querySelector('.core-brain');
    const orbitsLayer = document.getElementById('orbitsLayer');
    const activeNameDisplay = document.getElementById('activeModuleName');

    // Data for each therapy module (Nodes to spawn)
    const engineData = {
        thirdwave: {
            label: "Third Wave",
            nodes: [
                { name: "ACT", icon: "🎯" },
                { name: "DBT", icon: "⚖️" },
                { name: "Schema", icon: "🗝️" },
                { name: "CFT", icon: "💗" },
                { name: "MBCT", icon: "🧘" }
            ]
        },
        cbt: {
            label: "CBT",
            nodes: [
                { name: "Restructuring", icon: "🧩" },
                { name: "Exposure", icon: "🧗" },
                { name: "Behavioral", icon: "📝" },
                { name: "Logic", icon: "💡" }
            ]
        },
        psychodynamic: {
            label: "Psychodynamic",
            nodes: [
                { name: "Unconscious", icon: "🌑" },
                { name: "Dreams", icon: "💤" },
                { name: "Shadow", icon: "🌗" },
                { name: "Attachment", icon: "🔗" }
            ]
        },
        systemic: {
            label: "Systemic",
            nodes: [
                { name: "Family", icon: "👨‍👩‍👧‍👦" },
                { name: "Context", icon: "🌐" },
                { name: "Patterns", icon: "🔄" },
                { name: "Relations", icon: "🤝" }
            ]
        },
        humanistic: {
            label: "Humanistic",
            nodes: [
                { name: "Empathy", icon: "💖" },
                { name: "Growth", icon: "🌱" },
                { name: "Self", icon: "☀️" },
                { name: "Presence", icon: "🧘" }
            ]
        },
        gestalt: {
            label: "Gestalt",
            nodes: [
                { name: "Here & Now", icon: "👇" },
                { name: "Awareness", icon: "👁️" },
                { name: "Wholeness", icon: "⚪" },
                { name: "Contact", icon: "👉" }
            ]
        }
    };

    modules.forEach(module => {
        module.addEventListener('click', () => {
            // 1. Deactivate all others
            modules.forEach(m => m.classList.remove('active'));

            // 2. Activate clicked
            module.classList.add('active');

            // 3. Get Data
            const moduleKey = module.dataset.module;
            const data = engineData[moduleKey];

            if (data) {
                updateCore(data);
            }
        });
    });

    function updateCore(data) {
        // Update Text
        if (activeNameDisplay) {
            activeNameDisplay.style.opacity = 0;
            setTimeout(() => {
                activeNameDisplay.textContent = data.label + " Architecture";
                activeNameDisplay.style.opacity = 1;
            }, 200);
        }

        // Activate Brain
        if (coreBrain) {
            coreBrain.classList.add('active');
            // Flash effect
            coreBrain.style.filter = "drop-shadow(0 0 20px var(--accent-purple)) brightness(1.5)";
            setTimeout(() => {
                coreBrain.style.filter = "";
            }, 300);
        }

        // Spawn Nodes
        spawnNodes(data.nodes);
    }

    function spawnNodes(nodes) {
        if (!orbitsLayer) return;

        // Clear existing
        orbitsLayer.innerHTML = '';

        const radius = 160; // Distance from center
        const totalNodes = nodes.length;

        nodes.forEach((node, index) => {
            const angleDeg = (360 / totalNodes) * index;
            const delay = index * 0.1; // Staggered animation

            const nodeEl = document.createElement('div');
            nodeEl.className = 'orbit-node';
            nodeEl.innerHTML = `<span class="orbit-node-icon">${node.icon}</span> ${node.name}`;

            // Set custom properties for CSS animation
            nodeEl.style.setProperty('--radius', `${radius}px`);

            // Randomize duration slightly for organic feel
            const duration = 20 + Math.random() * 10;
            // Set initial rotation offset
            const startRotation = angleDeg;

            // Apply complex animation
            // NOTE: We use a wrapper approach or direct calculation in CSS? 
            // Let's use the CSS @keyframes 'orbitFloat' we defined.
            // But we need to set the initial position correctly.

            // Simpler approach: Rotate the CONTAINER of the node? No, distinct nodes.
            // Let's just set the animation-delay negative to position them?

            // Correct approach for CSS orbits:
            // 1. node is centered.
            // 2. transform: rotate(START_ANGLE) translateX(RADIUS) rotate(-START_ANGLE)
            // But we want them to MOVE.

            nodeEl.style.animation = `orbitFloat ${duration}s linear infinite`;
            nodeEl.style.animationDelay = `-${(duration / totalNodes) * index}s`; // Distribute along orbit

            orbitsLayer.appendChild(nodeEl);
        });
    }

    // Auto-select "Third Wave" on load
    const defaultModule = document.querySelector('.module-card[data-module="thirdwave"]');
    if (defaultModule) {
        // Use a small timeout to ensure DOM is ready and animations look good
        setTimeout(() => {
            defaultModule.click();
        }, 500);
    }
}

// ===== Character Creation Controls =====
function initCreationControls() {
    const approachBtns = document.querySelectorAll('.approach-btn');

    approachBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });
    });

    const createBtn = document.querySelector('.forge-cta');
    if (createBtn) {
        createBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const btnText = createBtn.querySelector('span:not(.cta-icon)');
            if (btnText) btnText.textContent = "Bringing to Life...";
            setTimeout(() => {
                if (btnText) btnText.textContent = "Ready!";
                createBtn.classList.add('success');
            }, 1500);
        });
    }
}

function updatePreviewAvatar(archetype) {
    const photos = document.querySelectorAll('.forge-photo');

    // Fade out all, fade in selected
    photos.forEach(photo => {
        if (photo.dataset.archetype === archetype) {
            photo.classList.add('active');
        } else {
            photo.classList.remove('active');
        }
    });

    console.log(`Changed archetype to: ${archetype}`);
}

function updateAuraColor(aura) {
    const colors = {
        calm: '#64B5F6',
        warm: '#FFB74D',
        gentle: '#F06292',
        mystic: '#BA68C8',
        nature: '#81C784'
    };

    const auraElement = document.querySelector('.custom-aura');
    if (auraElement) {
        auraElement.style.background = `radial-gradient(circle, ${colors[aura]}66 0%, transparent 70%)`;
    }
}

function createForgeAnimation() {
    const preview = document.querySelector('.preview-stage');

    // Add sparkle burst
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        const angle = (i / 20) * Math.PI * 2;
        const distance = 100 + Math.random() * 50;

        sparkle.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #fff, #9370db);
            border-radius: 50%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            animation: sparkleBurst 1s ease-out forwards;
            --tx: ${Math.cos(angle) * distance}px;
            --ty: ${Math.sin(angle) * distance}px;
        `;

        preview.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// Add forge animations to stylesheet
const forgeStyle = document.createElement('style');
forgeStyle.textContent = `
    @keyframes avatarPulse {
        0% { transform: scale(1.5); }
        50% { transform: scale(1.7); }
        100% { transform: scale(1.5); }
    }
    @keyframes sparkleBurst {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(forgeStyle);

// ===== Smooth Scroll =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== Parallax Effect on Scroll =====
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;

            // Parallax for orbs
            const orbs = document.querySelectorAll('.orb');
            orbs.forEach((orb, i) => {
                const speed = 0.05 + (i * 0.02);
                orb.style.transform = `translateY(${scrolled * speed}px)`;
            });

            ticking = false;
        });
        ticking = true;
    }
});

// ===== Mobile Carousel Scroll Spy =====
function initCarouselScroll() {
    const grid = document.querySelector('.character-cards-grid');
    const dots = document.querySelectorAll('.carousel-dots .dot');

    if (!grid || !dots.length) return;

    // Update dots on scroll
    grid.addEventListener('scroll', () => {
        const itemWidth = grid.clientWidth;
        const activeIndex = Math.round(grid.scrollLeft / itemWidth);

        dots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });

    // Click on dots to scroll
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const itemWidth = grid.clientWidth;
            grid.scrollTo({
                left: itemWidth * index,
                behavior: 'smooth'
            });
        });
    });
}


