<style>
    /* ── Design Tokens ── */
    :root {
        --primary: #00539F;
        --primary-dark: #003B73;
        --primary-light: #EBF3FA;
        --accent: #FFB81C;
        --text-main: #1A1A1A;
        --text-muted: #666666;
        --bg-main: #F8FAFC;
        --bg-white: #FFFFFF;
        --border: #E2E8F0;
        --radius-lg: 16px;
        --radius-md: 12px;
        --radius-sm: 8px;
        --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        --shadow-md: 0 10px 15px -3px rgba(0, 83, 159, 0.08);
        --shadow-lg: 0 20px 25px -5px rgba(0, 83, 159, 0.12);
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* ── Reset & Base ── */
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
        font-family: 'Google Sans Flex', 'Plus Jakarta Sans', Arial, sans-serif;
        color: var(--text-main);
        background-color: var(--bg-main);
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
    }

    a { text-decoration: none; color: var(--primary); transition: var(--transition); }
    a:hover { color: var(--primary-dark); }

    /* ── Layout ── */
    .bccce-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
    }

    /* ── Top Bar ── */
    .bccce-top-bar {
        background: var(--primary-dark);
        color: rgba(255, 255, 255, 0.85);
        font-size: 0.85rem;
        padding: 8px 0;
        font-weight: 500;
    }

    .bccce-top-bar .bccce-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .bccce-top-links {
        display: flex;
        gap: 10px;
    }

    .bccce-top-links a {
        color: rgba(255, 255, 255, 0.85);
        transition: color 0.2s;
    }

    .bccce-top-links a:hover { color: #fff; }

    /* ── Navbar ── */
    .bccce-navbar {
        background: rgba(255, 255, 255, 0.97);
        box-shadow: var(--shadow-sm);
        padding: 16px 0;
        border-bottom: 1px solid var(--border);
    }

    .bccce-navbar .bccce-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .bccce-logo {
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
    }

    .bccce-logo-text {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--primary-dark);
        line-height: 1.1;
    }

    .bccce-logo-text span {
        display: block;
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .bccce-nav-menu {
        display: flex;
        gap: 32px;
        align-items: center;
        list-style: none;
    }

    .bccce-nav-item { position: relative; }

    .bccce-nav-item > a {
        font-weight: 600;
        color: var(--text-muted);
        font-size: 0.95rem;
        padding: 8px 0;
        display: flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
    }

    .bccce-nav-item > a:hover { color: var(--primary); }

    /* ── Dropdown ── */
    .bccce-dropdown {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(15px);
        background: var(--bg-white);
        min-width: 220px;
        box-shadow: var(--shadow-lg);
        border-radius: var(--radius-md);
        padding: 12px 0;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
        border: 1px solid var(--border);
        z-index: 9999;
    }

    .bccce-nav-item:hover .bccce-dropdown {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(5px);
    }

    .bccce-dropdown a {
        display: block;
        padding: 10px 24px;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--text-main);
        transition: var(--transition);
        text-decoration: none;
    }

    .bccce-dropdown a:hover {
        background: var(--primary-light);
        color: var(--primary);
        padding-left: 28px;
    }

    /* ── Sponsors Strip ── */
    .bccce-sponsors {
        background: var(--bg-white);
        padding: 24px 0;
        border-bottom: 1px solid var(--border);
        text-align: center;
    }

    .bccce-sponsors-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 60px;
        padding: 0 40px;
        flex-wrap: wrap;
    }

    .bccce-sponsor-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        opacity: 0.6;
        filter: grayscale(100%);
        text-decoration: none;
        color: var(--text-muted);
        transition: var(--transition);
        font-size: 0.85rem;
        font-weight: 500;
    }

    .bccce-sponsor-logo:hover {
        opacity: 1;
        filter: grayscale(0%);
        color: var(--primary);
    }

    .bccce-sponsor-logo img {
        height: 45px;
        width: auto;
        max-width: 160px;
        object-fit: contain;
        display: block;
    }

    .bccce-cta-subtle {
        display: inline-block;
        margin-top: 16px;
        padding: 4px 12px;
        border: 1px solid var(--border);
        border-radius: 10px;
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--text-muted);
        background: transparent;
        transition: var(--transition);
        text-decoration: none;
    }

    .bccce-cta-subtle:hover {
        border-color: var(--primary);
        color: var(--primary);
        background: var(--primary-light);
        border-radius: 20px;
    }

    /* ── Title Bar ── */
    .bccce-title-bar {
        background: var(--primary);
        color: white;
        padding: 10px 0;
        font-size: 0.9rem;
        font-weight: 500;
        font-family: 'Google Sans Flex', 'Plus Jakarta Sans', Arial, sans-serif;
    }

    /* ── Partners Section ── */
    .bccce-partners {
        background: var(--bg-white);
        padding: 60px 0;
        border-top: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
        text-align: center;
    }

    .bccce-section-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 32px;
        color: var(--primary-dark);
        font-family: 'Google Sans Flex', 'Plus Jakarta Sans', Arial, sans-serif;
    }

    .bccce-partners-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        flex-wrap: wrap;
        padding: 0 40px;
    }

    .bccce-partner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
        min-width: 180px;
        height: 100px;
        padding: 10px;
        opacity: 0.7;
        filter: grayscale(100%);
        transition: var(--transition);
        text-decoration: none;
        color: var(--text-muted);
        font-size: 0.85rem;
        font-weight: 500;
        text-align: center;
    }

    .bccce-partner:hover {
        opacity: 1;
        filter: grayscale(0%);
        color: var(--primary);
    }

    .bccce-partner img {
        max-width: 100%;
        max-height: 70px;
        object-fit: contain;
    }

    /* ── Footer ── */
    .bccce-footer {
        background: var(--primary-dark);
        color: rgba(255, 255, 255, 0.7);
        padding: 48px 0 24px;
        font-family: 'Google Sans Flex', 'Plus Jakarta Sans', Arial, sans-serif;
    }

    .bccce-footer-grid {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 40px;
        margin-bottom: 32px;
        align-items: center;
    }

    .bccce-footer-desc {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 0;
    }

    .bccce-footer-links {
        display: flex;
        gap: 20px;
        margin-top: 14px;
        flex-wrap: wrap;
    }

    .bccce-footer-links a {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        text-decoration: none;
        transition: color 0.2s;
    }

    .bccce-footer-links a:hover { color: white; }

    .bccce-social-links {
        display: flex;
        gap: 12px;
    }

    .bccce-social-link {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.1rem;
        transition: var(--transition);
        text-decoration: none;
    }

    .bccce-social-link:hover { background: var(--primary); color: white; }

    .bccce-footer-bottom {
        padding-top: 24px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.6);
    }

    /* ── Responsive ── */
    @media (max-width: 768px) {
        .bccce-top-bar { display: none; }
        .bccce-nav-menu { display: none; }
        .bccce-footer-grid { grid-template-columns: 1fr; text-align: center; gap: 24px; }
        .bccce-footer-links { justify-content: center; }
        .bccce-social-links { justify-content: center; }
    }
