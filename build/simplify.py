import re

QUICK = '''<section id="quick"><div class="wrap">
  <p class="chap"><b>00</b>Quick Start</p>
  <h2>What do you want to do?</h2>
  <p class="lede">The everyday jobs, as copy-paste commands. Everything deeper is one click away and stays folded until you ask for it.</p>

  <h4>Download and send</h4>
  <div class="qs">
    <div class="qs-row"><div class="qs-q">Send a link or file to Telegram</div><pre>/l &lt;link&gt;</pre></div>
    <div class="qs-row"><div class="qs-q">Send a torrent or magnet to Telegram</div><pre>/ql &lt;magnet&gt;</pre></div>
    <div class="qs-row"><div class="qs-q">Save to Google Drive or rclone</div><pre>/m &lt;link&gt;</pre></div>
    <div class="qs-row"><div class="qs-q">YouTube and video sites</div><pre>/yl &lt;link&gt;      <i># to Telegram</i>
/y &lt;link&gt;       <i># to cloud</i></pre></div>
    <div class="qs-row"><div class="qs-q">Many links at once</div><pre>/l <b>-b</b>      <i># reply to a .txt, one link per line</i></pre></div>
    <div class="qs-row"><div class="qs-q">Pick files inside a torrent</div><pre>/ql &lt;magnet&gt; <b>-s</b></pre></div>
  </div>

  <h4>Change the result</h4>
  <div class="qs">
    <div class="qs-row"><div class="qs-q">Rename it</div><pre>/l &lt;link&gt; <b>-n</b> My Movie 2024</pre></div>
    <div class="qs-row"><div class="qs-q">Unpack or zip it</div><pre>/m &lt;link&gt; <b>-e</b>      <i># extract</i>
/m &lt;link&gt; <b>-z</b>      <i># zip</i></pre></div>
    <div class="qs-row"><div class="qs-q">Re-encode the video</div><pre>/l &lt;link&gt; <b>-ff</b> av1</pre></div>
    <div class="qs-row"><div class="qs-q">Send to a specific channel</div><pre>/l &lt;link&gt; <b>-ud</b> movies</pre></div>
  </div>

  <h4>Check on it</h4>
  <div class="qs">
    <div class="qs-row"><div class="qs-q">See progress</div><pre>/s</pre></div>
    <div class="qs-row"><div class="qs-q">Cancel a task</div><pre>tap the /c_… link on its status message</pre></div>
    <div class="qs-row"><div class="qs-q">Set a thumbnail, caption or split size</div><pre>/us   <i># see the walkthroughs in ch. 05</i></pre></div>
  </div>

  <div class="goto" role="list">
    <a role="listitem" href="#commands"><b>All commands</b><span>what each one does</span></a>
    <a role="listitem" href="#flags"><b>All flags</b><span>every -option</span></a>
    <a role="listitem" href="#usettings"><b>Telegram menus</b><span>step-by-step phone demos</span></a>
    <a role="listitem" href="#gotchas"><b>Something broke?</b><span>common fixes</span></a>
  </div>
</div></section>

'''

def fold(s, start, end, title, hint=''):
    a = s.index(start)
    b = len(s) if end is None else s.index(end, a)
    inner = s[a:b]
    box = ('<details class="more"><summary><span class="dt">%s</span><span class="dh">%s</span></summary>'
           '<div class="more-body">\n%s</div></details>\n') % (title, hint, inner)
    return s[:a] + box + s[b:]

def sec_end(s, sec_id):
    a = s.index('<section id="%s">' % sec_id)
    return s.index('</div></section>', a)

def fold_to_end(s, sec_id, start, title, hint=''):
    a = s.index('<section id="%s">' % sec_id)
    st = s.index(start, a)
    end = s.index('</div></section>', st)
    inner = s[st:end]
    box = ('<details class="more"><summary><span class="dt">%s</span><span class="dh">%s</span></summary>'
           '<div class="more-body">\n%s</div></details>\n') % (title, hint, inner)
    return s[:st] + box + s[end:]

def split_cards(container_inner):
    parts = re.split(r'(?=\n    <div class="card">)', container_inner)
    return [p for p in parts if p.strip()]

