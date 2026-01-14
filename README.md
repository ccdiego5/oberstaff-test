### Oberstaff — Landing / Prueba técnica (Laravel + Bootstrap + Animaciones)

Proyecto de landing page construido con **Laravel (Blade)** y **Vite**, enfocado en replicar una experiencia visual tipo “showreel/hero” y secciones de contenido basadas en diseño (Figma), con micro‑interacciones y animaciones on‑scroll.

### Objetivo del proyecto

- **UI/UX premium**: hero con imagen placeholder + video de fondo bajo demanda (“Play/Stop Showreel”), overlay con blur, controles de sonido, y transición suave al desplazarse.
- **Secciones basadas en diseño**: “Featured experiences” (tarjetas) y “Leave / Connect” (composición editorial con assets).
- **Animación y scroll**: efecto de “hero hacia atrás” y entradas suaves a medida que el usuario hace scroll.

### Funcionalidades implementadas

- **Hero**:
  - Placeholder (imagen) mientras el video está detenido; al pulsar “Play Showreel” se reproduce y se hace la transición.
  - Control de audio (SOUND ON/OFF) independiente del estado del video.
  - Hora dinámica con zona horaria **Europe/Madrid**.
  - Efecto de transición al scroll inspirado en Entuitive (pin + “push” del contenido).
- **Featured experiences**:
  - Tabs (IBIZA / MALLORCA / SARDINIA) y tarjetas con assets.
  - Barra de “scroll” fina + flechas con iconos normal/hover.
- **Leave / Connect**:
  - Composición de imágenes + textos exactos del diseño.
  - Fondo con textura (assets) y layout responsive.
- **Animaciones on‑scroll (reveal)**:
  - Entradas suaves “hacia arriba” + fade para elementos desde “Featured” hacia abajo.

### Tecnologías utilizadas

- **Backend**
  - **Laravel** (PHP)
  - **Blade** (templating)
- **Frontend**
  - **Vite** (bundling/build)
  - **Bootstrap 5** (+ Popper)
  - **Bootstrap Icons**
  - **CSS personalizado** (variables, overlay, blur, layout responsive)
  - **JavaScript (ESM)**
- **Animación / Scroll**
  - **GSAP** + **ScrollTrigger**
  - **Lenis** (scroll suave)
- **Tipografía**
  - **Montserrat** (Google Fonts)

### Estructura de assets

Los recursos se organizan en `public/assets/` (icons, bg, img, text, btn, video).  
Esta estructura permite referenciar los assets directamente desde Blade con `asset('...')`.

### Flujo de trabajo de diseño (Figma → Producción)

- **Extracción desde Figma**: se exportaron los elementos visuales necesarios (títulos como imágenes, iconografía, fondos y tarjetas).
- **Edición en Photoshop 2026**: se optimizaron/ajustaron recursos (recortes, fondos, texturas y variantes) para usarlos en web sin depender de recursos externos.

### Cómo ejecutar el proyecto (entorno local)

- **Requisitos**:
  - PHP + Composer
  - Node.js + npm

- **Instalación**:

```bash
composer install
npm install
```

- **Arranque**:

```bash
php artisan serve
npm run dev
```

### Archivos clave

- **Vista principal**: `resources/views/welcome.blade.php`
- **Estilos**: `resources/css/app.css`
- **Comportamiento/animaciones**: `resources/js/app.js`

### Registro de trabajo (sesión)

- **Inicio**: 1:00 PM  
- **Fin**: 7:00 PM  

En este periodo se realizó la integración completa de estilos, comportamiento interactivo, animaciones y composición de secciones basadas en diseño, además del pipeline de assets para producción.
