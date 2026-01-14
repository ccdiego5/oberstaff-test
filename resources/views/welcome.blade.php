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
                    
                    <!-- Theme Toggle -->
                    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
                        <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                        <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </button>
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
        <!-- Placeholder Image (se muestra hasta que el video cargue) -->
        <div class="video-placeholder" id="video-placeholder">
            <img src="{{ asset('assets/bg/hero-1.png') }}" alt="Beautiful bay" class="placeholder-image">
            <div class="loading-animation">
                <div class="loading-spinner"></div>
                <p class="loading-text">Loading Experience...</p>
            </div>
        </div>

        <!-- Background Video -->
        <video
            id="hero-video"
            class="hero-bg hero-video"
            autoplay
            muted
            loop
            playsinline
            preload="auto">
            <source src="{{ asset('assets/video/1110140_Seashore_Deep_1920x1080.mp4') }}" type="video/mp4">
        </video>

        <!-- Overlay -->
        <div class="hero-overlay"></div>

        <!-- Three.js Canvas para partículas -->
        <canvas id="particles-canvas"></canvas>

        <!-- Hero Content -->
        <div class="hero-content">
            <h1 class="hero-title">
                Reconnect with your
                <span class="highlight">highest</span> self
            </h1>

            <p class="hero-subtitle">
                Begin your journey to inner connection and discover the transformative power of nature.
            </p>

            <a href="#locations" class="hero-btn">
                EXPLORE HIKING LOCATIONS
            </a>
        </div>

        <!-- Hero Footer Info -->
        <div class="hero-footer">
            <div class="hero-footer-content">
                <div class="hero-footer-item">
                    <img src="{{ asset('assets/icons/icon-1.png') }}" alt="Time" class="hero-icon">
                    <span>4:08 PM · EUROPE</span>
                </div>

                <div class="hero-footer-item sound-control" id="sound-toggle">
                    <svg class="sound-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="sound-wave sound-wave-1" d="M16 8C17.5 9.5 17.5 14.5 16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        <path class="sound-wave sound-wave-2" d="M19 5C21.5 7.5 21.5 16.5 19 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        <path d="M11 5L6 9H3v6h3l5 4V5z" fill="currentColor" />
                    </svg>
                    <span class="sound-text">SOUND: <span id="sound-status">OFF</span></span>
                </div>
            </div>
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

    <!-- Content Section (ejemplo de más contenido) -->
    <section class="py-5" style="background: #ffffff; color: #1a1a1a;">
        <div class="container py-5">
            <div class="row align-items-center mb-5">
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <h2 class="display-4 fw-bold mb-4">Discover Your Path</h2>
                    <p class="lead mb-4">
                        Experience the transformative power of nature through our carefully curated hiking experiences across the Mediterranean's most breathtaking locations.
                    </p>
                    <p class="mb-4">
                        From the rugged cliffs of Ibiza to the serene mountains of Sardinia, each trail is designed to reconnect you with your inner self while immersing you in stunning natural beauty.
                    </p>
                    <a href="#" class="btn btn-dark btn-lg rounded-pill px-5">Learn More</a>
                </div>
                <div class="col-lg-6">
                    <img src="{{ asset('assets/img/content-1.png') }}" alt="Hiking path" class="img-fluid rounded-4 shadow-lg">
                </div>
            </div>

            <div class="row align-items-center mb-5">
                <div class="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                    <h2 class="display-4 fw-bold mb-4">Guided Experiences</h2>
                    <p class="lead mb-4">
                        Our expert guides are passionate about sharing their knowledge of local flora, fauna, and the rich cultural heritage of each region.
                    </p>
                    <p class="mb-4">
                        Whether you're a seasoned hiker or just beginning your journey, we offer experiences tailored to all levels, ensuring everyone can connect with nature at their own pace.
                    </p>
                    <a href="#" class="btn btn-dark btn-lg rounded-pill px-5">View Guides</a>
                </div>
                <div class="col-lg-6 order-lg-1">
                    <img src="{{ asset('assets/img/content-2.png') }}" alt="Guide leading group" class="img-fluid rounded-4 shadow-lg">
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <h2 class="display-4 fw-bold mb-4">Sustainable Tourism</h2>
                    <p class="lead mb-4">
                        We're committed to preserving the natural beauty of our hiking destinations for future generations.
                    </p>
                    <p class="mb-4">
                        Our eco-friendly approach ensures that every step you take leaves a positive impact on the environment and local communities.
                    </p>
                    <a href="#" class="btn btn-dark btn-lg rounded-pill px-5">Our Mission</a>
                </div>
                <div class="col-lg-6">
                    <img src="{{ asset('assets/img/content-3.png') }}" alt="Sustainable hiking" class="img-fluid rounded-4 shadow-lg">
                </div>
            </div>
        </div>
    </section>

    <!-- Locations Section -->
    <section id="locations" class="py-5" style="background: #f8f9fa;">
        <div class="container py-5">
            <div class="text-center mb-5">
                <h2 class="display-3 fw-bold mb-3">Our Locations</h2>
                <p class="lead text-muted">Explore breathtaking trails across the Mediterranean</p>
            </div>

            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card border-0 shadow-lg h-100">
                        <div class="card-body p-4">
                            <img src="{{ asset('assets/icons/icon-3.png') }}" alt="Ibiza" class="mb-3" style="width: 50px;">
                            <h3 class="h4 fw-bold mb-3">Ibiza</h3>
                            <p class="text-muted mb-4">
                                Discover hidden coves and ancient trails along the stunning Ibizan coastline.
                            </p>
                            <a href="#" class="btn btn-outline-dark rounded-pill">Explore Ibiza</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card border-0 shadow-lg h-100">
                        <div class="card-body p-4">
                            <img src="{{ asset('assets/icons/icon-4.png') }}" alt="Mallorca" class="mb-3" style="width: 50px;">
                            <h3 class="h4 fw-bold mb-3">Mallorca</h3>
                            <p class="text-muted mb-4">
                                Trek through the dramatic Serra de Tramuntana mountain range.
                            </p>
                            <a href="#" class="btn btn-outline-dark rounded-pill">Explore Mallorca</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card border-0 shadow-lg h-100">
                        <div class="card-body p-4">
                            <img src="{{ asset('assets/icons/icon-5.png') }}" alt="Sardinia" class="mb-3" style="width: 50px;">
                            <h3 class="h4 fw-bold mb-3">Sardinia</h3>
                            <p class="text-muted mb-4">
                                Experience the wild beauty of Sardinia's pristine wilderness.
                            </p>
                            <a href="#" class="btn btn-outline-dark rounded-pill">Explore Sardinia</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-5" style="background: #1a1a1a; color: #ffffff;">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <h3 class="h5 fw-bold mb-3">THE HIKE STATION</h3>
                    <p class="text-muted">
                        Reconnecting people with nature through unforgettable hiking experiences.
                    </p>
                </div>

                <div class="col-lg-2 col-md-4 mb-4 mb-lg-0">
                    <h4 class="h6 fw-bold mb-3">Locations</h4>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Ibiza</a></li>
                        <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Mallorca</a></li>
                        <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Sardinia</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-4 mb-4 mb-lg-0">
                    <h4 class="h6 fw-bold mb-3">Company</h4>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-muted text-decoration-none">About Us</a></li>
                        <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Our Guides</a></li>
                        <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Contact</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-4 mb-4 mb-lg-0">
                    <h4 class="h6 fw-bold mb-3">Support</h4>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="#" class="text-muted text-decoration-none">FAQ</a></li>
                        <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Privacy Policy</a></li>
                        <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Terms</a></li>
                    </ul>
                </div>

                <div class="col-lg-2">
                    <h4 class="h6 fw-bold mb-3">Follow Us</h4>
                    <div class="d-flex gap-3">
                        <a href="#" class="text-muted"><img src="{{ asset('assets/icons/icon-6.png') }}" alt="Social" style="width: 24px;"></a>
                        <a href="#" class="text-muted"><img src="{{ asset('assets/icons/icon-7.png') }}" alt="Social" style="width: 24px;"></a>
                    </div>
                </div>
            </div>

            <hr class="my-4" style="border-color: rgba(255,255,255,0.1);">

            <div class="text-center text-muted">
                <small>&copy; {{ date('Y') }} The Hike Station. All rights reserved.</small>
            </div>
        </div>
    </footer>
</body>

</html>