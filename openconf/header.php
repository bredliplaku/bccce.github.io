<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#003B73">
    <title>5th BCCCE 2026 - Online Submissions</title>
    <meta name="description"
        content="5th International Balkans Conference on Challenges of Civil Engineering (BCCCE 2026) - Paper Submission System.">
    <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.2.0/css/all.min.css">
    <link rel="shortcut icon" href="https://epoka.edu.al/assets/images/favicon.ico" />

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

        /* ── Reset ── */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,
        body {
            width: 100%;
            max-width: 100vw;
            overflow-x: clip;
            background-color: var(--bg-main);
        }

        body {
            font-family: 'Google Sans Flex', 'Plus Jakarta Sans', sans-serif;
            color: var(--text-main);
            background-color: var(--bg-main);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            overflow-x: clip;
            overflow-wrap: break-word;
        }

        /* ── Typography ── */
        h1, h2, h3, h4 {
            color: var(--primary-dark);
            font-weight: 700;
            line-height: 1.2;
        }

        a {
            text-decoration: none;
            color: var(--primary);
            transition: var(--transition);
        }

        a:hover {
            color: var(--primary-dark);
        }

        p {
            margin-bottom: 1rem;
        }

        /* ── Layout ── */
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* ── Top Bar ── */
        .top-bar {
            background: var(--primary-dark);
            color: rgba(255, 255, 255, 0.85);
            font-size: 0.85rem;
            padding: 8px 0;
            font-weight: 500;
        }

        .top-bar .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .top-links {
            display: flex;
            gap: 10px;
        }

        .top-links a {
            color: rgba(255, 255, 255, 0.85);
            transition: color 0.2s;
        }

        .top-links a:hover {
            color: #fff;
        }

        /* ── Navbar ── */
        .navbar {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: var(--shadow-sm);
            padding: 16px 0;
        }

        .navbar .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo-text {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--primary-dark);
            line-height: 1.1;
        }

        .logo-text span {
            display: block;
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .nav-menu {
            display: flex;
            gap: 32px;
            align-items: center;
            list-style: none;
        }

        .nav-item {
            position: relative;
        }

        .nav-item>a {
            font-weight: 600;
            color: var(--text-muted);
            font-size: 0.95rem;
            padding: 8px 0;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .nav-item>a:hover {
            color: var(--primary);
        }

        /* ── Dropdown ── */
        .dropdown-content {
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
        }

        .nav-item:hover .dropdown-content {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(5px);
        }

        .dropdown-content a {
            display: block;
            padding: 10px 24px;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-main);
            transition: var(--transition);
        }

        .dropdown-content a:hover {
            background: var(--primary-light);
            color: var(--primary);
            padding-left: 28px;
        }

        /* ── Sponsors Carousel ── */
        .sponsors-carousel {
            background: var(--bg-white);
            padding: 30px 0;
            overflow: hidden;
            border-bottom: 1px solid var(--border);
            display: block;
            width: 100%;
            position: relative;
            z-index: 2;
        }

        .carousel-track {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 100%;
            gap: 80px;
            padding: 0 40px;
        }

        .sponsor-logo {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            flex-shrink: 0;
            transition: var(--transition);
            opacity: 0.6;
            filter: grayscale(100%);
            text-decoration: none;
            color: var(--text-muted);
        }

        .sponsor-logo span {
            font-size: 0.85rem;
            font-weight: 500;
            text-align: center;
        }

        .sponsor-logo:hover {
            opacity: 1;
            filter: grayscale(0%);
            color: var(--primary);
        }

        .sponsor-logo img {
            height: 45px;
            width: auto;
            max-width: 180px;
            object-fit: contain;
            display: block;
        }

        /* ── CTA Subtle ── */
        .cta-subtle {
            display: inline-block;
            margin-top: 24px;
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

        .cta-subtle:hover {
            border-color: var(--primary);
            color: var(--primary);
            background: var(--primary-light);
            border-radius: 20px;
        }

        /* ── OpenConf Title Bar ── */
        .openconf-title-bar {
            background: var(--primary);
            color: white;
            padding: 10px 0;
            font-size: 0.9rem;
            font-weight: 500;
        }

        /* ── Partners Section ── */
        .partners-section {
            background: var(--bg-white);
            padding: 80px 0;
            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
            text-align: center;
            overflow: hidden;
            display: block;
            width: 100%;
        }

        .section-title {
            font-size: 1.5rem;
            margin-bottom: 40px;
            color: var(--primary-dark);
        }

        .partners-track {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 100%;
            gap: 40px;
            padding: 0 40px;
            margin: 0 auto;
        }

        .partner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;
            min-width: 200px;
            height: 120px;
            padding: 10px;
            opacity: 0.7;
            filter: grayscale(100%);
            transition: var(--transition);
            cursor: pointer;
            text-decoration: none;
            color: var(--text-muted);
        }

        .partner span {
            font-size: 0.85rem;
            font-weight: 500;
            text-align: center;
        }

        .partner:hover {
            opacity: 1;
            filter: grayscale(0%);
            color: var(--primary);
        }

        .partner img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        /* ── Footer ── */
        .footer {
            background: var(--primary-dark);
            color: rgba(255, 255, 255, 0.7);
            padding: 60px 0 30px;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 40px;
            margin-bottom: 40px;
            align-items: center;
        }

        .footer-logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        .footer-links {
            display: flex;
            gap: 24px;
            margin-top: 16px;
        }

        .footer-links a {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
        }

        .footer-links a:hover {
            color: white;
        }

        .social-links {
            display: flex;
            gap: 16px;
        }

        .social-link {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 1.2rem;
            transition: var(--transition);
        }

        .social-link:hover {
            background: var(--primary);
        }

        .footer-bottom {
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            font-size: 0.85rem;
        }

        /* ── Mobile Menu Toggle (hidden on desktop) ── */
        .menu-toggle {
            display: none;
            font-size: 1.5rem;
            color: var(--primary);
            cursor: pointer;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
            .top-bar {
                display: none;
            }

            .menu-toggle {
                display: block;
            }

            .nav-menu {
                display: none;
                flex-direction: column;
                gap: 8px;
                width: 100%;
                padding: 16px 0;
            }

            .nav-menu.active {
                display: flex;
            }

            .navbar .container {
                flex-wrap: wrap;
            }

            .nav-item>a {
                font-size: 1rem;
                padding: 10px 0;
            }

            .dropdown-content {
                position: static;
                box-shadow: none;
                opacity: 1;
                visibility: visible;
                transform: none;
                padding: 0 0 0 16px;
                min-width: auto;
                border: none;
                display: none;
            }

            .nav-item:hover .dropdown-content {
                display: block;
                transform: none;
            }

            .footer-grid {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 32px;
            }

            .footer-logo {
                justify-content: center;
            }

            .footer-links {
                justify-content: center;
                flex-wrap: wrap;
            }

            .social-links {
                justify-content: center;
                margin-top: 16px;
            }

            .partner {
                width: 140px;
                height: 60px;
            }
        }
    </style>
</head>

<body>

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
            <a href="https://bccce.epoka.edu.al/" class="logo">
                <div class="logo-text">
                    BCCCE 2026
                    <span>5th International Conference</span>
                </div>
            </a>

            <div class="menu-toggle" id="mobile-menu-btn" onclick="document.getElementById('nav-menu').classList.toggle('active')">
                <i class="fas fa-bars"></i>
            </div>

            <ul class="nav-menu" id="nav-menu">
                <li class="nav-item">
                    <a href="https://bccce.epoka.edu.al/#about">About <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                    <div class="dropdown-content">
                        <a href="https://bccce.epoka.edu.al/#message">Organizer's Message</a>
                        <a href="https://bccce.epoka.edu.al/#hosts">Hosts &amp; Committees</a>
                        <a href="https://bccce.epoka.edu.al/#venue">Conference Venue</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="https://bccce.epoka.edu.al/#authors">Authors <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                    <div class="dropdown-content">
                        <a href="https://bccce.epoka.edu.al/#call">Call for Papers</a>
                        <a href="https://bccce.epoka.edu.al/#guidelines">Guidelines for Full Papers</a>
                        <a href="https://bccce.epoka.edu.al/#oral">Oral Presentation</a>
                        <a href="https://bccce.epoka.edu.al/#submission">Paper Submission</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="https://bccce.epoka.edu.al/#programme">Programme <i class="fas fa-chevron-down" style="font-size:0.7rem;"></i></a>
                    <div class="dropdown-content">
                        <a href="https://bccce.epoka.edu.al/#topics">Conference Topics</a>
                        <a href="https://bccce.epoka.edu.al/#keynote">Keynote Speakers</a>
                        <a href="https://bccce.epoka.edu.al/#tech-prog">Technical Programme</a>
                    </div>
                </li>
                <li class="nav-item"><a href="https://bccce.epoka.edu.al/#sponsors">Sponsors</a></li>
                <li class="nav-item"><a href="https://bccce.epoka.edu.al/register/">Registration</a></li>
            </ul>
        </div>
    </nav>

    <!-- Sponsors Carousel -->
    <section class="sponsors-carousel">
        <div class="container" style="text-align: center; padding-bottom: 20px;"></div>
        <div class="carousel-track">
            <a href="https://ce.epoka.edu.al/" target="_blank" title="Department of Civil Engineering" class="sponsor-logo">
                <img src="https://bccce.epoka.edu.al/miscellaneous/CE_Logo.png" alt="Department of Civil Engineering">
                <span>Department of Civil Engineering</span>
            </a>
        </div>
        <div class="container" style="text-align: center; margin-top: 0px;">
            <a href="https://bccce.epoka.edu.al/sponsorship_agreement/" class="cta-subtle">Become a sponsor</a>
        </div>
    </section>

    <!-- OpenConf Title Bar -->
    <div class="openconf-title-bar">
        <div class="container">
            5th BCCCE 2026 Peer Review &amp; Conference Management System
        </div>
    </div>
