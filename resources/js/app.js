import './bootstrap';

// Importar Bootstrap JavaScript
import * as bootstrap from 'bootstrap';

// Importar librerías de animación
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
// (Mantenemos GSAP; quitamos Anime/Three para evitar ruido)

// Hacer disponibles globalmente (si luego quieres animaciones extra)
window.gsap = gsap;
gsap.registerPlugin(ScrollTrigger);

// Animaciones del Hero
document.addEventListener('DOMContentLoaded', function() {
    // Lenis (scroll suave) + sync con ScrollTrigger (como Entuitive)
    // Importante: NO reescribe tu lógica del hero, solo suaviza el input de scroll.
    const prefersReducedMotion =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        const lenis = new Lenis({
            // Un poco más "rápido" para que el cover-sheet responda al primer tick
            lerp: 0.06,
            smoothWheel: true,
            wheelMultiplier: 1.35,
            smoothTouch: false,
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            // GSAP ticker time (s) -> Lenis raf espera ms
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
    }

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
            
            // Cambiar tema
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Animación sutil (opcional, sin librerías extra)
            document.body.style.opacity = '0.96';
            setTimeout(() => (document.body.style.opacity = '1'), 120);
        });
    }
    
    // Video: el fondo se reproduce SOLO al hacer click en "Play Showreel"
    const heroVideo = document.getElementById('hero-video');
    const placeholder = document.getElementById('video-placeholder');
    const heroBtn = document.querySelector('.hero-btn');
    const videoThumbnail = document.getElementById('video-thumbnail');
    const heroMedia = document.querySelector('.hero-media');
    const playLabel = document.querySelector('.video-thumbnail .play-text');
    let showreelPlaying = false;
    let hidePlaceholderTimer = null;

    // Asegurar que el video NO arranque solo
    if (heroVideo) {
        heroVideo.pause();
        heroVideo.currentTime = 0;
        heroVideo.muted = true; // arranca en OFF
        heroVideo.controls = false;
    }

    const revealAndPlayHeroVideo = async () => {
        if (!heroVideo || !placeholder) return;

        // Nada se oculta: todo debe mantenerse visible

        // Transición del placeholder -> video
        placeholder.classList.add('fade-out');
        gsap.to('.placeholder-image', {
            duration: 1.2,
            scale: 1.12,
            filter: 'blur(16px) brightness(1.35)',
            ease: 'power2.inOut'
        });

        // Aplicar estado de sonido actual al video
        heroVideo.muted = !isSoundOn;
        if (!heroVideo.muted) heroVideo.volume = 0.35;

        try {
            await heroVideo.play(); // gesto del usuario => debe permitir play
        } catch (e) {
            // si el navegador bloquea, igual escondemos placeholder y dejamos el primer frame
        }

        // Cuando el video ya está reproduciéndose, lo mostramos nítido (igual que la imagen)
        if (heroMedia) heroMedia.classList.add('is-playing');

        if (hidePlaceholderTimer) clearTimeout(hidePlaceholderTimer);
        hidePlaceholderTimer = setTimeout(() => {
            placeholder.style.display = 'none';
        }, 1300);
    };

    const stopHeroVideoAndRestorePlaceholder = () => {
        if (!heroVideo || !placeholder) return;

        // Parar video y volver al inicio
        try {
            heroVideo.pause();
            heroVideo.currentTime = 0;
        } catch (e) {}

        // Volver a estado visual "imagen"
        if (hidePlaceholderTimer) clearTimeout(hidePlaceholderTimer);
        hidePlaceholderTimer = null;

        placeholder.style.display = '';
        placeholder.classList.remove('fade-out');
        if (heroMedia) heroMedia.classList.remove('is-playing');

        // Limpiar estilos inline que dejó GSAP en la imagen
        if (window.gsap) {
            window.gsap.set('.placeholder-image', { clearProps: 'all' });
        }
    };
    
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
                if (heroVideo) {
                    heroVideo.muted = false;
                    heroVideo.volume = 0.35;
                }
            } else {
                soundToggle.classList.remove('active');
                soundStatus.textContent = 'OFF';
                if (heroVideo) heroVideo.muted = true;
            }
        });
    }

    // Hora real (España) en el footer: "h:mm AM/PM · EUROPE"
    const timeEl = document.getElementById('hero-time');
    if (timeEl) {
        const fmt = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Europe/Madrid',
        });

        const renderTime = () => {
            timeEl.textContent = fmt.format(new Date()).toUpperCase();
        };

        renderTime();
        // refrescar cada minuto al cambio de minuto
        const msToNextMinute = (60 - new Date().getSeconds()) * 1000 + 50;
        setTimeout(() => {
            renderTime();
            setInterval(renderTime, 60 * 1000);
        }, msToNextMinute);
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

    // (Sin efectos on-scroll por ahora: mantener simple como Figma)

    // Click en "Play/Stop Showreel" => toggle
    if (videoThumbnail) {
        videoThumbnail.addEventListener('click', () => {
            if (!showreelPlaying) {
                showreelPlaying = true;
                if (playLabel) playLabel.textContent = 'Stop Showreel';
                revealAndPlayHeroVideo();
            } else {
                showreelPlaying = false;
                if (playLabel) playLabel.textContent = 'Play Showreel';
                stopHeroVideoAndRestorePlaceholder();
            }
        });
    }

    // Efecto tipo Entuitive:
    // - El HERO queda "pinned"
    // - El HERO se va hacia atrás (scale + blur)
    // - La siguiente sección (cover-sheet) sube y cubre el HERO
    const heroSection = document.querySelector('.hero-section');
    const heroMediaEl = document.querySelector('.hero-media');
    const coverSheet = document.querySelector('.cover-sheet');

    if (heroSection && coverSheet) {
        // Arranca "cerca" para que suba desde el primer scroll
        gsap.set(coverSheet, { yPercent: 15, willChange: 'transform' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: '+=65%',
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onEnter: () => {
                    document.documentElement.classList.add('is-pin-scroll');
                    document.body.classList.add('is-pin-scroll');
                },
                onLeave: () => {
                    document.documentElement.classList.remove('is-pin-scroll');
                    document.body.classList.remove('is-pin-scroll');
                },
                onEnterBack: () => {
                    document.documentElement.classList.add('is-pin-scroll');
                    document.body.classList.add('is-pin-scroll');
                },
                onLeaveBack: () => {
                    document.documentElement.classList.remove('is-pin-scroll');
                    document.body.classList.remove('is-pin-scroll');
                },
            },
        });

        // Asegurar que el contenido (header.png, p, btn) NO cambie opacidad
        tl.set(['.hero-title-img', '.hero-subtitle', '.hero-btn'], { opacity: 1 }, 0);

        // Hero "hacia atrás"
        if (heroMediaEl) {
            tl.to(
                heroMediaEl,
                {
                    scale: 0.90,
                    filter: 'blur(4px)',
                    transformOrigin: '50% 50%',
                    ease: 'none',
                },
                0
            );
        }

        // Cover sheet sube y cubre
        tl.to(
            coverSheet,
            {
                yPercent: 0,
                ease: 'none',
            },
            0
        );
    }
    
    // IMPORTANTE:
    // Evitamos animar .hero-title-img/.hero-subtitle/.hero-btn con GSAP aquí
    // porque ya tienen animación CSS (fadeInUp) y se puede quedar un inline opacity/transform
    // que luego “desaparece” al bajar/subir con ScrollTrigger/Lenis.
    // Limpiamos inline styles por si ya quedaron pegados.
    gsap.set(['.hero-title-img', '.hero-subtitle', '.hero-btn'], {
        clearProps: 'opacity,transform'
    });

    // Nota: sin animación hover en el botón (no debe moverse)

    // (Eliminadas animaciones on-scroll para no romper nada)

    // (Partículas/Three.js y efectos extra eliminados: no son parte del Figma)

    // Featured tabs (solo UI)
    const featuredTabs = document.querySelectorAll('.featured-tab');
    if (featuredTabs.length) {
        featuredTabs.forEach((btn) => {
            btn.addEventListener('click', () => {
                featuredTabs.forEach((b) => b.classList.remove('is-active'));
                btn.classList.add('is-active');
            });
        });
    }
});