</style>

<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.2.0/css/all.min.css">

<!-- Top Bar -->
<div class="bccce-top-bar">
    <div class="bccce-container">
        <div>EPOKA University - Tirana, Albania</div>
        <div class="bccce-top-links">
            <a href="http://epoka.edu.al"><i class="fa-solid fa-house"></i> Home</a><span style="opacity:0.3"> | </span>
            <a href="http://ce.epoka.edu.al" target="_blank"><i class="fa-solid fa-building"></i> Our Department</a><span style="opacity:0.3"> | </span>
            <a href="mailto:bccce@epoka.edu.al"><i class="fa-solid fa-envelope"></i> Contact</a>
        </div>
    </div>
</div>

<!-- Navbar -->
<nav class="bccce-navbar">
    <div class="bccce-container">
        <a href="https://bccce.epoka.edu.al/" class="bccce-logo">
            <div class="bccce-logo-text">
                BCCCE 2026
                <span>5th International Conference</span>
            </div>
        </a>

        <ul class="bccce-nav-menu">
            <li class="bccce-nav-item">
                <a href="https://bccce.epoka.edu.al/#about">About <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                <div class="bccce-dropdown">
                    <a href="https://bccce.epoka.edu.al/#message">Organizer's Message</a>
                    <a href="https://bccce.epoka.edu.al/#hosts">Hosts &amp; Committees</a>
                    <a href="https://bccce.epoka.edu.al/#venue">Conference Venue</a>
                </div>
            </li>
            <li class="bccce-nav-item">
                <a href="https://bccce.epoka.edu.al/#authors">Authors <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                <div class="bccce-dropdown">
                    <a href="https://bccce.epoka.edu.al/#call">Call for Papers</a>
                    <a href="https://bccce.epoka.edu.al/#guidelines">Guidelines for Full Papers</a>
                    <a href="https://bccce.epoka.edu.al/#oral">Oral Presentation</a>
                    <a href="https://bccce.epoka.edu.al/#submission">Paper Submission</a>
                </div>
            </li>
            <li class="bccce-nav-item">
                <a href="https://bccce.epoka.edu.al/#programme">Programme <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                <div class="bccce-dropdown">
                    <a href="https://bccce.epoka.edu.al/#topics">Conference Topics</a>
                    <a href="https://bccce.epoka.edu.al/#keynote">Keynote Speakers</a>
                    <a href="https://bccce.epoka.edu.al/#tech-prog">Technical Programme</a>
                </div>
            </li>
            <li class="bccce-nav-item"><a href="https://bccce.epoka.edu.al/#sponsors">Sponsors</a></li>
            <li class="bccce-nav-item"><a href="https://bccce.epoka.edu.al/register/">Registration</a></li>
        </ul>
    </div>
</nav>

<!-- Sponsors Strip -->
<section class="bccce-sponsors">
    <div class="bccce-sponsors-inner">
        <a href="https://ce.epoka.edu.al/" target="_blank" class="bccce-sponsor-logo">
            <img src="https://bccce.epoka.edu.al/miscellaneous/CE_Logo.png" alt="Department of Civil Engineering">
            <span>Department of Civil Engineering</span>
        </a>
    </div>
    <a href="https://bccce.epoka.edu.al/sponsorship_agreement/" class="bccce-cta-subtle">Become a sponsor</a>
</section>

<!-- OpenConf Title Bar -->
<div class="bccce-title-bar">
    <div class="bccce-container">
        5th BCCCE 2026 Peer Review &amp; Conference Management System
    </div>
</div>
