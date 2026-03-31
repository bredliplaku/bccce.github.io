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

    function normalizePath(path) {
        if (!path) return '';
        // Add trailing slash if missing and not a file
        let normalized = path;
        if (!normalized.endsWith('/') && !normalized.split('/').pop().includes('.')) {
            normalized += '/';
        }
        return normalized;
    }

    // ── Dynamic Favicon Injection ───────────────────────────
    // This ensures that all pages use the localized favicon.ico relative to the root
    let favicon = document.querySelector('link[rel="shortcut icon"], link[rel="icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'shortcut icon';
        document.head.appendChild(favicon);
    }
    favicon.href = `${BASE}/favicon.png`;

    function isActive(href) {
        if (!href) return false;

        // Resolve absolute path for comparison
        const a = document.createElement('a');
        a.href = href;
        const targetPath = normalizePath(a.pathname);
        const navCurrent = normalizePath(currentPath);

        // Exact match
        if (navCurrent === targetPath) return true;

        // Match home variations
        if ((navCurrent === '/' || navCurrent.endsWith('/index.html')) && (targetPath === '/' || targetPath.endsWith('/index.html'))) {
            return true;
        }

        return false;
    }

    function isParentActive(childrenPaths) {
        return childrenPaths.some(path => {
            const a = document.createElement('a');
            a.href = path;
            const targetPath = normalizePath(a.pathname);
            const navCurrent = normalizePath(currentPath);
            return navCurrent.startsWith(targetPath) && targetPath !== '/';
        });
    }

    // ── INJECT TOP BAR ──────────────────────────────────────
    const headerEl = document.getElementById('site-header');
    if (headerEl) {
        // Paths for active checks
        const aboutPaths = [
            `${BASE}/welcome/`, `${BASE}/topics/`, `${BASE}/partners/`,
            `${BASE}/speakers/`, `${BASE}/committee/`, `${BASE}/venue/`
        ];
        const authorsPaths = [`${BASE}/call/`, `${BASE}/register/`];
        const sponsorsPath = `${BASE}/sponsors/`;
        const downloadsPath = `${BASE}/downloads/`;

        let headerHTML = `
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <a href="http://epoka.edu.al" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; height: 18px;">
                <img src="${BASE}/miscellaneous/EPOKA_Logo_horizontal_alt.png" alt="EPOKA University" style="height: 20px; filter: brightness(0) invert(1); opacity: 0.75;">
            </a>
            <div class="top-links">
                <a href="http://epoka.edu.al" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-house"></i> Home</a><span style="opacity:0.3">|</span>
                <a href="http://ce.epoka.edu.al" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-building"></i> Our Department</a><span style="opacity:0.3">|</span>
                <a href="mailto:bccce@epoka.edu.al" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope"></i> Contact</a>
            </div>
        </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar">
        <div class="container" style="display: flex; flex-wrap: wrap;">
            <a href="${BASE}/" class="logo">
                <img src="${BASE}/miscellaneous/logo.png" alt="BCCCE 2026" style="height: 40px; width: auto;">
                <div class="logo-text">
                    <span>5th International Conference</span>
                </div>
            </a>

            <div class="menu-toggle" id="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </div>

            <ul class="nav-menu" id="nav-menu">
                <li class="nav-item">
                    <a href="#"${isParentActive(aboutPaths) ? ' class="active-page"' : ''}>About <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                    <div class="dropdown-content">
                        <a href="${BASE}/welcome/"${isActive(`${BASE}/welcome/`) ? ' class="active-page"' : ''}><i class="fa-regular fa-message"></i> Organiser's Message</a>
                        <a href="${BASE}/topics/"${isActive(`${BASE}/topics/`) ? ' class="active-page"' : ''}><i class="fa-regular fa-lightbulb"></i> Topics</a>
                        <a href="${BASE}/partners/"${isActive(`${BASE}/partners/`) ? ' class="active-page"' : ''}><i class="fa-regular fa-building"></i> Hosts</a>
                        <a href="${BASE}/speakers/"${isActive(`${BASE}/speakers/`) ? ' class="active-page"' : ''}><i class="fa-regular fa-comment-dots"></i> Keynote Speakers</a>
                        <a href="${BASE}/committee/"${isActive(`${BASE}/committee/`) ? ' class="active-page"' : ''}><i class="fa-regular fa-address-book"></i> Committee</a>
                        <a href="${BASE}/venue/"${isActive(`${BASE}/venue/`) ? ' class="active-page"' : ''}><i class="fa-regular fa-map"></i> Conference Venue</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#"${isParentActive(authorsPaths) ? ' class="active-page"' : ''}>Authors <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                    <div class="dropdown-content">
                        <a href="${BASE}/call/"${isActive(`${BASE}/call/`) ? ' class="active-page"' : ''}><i class="fa-regular fa-file-lines"></i> Call for Papers</a>
                        <a href="${BASE}/register/"${isActive(`${BASE}/register/`) ? ' class="active-page"' : ''}><i class="fa-regular fa-id-card"></i> Register</a>
                    </div>
                </li>
                <li class="nav-item"><a href="${sponsorsPath}"${isActive(sponsorsPath) ? ' class="active-page"' : ''}>Sponsors</a></li>
                <li class="nav-item mobile-only"><a href="mailto:bccce@epoka.edu.al"> Contact</a></li>
            </ul>
        </div>
    </nav>`;

        headerEl.outerHTML = headerHTML;
    }

    // ── INJECT SPONSORS CAROUSEL ────────────────────────────
    const sponsorsEl = document.getElementById('site-sponsors');
    if (sponsorsEl) {
        const showSponsors = sponsorsEl.dataset.sponsors !== 'false';

        if (showSponsors) {
            let sponsorsHTML = `
    <!-- Sponsors Carousel -->
    <section class="sponsors-carousel">
        <div class="carousel-track">
            <a href="https://ce.epoka.edu.al/" target="_blank" title="Department of Civil Engineering" class="sponsor-logo">
                <img src="${BASE}/miscellaneous/CE_Logo.png" alt="Department of Civil Engineering">
                <span>Department of Civil Engineering</span>
            </a>
        </div>
    </section>`;
            sponsorsEl.outerHTML = sponsorsHTML;
        }
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
                <a href="#become-partner" class="cta-subtle">Become a Partner</a>
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
                        <a href="https://conf.epoka.edu.al/" target="_blank" rel="noopener noreferrer"">Other Conferences</a>
                        <a href="https://epoka.edu.al/content/ODY5/About-Us/Privacy-Policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                        <a href="mailto:info@epoka.edu.al" target="_blank" rel="noopener noreferrer">info@epoka.edu.al</a>
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
            // Prevent '#' links from adding to URL or jumping page (Desktop & Mobile)
            const link = e.target.closest('a');
            if (link && link.getAttribute('href') === '#') {
                e.preventDefault();
            }

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

    // ── CALENDAR SYNC (.ics Generator) ───────────────────
    function downloadICS() {
        const events = [];
        const dateItems = document.querySelectorAll('.timeline-item');

        dateItems.forEach(item => {
            const label = item.querySelector('.date-label');
            const title = item.querySelector('.date-title');
            if (label && title) {
                let dateStr = label.textContent.trim();
                let summary = title.textContent.trim();

                // Handle ranges like "29–30 October 2026"
                const rangeMatch = dateStr.match(/^(\d+)[\-–](\d+)\s+(.+)$/);
                let startDateStr = dateStr;
                let endDateStr = dateStr;

                if (rangeMatch) {
                    startDateStr = `${rangeMatch[1]} ${rangeMatch[3]}`;
                    endDateStr = `${rangeMatch[2]} ${rangeMatch[3]}`;
                }

                const start = new Date(startDateStr);
                let end = new Date(endDateStr);

                if (!isNaN(start)) {
                    // Set default times (9 AM to 5 PM)
                    start.setHours(9, 0, 0);
                    if (isNaN(end)) end = new Date(start);
                    end.setHours(17, 0, 0);

                    events.push({
                        start,
                        end,
                        summary: "BCCCE 2026: " + summary,
                        description: "Important date for 5th International Balkans Conference on Challenges of Civil Engineering (BCCCE 2026). Visit https://bccce.epoka.edu.al for details."
                    });
                }
            }
        });

        if (events.length === 0) return;

        let icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//EPOKA University//BCCCE//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH'
        ];

        const formatDate = (date) => {
            return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        };

        events.forEach(event => {
            icsContent.push('BEGIN:VEVENT');
            icsContent.push(`DTSTAMP:${formatDate(new Date())}`);
            icsContent.push(`DTSTART:${formatDate(event.start)}`);
            icsContent.push(`DTEND:${formatDate(event.end)}`);
            icsContent.push(`SUMMARY:${event.summary}`);
            icsContent.push(`DESCRIPTION:${event.description}`);
            icsContent.push(`LOCATION:EPOKA University, Tirana, Albania`);
            icsContent.push('END:VEVENT');
        });

        icsContent.push('END:VCALENDAR');

        const icsString = icsContent.join('\r\n');
        const blob = new Blob([icsString], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'BCCCE_2026_Dates.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const syncBtn = document.getElementById('sync-calendar');
    if (syncBtn) {
        syncBtn.addEventListener('click', downloadICS);
    }

})();
