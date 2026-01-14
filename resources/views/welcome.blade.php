<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>The Hike Station - Reconnect with Nature</title>

    <!-- Vite Assets -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center w-100">
                <a class="navbar-brand" href="/">
                    <img src="{{ asset('assets/logo/logo.png') }}" alt="The Hike Station" class="logo-img">
                </a>

                <div class="d-none d-lg-flex align-items-center gap-4">
                    <a href="#" class="nav-link">IBIZA</a>
                    <a href="#" class="nav-link">MALLORCA</a>
                    <a href="#" class="nav-link">SARDINIA</a>
                    <a href="#" class="nav-link">SHOP</a>
                    <button class="btn btn-book">BOOK NOW</button>
                    <select class="lang-selector">
                        <option>ES</option>
                        <option>EN</option>
                        <option>DE</option>
                    </select>

                    <a class="nav-link" href="#" id=""><i class="bi bi-three-dots"></i></a>
                </div>

                <!-- Mobile Menu Toggle -->
                <button class="navbar-toggler d-lg-none" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
        <!-- Media (placeholder + video + overlay SOLO del video) -->
        <div class="hero-media">
            <!-- Placeholder Image (se muestra hasta que el video cargue) -->
            <div class="video-placeholder" id="video-placeholder">
                <img src="{{ asset('assets/bg/hero-1.png') }}" alt="Beautiful bay" class="placeholder-image">
            </div>

            <!-- Background Video -->
            <video
                id="hero-video"
                class="hero-bg hero-video"
                muted
                loop
                playsinline
                preload="auto">
                <source src="{{ asset('assets/video/pikaso-untitled-project-2026-01-14.mp4') }}" type="video/mp4">
            </video>

            <!-- Overlay negro SOLO para el video -->
            <div class="hero-media-overlay" aria-hidden="true"></div>
        </div>

        <!-- Hero Content (izquierda) -->
        <div class="container hero-inner">
            <div class="hero-content">
                <img src="{{ asset('assets/text/header.png') }}" alt="Reconnect with your highest self" class="hero-title-img">

                <p class="hero-subtitle">
                    Begin your journey to inner connection and discover the transformative power of nature.
                </p>

                <a href="#locations" class="hero-btn">
                    EXPLORE HIKING LOCATIONS
                </a>
            </div>
        </div>

        <!-- Hero Footer Info -->
        <div class="hero-footer">
            <div class="hero-time">
                <span id="hero-time">--:--</span> <span class="hero-dot">·</span> <span class="hero-region">EUROPE</span>
            </div>

            <button class="sound-control" id="sound-toggle" type="button">
                <span class="sound-text">SOUND: <span id="sound-status">OFF</span></span>
                <img src="{{ asset('assets/icons/icon-7.png') }}" alt="Sound" class="sound-icon-img">
            </button>
        </div>

        <!-- Video Thumbnail -->
        <div class="video-thumbnail" id="video-thumbnail">
            <img src="{{ asset('assets/img/play-1.png') }}" alt="Video thumbnail">
            <div class="play-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                </svg>
            </div>
            <span class="play-text">Play Showreel</span>
        </div>
    </section>

    <!-- Featured Experiences (cover-sheet) -->
    <section class="cover-sheet featured-section py-5">
        <div class="container py-4 py-lg-5">
            <div class="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4 mb-4 mb-lg-5">
                <div class="featured-title">
                    <img src="{{ asset('assets/text/featured.png') }}" alt="Featured experiences" class="featured-title-img">
                </div>

                <div class="featured-tabs" role="tablist" aria-label="Featured filters">
                    <button type="button" class="featured-tab is-active" data-featured-tab="ibiza">IBIZA</button>
                    <button type="button" class="featured-tab" data-featured-tab="mallorca">MALLORCA</button>
                    <button type="button" class="featured-tab" data-featured-tab="sardinia">SARDINIA</button>
                </div>
            </div>

            <div class="row g-4">
                <!-- Card 1 -->
                <div class="col-12 col-lg-4">
                    <article class="featured-card" data-location="ibiza">
                        <img class="featured-card-bg" src="{{ asset('assets/img/tarjeta-1.png') }}" alt="Quelona">

                        <div class="featured-card-top">
                            <img src="{{ asset('assets/icons/icon-1.png') }}" alt="" class="featured-card-pin">
                            <div class="featured-card-pills">
                                <span class="featured-pill">Ibiza</span>
                                <span class="featured-pill">Groups</span>
                            </div>
                        </div>

                        <div class="featured-card-stats">
                            <div class="featured-stat">
                                <img src="{{ asset('assets/icons/icon-4.png') }}" alt="" class="featured-stat-ico-large">
                                <span>6-10 km</span>
                            </div>
                            <div class="featured-stat">
                                <img src="{{ asset('assets/icons/icon-5.png') }}" alt="" class="featured-stat-ico">
                                <span>2:30 - 4 hours</span>
                            </div>
                            <div class="featured-stat">
                                <img src="{{ asset('assets/icons/icon-6.png') }}" alt="" class="featured-stat-ico">
                                <span>Medium</span>
                            </div>
                        </div>

                        <div class="featured-card-bottom">
                            <div class="featured-card-bottom-text">
                                <h3 class="featured-card-name">Quelona</h3>
                                <p class="featured-card-sub">The mythical western landscape</p>
                                <button class="featured-card-cta" type="button" aria-label="Open Quelona">
                                    <img src="{{ asset('assets/btn/btn-1.png') }}" alt="" class="featured-cta-img">
                                </button>
                            </div>

                        </div>
                    </article>
                </div>

                <!-- Card 2 -->
                <div class="col-12 col-lg-4">
                    <article class="featured-card" data-location="ibiza">
                        <img class="featured-card-bg" src="{{ asset('assets/img/tarjeta-2.png') }}" alt="Pescador">

                        <div class="featured-card-top">
                            <img src="{{ asset('assets/icons/icon-2.png') }}" alt="" class="featured-card-pin">
                            <div class="featured-card-pills">
                                <span class="featured-pill">Ibiza</span>
                                <span class="featured-pill">Team Buildings</span>
                            </div>
                        </div>

                        <div class="featured-card-stats">
                            <div class="featured-stat">
                                <img src="{{ asset('assets/icons/icon-4.png') }}" alt="" class="featured-stat-ico-large">
                                <span>6-10 km</span>
                            </div>
                            <div class="featured-stat">
                                <img src="{{ asset('assets/icons/icon-5.png') }}" alt="" class="featured-stat-ico">
                                <span>2:30 - 4 hours</span>
                            </div>
                            <div class="featured-stat">
                                <img src="{{ asset('assets/icons/icon-6.png') }}" alt="" class="featured-stat-ico">
                                <span>Medium</span>
                            </div>
                        </div>

                        <div class="featured-card-bottom">
                            <div class="featured-card-bottom-text">
                                <h3 class="featured-card-name">Pescador</h3>
                                <p class="featured-card-sub">The dramatic fisherman's trail</p>
                                <button class="featured-card-cta" type="button" aria-label="Open Pescador">
                                    <img src="{{ asset('assets/btn/btn-1.png') }}" alt="" class="featured-cta-img">
                                </button>
                            </div>

                        </div>
                    </article>
                </div>

                <!-- Card 3 -->
                <div class="col-12 col-lg-4">
                    <article class="featured-card" data-location="ibiza">
                        <img class="featured-card-bg" src="{{ asset('assets/img/tarjeta-3.png') }}" alt="Lagoon">

                        <div class="featured-card-top">
                            <img src="{{ asset('assets/icons/icon-3.png') }}" alt="" class="featured-card-pin">
                            <div class="featured-card-pills">
                                <span class="featured-pill">Ibiza</span>
                                <span class="featured-pill">Team Buildings</span>
                            </div>
                        </div>

                        <div class="featured-card-stats">
                            <div class="featured-stat">
                                <img src="{{ asset('assets/icons/icon-4.png') }}" alt="" class="featured-stat-ico-large">
                                <span>6-10 km</span>
                            </div>
                            <div class="featured-stat">
                                <img src="{{ asset('assets/icons/icon-5.png') }}" alt="" class="featured-stat-ico">
                                <span>2:30 - 4 hours</span>
                            </div>
                            <div class="featured-stat">
                                <img src="{{ asset('assets/icons/icon-6.png') }}" alt="" class="featured-stat-ico">
                                <span>Medium</span>
                            </div>
                        </div>

                        <div class="featured-card-bottom">
                            <div class="featured-card-bottom-text">
                                <h3 class="featured-card-name">Lagoon</h3>
                                <p class="featured-card-sub">The mythical western landscape</p>
                                <button class="featured-card-cta" type="button" aria-label="Open Lagoon">
                                    <img src="{{ asset('assets/btn/btn-1.png') }}" alt="" class="featured-cta-img">
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <!-- Featured bottom thin scrollbar + arrows -->
            <div class="featured-bottom-nav mt-4 mt-lg-5">
                <div class="featured-scrollbar" aria-hidden="true">
                    <div class="featured-scrollbar-track">
                        <div class="featured-scrollbar-thumb"></div>
                    </div>
                </div>

                <div class="featured-arrows">
                    <button class="featured-arrow" type="button" aria-label="Previous">
                        <img src="{{ asset('assets/icons/arrow-left.png') }}" alt="" class="arrow-img arrow-img-default">
                        <img src="{{ asset('assets/icons/arrow-left-hover.png') }}" alt="" class="arrow-img arrow-img-hover">
                    </button>
                    <button class="featured-arrow" type="button" aria-label="Next">
                        <img src="{{ asset('assets/icons/arrow-right.png') }}" alt="" class="arrow-img arrow-img-default">
                        <img src="{{ asset('assets/icons/arrow-right-hover.png') }}" alt="" class="arrow-img arrow-img-hover">
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Leave / Connect Section -->
    <section
        class="leave-section py-5"
        style="--leave-texture: url('{{ asset('assets/bg/ef2e03bcd0fa1c7a1bbc9c169de7c0d08520d1d9.png') }}');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;">
        <div class="container leave-wrap py-4 py-lg-5">
            <div class="row g-4 align-items-start leave-top">
                <div class="col-12 col-lg-5">
                    <div class="leave-image leave-image-lg">
                        <img src="{{ asset('assets/img/content-1.png') }}" alt="Experience" class="leave-img">
                    </div>
                </div>

                <div class="col-12 col-lg-7">
                    <div class="leave-copy">
                        <img src="{{ asset('assets/text/leave.png') }}" alt="Leave your backpack behind" class="leave-title-img">
                        <p class="leave-lead">
                            We offer transformative hiking experiences in the heart of nature. Our holistic hikes are curated to support the wellbeing of mind, heart and body.
                        </p>
                        <p class="leave-sub">
                            Give us three hours and we’ll give you back your life.
                        </p>
                        <a href="#locations" class="leave-btn">EXPLORE HIKING LOCATIONS</a>
                    </div>

                    <div class="leave-image leave-image-sm">
                        <img src="{{ asset('assets/img/content-2.png') }}" alt="Destination" class="leave-img">
                    </div>
                </div>
            </div>

            <div class="row g-4 align-items-center mt-4 mt-lg-5 leave-bottom">
                <div class="col-12 col-lg-4">
                    <div class="leave-circle">
                        <img src="{{ asset('assets/img/content-3.png') }}" alt="Nature detail" class="leave-circle-img">
                    </div>
                </div>
                <div class="col-12 col-lg-8">
                    <img src="{{ asset('assets/text/connect.png') }}" alt="Connect with the power of nature" class="leave-connect-img">
                    <p class="leave-bottom-copy">
                        Volutpat placerat. Lorem sollicitudin. Praesent amet, placerat Donec nisl. non id ipsum Sed dignissim, elit felis, nibh.
                    </p>
                </div>
            </div>
        </div>
    </section>


</body>

</html>