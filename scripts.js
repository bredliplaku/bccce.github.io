/* ============================================================
   SHARED.JS — 5th BCCCE 2026 Conference Website
   Injects shared HTML (top-bar, navbar, sponsors carousel,
   partners section, footer) and runs shared JS logic
   (mobile menu, scroll navbar, carousels, active nav, dates).
   ============================================================ */

(function () {
    'use strict';

    // ── Resolve base path from <meta name="base-path"> ──────
    const baseMeta = document.querySelector('meta[name="base-path"]');
    const BASE = baseMeta ? baseMeta.content : '.';

    // ── Determine current page path for active nav highlighting
    const currentPath = window.location.pathname;

    function isActive(href) {
        if (!href) return false;
        // Normalize both paths
        const a = document.createElement('a');
        a.href = href;
        return a.pathname === currentPath;
    }

    function activeClass(href) {
        return isActive(href) ? ' class="active-page"' : '';
    }

    // ── Detect which page we are on for nav highlighting ─────
    const isHome = currentPath.endsWith('/') && !currentPath.includes('/register/') && !currentPath.includes('/sponsorship_agreement/') || currentPath.endsWith('/5th_bccce_2026/');
    const isRegister = currentPath.includes('/register/');
    const isSponsorship = currentPath.includes('/sponsorship_agreement/');

    // ── INJECT TOP BAR ──────────────────────────────────────
    const headerEl = document.getElementById('site-header');
    if (headerEl) {
        const showSponsors = headerEl.dataset.sponsors !== 'false';

        let headerHTML = `
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <div>EPOKA University - Tirana, Albania</div>
            <div class="top-links">
                <a href="http://epoka.edu.al"><i class="fa-solid fa-house"></i> Home</a><span style="opacity:0.3">|</span>
                <a href="http://ce.epoka.edu.al" target="_blank"><i class="fa-solid fa-building"></i> Our Department</a><span style="opacity:0.3">|</span>
                <a href="mailto:bccce@epoka.edu.al" target="_blank"><i class="fa-solid fa-envelope"></i> Contact</a>
            </div>
        </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar">
        <div class="container" style="display: flex; flex-wrap: wrap;">
            <a href="${BASE}/" class="logo">
                <div class="logo-text">
                    BCCCE 2026
                    <span>5th International Conference</span>
                </div>
            </a>

            <div class="menu-toggle" id="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </div>

            <ul class="nav-menu" id="nav-menu">
                <li class="nav-item">
                    <a href="${BASE}/index.html#about">About <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                    <div class="dropdown-content">
                        <a href="${BASE}/index.html#message">Organizer's Message</a>
                        <a href="${BASE}/index.html#hosts">Hosts &amp; Committees</a>
                        <a href="${BASE}/index.html#venue">Conference Venue</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="${BASE}/index.html#authors">Authors <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                    <div class="dropdown-content">
                        <a href="${BASE}/index.html#call">Call for Papers</a>
                        <a href="${BASE}/index.html#guidelines">Guidelines for Full Papers</a>
                        <a href="${BASE}/index.html#oral">Oral Presentation</a>
                        <a href="${BASE}/index.html#submission">Paper Submission</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="${BASE}/index.html#programme">Programme <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                    <div class="dropdown-content">
                        <a href="${BASE}/index.html#topics">Conference Topics</a>
                        <a href="${BASE}/index.html#keynote">Keynote Speakers</a>
                        <a href="${BASE}/index.html#tech-prog">Technical Programme</a>
                    </div>
                </li>
                <li class="nav-item"><a href="${BASE}/sponsorship_agreement/"${isHome ? '' : ''}>Sponsors</a></li>
                <li class="nav-item"><a href="${BASE}/register/"${isRegister ? ' class="active-page"' : ''}>Registration</a></li>
            </ul>
        </div>
    </nav>`;

        // Optionally inject sponsors carousel
        if (showSponsors) {
            headerHTML += `
    <!-- Sponsors Carousel -->
    <section class="sponsors-carousel">
        <div class="container" style="text-align: center; padding-bottom: 20px;"></div>
        <div class="carousel-track">
            <a href="https://ce.epoka.edu.al/" target="_blank" title="Department of Civil Engineering" class="sponsor-logo">
                <img src="${BASE}/miscellaneous/CE_Logo.png" alt="Department of Civil Engineering">
                <span>Department of Civil Engineering</span>
            </a>
        </div>
        <div class="container" style="text-align: center; margin-top: 0px;">
            <a href="${BASE}/sponsorship_agreement/" class="cta-subtle">Become a sponsor</a>
        </div>
    </section>`;
        }

        headerEl.outerHTML = headerHTML;
    }

    // ── INJECT FOOTER (with optional partners) ──────────────
    const footerEl = document.getElementById('site-footer');
    if (footerEl) {
        const showPartners = footerEl.dataset.partners !== 'false';

        let footerHTML = '';

        // Optionally inject partners section
        if (showPartners) {
            footerHTML += `
    <!-- Partner Institutions -->
    <section class="partners-section">
        <div class="container">
            <h2 class="section-title">Partner Institutions</h2>
            <div class="partners-track">
                <a href="https://www.iziis.ukim.edu.mk/en/" class="partner" title="IZIIS">
                    <img src="${BASE}/miscellaneous/iziis.png" alt="IZIIS">
                    <span>Institute of Earthquake Engineering &amp; Engineering Seismology</span>
                </a>
            </div>
            <div style="text-align: center;">
                <a href="#become-partner" class="cta-subtle">Become a partner</a>
            </div>
        </div>
    </section>`;
        }

        footerHTML += `
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <div class="footer-logo">
                        <img src="${BASE}/miscellaneous/EPOKA_Logo_horizontal_alt.png" alt="EPOKA University" height="40" style="margin-bottom: 10px;">
                    </div>
                    <p style="font-size: 0.9rem;">
                        Leading the regional academic standards in Civil Engineering through innovation, rigorous research, and cross-border collaboration.
                    </p>
                    <div class="footer-links">
                        <a href="https://epoka.edu.al/vacancies">Join our Team</a>
                        <a href="https://epoka.edu.al/content/ODY5/About-Us/Privacy-Policy">Privacy Policy</a>
                        <a href="mailto:info@epoka.edu.al">info@epoka.edu.al</a>
                    </div>
                </div>
                <div class="social-links">
                    <a href="http://www.facebook.com/UniEpoka" target="_blank" class="social-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://instagram.com/epokauniversity" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>
                    <a href="http://www.linkedin.com/company/epoka-university" target="_blank" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                    <a href="http://www.youtube.com/UniEpoka" target="_blank" class="social-link"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2013–<span id="currentYear"></span> EPOKA University. All rights reserved.</p>
            </div>
        </div>
    </footer>`;

        footerEl.outerHTML = footerHTML;
    }

    // ── SHARED JS LOGIC ─────────────────────────────────────

    // Current year
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Scroll-shrink navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        });
    }

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('nav-open');
            const icon = menuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Mobile sub-menu toggles
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && item.querySelector('.dropdown-content')) {
                navItems.forEach(sibling => {
                    if (sibling !== item && sibling.classList.contains('active')) {
                        sibling.classList.remove('active');
                        const siblingIcon = sibling.querySelector('.fa-chevron-down');
                        if (siblingIcon) {
                            siblingIcon.style.transform = 'rotate(0deg)';
                        }
                    }
                });

                item.classList.toggle('active');
                const icon = item.querySelector('.fa-chevron-down');
                if (icon) {
                    icon.style.transition = 'transform 0.3s';
                    icon.style.transform = item.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
                }

                if (e.target.tagName !== 'A' || e.target.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                }
            }
        });
    });

    // Responsive carousel initialiser
    function initResponsiveCarousel(trackSelector, gapPx, durationSec) {
        const track = document.querySelector(trackSelector);
        if (!track) return;

        const container = track.parentElement;

        // Clear existing clones and animations
        track.querySelectorAll('.clone').forEach(el => el.remove());
        track.style.animation = 'none';

        if (track.scrollWidth > container.clientWidth) {
            const originalChildren = Array.from(track.children);
            originalChildren.forEach(child => {
                let clone = child.cloneNode(true);
                clone.classList.add('clone');
                track.appendChild(clone);
            });

            const animationName = 'scroll-' + trackSelector.replace(/[^a-zA-Z0-9]/g, '');
            let style = document.getElementById(animationName + '-style');
            if (!style) {
                style = document.createElement('style');
                style.id = animationName + '-style';
                document.head.appendChild(style);
            }
            const offset = gapPx / 2;
            style.textContent = `
                @keyframes ${animationName} {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - ${offset}px)); }
                }
            `;

            track.style.animation = `${animationName} ${durationSec}s linear infinite`;
        } else {
            track.style.justifyContent = 'center';
        }
    }

    function setupAllCarousels() {
        initResponsiveCarousel('.carousel-track', 80, 25);
        initResponsiveCarousel('.partners-track', 40, 20);
    }

    setupAllCarousels();

    // Recalculate carousels if window width changes
    let lastWidth = window.innerWidth;
    window.addEventListener('resize', () => {
        if (window.innerWidth !== lastWidth) {
            lastWidth = window.innerWidth;
            setupAllCarousels();
        }
    });

    // Dynamic timeline dates (for pages that have a timeline)
    const dateElements = document.querySelectorAll('.timeline-item');
    if (dateElements.length > 0) {
        const now = new Date();
        const sevenDaysFromNow = new Date();
        sevenDaysFromNow.setDate(now.getDate() + 7);

        dateElements.forEach(item => {
            const label = item.querySelector('.date-label');
            const title = item.querySelector('.date-title');
            if (!label || !title) return;

            const dateStr = label.textContent.trim();
            let targetDateStr = dateStr;
            const rangeMatch = targetDateStr.match(/^(\d+)[\-–](\d+)\s+(.+)$/);
            if (rangeMatch) {
                targetDateStr = `${rangeMatch[1]} ${rangeMatch[3]}`;
            }

            const targetDate = new Date(targetDateStr);
            if (!isNaN(targetDate)) {
                targetDate.setHours(23, 59, 59, 999);

                if (targetDate < now) {
                    item.classList.add('item-past');
                } else if (targetDate <= sevenDaysFromNow) {
                    item.classList.add('item-upcoming');
                }
            }
        });
    }

})();
