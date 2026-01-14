import './bootstrap';

// Importar Bootstrap JavaScript
import * as bootstrap from 'bootstrap';

// Importar librerías de animación
import gsap from 'gsap';
// (Mantenemos GSAP; quitamos Anime/Three para evitar ruido)

// Hacer disponibles globalmente (si luego quieres animaciones extra)
window.gsap = gsap;

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

        setTimeout(() => {
            placeholder.style.display = 'none';
        }, 1300);
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

    // Click en "Play Showreel" => ejecutar video de fondo + transición
    if (videoThumbnail) {
        videoThumbnail.addEventListener('click', () => {
            revealAndPlayHeroVideo();
        });
    }
    
    // Animaciones suaves (sin romper el layout)
    gsap.from(['.hero-title-img', '.hero-subtitle', '.hero-btn'], {
        duration: 0.9,
        y: 18,
        opacity: 1,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.2
    });

    // Efecto hover en el botón con GSAP
    // heroBtn ya está definido arriba
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

    // (Eliminadas animaciones on-scroll para no romper nada)

    // (Partículas/Three.js y efectos extra eliminados: no son parte del Figma)
});
