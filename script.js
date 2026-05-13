:root {
      --dark-green:    #70191D;
      --moss-green:    #5686BB;
      --beige:         #FFF8EE;
      --rosy-brown:    #D1601F;
      --midnight-green:#970A12;
      --lunar-yellow:  #FECD6D;
      --white:         #fff;
      --folder-radius: 12px;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'DM Sans', sans-serif;
      background-color: var(--beige);
      color: var(--dark-green);
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* ─── LANTERN DECO ─── */
    .lantern-bar {
      position: relative;
      width: 100%;
      height: 90px;
      overflow: hidden;
      pointer-events: none;
      z-index: 2;
    }
    .lantern-bar svg {
      width: 100%;
      height: 100%;
    }
    /* floating animation */
    @keyframes sway {
      0%,100% { transform: rotate(-4deg); }
      50%      { transform: rotate(4deg); }
    }
    .lantern-sway { transform-origin: top center; animation: sway 3.5s ease-in-out infinite; }
    .lantern-sway:nth-child(2) { animation-delay: .4s; animation-duration: 4s; }
    .lantern-sway:nth-child(3) { animation-delay: .8s; animation-duration: 3.2s; }
    .lantern-sway:nth-child(4) { animation-delay: 1.2s; animation-duration: 4.3s; }
    .lantern-sway:nth-child(5) { animation-delay: .2s; animation-duration: 3.8s; }
    .lantern-sway:nth-child(6) { animation-delay: .6s; animation-duration: 4.1s; }
    .lantern-sway:nth-child(7) { animation-delay: 1s; animation-duration: 3.6s; }

    /* glow pulse */
    @keyframes glow {
      0%,100% { opacity: .35; }
      50%      { opacity: .6; }
    }
    .lantern-glow { animation: glow 2.5s ease-in-out infinite; }

    /* ─── NAVBAR ─── */
    .navbar {
      position: sticky;
      top: 0;
      z-index: 50;
      background: var(--dark-green);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32px;
      height: 58px;
      box-shadow: 0 2px 12px rgba(108,8,32,.3);
    }
    .navbar-brand {
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem;
      color: var(--beige);
      letter-spacing: .04em;
      font-style: italic;
    }
    .navbar-links {
      display: flex;
      gap: 6px;
      list-style: none;
    }
    .navbar-links li a {
      display: block;
      padding: 6px 16px;
      border-radius: 999px;
      color: var(--beige);
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      letter-spacing: .04em;
      transition: background .2s, color .2s;
      opacity: .75;
    }
    .navbar-links li a:hover,
    .navbar-links li a.active {
      background: rgba(247,244,213,.15);
      opacity: 1;
    }
    .navbar-links li a.active {
      background: var(--moss-green);
      color: var(--beige);
      opacity: 1;
    }

    /* ─── NOISE TEXTURE overlay ─── */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      opacity: .035;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 200px;
    }

    /* ─── HEADER / HERO ─── */
    header {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 24px 48px;
      text-align: center;
    }

    .photo-ring {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      border: 5px solid var(--lunar-yellow);
      box-shadow: 6px 6px 0 var(--rosy-brown);
      overflow: hidden;
      background: var(--dark-green);
      cursor: pointer;
      position: relative;
      transition: transform .3s, box-shadow .3s;
    }
    .photo-ring:hover { transform: translateY(-4px); box-shadow: 8px 10px 0 var(--midnight-green); }

    .photo-ring img {
      width: 100%; height: 100%;
      object-fit: cover;
      display: block;
    }

    .photo-placeholder {
      width: 100%; height: 100%;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      color: var(--beige);
      gap: 6px;
      font-size: 13px;
      font-family: 'DM Sans', sans-serif;
    }
    .photo-placeholder svg { opacity: .75; }

    #photo-input { display: none; }

    .hero-name {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 6vw, 3.2rem);
      color: var(--dark-green);
      margin-top: 24px;
      line-height: 1.1;
    }

    .hero-tag {
      display: inline-block;
      margin-top: 10px;
      background: var(--rosy-brown);
      color: var(--beige);
      font-size: 13px;
      font-weight: 500;
      letter-spacing: .08em;
      padding: 4px 14px;
      border-radius: 999px;
    }

    .hero-bio {
      max-width: 500px;
      margin-top: 18px;
      font-size: 15px;
      line-height: 1.7;
      color: var(--dark-green);
      opacity: .85;
    }

    /* editable inline */
    [contenteditable] { outline: none; cursor: text; }
    [contenteditable]:focus {
      border-bottom: 2px dashed var(--rosy-brown);
    }

    /* ─── SECTION TITLE ─── */
    .section-title {
      text-align: center;
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.4rem, 4vw, 2rem);
      color: var(--dark-green);
      margin: 48px 0 8px;
      position: relative;
      z-index: 1;
    }
    .section-subtitle {
      text-align: center;
      font-size: 13px;
      color: var(--rosy-brown);
      opacity: .85;
      margin-bottom: 40px;
      position: relative; z-index: 1;
    }

    /* ─── FOLDERS GRID ─── */
    .folders-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 56px 32px;
      max-width: 1100px;
      margin: 0 auto;
      padding: 16px 24px 80px;
      position: relative; z-index: 1;
    }

    /* ─── FOLDER CARD ─── */
    .folder {
      position: relative;
      filter: drop-shadow(4px 6px 0px rgba(112,25,29,.22));
      transition: filter .3s, transform .3s;
    }
    .folder:hover {
      filter: drop-shadow(6px 10px 0px rgba(112,25,29,.3));
      transform: translateY(-3px);
    }

    /* ── TABS ROW (3 trimestres stacked like index cards) ── */
    .folder-tabs-row {
      display: flex;
      position: relative;
      height: 38px;
      margin-bottom: 0;
    }

    .tri-tab {
      position: absolute;
      bottom: 0;
      padding: 6px 18px 0;
      border-radius: 10px 10px 0 0;
      font-family: 'Playfair Display', serif;
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: .05em;
      cursor: pointer;
      transition: opacity .2s, transform .15s;
      white-space: nowrap;
      user-select: none;
      height: 30px;
      line-height: 24px;
      opacity: .72;
    }
    .tri-tab:hover { opacity: .9; transform: translateY(-2px); }
    .tri-tab.active { opacity: 1; height: 34px; line-height: 28px; z-index: 5 !important; }

    /* staggered positions like the inspiration photo */
    .tri-tab:nth-child(1) { left: 0px;   z-index: 3; }
    .tri-tab:nth-child(2) { left: 100px; z-index: 2; }
    .tri-tab:nth-child(3) { left: 200px; z-index: 1; }

    .folder-body {
      border-radius: 0 var(--folder-radius) var(--folder-radius) var(--folder-radius);
      padding: 22px 22px 18px;
      min-height: 340px;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      z-index: 4;
    }

    /* Subtle linen texture */
    .folder-body::after {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: .06;
      background-image: repeating-linear-gradient(
        0deg, transparent, transparent 3px,
        rgba(255,255,255,.5) 3px, rgba(255,255,255,.5) 4px
      );
    }

    /* ── Color themes per folder ── */
    /* folder-1: Burgundy */
    .folder-1 .tri-tab          { background: #5a1418; color: var(--lunar-yellow); }
    .folder-1 .tri-tab.active   { background: var(--dark-green); }
    .folder-1 .folder-body      { background: var(--dark-green); }
    .folder-1 .activity-slide   { color: var(--beige); }
    .folder-1 .folder-label     { color: rgba(254,205,109,.6); }
    .folder-1 .tri-badge        { background: rgba(254,205,109,.15); color: var(--lunar-yellow); }

    /* folder-2: Cobalt */
    .folder-2 .tri-tab          { background: #3d6a9e; color: var(--beige); }
    .folder-2 .tri-tab.active   { background: var(--moss-green); }
    .folder-2 .folder-body      { background: var(--moss-green); }
    .folder-2 .activity-slide   { color: var(--beige); }
    .folder-2 .folder-label     { color: rgba(255,248,238,.6); }
    .folder-2 .tri-badge        { background: rgba(255,255,255,.15); color: var(--beige); }

    /* folder-3: Satsuma */
    .folder-3 .tri-tab          { background: #a84a17; color: var(--beige); }
    .folder-3 .tri-tab.active   { background: var(--rosy-brown); }
    .folder-3 .folder-body      { background: var(--rosy-brown); }
    .folder-3 .activity-slide   { color: var(--beige); }
    .folder-3 .folder-label     { color: rgba(255,248,238,.6); }
    .folder-3 .tri-badge        { background: rgba(255,255,255,.15); color: var(--beige); }

    /* folder-4: Chinese Red */
    .folder-4 .tri-tab          { background: #6e080e; color: var(--lunar-yellow); }
    .folder-4 .tri-tab.active   { background: var(--midnight-green); }
    .folder-4 .folder-body      { background: var(--midnight-green); }
    .folder-4 .activity-slide   { color: var(--beige); }
    .folder-4 .folder-label     { color: rgba(254,205,109,.6); }
    .folder-4 .tri-badge        { background: rgba(254,205,109,.15); color: var(--lunar-yellow); }

    /* ─── TRIMESTRE BADGE inside body ─── */
    .tri-badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
      padding: 2px 10px;
      border-radius: 999px;
      margin-bottom: 8px;
      align-self: flex-start;
    }

    /* ─── FOLDER HEADER ─── */
    .folder-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 14px;
    }

    .folder-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.2;
    }

    .folder-label {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: .1em;
      text-transform: uppercase;
      margin-top: 4px;
    }

    .page-counter {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: .04em;
      opacity: .6;
      white-space: nowrap;
      padding-top: 2px;
    }
    .folder-1 .page-counter, .folder-2 .page-counter, .folder-4 .page-counter { color: var(--beige); }
    .folder-3 .page-counter { color: var(--beige); }

    /* ─── SLIDER ─── */
    .slider-wrapper {
      flex: 1;
      overflow: hidden;
      position: relative;
    }

    .slides-track {
      display: flex;
      transition: transform .45s cubic-bezier(.4,0,.2,1);
      height: 100%;
    }

    .activity-slide {
      min-width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .activity-title {
      font-family: 'Playfair Display', serif;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 4px;
    }

    .activity-desc {
      font-size: 13.5px;
      line-height: 1.65;
      opacity: .85;
    }

    /* image area */
    .activity-img-wrap {
      width: 100%;
      height: 120px;
      border-radius: 8px;
      overflow: hidden;
      background: rgba(255,255,255,.15);
      display: flex; align-items: center; justify-content: center;
      margin-top: 4px;
      cursor: pointer;
      border: 2px dashed rgba(255,255,255,.3);
      transition: background .2s;
    }
    .folder-3 .activity-img-wrap { border-color: rgba(255,248,238,.35); background: rgba(255,255,255,.12); }
    .activity-img-wrap:hover { background: rgba(255,255,255,.22); }
    .activity-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .activity-img-wrap .img-placeholder {
      font-size: 12px; opacity: .55; text-align: center; padding: 8px;
      display: flex; flex-direction: column; align-items: center; gap: 4px;
    }
    .activity-img-wrap .img-placeholder svg { opacity: .6; }

    /* ─── NAV BUTTONS ─── */
    .slider-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 18px;
      gap: 8px;
    }

    .nav-btn {
      background: rgba(255,255,255,.18);
      border: none;
      border-radius: 50%;
      width: 36px; height: 36px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background .2s, transform .15s;
      flex-shrink: 0;
    }
    .folder-3 .nav-btn { background: rgba(255,255,255,.18); }
    .nav-btn:hover { background: rgba(255,255,255,.3); transform: scale(1.1); }
    .folder-3 .nav-btn:hover { background: rgba(255,255,255,.3); }
    .nav-btn svg { pointer-events: none; }
    .folder-1 .nav-btn svg, .folder-2 .nav-btn svg,
    .folder-3 .nav-btn svg,
    .folder-4 .nav-btn svg { stroke: var(--beige); }

    .dots {
      display: flex; gap: 6px;
    }
    .dot {
      width: 7px; height: 7px;
      border-radius: 50%;
      background: rgba(255,255,255,.3);
      cursor: pointer;
      transition: background .2s, transform .2s;
    }
    .folder-3 .dot { background: rgba(255,248,238,.3); }
    .dot.active {
      background: rgba(255,255,255,.85);
      transform: scale(1.25);
    }
    .folder-3 .dot.active { background: var(--lunar-yellow); }

    /* ─── ADD ACTIVITY BTN ─── */
    .add-activity-btn {
      background: rgba(255,255,255,.12);
      border: 1.5px dashed rgba(255,255,255,.4);
      color: inherit;
      border-radius: 8px;
      padding: 8px 14px;
      font-size: 12px;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      transition: background .2s;
      display: flex; align-items: center; gap: 6px;
    }
    .folder-3 .add-activity-btn { border-color: rgba(255,248,238,.3); }
    .add-activity-btn:hover { background: rgba(255,255,255,.22); }

    /* ─── FOOTER ─── */
    footer {
      text-align: center;
      padding: 24px;
      font-size: 12px;
      color: var(--dark-green);
      opacity: .4;
      position: relative; z-index: 1;
    }

    /* ─── MODAL ─── */
    .modal-overlay {
      display: none;
      position: fixed; inset: 0;
      background: rgba(112,25,29,.5);
      backdrop-filter: blur(4px);
      z-index: 100;
      align-items: center; justify-content: center;
    }
    .modal-overlay.open { display: flex; }
    .modal {
      background: var(--beige);
      border-radius: 16px;
      padding: 32px 28px 24px;
      max-width: 420px; width: 90%;
      box-shadow: 0 20px 60px rgba(108,8,32,.2);
      position: relative;
    }
    .modal h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      color: var(--dark-green);
      margin-bottom: 20px;
    }
    .modal label {
      display: block;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: .06em;
      text-transform: uppercase;
      color: var(--rosy-brown);
      margin-bottom: 5px;
    }
    .modal input, .modal textarea {
      width: 100%;
      border: 1.5px solid rgba(112,25,29,.2);
      border-radius: 8px;
      padding: 9px 12px;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      color: var(--dark-green);
      background: white;
      margin-bottom: 14px;
      outline: none;
      transition: border-color .2s;
    }
    .modal input:focus, .modal textarea:focus { border-color: var(--rosy-brown); }
    .modal textarea { min-height: 80px; resize: vertical; }
    .modal-btns { display: flex; gap: 10px; justify-content: flex-end; margin-top: 4px; }
    .btn-cancel {
      background: none; border: 1.5px solid rgba(112,25,29,.2);
      border-radius: 8px; padding: 8px 18px;
      font-family: 'DM Sans', sans-serif; font-size: 13px;
      cursor: pointer; color: var(--dark-green);
      transition: background .2s;
    }
    .btn-cancel:hover { background: rgba(112,25,29,.06); }
    .btn-save {
      background: var(--dark-green); color: var(--beige);
      border: none; border-radius: 8px; padding: 8px 22px;
      font-family: 'DM Sans', sans-serif; font-size: 13px;
      cursor: pointer; font-weight: 500;
      transition: opacity .2s;
    }
    .btn-save:hover { opacity: .85; }
    .modal-close {
      position: absolute; top: 14px; right: 14px;
      background: none; border: none; cursor: pointer;
      color: var(--dark-green); opacity: .4; font-size: 20px;
      line-height: 1;
    }

    /* ─── LIFE CAROUSEL ─── */
    .life-section {
      position: relative; z-index: 1;
      max-width: 480px;
      margin: 0 auto 56px;
      padding: 0 24px;
    }

    .life-track-wrap {
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      box-shadow: 5px 7px 0 var(--rosy-brown);
      aspect-ratio: 4/5;
      background: var(--dark-green);
    }

    .life-track {
      display: flex;
      height: 100%;
      transition: transform .5s cubic-bezier(.4,0,.2,1);
    }

    .life-slide {
      min-width: 100%;
      height: 100%;
      flex-shrink: 0;
    }

    .life-slide img {
      width: 100%; height: 100%;
      object-fit: cover;
      display: block;
    }

    /* Nav arrows */
    .life-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(247,244,213,.85);
      border: none;
      border-radius: 50%;
      width: 38px; height: 38px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      z-index: 5;
      transition: background .2s, transform .2s;
      box-shadow: 0 2px 8px rgba(10,51,35,.18);
    }
    .life-btn:hover { background: var(--beige); transform: translateY(-50%) scale(1.08); }
    .life-btn svg { stroke: var(--dark-green); }
    .life-prev { left: -16px; }
    .life-next { right: -16px; }

    /* Dots */
    .life-dots {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-top: 14px;
    }
    .life-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--rosy-brown);
      opacity: .5;
      cursor: pointer;
      transition: opacity .2s, transform .2s;
    }
    .life-dot.active { opacity: 1; transform: scale(1.3); background: var(--lunar-yellow); }

    /* Caption */
    .life-caption {
      text-align: center;
      margin-top: 12px;
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.05rem;
      color: var(--dark-green);
      letter-spacing: .12em;
      opacity: .55;
    }

    @media (max-width: 600px) {
      .folders-grid { grid-template-columns: 1fr; }
      .navbar { padding: 0 16px; }
      .navbar-links li a { padding: 6px 10px; font-size: 12px; }
      .life-btn { width: 32px; height: 32px; }
      .life-prev { left: -12px; }
      .life-next { right: -12px; }
    }

    /* ─── PAGES ─── */
    .page { display: none; }
    .page.active { display: block; }

    /* ─── CONTACT PAGE ─── */
    .contact-page {
      max-width: 640px;
      margin: 0 auto;
      padding: 60px 24px 80px;
      position: relative; z-index: 1;
    }
    .contact-page h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.8rem, 5vw, 2.6rem);
      color: var(--dark-green);
      margin-bottom: 10px;
    }
    .contact-page .contact-subtitle {
      font-size: 14px;
      color: var(--midnight-green);
      opacity: .7;
      margin-bottom: 48px;
    }
    .contact-cards {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .contact-card {
      display: flex;
      align-items: center;
      gap: 20px;
      background: white;
      border-radius: 16px;
      padding: 22px 24px;
      text-decoration: none;
      color: var(--dark-green);
      box-shadow: 3px 4px 0 rgba(112,25,29,.14);
      border: 1.5px solid rgba(112,25,29,.1);
      transition: transform .25s, box-shadow .25s;
    }
    .contact-card:hover {
      transform: translateY(-3px) translateX(2px);
      box-shadow: 5px 8px 0 rgba(112,25,29,.2);
    }
    .contact-icon {
      width: 52px; height: 52px;
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      font-size: 22px;
      flex-shrink: 0;
    }
    .contact-icon.whatsapp { background: #25D366; color: white; }
    .contact-icon.instagram { background: linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); color: white; }
    .contact-icon.email { background: var(--dark-green); color: var(--lunar-yellow); }
    .contact-info strong {
      display: block;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: .06em;
      text-transform: uppercase;
      opacity: .5;
      margin-bottom: 3px;
    }
    .contact-info span {
      font-size: 15px;
      font-weight: 400;
    }
    .contact-arrow {
      margin-left: auto;
      opacity: .3;
      font-size: 18px;
    }

    /* ─── FOOTER ─── */
    .site-footer {
      background: var(--dark-green);
      color: var(--beige);
      text-align: center;
      padding: 20px 24px;
      position: relative; z-index: 1;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    .site-footer a {
      color: var(--lunar-yellow);
      text-decoration: none;
      font-weight: 500;
      transition: opacity .2s;
    }
    .site-footer a:hover { opacity: .75; }
    .site-footer .footer-divider {
      width: 32px; height: 1px;
      background: rgba(247,244,213,.2);
      margin: 2px auto;
    }
    .site-footer .footer-copy {
      opacity: .4;
      font-size: 11px;
    }