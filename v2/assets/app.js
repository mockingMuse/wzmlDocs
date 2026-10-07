(function(){
  "use strict";
  var $ = function(s, r){ return (r || document).querySelector(s); };
  var $$ = function(s, r){ return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  root.classList.remove("no-js");

  /* ── theme (circular view-transition reveal) ── */
  try{ var saved = localStorage.getItem("wz2-theme"); if(saved){ root.setAttribute("data-theme", saved); } }catch(e){}
  function isDark(){ var t = root.getAttribute("data-theme"); return t ? t === "dark" : !matchMedia("(prefers-color-scheme: light)").matches; }
  $("#theme").addEventListener("click", function(ev){
    var next = isDark() ? "light" : "dark";
    var apply = function(){ root.setAttribute("data-theme", next); try{ localStorage.setItem("wz2-theme", next); }catch(e){} };
    if(document.startViewTransition && !reduce){
      var r = ev.currentTarget.getBoundingClientRect();
      root.style.setProperty("--vx", (r.left + r.width / 2) + "px"); root.style.setProperty("--vy", (r.top + r.height / 2) + "px");
      document.startViewTransition(apply);
    } else apply();
  });

  /* ── drawer ── */
  var rail = $("#rail"), scrim = $("#scrim"), menu = $("#menu");
  function drawer(o){ rail.classList.toggle("open", o); scrim.classList.toggle("open", o); menu.setAttribute("aria-expanded", o ? "true" : "false"); }
  menu.addEventListener("click", function(){ drawer(!rail.classList.contains("open")); });
  scrim.addEventListener("click", function(){ drawer(false); });
  rail.addEventListener("click", function(e){ if(e.target.closest("a")) drawer(false); });

  /* ── hero words ── */
  var h1 = $(".hero h1");
  if(h1 && !h1.dataset.split){
    h1.dataset.split = "1"; var i = 0;
    (function walk(node){
      Array.prototype.slice.call(node.childNodes).forEach(function(n){
        if(n.nodeType === 3){
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function(tok){
            if(!tok) return;
            if(/^\s+$/.test(tok)){ frag.appendChild(document.createTextNode(" ")); return; }
            var w = document.createElement("span"); w.className = "w";
            var s = document.createElement("span"); s.textContent = tok; s.style.setProperty("--i", i++);
            w.appendChild(s); frag.appendChild(w);
          });
          n.parentNode.replaceChild(frag, n);
        } else if(n.nodeType === 1 && n.tagName === "EM"){
          var w = document.createElement("span"); w.className = "w";
          var s = document.createElement("span"); s.style.setProperty("--i", i++);
          n.parentNode.insertBefore(w, n); s.appendChild(n); w.appendChild(s);
        }
      });
    })(h1);
  }

  /* ── reveal on scroll ── */
  var rv = $$("section .wrap > *, .card, .tw, .note, .figure, .sim, pre").filter(function(el){ return !el.closest(".sim") || el.classList.contains("sim"); });
  var seen = 0;
  rv.forEach(function(el){ el.setAttribute("data-r", ""); });
  if("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(en){
      en.forEach(function(x){
        if(x.isIntersecting){
          var d = Math.min(seen++ % 4, 3) * 50;
          x.target.style.setProperty("--d", d + "ms");
          x.target.classList.add("in"); io.unobserve(x.target);
          if(x.target.classList.contains("figure")){ $$(".pipe li", x.target).forEach(function(li, k){ li.style.setProperty("--k", k); }); }
        }
      });
    }, {rootMargin: "0px 0px -8% 0px", threshold: .06});
    rv.forEach(function(el){ io.observe(el); });
  } else rv.forEach(function(el){ el.classList.add("in"); });

  /* ── scrollspy ── */
  var links = $$("#toc a"), map = {};
  links.forEach(function(a){ map[a.getAttribute("href").slice(1)] = a; });
  var secs = $$("main section");
  if("IntersectionObserver" in window){
    var vis = {};
    var so = new IntersectionObserver(function(en){
      en.forEach(function(x){ vis[x.target.id] = x.isIntersecting; });
      for(var k = 0; k < secs.length; k++){
        if(vis[secs[k].id]){ links.forEach(function(a){ a.classList.remove("on"); }); if(map[secs[k].id]){ map[secs[k].id].classList.add("on"); } break; }
      }
    }, {rootMargin: "-12% 0px -70% 0px"});
    secs.forEach(function(s){ so.observe(s); });
  }

  /* ── copy buttons ── */
  $$("pre").forEach(function(pre){
    var b = document.createElement("button"); b.type = "button"; b.className = "copy"; b.textContent = "Copy"; b.setAttribute("aria-label", "Copy code");
    b.addEventListener("click", function(){
      var txt = pre.cloneNode(true); var c = txt.querySelector(".copy"); if(c) c.remove();
      var t = txt.textContent.replace(/\n$/, "");
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function(){ b.textContent = "Copied"; setTimeout(function(){ b.textContent = "Copy"; }, 1400); }, function(){ b.textContent = "Press Ctrl+C"; });
    });
    pre.appendChild(b);
  });

  /* ── settings locator ── */
  var lq = $("#lq");
  var lrows = $$("#lctable tbody tr"), lchips = $$(".lc-chip"), lcount = $("#lcount"), lempty = $("#lcempty"), lmode = "hot";
  lrows.forEach(function(r){ r.dataset.hay = r.textContent.toLowerCase(); });
  function lapply(){
    var term = lq.value.trim().toLowerCase(), shown = 0;
    lrows.forEach(function(r){
      var ok = true;
      if(lmode === "hot") ok = r.dataset.hot === "1"; else if(lmode !== "all") ok = r.dataset.scope === lmode;
      if(ok && term) ok = r.dataset.hay.indexOf(term) !== -1;
      r.classList.toggle("hidden", !ok); if(ok) shown++;
    });
    lempty.classList.toggle("hidden", shown > 0);
    lcount.textContent = shown + (shown === 1 ? " setting" : " settings");
  }
  lq.addEventListener("input", lapply);
  lq.addEventListener("keydown", function(e){ if(e.key === "Escape"){ lq.value = ""; lapply(); } });
  lchips.forEach(function(c){ c.addEventListener("click", function(){ lchips.forEach(function(x){ x.classList.remove("on"); }); c.classList.add("on"); lmode = c.dataset.f; lapply(); }); });
  lapply();

  /* ── command palette ── */
  var pal = $("#pal"), pin = $("#pal-q"), plist = $("#pal-list"), idx = [], sel = 0, shownItems = [];
  function addId(el, prefix, n){ if(!el.id){ el.id = prefix + n; } return el.id; }
  $$("section").forEach(function(s){ var h = $("h2", s); if(h) idx.push({k: h.textContent.trim(), d: "Chapter", t: "Chapter", id: s.id}); });
  $$("#flags .card").forEach(function(c, n){
    var f = $(".flag", c), em = $(".card-h em", c), p = $("p", c);
    if(f) idx.push({k: f.textContent.trim(), d: (em ? em.textContent.trim() + " — " : "") + (p ? p.textContent.trim() : ""), t: "Flag", id: addId(c, "flag-", n)});
  });
  $$("#commands tr").forEach(function(tr, n){
    var tds = $$("td", tr); if(tds.length < 2) return;
    idx.push({k: tds[0].textContent.trim(), d: tds[tds.length - 1].textContent.trim(), t: "Command", id: addId(tr, "cmd-", n)});
  });
  lrows.forEach(function(r){
    var code = $("code", r); if(!code) return;
    var cmd = $(".lc-cmd", r), loc = $(".lc-loc", r);
    idx.push({k: code.textContent.trim(), d: (cmd ? cmd.textContent : "") + " · " + (loc ? loc.textContent.trim() : ""), t: "Setting", setting: code.textContent.trim()});
  });
  idx.forEach(function(it){ it.hay = (it.k + " " + it.d).toLowerCase(); });
  function score(it, q){
    var k = it.k.toLowerCase(); if(k === q) return 100; if(k.indexOf(q) === 0) return 80; if(k.indexOf(q) > -1) return 60;
    return it.hay.indexOf(q) > -1 ? 30 : 0;
  }
  function renderPal(){
    var q = pin.value.trim().toLowerCase();
    var items = q ? idx.map(function(it){ return {it: it, s: score(it, q)}; }).filter(function(x){ return x.s > 0; }).sort(function(a, b){ return b.s - a.s; }).slice(0, 40).map(function(x){ return x.it; })
                  : idx.filter(function(it){ return it.t === "Chapter"; });
    shownItems = items; sel = 0; plist.innerHTML = "";
    if(!items.length){ plist.innerHTML = '<li style="cursor:default"><span class="d">Nothing found. Try a flag like -ff, a command like /clone, or a setting like QUEUE_ALL.</span></li>'; return; }
    items.forEach(function(it, n){
      var li = document.createElement("li"); li.setAttribute("role", "option"); li.setAttribute("aria-selected", n === 0 ? "true" : "false");
      li.innerHTML = '<span class="k"></span><span class="d"></span><span class="t"></span>';
      li.children[0].textContent = it.k; li.children[1].textContent = it.d; li.children[2].textContent = it.t;
      li.addEventListener("click", function(){ choose(it); });
      li.addEventListener("mousemove", function(){ setSel(n); });
      plist.appendChild(li);
    });
  }
  function setSel(n){
    var lis = $$("li", plist); if(!lis.length) return; sel = (n + lis.length) % lis.length;
    lis.forEach(function(l, k){ l.setAttribute("aria-selected", k === sel ? "true" : "false"); });
    lis[sel].scrollIntoView({block: "nearest"});
  }
  function flash(el){ el.animate([{background: "var(--accent-soft)"}, {background: "transparent"}], {duration: 1600, easing: "ease-out"}); }
  function openParents(el){ var d = el.closest("details"); while(d){ d.open = true; d = d.parentElement && d.parentElement.closest("details"); } }
  function choose(it){
    pal.close();
    if(it.setting){
      lq.value = it.setting; lmode = "all"; $$(".lc-chip").forEach(function(x){ x.classList.toggle("on", x.dataset.f === "all"); }); lchips.forEach(function(x){ x.classList.toggle("on", x.dataset.f === "all"); }); lapply();
      $("#locator").scrollIntoView({behavior: reduce ? "auto" : "smooth"}); return;
    }
    var el = document.getElementById(it.id); if(!el) return;
    openParents(el);
    el.scrollIntoView({behavior: reduce ? "auto" : "smooth", block: it.t === "Chapter" ? "start" : "center"});
    if(it.t !== "Chapter"){ setTimeout(function(){ flash(el); }, 450); }
  }
  function openPal(){ if(!pal.open){ pal.showModal(); } pin.value = ""; renderPal(); pin.focus(); }
  $("#kbar").addEventListener("click", openPal);
  document.addEventListener("keydown", function(e){
    var typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement && document.activeElement.tagName);
    if((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)){ e.preventDefault(); openPal(); }
    if(e.key === "Escape" && rail.classList.contains("open")) drawer(false);
  });
  pin.addEventListener("input", renderPal);
  pin.addEventListener("keydown", function(e){
    if(e.key === "ArrowDown"){ e.preventDefault(); setSel(sel + 1); }
    else if(e.key === "ArrowUp"){ e.preventDefault(); setSel(sel - 1); }
    else if(e.key === "Enter"){ e.preventDefault(); if(shownItems[sel]) choose(shownItems[sel]); }
  });
  pal.addEventListener("click", function(e){ if(e.target === pal) pal.close(); });

  function hashOpen(){ var id = location.hash.slice(1); if(!id) return; var el = document.getElementById(id); if(el) openParents(el); }
  addEventListener("hashchange", hashOpen); hashOpen();
  $$('a[href^="#"]').forEach(function(a){ a.addEventListener("click", function(){ var el = document.getElementById(a.getAttribute("href").slice(1)); if(el) openParents(el); }); });


  /* ── seamless marquee (JS-driven, constant speed, no interaction) ── */
  (function(){
    var track = $(".marquee-track"); if(!track) return;
    var set = Array.prototype.slice.call(track.children, 0, track.children.length / 2);
    var W = 0, x = 0, SPEED = 70, onscreen = true, last = 0;
    function build(){
      var frac = W ? (x % W) / W : 0;
      track.innerHTML = ""; set.forEach(function(n){ track.appendChild(n.cloneNode(true)); });
      W = track.getBoundingClientRect().width; if(!W) return;
      var need = innerWidth + W, guard = 0;
      while(track.getBoundingClientRect().width < need && guard++ < 12){ set.forEach(function(n){ track.appendChild(n.cloneNode(true)); }); }
      x = frac * W;
    }
    if("IntersectionObserver" in window){ new IntersectionObserver(function(en){ onscreen = en[0].isIntersecting; }, {rootMargin: "100px"}).observe(track.parentNode); }
    function tick(t){
      var dt = last ? Math.min((t - last) / 1000, .05) : 0; last = t;
      if(W && onscreen){
        x = (x + SPEED * dt) % W;
        track.style.transform = "translate3d(" + (-x).toFixed(2) + "px,0,0)";
      }
      requestAnimationFrame(tick);
    }
    build();
    if(document.fonts && document.fonts.ready){ document.fonts.ready.then(build); }
    var tm; addEventListener("resize", function(){ clearTimeout(tm); tm = setTimeout(build, 200); });
    requestAnimationFrame(tick);
  })();

  /* ── Telegram simulators + hero ── */
  $$(".tgsim").forEach(function(el){ if(window.WZSim) WZSim.mount(el); });
  var hp = $("#hero-phone"); if(hp && window.WZSim){ WZSim.hero(hp); }
})();