def fold_cards(s, sec_id, keep, label):
    """inside each .cards container of a section keep `keep(card_html)` cards, fold the rest"""
    a = s.index('<section id="%s">' % sec_id)
    e = s.index('</div></section>', a)
    sec = s[a:e]
    out, pos = [], 0
    for m in re.finditer(r'<div class="cards">', sec):
        if m.start() < pos: continue
        i0 = m.end()
        i1 = sec.index('\n  </div>', i0)
        cards = split_cards(sec[i0:i1])
        keepc = [c for c in cards if keep(c)]
        rest = [c for c in cards if not keep(c)]
        if not keepc:
            continue
        out.append(sec[pos:i0])
        out.append(''.join(keepc))
        if rest:
            out.append('\n    <details class="more inline"><summary><span class="dt">%d more %s</span></summary><div class="more-body">%s\n    </div></details>' % (len(rest), label, ''.join(rest)))
        pos = i1
    out.append(sec[pos:])
    return s[:a] + ''.join(out) + s[e:]

COMMON_FLAGS = ['-n', '-up', '-ud', '-b', '-s', '-i', '-e', '-z', '-ff', '-sp', '-t', '-doc -med']
def flag_of(card):
    m = re.search(r'<span class="flag">(.*?)</span>', card)
    return m.group(1) if m else ''

def simplify(body):
    s = body
    # Commands: collapse the engine variants into one row
    for c in ['qbmirror','jdmirror','nzbmirror','qbleech','jdleech','nzbleech']:
        s, n = re.subn(r'    <tr><td><code>/' + c + r'</code>.*?</tr>' + chr(10), '', s, count=1)
        assert n == 1, c
    row = ('<tr><td><code>/qb…</code> <code>/jd…</code> <code>/nzb…</code></td>'
           '<td><code>/qm</code> <code>/ql</code> <code>/jm</code> <code>/jl</code> <code>/nm</code> <code>/nl</code></td>'
           '<td>Same two commands through another engine: add <code>qb</code> (torrents), <code>jd</code> (JDownloader) '
           'or <code>nzb</code> (Usenet), e.g. <code>/qbleech</code></td></tr>' + chr(10) + '    ')
    s = s.replace('<tr><td><code>/ytdl</code>', row + '<tr><td><code>/ytdl</code>', 1)
    # Commands: keep tasks + task management, fold the rest
    s = fold_to_end(s, 'commands', '<h4>Settings, search and info</h4>', 'Settings, search, plugin and owner commands', 'about 40 more')
    # Pipeline: consequences
    s = fold_to_end(s, 'pipeline', '<h3>Four consequences worth internalising</h3>', 'What this means in practice', '4 points')
    # Flags: common flags visible, advanced folded
    s = fold_cards(s, 'flags', lambda c: flag_of(c) in COMMON_FLAGS, 'flags')
    s = fold(s, '<h4>Control</h4>', '<div class="empty hidden" id="noflags">', 'Advanced and niche flags', 'force start, rclone, Seedr, Telegram clone, switched-off flags')
    # User settings text reference
    st = s.index('<h4>Leech</h4>', s.index('<section id="usettings">'))
    s = fold(s, '<h4>Leech</h4>', '<div class="note tip"><b class="lab">Own credentials', 'Every /usettings option, in text', 'same menus as the phone above')
    # Bot settings text reference
    s = fold(s, '<h4>Queueing &amp; limits</h4>', '<div class="note warn"><b class="lab">Where config actually comes from', 'Bot variables grouped by topic', 'queues, leech, clone, reliability')
    # FFmpeg
    s = fold_to_end(s, 'ffmpeg', '<h3>Tuning notes</h3>', 'Tuning, -map pitfalls and progress quirks', 'for when output looks wrong')
    # Queues
    s = fold_to_end(s, 'queues', '<h3>Why uploads overlap encodes for free</h3>', 'Why uploads overlap, and CPU notes', 'optional reading')
    # Leech destinations
    s = fold_to_end(s, 'leech', '<h3>The 4 GB checklist</h3>', 'The 4 GB checklist and split ordering', 'premium account setup')
    # Recipes
    s = fold_to_end(s, 'recipes', '<h3>Season pack into one folder, renamed</h3>', 'More recipes', '6 more')
    # Gotchas: first six visible
    want = ['A config change did nothing', 'Files land in the wrong chat', 'Split size snaps back', 'jd</code>, <code>nzb</code> or Seedr', '/cancel GID', "/mediainfo</code>, <code>/imdb</code>"]
    s = fold_cards(s, 'gotchas', lambda c: any(w in c for w in want), 'fixes')
    return QUICK + s
