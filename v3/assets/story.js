(function(){
  "use strict";
  var $ = function(s, r){ return (r || document).querySelector(s); };
  var $$ = function(s, r){ return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function(v, a, b){ return Math.max(a, Math.min(b, v)); };
  var lerp = function(a, b, t){ return a + (b - a) * t; };
  var ease = function(t){ return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };
  var RM = matchMedia("(prefers-reduced-motion: reduce)").matches;   /* we soften, never remove: scrubbing is the content */
  var Snd = window.WZSound || {tick: function(){}, pop: function(){}, whoosh: function(){}, thunk: function(){}, lock: function(){}, chime: function(){}, padStart: function(){}, padSet: function(){}, padStop: function(){}, set: function(){ return false; }, on: false};
  var Sim = window.WZSim;
  document.body.classList.remove("no-js");
  var vw = innerWidth, vh = innerHeight, mobile = vw < 900;

  /* ═════════ shared story state — one file, one journey ═════════ */
  var S = {dir: "leech", eng: "qb", flags: {ff: 1, ns: 1, ss: 0, sv: 0, e: 0, z: 0, ud: 1}, size: 1.4, acct: "std", dest: {chat: 1, ud: 1, gd: 0, rc: 0, up: 0}};
  var dirty = {cmd: true, ws: true, land: true};

  var CMD = {aria: ["l", "m"], qb: ["ql", "qm"], ytdl: ["yl", "y"], jd: ["jl", "jm"], nzb: ["nl", "nm"]};
  var SRC = {aria: "<link>", qb: "<magnet>", ytdl: "<link>", jd: "<link>", nzb: "<nzb>"};
  function tokens(){
    var leech = S.dir === "leech", t = [{t: "/" + CMD[S.eng][leech ? 0 : 1], k: "cmd"}, {t: SRC[S.eng], k: "src"}], f = S.flags;
    if(f.ff) t.push({t: "-ff av1", k: "flag"});
    if(f.ns) t.push({t: "-ns .2160p/", k: "flag"});
    if(f.ss) t.push({t: "-ss 4", k: "flag"});
    if(f.sv) t.push({t: "-sv", k: "flag"});
    if(f.e && S.eng !== "ytdl") t.push({t: "-e", k: "flag"});
    if(f.z) t.push({t: "-z", k: "flag"});
    if(f.ud) t.push({t: leech ? "-ud movies" : "-up mydrive:Movies", k: "flag"});
    return t;
  }
  function esc(s){ return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  /* chips = the interactions */
  var chipEls = $$(".chips[data-group] button");
  function onChip(group, v){
    if(group === "dir"){ S.dir = v; S.dest.chat = S.dest.ud = v === "leech" ? 1 : 0; S.dest.gd = v === "leech" ? 0 : 1; }
    else if(group === "eng"){ S.eng = v; if(v === "ytdl") S.flags.e = 0; }
    else if(group === "size") S.size = parseFloat(v);
    else if(group === "acct") S.acct = v;
    else if(group === "flags" || group === "flags2") S.flags[v] = S.flags[v] ? 0 : 1;
    else if(group === "dest") S.dest[v] = S.dest[v] ? 0 : 1;
    Snd.pop(); syncChips(); dirty.cmd = dirty.ws = dirty.land = true;
  }
  function syncChips(){
    chipEls.forEach(function(b){
      var g = b.parentNode.dataset.group, v = b.dataset.v, on = false;
      if(g === "dir") on = S.dir === v; else if(g === "eng") on = S.eng === v;
      else if(g === "size") on = S.size === parseFloat(v); else if(g === "acct") on = S.acct === v;
      else if(g === "flags" || g === "flags2") on = !!S.flags[v]; else if(g === "dest") on = !!S.dest[v];
      b.classList.toggle("on", on); b.setAttribute("aria-pressed", on ? "true" : "false");
      if((g === "flags" || g === "flags2") && v === "e"){ b.disabled = S.eng === "ytdl"; }
      if(g === "flags" && v === "ud"){ b.innerHTML = S.dir === "leech" ? "<code>-ud movies</code> <small>named channel</small>" : "<code>-up mydrive:Movies</code> <small>cloud path</small>"; }
    });
  }
  chipEls.forEach(function(b){ b.addEventListener("click", function(){ onChip(b.parentNode.dataset.group, b.dataset.v); }); });
  syncChips();

  /* ═════════ smooth scroller ═════════ */
  var scrolling = null;
  function scrollToY(y, dur){
    cancelAnimationFrame(scrolling); var y0 = scrollY, t0 = performance.now(); dur = dur || 1300;
    (function step(t){ var k = clamp((t - t0) / dur, 0, 1); scrollTo(0, lerp(y0, y, ease(k))); if(k < 1) scrolling = requestAnimationFrame(step); })(t0);
  }
  addEventListener("wheel", function(){ cancelAnimationFrame(scrolling); }, {passive: true});
  addEventListener("touchstart", function(){ cancelAnimationFrame(scrolling); }, {passive: true});
  $$(".dots a, .brand").forEach(function(a){
    a.addEventListener("click", function(e){
      var el = document.getElementById(a.getAttribute("href").slice(1)); if(!el) return;
      e.preventDefault(); Snd.whoosh(); scrollToY(el.getBoundingClientRect().top + scrollY, 1400);
    });
  });

  /* ═════════ background: a stream of data that reacts to you ═════════ */
  var cv = $("#bg"), cx = cv.getContext("2d"), dpr = Math.min(devicePixelRatio || 1, 2);
  var P = [], B = [], Bg = {hue: 268, hueT: 268, speed: 1, attract: 0, ox: 0, oy: 0, vel: 0};
  var HUES = [268, 258, 222, 178, 268];
  function sizeBg(){ vw = innerWidth; vh = innerHeight; mobile = vw < 900; cv.width = vw * dpr; cv.height = vh * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = clamp(Math.round(vw / 13), 60, 150); if(mobile) n = Math.min(n, 70);
    while(P.length < n) P.push(seed(true)); P.length = n; }
  function seed(any){ return {x: any ? Math.random() * vw : -20, y: Math.random() * vh, z: .2 + Math.random() * .8, r: .6 + Math.random() * 1.8, v: 14 + Math.random() * 40, ph: Math.random() * 6.28}; }
  function burst(x, y, n){ for(var i = 0; i < n; i++){ var a = Math.random() * 6.283, s = 120 + Math.random() * 520; B.push({x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, r: 1 + Math.random() * 2.4}); } }
  var lastBg = 0;
  function drawBg(t){
    var dt = Math.min((t - lastBg) / 1000 || .016, .05); lastBg = t;
    Bg.hue += (Bg.hueT - Bg.hue) * Math.min(1, dt * 2.2);
    Bg.vel *= Math.pow(.02, dt);
    var boost = 1 + Math.min(Bg.vel / 900, 6), mot = RM ? .45 : 1;
    cx.globalCompositeOperation = "source-over"; cx.clearRect(0, 0, vw, vh);
    cx.globalCompositeOperation = "lighter";
    var cxx = vw * .5, cyy = vh * .5;
    for(var i = 0; i < P.length; i++){
      var p = P[i];
      p.x += p.v * p.z * boost * Bg.speed * mot * dt * 2.2;
      p.y += Math.sin(t / 1800 + p.ph) * 4 * dt * mot;
      if(Bg.attract > 0){ p.x += (cxx - p.x) * Bg.attract * dt * 2.4; p.y += (cyy - p.y) * Bg.attract * dt * 2.4; }
      if(p.x > vw + 20){ P[i] = seed(false); continue; }
      var px = p.x + Bg.ox * 40 * p.z, py = p.y + Bg.oy * 40 * p.z;
      var len = p.r * 3 * (boost > 1.4 ? boost * .7 : 1) * p.z;
      cx.fillStyle = "hsla(" + (Bg.hue + p.z * 40 - 20) + ",90%," + (62 + p.z * 14) + "%," + (.18 + p.z * .5) + ")";
      cx.beginPath(); cx.ellipse(px, py, p.r + len, p.r, 0, 0, 6.283); cx.fill();
    }
    for(var j = B.length - 1; j >= 0; j--){
      var b = B[j]; b.x += b.vx * dt; b.y += b.vy * dt; b.vx *= .96; b.vy *= .96; b.life -= dt * .9;
      if(b.life <= 0){ B.splice(j, 1); continue; }
      cx.fillStyle = "hsla(" + (Bg.hue + 30) + ",95%,72%," + b.life * .85 + ")"; cx.beginPath(); cx.arc(b.x, b.y, b.r, 0, 6.283); cx.fill();
    }
  }
  sizeBg();
  addEventListener("pointermove", function(e){ if(e.pointerType === "touch") return; Bg.ox = e.clientX / vw - .5; Bg.oy = e.clientY / vh - .5; }, {passive: true});
  addEventListener("deviceorientation", function(e){ if(e.gamma == null) return; Bg.ox = clamp(e.gamma / 40, -.5, .5); Bg.oy = clamp((e.beta - 45) / 60, -.5, .5); }, {passive: true});

  /* ═════════ marquee (constant speed, no interaction) ═════════ */
  var marqueeTick = function(){};
  (function(){
    var track = $(".marquee-track"); if(!track) return;
    var items = ["Torrents", "Magnets", "Usenet", "Seedr", "Mega", "YouTube", "Direct links", "Telegram"], outs = ["Google Drive", "rclone", "Telegram", "Gofile", "PixelDrain", "YouTube"], set = [];
    items.forEach(function(s){ var e = document.createElement("span"); e.textContent = s; set.push(e); });
    var to = document.createElement("span"); to.className = "to"; to.textContent = "to"; set.push(to);
    outs.forEach(function(s){ var e = document.createElement("span"); e.textContent = s; set.push(e); });
    var bk = document.createElement("span"); bk.className = "to"; bk.textContent = "and back"; set.push(bk);
    var W = 0, x = 0, on = true, last = 0;
    function build(){
      var frac = W ? (x % W) / W : 0; track.innerHTML = "";
      set.forEach(function(n){ track.appendChild(n.cloneNode(true)); });
      W = track.getBoundingClientRect().width; if(!W) return;
      var guard = 0; while(track.getBoundingClientRect().width < innerWidth + W && guard++ < 12){ set.forEach(function(n){ track.appendChild(n.cloneNode(true)); }); }
      x = frac * W;
    }
    build(); if(document.fonts && document.fonts.ready) document.fonts.ready.then(build);
    var tm; addEventListener("resize", function(){ clearTimeout(tm); tm = setTimeout(build, 200); });
    if("IntersectionObserver" in window) new IntersectionObserver(function(en){ on = en[0].isIntersecting; }).observe(track.parentNode);
    marqueeTick = function(t){ var dt = last ? Math.min((t - last) / 1000, .05) : 0; last = t; if(W && on){ x = (x + 70 * dt) % W; track.style.transform = "translate3d(" + (-x).toFixed(2) + "px,0,0)"; } };
  })();

  /* ═════════ HOOK: the first three seconds ═════════ */
  var hookTyped = $("#hookTyped"), hookStr = "/ql magnet:?xt=urn:btih:9f2e…  -ff av1 -ud movies", hi = 0;
  setTimeout(function typeHook(){ hi++; hookTyped.textContent = hookStr.slice(0, hi); if(hi % 2) Snd.tick(); if(hi < hookStr.length) setTimeout(typeHook, 38 + Math.random() * 40); }, 450);

  var hold = $("#hold"), holdBar = $("#holdBar"), holding = false, hp = 0, holdLast = 0, holdDone = false, tipT;
  function holdStart(){ if(holdDone) return; holding = true; holdLast = performance.now(); hold.classList.add("active"); Snd.padStart(); }
  function holdEnd(){
    if(!holding) return; holding = false; hold.classList.remove("active"); Snd.padStop();
    if(hp > .02 && hp < 1){ var b = $("b", hold); b.textContent = "Keep holding…"; clearTimeout(tipT); tipT = setTimeout(function(){ b.textContent = "Hold to send"; }, 1400); }
  }
  hold.addEventListener("pointerdown", function(e){ e.preventDefault(); try{ hold.setPointerCapture(e.pointerId); }catch(err){} holdStart(); });
  ["pointerup", "pointercancel", "lostpointercapture"].forEach(function(n){ hold.addEventListener(n, holdEnd); });
  hold.addEventListener("keydown", function(e){ if((e.key === "Enter" || e.key === " ") && !e.repeat){ e.preventDefault(); holdStart(); } });
  hold.addEventListener("keyup", function(e){ if(e.key === "Enter" || e.key === " ") holdEnd(); });
  hold.addEventListener("contextmenu", function(e){ e.preventDefault(); });
  function holdTick(t){
    var dt = Math.min((t - holdLast) / 1000, .06); holdLast = t;
    if(holding && !holdDone) hp = clamp(hp + dt / 1.15, 0, 1); else if(!holdDone) hp = clamp(hp - dt * 1.6, 0, 1);
    holdBar.style.strokeDashoffset = (339.3 * (1 - hp)).toFixed(1);
    Bg.attract = hp * hp * 1.4; Bg.speed = 1 + hp * 2.5; if(holding) Snd.padSet(hp);
    if(hp >= 1 && !holdDone){
      holdDone = true; holding = false; hold.classList.remove("active"); hold.classList.add("sent"); Snd.padStop(); Snd.whoosh();
      var r = hold.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 160); Bg.attract = 0; Bg.speed = 5;
      setTimeout(function(){ Bg.speed = 1; var m = $("#message"); scrollToY(m.getBoundingClientRect().top + scrollY, 1500); }, 420);
      setTimeout(function(){ holdDone = false; hp = 0; hold.classList.remove("sent"); }, 2600);
    }
  }

  /* ═════════ SCENE 1 · THE MESSAGE ═════════ */
  var mSlot = $("#phoneMsg"), mPhone = Sim.phone("WZML-X", "bot"); mSlot.appendChild(mPhone);
  var mScroll = $(".tg-scroll", mPhone), mOut = Sim.bubbleOut(""), mHolder = document.createElement("span");
  $(".bub", mOut).insertBefore(mHolder, $(".mt", mOut)); mOut.classList.remove("enter"); mScroll.appendChild(mOut);
  var mIn = Sim.bubbleIn(); mIn.classList.add("gone"); mIn.classList.remove("enter"); mScroll.appendChild(mIn);
  $(".bt", mIn).innerHTML = "<b>Task added</b> · <i>#qBit → #Leech</i><br>Follow it with /s — or tap its cancel link.";
  var mBeats = $$("#message .beat"), cmdline = $("#cmdline"), shown = "", typeAcc = 0, replied = false;
  function renderMessage(p, dt){
    var idx = 0; mBeats.forEach(function(b, i){ if(p >= parseFloat(b.dataset.at)) idx = i; });
    mBeats.forEach(function(b, i){ b.classList.toggle("on", i === idx); b.classList.toggle("past", i < idx); });
    var toks = tokens(), flagN = toks.length - 2, n = 0;
    if(p > .035) n = 1; if(p > .3) n = 2; if(p > .66) n = 2 + clamp(Math.floor((p - .66) / .03) + 1, 0, flagN);
    var target = toks.slice(0, n).map(function(t){ return t.t; }).join(" ");
    /* typewriter toward target: append, or backspace to the common prefix */
    typeAcc += dt * 70; var steps = Math.floor(typeAcc); typeAcc -= steps;
    var guard = 0;
    while(steps-- > 0 && shown !== target && guard++ < 6){
      if(target.indexOf(shown) === 0){ shown = target.slice(0, shown.length + 1); if(shown.length % 2) Snd.tick(); }
      else shown = shown.slice(0, -1);
    }
    if(mHolder.textContent !== shown){ mHolder.textContent = shown; mScroll.scrollTop = mScroll.scrollHeight; }
    var wantReply = p > .95 && shown === target && flagN >= 0;
    if(wantReply !== replied){ replied = wantReply; mIn.classList.toggle("gone", !wantReply); if(wantReply){ mIn.style.animation = "msg-in .42s both"; Snd.pop(); } else mIn.style.animation = ""; }
    if(dirty.cmd){ cmdline.innerHTML = toks.map(function(t){ return t.k === "flag" ? "<b>" + esc(t.t) + "</b>" : esc(t.t); }).join(" "); dirty.cmd = false; }
    mSlot.style.setProperty("--p", p.toFixed(3));
  }

  /* ═════════ SCENE 2 · THE WORKSHOP (fly through the pipeline) ═════════ */
  var G = [
    {k: "dl", n: "Download", flag: "queue-gated", always: 1, txt: "The engine you chose fetches the file. QUEUE_DOWNLOAD decides how many fetches run at once — 0 means all of them, which can fill a disk on a big batch."},
    {k: "ex", n: "Exclude", flag: "EXCLUDED_EXTENSIONS", always: 1, txt: "Junk like .nfo and .txt is dropped from the finished download. It saves upload time and disk — never download time."},
    {k: "j", n: "Join", flag: "-j", never: 1, txt: "Rejoins .001 / .002 parts into one file. Not part of this journey."},
    {k: "e", n: "Extract", flag: "-e", txt: "Unpacks archives. It matches on the file extension, so an archive with no extension is skipped."},
    {k: "ff", n: "FFmpeg", flag: "-ff av1", lock: 1, txt: "Runs your preset from FFMPEG_CMDS. The whole bot shares one ffmpeg lock, so encodes line up and run one at a time."},
    {k: "meta", n: "Metadata", flag: "-meta", never: 1, lock: 1, txt: "Writes container tags such as title and year. Holds the same lock as ffmpeg."},
    {k: "ns", n: "Name swap", flag: "-ns", txt: "Regex find-and-replace across file names — here it removes the .2160p tag."},
    {k: "ss", n: "Screenshots", flag: "-ss 4", txt: "Stills pulled from across the video, sent along with it."},
    {k: "cv", n: "Convert", flag: "-ca / -cv", never: 1, lock: 1, txt: "Blanket codec or container conversion. Also under the ffmpeg lock."},
    {k: "sv", n: "Sample", flag: "-sv", lock: 1, txt: "A short preview clip, built under the same lock."},
    {k: "z", n: "Zip", flag: "-z", txt: "Compresses after ffmpeg has finished — so you are zipping the transcoded files."},
    {k: "sp", n: "Split", flag: "automatic", auto: 1, txt: "Leech only. Telegram caps one file at about 2 GB for a bot and 4 GB for a Premium session; anything bigger is cut into parts."},
    {k: "up", n: "Upload", flag: "queue-gated", always: 1, txt: "QUEUE_UPLOAD gates this end. While this file uploads, the next task can already be encoding — uploads sit outside the lock."}
  ];
  var DZ = 640, N = G.length, world = $("#world"), flightEl = $("#flight");
  var gx = function(i){ return Math.sin(i * .85) * 230; }, gy = function(i){ return Math.cos(i * 1.15) * 80; };
  var gateEls = G.map(function(g, i){
    var el = document.createElement("div"); el.className = "gate" + (g.lock ? " lock" : "");
    el.style.transform = "translate3d(" + gx(i).toFixed(1) + "px," + gy(i).toFixed(1) + "px," + (-i * DZ) + "px)";
    el.innerHTML = '<div class="ring"></div><span class="num">' + (i + 1 < 10 ? "0" : "") + (i + 1) + '</span><div class="lbl">' + g.n + '<small>' + g.flag + '</small></div>';
    el.lbl = el.querySelector(".lbl"); world.appendChild(el); return el;
  });
  var orb = document.createElement("div"); orb.className = "orb"; flightEl.appendChild(orb);
  var stTitle = $("#stTitle"), stText = $("#stText"), stFlag = $("#stFlag"), fcName = $("#fcName"), fcFiles = $("#fcFiles"), fcSize = $("#fcSize"), fcCodec = $("#fcCodec"), fcLock = $("#fcLock"), railFill = $("#railFill");
  var curIdx = -1;
  function active(g){
    if(g.never) return false; if(g.always) return true;
    if(g.auto) return S.dir === "leech" && S.size > (S.acct === "prem" ? 4 : 2);
    if(g.k === "e") return !!S.flags.e && S.eng !== "ytdl";
    return !!S.flags[g.k];
  }
  function renderWorkshop(p){
    var t = p * (N - 1), i0 = Math.floor(t), i1 = Math.min(N - 1, i0 + 1), f = t - i0;
    world.style.transform = "translate3d(" + (-lerp(gx(i0), gx(i1), f)).toFixed(1) + "px," + (-lerp(gy(i0), gy(i1), f)).toFixed(1) + "px," + (t * DZ).toFixed(1) + "px)";
    var idx = clamp(Math.round(t), 0, N - 1);
    gateEls.forEach(function(el, i){
      var r = i - t, op = r < -.75 ? 0 : r < 0 ? (r + .75) / .75 * .9 : clamp(1 - r / 4.6, 0, 1);
      el.style.opacity = op.toFixed(3); el.style.visibility = op < .01 ? "hidden" : "visible";
      el.lbl.style.opacity = clamp(1 - Math.abs(r) * 1.5, 0, 1).toFixed(2);   /* only the gate you are at reads clearly */
    });
    if(idx !== curIdx || dirty.ws){
      var g = G[idx], act = active(g);
      gateEls.forEach(function(el, i){ var a = active(G[i]); el.classList.toggle("live", i === idx && a); el.classList.toggle("passive", !a); el.classList.toggle("used", a && i < idx); });
      stTitle.textContent = g.n; stText.textContent = g.txt;
      stFlag.textContent = act ? (g.k === "ns" ? "-ns .2160p/" : g.flag) : (g.never ? "not used on this journey" : "skipped — " + (g.auto ? "file fits in one piece" : "flag not set"));
      if(idx !== curIdx && curIdx !== -1){ act ? (g.lock ? Snd.lock() : Snd.thunk()) : null; }
      orb.classList.toggle("lock", !!(g.lock && act)); fcLock.classList.toggle("on", !!(g.lock && act));
      curIdx = idx; dirty.ws = false;
    }
    /* file card: it changes as it passes through the gates you enabled */
    var passed = function(k){ var i = G.findIndex(function(x){ return x.k === k; }); return t >= i + .05; };
    var ffOn = active(G[4]), nsOn = active(G[6]);
    var sz = 3.62; if(ffOn && t >= 4) sz = lerp(3.62, 1.41, ease(clamp((t - 4) / .9, 0, 1)));
    var base = "Sample.Movie.2024", ext = ".mkv";
    if(active(G[10]) && passed("z")) ext = ".zip";
    var cutGone = nsOn && passed("ns");
    fcName.innerHTML = base + '<span class="cut' + (cutGone ? " gone" : "") + '">.2160p</span>' + ext;
    var rows = [["Sample.Movie.2024.2160p.mkv", sz.toFixed(2) + " GB", 0], ["Sample.Movie.nfo", "4 KB", passed("ex")], ["release-info.txt", "1 KB", passed("ex")]];
    if(active(G[7]) && passed("ss")) rows.push(["screenshots ×4", ".jpg", 0]);
    if(active(G[9]) && passed("sv")) rows.push(["sample.mkv", "0.03 GB", 0]);
    fcFiles.innerHTML = rows.map(function(r, i){ var dead = r[2] && t >= 1.6; return '<li class="' + (dead ? "dead" : r[2] ? "hot" : "") + '"><span>' + (i ? r[0] : r[0].replace(".2160p", cutGone ? "" : ".2160p")) + '</span><span>' + r[1] + '</span></li>'; }).join("");
    fcSize.textContent = sz.toFixed(2) + " GB";
    fcCodec.textContent = ffOn && t >= 4.4 ? "AV1 · 10-bit" : "HEVC";
    railFill.style.transform = "scaleX(" + p.toFixed(3) + ")";
  }

  /* ═════════ SCENE 3 · THE LANDING ═════════ */
  var svg = $("#routes"), NS = "http://www.w3.org/2000/svg";
  var DEST = [
    {k: "chat", n: "Telegram chat", s: "primary", tg: 1},
    {k: "ud", n: "Named channel", s: "-ud movies", tg: 1},
    {k: "gd", n: "Google Drive", s: "GDRIVE_ID"},
    {k: "rc", n: "rclone remote", s: "RCLONE_PATH"},
    {k: "up", n: "Gofile & hosts", s: "/uphoster"}
  ];
  function el(tag, attrs, parent){ var e = document.createElementNS(NS, tag); for(var k in attrs) e.setAttribute(k, attrs[k]); (parent || svg).appendChild(e); return e; }
  var routeEls = {}, nodeEls = {}, subEls = {}, pkEls = {}, lens = {};
  DEST.forEach(function(d, i){
    var y = 22 + i * 98 + 28, path = "M132,260 C300,260 320,{y} 470,{y}".replace(/\{y\}/g, y);
    routeEls[d.k] = el("path", {"class": "route", d: path});
    lens[d.k] = routeEls[d.k].getTotalLength ? routeEls[d.k].getTotalLength() : 400;
  });
  var src = el("g", {"class": "src node on"}); el("rect", {x: 8, y: 224, width: 124, height: 72, rx: 16}, src);
  var srcT = el("text", {x: 70, y: 254, "text-anchor": "middle"}, src); srcT.textContent = "Movie.mkv";
  var srcS = el("text", {x: 70, y: 276, "text-anchor": "middle", "class": "sub"}, src);
  DEST.forEach(function(d, i){
    var y = 22 + i * 98, g = el("g", {"class": "node"}); nodeEls[d.k] = g;
    el("rect", {x: 470, y: y, width: 166, height: 56, rx: 14}, g);
    var t1 = el("text", {x: 486, y: y + 24}, g); t1.textContent = d.n;
    subEls[d.k] = el("text", {x: 486, y: y + 43, "class": "sub"}, g); subEls[d.k].textContent = d.s;
    pkEls[d.k] = [0, 1, 2].map(function(){ var c = el("circle", {r: 5, "class": "pk", cx: -9999, cy: -9999}); return c; });
  });
  var deliveredEl = $("#delivered"), deliveredText = $("#deliveredText"), chimed = false;
  function parts(){ var limit = S.acct === "prem" ? 4 : 2; return Math.max(1, Math.ceil(S.size / limit)); }
  function updateLanding(){
    srcS.textContent = S.size.toFixed(1) + " GB";
    var n = parts(), over = S.size > 2 && S.acct === "std";
    DEST.forEach(function(d){
      var sel = !!S.dest[d.k]; routeEls[d.k].classList.toggle("on", sel); nodeEls[d.k].classList.toggle("on", sel);
      subEls[d.k].textContent = d.tg ? (n === 1 ? "1 file" : n + " parts" + (over ? " · bot cap" : "")) : d.s;
    });
    dirty.land = false;
  }
  function renderLanding(p){
    if(dirty.land) updateLanding();
    var tt = clamp((p - .16) / .62, 0, 1), any = false, tg = 0, cloud = 0;
    DEST.forEach(function(d){
      var sel = !!S.dest[d.k]; if(sel){ any = true; d.tg ? tg++ : cloud++; }
      pkEls[d.k].forEach(function(c, j){
        var u = clamp((tt - j * .09) / .7, 0, 1);
        if(!sel || u <= 0 || u >= 1){ c.setAttribute("cx", -9999); c.setAttribute("cy", -9999); return; }
        var pt = routeEls[d.k].getPointAtLength(lens[d.k] * ease(u)); c.setAttribute("cx", pt.x.toFixed(1)); c.setAttribute("cy", pt.y.toFixed(1));
      });
      nodeEls[d.k].classList.toggle("arrived", sel && tt >= 1);
    });
    var done = tt >= 1 && any;
    deliveredEl.classList.toggle("on", done);
    if(done){
      var n = parts(), bits = [];
      if(tg) bits.push((n === 1 ? "1 file" : n + " parts") + " to Telegram");
      if(cloud) bits.push("1 upload to the cloud");
      deliveredText.textContent = bits.join(" · ");
      if(!chimed){ chimed = true; Snd.chime(); Bg.speed = 2.6; setTimeout(function(){ Bg.speed = 1; }, 700); }
    } else if(tt < .85) chimed = false;
    if(!any) deliveredText.textContent = "";
  }

  /* ═════════ SCENE ENGINE ═════════ */
  var scenes = [
    {el: $("#hook"), pinned: false}, {el: $("#message"), pinned: true, r: renderMessage},
    {el: $("#workshop"), pinned: true, r: renderWorkshop}, {el: $("#landing"), pinned: true, r: renderLanding}, {el: $("#resolve"), pinned: false}
  ];
  var CH = ["Prologue", "Scene one · The message", "Scene two · The workshop", "Scene three · The landing", "Epilogue · Your turn"];
  var dots = $$(".dots a"), chapterEl = $("#chapter"), cur = -1, prog = [0, 0, 0, 0, 0], lastY = scrollY, lastT = performance.now();
  function target(sc){ var r = sc.el.getBoundingClientRect(), total = sc.el.offsetHeight - innerHeight; return total > 0 ? clamp(-r.top / total, 0, 1) : 0; }
  /* debug: ?dbg=2-0.4 pins scene 2 at 40% so a still frame can be inspected */
  var DBG = (location.search.match(/dbg=(\d)-([\d.]+)/) || null);
  if(DBG){ DBG = {i: +DBG[1], p: +DBG[2]}; var st = document.createElement("style"); st.textContent = ".hook,.scene,.resolve{display:none !important}" + (DBG.i === 4 ? ".resolve{display:block !important}" : DBG.i === 0 ? ".hook{display:flex !important}" : "") + "#" + scenes0()[DBG.i] + "{display:block !important;height:100svh !important}.dots,.vignette{display:none}"; document.head.appendChild(st); }
  function scenes0(){ return ["hook", "message", "workshop", "landing", "resolve"]; }
  var lastFrame = 0;
  function frame(t){
    var dt = Math.min((t - lastFrame) / 1000 || .016, .05); lastFrame = t;
    var y = scrollY; Bg.vel = Math.max(Bg.vel, Math.abs(y - lastY) / Math.max(dt, .001) * .5); lastY = y;
    var mid = innerHeight * .5, now = -1;
    scenes.forEach(function(sc, i){
      var r = sc.el.getBoundingClientRect(); if(r.top <= mid && r.bottom > mid) now = i;
      if(sc.pinned){
        var inView = r.bottom > -50 && r.top < innerHeight + 50 && !(DBG && DBG.i !== i);
        if(inView){
          var tg = DBG && DBG.i === i ? DBG.p : target(sc); prog[i] += (tg - prog[i]) * Math.min(1, dt * 9); if(Math.abs(tg - prog[i]) < .0004) prog[i] = tg;
          sc.r(prog[i], dt);
        }
      }
    });
    if(now === -1) now = scrollY < 10 ? 0 : cur;
    if(now !== cur){
      if(cur !== -1) Snd.whoosh();
      cur = now; chapterEl.textContent = CH[cur] || ""; Bg.hueT = HUES[cur] || 268;
      dots.forEach(function(d, i){ d.classList.toggle("on", i === cur); d.classList.toggle("done", i < cur); });
    }
    drawBg(t); holdTick(t); marqueeTick(t);
    requestAnimationFrame(frame);
  }
  addEventListener("resize", function(){ sizeBg(); });
  /* the hold button should stop the page from scrolling on touch */
  hold.addEventListener("touchmove", function(e){ e.preventDefault(); }, {passive: false});

  /* ═════════ sound toggle ═════════ */
  var soundBtn = $("#sound");
  /* On by default. Browsers refuse audio until the first tap/key/click, so the sound
     starts at that first gesture; the choice is remembered once the visitor turns it off. */
  var wantSound = true;
  try{ wantSound = localStorage.getItem("wz-sound") !== "off"; }catch(e){}
  function paintSound(){ soundBtn.setAttribute("aria-pressed", wantSound ? "true" : "false"); $("b", soundBtn).textContent = wantSound ? "on" : "off"; }
  paintSound();
  function armSound(){
    ["pointerdown", "keydown", "touchend"].forEach(function(t){ removeEventListener(t, armSound, true); });
    if(wantSound) Snd.set(true);
  }
  ["pointerdown", "keydown", "touchend"].forEach(function(t){ addEventListener(t, armSound, true); });
  soundBtn.addEventListener("click", function(){
    wantSound = !wantSound;
    try{ localStorage.setItem("wz-sound", wantSound ? "on" : "off"); }catch(e){}
    if(!Snd.set(wantSound)){ wantSound = false; }
    paintSound();
    if(wantSound){ Snd.whoosh(); }
  });

  /* ═════════ EPILOGUE: reveal, copy buttons, lazy control room ═════════ */
  $$(".qs-row, .scar, .r-wrap h3, .r-wrap .lede, .cta-row, .tabs").forEach(function(e){ e.setAttribute("data-r", ""); });
  if("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(en){ en.forEach(function(x){ if(x.isIntersecting){ x.target.classList.add("in"); io.unobserve(x.target); } }); }, {rootMargin: "0px 0px -8% 0px", threshold: .08});
    $$("[data-r]").forEach(function(e){ io.observe(e); });
  } else $$("[data-r]").forEach(function(e){ e.classList.add("in"); });
  $$(".qs pre").forEach(function(pre){
    var b = document.createElement("button"); b.type = "button"; b.className = "copy-b"; b.textContent = "Copy"; b.setAttribute("aria-label", "Copy command");
    b.addEventListener("click", function(){ var txt = $("code", pre).textContent.replace(/\s+\(.*\)$/, ""); (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(function(){ b.textContent = "Copied"; Snd.pop(); setTimeout(function(){ b.textContent = "Copy"; }, 1300); }, function(){ b.textContent = "Ctrl+C"; }); });
    pre.appendChild(b);
  });
  var simSlot = $("#simSlot"), loaded = false;
  function loadSims(){
    if(loaded) return; loaded = true;
    ["../shared/data/usettings.js", "../shared/data/bsettings.js"].forEach(function(src){ var s = document.createElement("script"); s.src = src; document.body.appendChild(s); });
    Sim.mount(simSlot);
  }
  if("IntersectionObserver" in window) new IntersectionObserver(function(en, o){ if(en[0].isIntersecting){ loadSims(); o.disconnect(); } }, {rootMargin: "900px"}).observe($("#control")); else loadSims();
  $$(".tab").forEach(function(tab){
    tab.addEventListener("click", function(){
      loadSims(); $$(".tab").forEach(function(x){ x.classList.toggle("on", x === tab); x.setAttribute("aria-selected", x === tab ? "true" : "false"); });
      simSlot.dataset.bot = tab.dataset.bot; simSlot.innerHTML = ""; Sim.mount(simSlot); Snd.pop();
    });
  });

  updateLanding(); requestAnimationFrame(frame);
})();
