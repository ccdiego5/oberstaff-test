import './bootstrap';

// Importar Bootstrap JavaScript
import * as bootstrap from 'bootstrap';

// Importar librerías de animación
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs';
import * as THREE from 'three';

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

// Hacer disponibles globalmente para usar en el HTML
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.anime = anime;
window.THREE = THREE;

// Animaciones del Hero
document.addEventListener('DOMContentLoaded', function() {
    
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Cargar tema guardado o usar dark por defecto
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Animación del toggle
            anime({
                targets: themeToggle,
                rotate: 360,
                duration: 500,
                easing: 'easeInOutQuad'
            });
            
            // Cambiar tema
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Animación sutil de la página
            anime({
                targets: 'body',
                opacity: [0.95, 1],
                duration: 300,
                easing: 'easeInOutQuad'
            });
        });
    }
    
    // Video Placeholder con animación espectacular
    const heroVideo = document.getElementById('hero-video');
    const placeholder = document.getElementById('video-placeholder');
    
    if (heroVideo && placeholder) {
        // Función para verificar si el video está listo
        const checkVideoReady = () => {
            if (heroVideo.readyState >= 3) { // HAVE_FUTURE_DATA
                // Video está listo, iniciar animación de salida espectacular
                setTimeout(() => {
                    placeholder.classList.add('fade-out');
                    
                    // Animación adicional con GSAP para más impacto
                    gsap.to('.placeholder-image', {
                        duration: 2,
                        scale: 1.5,
                        filter: 'blur(30px) brightness(2)',
                        ease: 'power2.inOut'
                    });
                    
                    // Animación del loading con Anime.js
                    anime({
                        targets: '.loading-animation',
                        translateY: -100,
                        opacity: 0,
                        duration: 800,
                        easing: 'easeInBack'
                    });
                    
                    // Remover el placeholder después de la animación
                    setTimeout(() => {
                        placeholder.style.display = 'none';
                    }, 2000);
                    
                }, 500); // Pequeña espera antes de iniciar la transición
            }
        };
        
        // Escuchar eventos del video
        heroVideo.addEventListener('loadeddata', checkVideoReady);
        heroVideo.addEventListener('canplaythrough', checkVideoReady);
        
        // Verificar inmediatamente por si el video ya está cargado
        checkVideoReady();
    }
    
    // Audio para el control de sonido
    const audio = new Audio();
    // Puedes agregar un archivo de audio aquí si lo tienes
    // audio.src = '/assets/audio/background-music.mp3';
    audio.loop = true;
    audio.volume = 0.3;

    // Control de sonido
    const soundToggle = document.getElementById('sound-toggle');
    const soundStatus = document.getElementById('sound-status');
    let isSoundOn = false;

    if (soundToggle) {
        soundToggle.addEventListener('click', function() {
            isSoundOn = !isSoundOn;
            
            if (isSoundOn) {
                soundToggle.classList.add('active');
                soundStatus.textContent = 'ON';
                // audio.play(); // Descomentar cuando tengas el archivo de audio
                
                // Animación del icono
                anime({
                    targets: '.sound-icon',
                    rotate: [0, 360],
                    duration: 800,
                    easing: 'easeInOutQuad'
                });
            } else {
                soundToggle.classList.remove('active');
                soundStatus.textContent = 'OFF';
                // audio.pause(); // Descomentar cuando tengas el archivo de audio
            }
        });
    }

    // Control del navbar en scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Efecto zoom out en el hero al hacer scroll
    gsap.to('.hero-section', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        scale: 0.9,
        ease: 'none'
    });

    // Hacer fullscreen del video de fondo al hacer click en el thumbnail
    const videoThumbnail = document.getElementById('video-thumbnail');
    const heroVideo = document.getElementById('hero-video');

    if (videoThumbnail && heroVideo) {
        videoThumbnail.addEventListener('click', function() {
            // Activar fullscreen del video de fondo
            if (heroVideo.requestFullscreen) {
                heroVideo.requestFullscreen();
            } else if (heroVideo.webkitRequestFullscreen) { /* Safari */
                heroVideo.webkitRequestFullscreen();
            } else if (heroVideo.msRequestFullscreen) { /* IE11 */
                heroVideo.msRequestFullscreen();
            }
            
            // Activar controles del video en fullscreen
            heroVideo.controls = true;
            
            // Animación del thumbnail antes de fullscreen
            anime({
                targets: videoThumbnail,
                scale: [1, 1.2, 0],
                opacity: [1, 1, 0],
                duration: 500,
                easing: 'easeInOutQuad'
            });
        });

        // Quitar controles cuando se sale de fullscreen
        heroVideo.addEventListener('fullscreenchange', function() {
            if (!document.fullscreenElement) {
                heroVideo.controls = false;
                
                // Reaparecer el thumbnail
                anime({
                    targets: videoThumbnail,
                    scale: [0, 1],
                    opacity: [0, 1],
                    duration: 500,
                    easing: 'easeOutElastic(1, .6)'
                });
            }
        });

        // Para Safari
        heroVideo.addEventListener('webkitfullscreenchange', function() {
            if (!document.webkitFullscreenElement) {
                heroVideo.controls = false;
                
                anime({
                    targets: videoThumbnail,
                    scale: [0, 1],
                    opacity: [0, 1],
                    duration: 500,
                    easing: 'easeOutElastic(1, .6)'
                });
            }
        });
    }
    
    // Animación del título principal con GSAP
    gsap.from('.hero-title', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.3
    });

    // Animación del subtítulo con efecto de aparición por palabras
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const words = subtitle.textContent.split(' ');
        subtitle.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
        
        gsap.from('.hero-subtitle .word', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.05,
            ease: 'back.out',
            delay: 0.8
        });
    }

    // Animación del botón con Anime.js
    anime({
        targets: '.hero-btn',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: 1500,
        duration: 1000,
        easing: 'easeOutElastic(1, .8)'
    });

    // Efecto hover en el botón con GSAP
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
        heroBtn.addEventListener('mouseenter', () => {
            gsap.to(heroBtn, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        heroBtn.addEventListener('mouseleave', () => {
            gsap.to(heroBtn, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }

    // Animación de los elementos del footer con scroll
    gsap.from('.hero-footer-item', {
        scrollTrigger: {
            trigger: '.hero-footer',
            start: 'top bottom-=100',
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Animación del video thumbnail
    gsap.from('.video-thumbnail', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 2,
        ease: 'back.out(1.7)'
    });

    // Efecto parallax en el video de fondo
    gsap.to('.hero-video', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 150,
        scale: 1.15,
        ease: 'none'
    });

    // Efecto de desvanecimiento del overlay al hacer scroll
    gsap.to('.hero-overlay', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'center top',
            scrub: 1
        },
        opacity: 0.3,
        ease: 'none'
    });

    // Partículas flotantes con Three.js (efecto sutil)
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        camera.position.z = 5;

        // Crear partículas
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const sizes = [];
        
        for (let i = 0; i < 100; i++) {
            vertices.push(
                Math.random() * 10 - 5,
                Math.random() * 10 - 5,
                Math.random() * 10 - 5
            );
            sizes.push(Math.random() * 2 + 1);
        }
        
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
        
        const material = new THREE.PointsMaterial({
            size: 0.05,
            color: 0xffffff,
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true
        });
        
        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Animación
        function animate() {
            requestAnimationFrame(animate);
            particles.rotation.y += 0.001;
            particles.rotation.x += 0.0005;
            renderer.render(scene, camera);
        }
        
        animate();

        // Responsive
        window.addEventListener('resize', () => {
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        });
    }

    // Animación de los iconos con Anime.js
    anime({
        targets: '.hero-icon',
        scale: [0, 1],
        rotate: [180, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {start: 2000}),
        duration: 800,
        easing: 'easeOutElastic(1, .6)'
    });

    // Efecto de brillo en el título
    const title = document.querySelector('.hero-title');
    if (title) {
        setInterval(() => {
            anime({
                targets: '.hero-title',
                textShadow: [
                    '0 0 10px rgba(255,255,255,0)',
                    '0 0 20px rgba(255,255,255,0.8)',
                    '0 0 10px rgba(255,255,255,0)'
                ],
                duration: 2000,
                easing: 'easeInOutQuad'
            });
        }, 5000);
    }
});
