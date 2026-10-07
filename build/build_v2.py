import re, shutil, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from simplify import simplify
ROOT = os.path.dirname(HERE)
src = open(os.path.join(ROOT, 'wzmlx-manual.html'), encoding='utf8').read()
body = src[src.index('<section id="start">'):src.index('</main>')]

# sim blocks
sim_u = '''
  <h3>See it in Telegram, step by step</h3>
  <p>This phone replays the bot's real <code>/usettings</code> menus — same text, same buttons, same order. Pick a walkthrough and press <b>Next step</b>, or switch to <b>Explore freely</b> and tap through every menu yourself.</p>
  <div class="tgsim" data-bot="usettings" aria-label="Interactive /usettings walkthrough"></div>
'''
sim_b = '''
  <h3>See it in Telegram, step by step</h3>
  <p>The owner-side <code>/bsettings</code> menus, replayed from the code. Walk through a common admin task, or explore every page, including the 14 Config Variables pages.</p>
  <div class="tgsim" data-bot="bsettings" aria-label="Interactive /bsettings walkthrough"></div>
'''
a = body.index('<section id="usettings">')
m = body.index('<h4>Leech</h4>', a)
body = body[:m] + sim_u + '\n  ' + body[m:]
a = body.index('<section id="bsettings">')
m = body.index('<h4>Queueing &amp; limits</h4>', a)
body = body[:m] + sim_b + '\n  ' + body[m:]

body = body.replace('Use the filter box in the sidebar to jump to one.','Press <kbd>/</kbd> to search them all.')
body = simplify(body)
body = body.replace('<button class="lc-chip on" data-f="all" type="button">All</button>','<button class="lc-chip" data-f="all" type="button">All</button>').replace('<button class="lc-chip" data-f="hot" type="button">★ Common</button>','<button class="lc-chip on" data-f="hot" type="button">★ Common</button>')
# lede paragraphs in chapter openers keep; drop v1 inline-id duplicates
body = body.replace('<div class="empty hidden" id="noflags">', '<div class="empty hidden" id="noflags">')

