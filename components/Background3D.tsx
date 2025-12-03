import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    // Add fog to blend particles into the background color (Black)
    scene.fog = new THREE.FogExp2(0x000000, 0.0015);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, // Transparent background so CSS background shows through if needed
        antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance optimization
    containerRef.current.appendChild(renderer.domElement);

    // 2. Create Particles
    const geometry = new THREE.BufferGeometry();
    const count = 2500; // Number of particles
    
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    // Brand colors (Blue to Purple to Pink)
    const color1 = new THREE.Color(0x60a5fa); // blue-400
    const color2 = new THREE.Color(0xc084fc); // purple-400
    const color3 = new THREE.Color(0xf472b6); // pink-400

    for (let i = 0; i < count; i++) {
        // Random positions in a 3D box
        positions[i * 3] = (Math.random() - 0.5) * 120;     // x
        positions[i * 3 + 1] = (Math.random() - 0.5) * 120; // y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 120; // z

        // Mix colors randomly
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

        // Random sizes
        sizes[i] = Math.random() < 0.1 ? 0.3 : 0.1; // Some bigger stars
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom shader material for better looking particles (or standard PointsMaterial)
    // Using standard PointsMaterial for robustness
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

    // 3. Interaction State
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position from -1 to 1
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    // Use passive listener for performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 4. Animation Loop
    const animate = () => {
        requestAnimationFrame(animate);

        // Constant gentle rotation
        particles.rotation.y += 0.0008;
        particles.rotation.z += 0.0005;

        // Parallax effect based on mouse
        // Smoothly interpolate camera position
        camera.position.x += (mouseX * 5 - camera.position.x) * 0.03;
        camera.position.y += (mouseY * 5 - camera.position.y) * 0.03;
        
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };

    animate();

    // 5. Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
        ref={containerRef} 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, #1a1a2e 0%, #000000 100%)' }}
    />
  );
};

export default Background3D;