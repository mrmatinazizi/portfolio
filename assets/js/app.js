import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Header Scroll Effect
    const header = document.getElementById('header-glass');
    const onScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('glass-panel', 'bg-black/40');
            header.classList.remove('bg-transparent', 'border-transparent');
        } else {
            header.classList.remove('glass-panel', 'bg-black/40');
            header.classList.add('bg-transparent', 'border-transparent');
        }
    };
    window.addEventListener('scroll', onScroll);

    // 3. Mobile Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });

    // 4. Portfolio Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI Update
            filterBtns.forEach(b => {
                b.classList.remove('bg-white', 'text-black', 'shadow-lg');
                b.classList.add('text-gray-400');
            });
            btn.classList.remove('text-gray-400');
            btn.classList.add('bg-white', 'text-black', 'shadow-lg');

            // Logic
            const filter = btn.dataset.filter;
            projectCards.forEach(card => {
                if (filter === 'ALL' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // 5. Portfolio Modal
    const modal = document.getElementById('project-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalClose = document.getElementById('modal-close');
    
    // Elements to populate
    const mImg = document.getElementById('modal-image');
    const mCat = document.getElementById('modal-category');
    const mYear = document.getElementById('modal-year');
    const mTitle = document.getElementById('modal-title');
    const mDesc = document.getElementById('modal-desc');
    const mClient = document.getElementById('modal-client');
    const mClientContainer = document.getElementById('modal-client-container');
    const mTools = document.getElementById('modal-tools');

    function openModal(data) {
        mImg.src = data.imageUrl;
        mImg.alt = data.title;
        mCat.textContent = data.category.replace(/_/g, ' ');
        mYear.textContent = data.year || '';
        mTitle.textContent = data.title;
        mDesc.textContent = data.longDesc || data.desc;
        
        if (data.client) {
            mClient.textContent = data.client;
            mClientContainer.classList.remove('hidden');
        } else {
            mClientContainer.classList.add('hidden');
        }

        // Tools
        mTools.innerHTML = '';
        if (data.tools && Array.isArray(data.tools)) {
            data.tools.forEach(tool => {
                const span = document.createElement('span');
                span.className = 'px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 transition-colors';
                span.textContent = tool;
                mTools.appendChild(span);
            });
        }

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const data = JSON.parse(card.dataset.project);
            openModal(data);
        });
    });

    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    // 6. 3D Background Logic (Moved from React Component)
    const init3D = () => {
        const container = document.getElementById('canvas-container');
        if (!container) return;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.0015);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 50;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Particles
        const count = 2500;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        const color1 = new THREE.Color(0x60a5fa);
        const color2 = new THREE.Color(0xc084fc);
        const color3 = new THREE.Color(0xf472b6);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 120;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 120;

            const rand = Math.random();
            let mixedColor;
            if (rand < 0.5) {
                mixedColor = color1.clone().lerp(color2, rand * 2);
            } else {
                mixedColor = color2.clone().lerp(color3, (rand - 0.5) * 2);
            }

            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
            sizes[i] = Math.random() < 0.1 ? 0.3 : 0.1;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        }, { passive: true });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        const animate = () => {
            requestAnimationFrame(animate);
            particles.rotation.y += 0.0008;
            particles.rotation.z += 0.0005;
            camera.position.x += (mouseX * 5 - camera.position.x) * 0.03;
            camera.position.y += (mouseY * 5 - camera.position.y) * 0.03;
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        };
        animate();
    };

    init3D();
});