head = '''<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>WZML-X — The Field Manual</title>
<meta property="og:title" content="WZML-X — The Field Manual"><meta property="og:description" content="Every command, task flag and setting of WZML-X, with interactive Telegram walkthroughs of the bot's real menus."><meta property="og:image" content="https://mockingmuse.github.io/wzmlDocs/shared/og.png"><meta property="og:type" content="website"><meta property="og:url" content="https://mockingmuse.github.io/wzmlDocs/v2/"><meta name="twitter:card" content="summary_large_image">
<meta name="description" content="Every command, task flag and setting of WZML-X, with interactive Telegram walkthroughs of the bot's real menus.">
<meta name="theme-color" content="#0d0b1a">
<link rel="icon" href="../shared/w-icon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<div class="progress" aria-hidden="true"></div>
<header class="nav">
  <button class="icon-btn menu-btn" id="menu" type="button" aria-label="Open contents" aria-expanded="false" aria-controls="rail">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
  </button>
  <a class="nav-brand" href="#top"><img src="../shared/w-icon.svg" alt="" width="30" height="30">WZML-X</a>
  <nav class="nav-links" aria-label="Primary">
    <a href="#quick">Quick start</a><a href="#commands">Commands</a><a href="#flags">Flags</a><a href="#usettings">Telegram menus</a><a href="../v3/index.html">The story</a><a href="https://github.com/SilentDemonSD/WZML-X">GitHub</a>
  </nav>
  <span class="nav-spacer"></span>
  <button class="kbar" id="kbar" type="button" aria-label="Search the manual">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
    <span class="l">Search flags, commands, settings</span><kbd>Ctrl K</kbd>
  </button>
  <button class="icon-btn" id="theme" type="button" aria-label="Toggle colour theme">
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>
  </button>
</header>

<section class="hero" id="top">
  <div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div>
  <div class="hero-grid">
    <div>
      <h1>Anything in. <em>Anywhere</em> out.</h1>
      <p class="lede">Download from torrents, Usenet, filehosts and YouTube, then send it to cloud storage or Telegram. Start with the everyday answers; open any “more” section when you want the detail.</p>
      <div class="cta">
        <a class="btn primary" href="#quick">Quick start <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        <a class="btn" href="#usettings">Open the Telegram walkthroughs</a>
      </div>
      <div class="hero-meta"><span><i></i>v3.1.11</span><span><i></i>Branch wzv3</span><span><i></i>Every flag, setting and gotcha</span></div>
    </div>
    <div class="hero-phone" id="hero-phone" aria-label="Animated demo of a leech task in Telegram"></div>
  </div>
  <div class="marquee"><div class="marquee-track" aria-hidden="true">
    MARQ
  </div></div>
</section>

<div class="shell">
<nav class="rail" id="rail" aria-label="Chapters">
  <ul class="toc" id="toc">
    <li><a href="../v3/index.html"><i>→</i>The story</a></li>
    <li><a href="#quick"><i>★</i>Quick Start</a></li>
    <li class="grp">Learn</li>
    <li><a href="#start"><i>01</i>Start Here</a></li>
    <li><a href="#commands"><i>02</i>Commands</a></li>
    <li><a href="#pipeline"><i>03</i>The Task Pipeline</a></li>
    <li class="grp">Reference</li>
    <li><a href="#flags"><i>04</i>Task Flags</a></li>
    <li><a href="#usettings"><i>05</i>User Settings</a></li>
    <li><a href="#bsettings"><i>06</i>Bot Settings</a></li>
    <li><a href="#locator"><i>07</i>Settings Locator</a></li>
    <li class="grp">Operate</li>
    <li><a href="#ffmpeg"><i>08</i>FFmpeg Presets</a></li>
    <li><a href="#queues"><i>09</i>Queues &amp; Throughput</a></li>
    <li><a href="#leech"><i>10</i>Leech Destinations</a></li>
    <li><a href="#recipes"><i>11</i>Recipes</a></li>
    <li><a href="#gotchas"><i>12</i>Gotchas</a></li>
  </ul>
</nav>
<div class="scrim" id="scrim"></div>
<main>
'''
items = ['Torrents', 'Magnets', 'Usenet', 'Seedr', 'Mega', 'YouTube', 'Direct links', 'Telegram']
outs = ['Google Drive', 'rclone', 'Telegram', 'Gofile', 'PixelDrain', 'YouTube']
def seq():
    return ''.join('<span>%s</span>' % i for i in items) + '<span class="to">to</span>' + ''.join('<span>%s</span>' % o for o in outs) + '<span class="to">and back</span>'
head = head.replace('MARQ', seq() + seq())

tail = '''
<div class="wrap" data-end>
  <p class="big" style="font-family:var(--f-display);font-size:clamp(40px,7vw,88px);line-height:.95;letter-spacing:-.03em;margin:90px 0 0;max-width:14ch">Now go move <em style="color:var(--accent)">something</em>.</p>
</div>
</main>
</div>

<dialog class="pal" id="pal" aria-label="Search">
  <div class="pal-in">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" style="color:var(--ink-3)"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
    <input id="pal-q" type="search" placeholder="Search flags, commands, settings…" autocomplete="off" aria-label="Search">
  </div>
  <ul class="pal-list" id="pal-list" role="listbox"></ul>
  <div class="pal-foot"><span>↑ ↓ to move</span><span>Enter to jump</span><span>Esc to close</span></div>
</dialog>

<script src="../shared/data/usettings.js" defer></script>
<script src="../shared/data/bsettings.js" defer></script>
<script src="../shared/tgsim.js" defer></script>
<script src="assets/app.js" defer></script>
</body>
</html>
'''
open(os.path.join(ROOT, 'v2', 'index.html'), 'w', encoding='utf8').write(head + body + tail)
print('built', len(head + body + tail))
