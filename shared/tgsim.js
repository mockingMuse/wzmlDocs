/* Telegram simulator — replays real WZML-X menus from window.WZ_SCREENS.
   Guided walkthroughs autoplay on their own (Back / Pause / Next step), or switch to "Explore freely". */
(function(){
  "use strict";
  var BASE = (document.currentScript && document.currentScript.src || "").replace(/[^\/]*$/, "");   /* shared/ folder, so the avatar resolves from any page */
  var reduce = false;   /* the walkthrough is the content: it plays even when the OS asks for reduced motion */
  var EASE = "cubic-bezier(.23,1,.32,1)";
  var $ = function(s, r){ return (r || document).querySelector(s); };
  function h(tag, cls, html){ var e = document.createElement(tag); if(cls) e.className = cls; if(html != null) e.innerHTML = html; return e; }
  function fmt(t){ return String(t == null ? "" : t).replace(/\n/g, "<br>"); }
  function esc(t){ return String(t).replace(/[&<>]/g, function(c){ return {"&": "&amp;", "<": "&lt;", ">": "&gt;"}[c]; }); }
  function wait(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }
  function pause(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }   /* real-time wait, never shortened */
  function anim(el, frames, opts){ return el && el.animate ? el.animate(frames, opts) : null; }

  /* ── phone shell ─────────────────────────── */
  function phone(name, sub){
    var p = h("div", "phone");
    p.innerHTML =
      '<div class="phone-bezel"><div class="phone-screen">' +
        '<div class="tg-status"><span>9:41</span><i class="tg-island"></i><span class="tg-sig">' +
          '<svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor"><rect x="0" y="6" width="3" height="4" rx=".6"/><rect x="4.3" y="4" width="3" height="6" rx=".6"/><rect x="8.6" y="2" width="3" height="8" rx=".6"/><rect x="12.9" y="0" width="3" height="10" rx=".6"/></svg>' +
          '<svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor"><rect x=".5" y=".5" width="18" height="9" rx="2.4" opacity=".5"/><rect x="2" y="2" width="12" height="6" rx="1.2" fill="currentColor" stroke="none"/><path d="M20.5 3.4v3.2" stroke-linecap="round" opacity=".5"/></svg>' +
        '</span></div>' +
        '<div class="tg-head"><svg class="tg-back" width="10" height="17" viewBox="0 0 10 17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 1.5L2 8.5l6.5 7"/></svg>' +
          '<div class="tg-ava"><img src="' + BASE + 'w-icon.svg" alt="" width="36" height="36"></div>' +
          '<div class="tg-who"><b>' + esc(name || "WZML-X") + '</b><small>' + esc(sub || "bot") + '</small></div></div>' +
        '<div class="tg-chat"><div class="tg-scroll"></div></div>' +
        '<div class="tg-input"><span class="tg-clip"></span><span class="tg-ph">Message</span><span class="tg-mic"></span></div>' +
      '</div></div>';
    return p;
  }
  function bubbleOut(text){
    var m = h("div", "msg out enter");
    m.innerHTML = '<div class="bub">' + fmt(text) + '<span class="mt">9:41 <svg width="14" height="9" viewBox="0 0 14 9" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4.8l2.6 2.6L9 1.5M5.6 6.6l.8.8L12 1.5"/></svg></span></div>';
    return m;
  }
  /* the bot's message: bubble + inline keyboard live in one measured, morphable wrapper */
  function bubbleIn(){
    var m = h("div", "msg in enter");
    m.innerHTML = '<div class="mwrap"><div class="mbody"><div class="bub"><div class="bt"></div><span class="mt">9:41</span></div><div class="kb"></div></div></div>';
    return m;
  }
  function fillKb(kb, rows){
    kb.innerHTML = "";
    (rows || []).forEach(function(row){
      var r = h("div", "kr");
      row.forEach(function(b){
        var btn = h("button", "kbtn"); btn.type = "button";
        btn.innerHTML = '<span>' + esc(b.t) + '</span>';
        btn.dataset.t = b.t; btn.dataset.to = b.to || "";
        r.appendChild(btn);
      });
      kb.appendChild(r);
    });
  }
  function scrollDown(scroll){ scroll.scrollTo({top: scroll.scrollHeight, behavior: "smooth"}); }

  var ICON = {
    back: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    next: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    pause: '<svg class="i-pause" width="14" height="14" viewBox="0 0 12 12" fill="currentColor"><rect x="2" y="1" width="3" height="10" rx="1"/><rect x="7" y="1" width="3" height="10" rx="1"/></svg>',
    play: '<svg class="i-play" width="14" height="14" viewBox="0 0 12 12" fill="currentColor"><path d="M3 1.5v9l7.5-4.5z"/></svg>'
  };

  /* ── guided (autoplay) + free simulator ──── */
  function Sim(root, data){
    this.root = root; this.data = data; this.screens = data.screens;
    this.mode = "guide"; this.flow = null; this.i = 0; this.busy = false; this.cur = null; this.token = 0;
    this.playing = true; this.visible = false; this.runId = 0; this.progAnim = null;
    this.build();
    this.setFlow(data.flows && data.flows.length ? data.flows[0].id : null);
    this.watch();
  }
  Sim.prototype.build = function(){
    var d = this.data, self = this, r = this.root;
    r.classList.add("sim"); r.innerHTML = "";
    var side = h("div", "sim-side");
    var tabs = h("div", "sim-tabs"); tabs.setAttribute("role", "tablist");
    (d.flows || []).forEach(function(f){
      var b = h("button", "sim-tab", esc(f.title)); b.type = "button"; b.dataset.id = f.id; b.setAttribute("role", "tab");
      b.addEventListener("click", function(){ self.setFlow(f.id); self.showStage(); });
      tabs.appendChild(b);
    });
    var free = h("button", "sim-tab free", "Explore freely"); free.type = "button";
    free.addEventListener("click", function(){ self.setMode("free"); self.showStage(); });
    tabs.appendChild(free);
    this.tabs = tabs;
    this.desc = h("p", "sim-desc");
    this.steps = h("ol", "sim-steps");
    this.freeHint = h("div", "sim-free", '<b>You are driving.</b> Tap any button in the phone — it follows the real bot menus. <span class="sim-path"></span>');
    this.prog = h("div", "sim-prog", "<i></i>");
    var ctl = h("div", "sim-ctl");
    this.btnBack = h("button", "sim-btn ghost", ICON.back + "<span>Back</span>"); this.btnBack.type = "button";
    this.btnPlay = h("button", "sim-btn play", ICON.pause + ICON.play + "<span>Pause</span>"); this.btnPlay.type = "button";
    this.btnNext = h("button", "sim-btn", "<span>Next step</span>" + ICON.next); this.btnNext.type = "button";
    this.btnReset = h("button", "sim-btn ghost free-only", "<span>Restart</span>"); this.btnReset.type = "button";
    this.btnBack.addEventListener("click", function(){ self.userStep(function(){ self.go(self.i - 1); }); });
    this.btnNext.addEventListener("click", function(){ self.userStep(function(){ return self.advance(); }); });
    this.btnPlay.addEventListener("click", function(){ self.setPlaying(!self.playing); });
    this.btnReset.addEventListener("click", function(){ self.resetFree(); });
    [this.btnBack, this.btnPlay, this.btnNext, this.btnReset].forEach(function(b){ ctl.appendChild(b); });
    [tabs, this.desc, this.steps, this.freeHint].forEach(function(n){ side.appendChild(n); });

    var stage = h("div", "sim-stage");
    this.ph = phone(d.botName || "WZML-X", "bot"); stage.appendChild(this.ph);
    this.caption = h("div", "sim-cap"); stage.appendChild(this.caption);
    stage.appendChild(this.prog); stage.appendChild(ctl);
    r.appendChild(side); r.appendChild(stage);
    this.scroll = $(".tg-scroll", this.ph);

    this.ph.addEventListener("click", function(e){
      var b = e.target.closest(".kbtn"); if(!b || self.busy) return;
      if(self.mode === "free"){ self.tap(b.dataset.t, b.dataset.to); }
      else if(b.classList.contains("hint")){ self.userStep(function(){ return self.advance(); }); }
      else { anim(b, [{transform: "translateX(0)"}, {transform: "translateX(-3px)"}, {transform: "translateX(3px)"}, {transform: "translateX(0)"}], {duration: 300}); }
    });
  };
  /* only run while the player is actually on screen */
  Sim.prototype.watch = function(){
    var self = this;
    if(!("IntersectionObserver" in window)){ this.visible = true; this.kick(); return; }
    this.io = new IntersectionObserver(function(en){ self.visible = en[0].isIntersecting; if(self.visible) self.kick(); }, {threshold: .35}); this.io.observe(this.root);
  };

  Sim.prototype.destroy = function(){ this.dead = true; this.runId++; this.token++; this.stopProg(); if(this.io) this.io.disconnect(); };

  /* ── autoplay engine ─────────────────────── */
  Sim.prototype.setPlaying = function(on){
    this.playing = !!on; this.root.classList.toggle("paused", !this.playing);
    $("span", this.btnPlay).textContent = this.playing ? "Pause" : "Play";
    this.btnPlay.setAttribute("aria-label", this.playing ? "Pause the walkthrough" : "Play the walkthrough");
    if(this.progAnim){ this.playing ? this.progAnim.play() : this.progAnim.pause(); }
    if(this.playing) this.kick(); else this.runId++;
  };
  /* a manual Back / Next: do it, then let the autoplay timer start fresh */
  Sim.prototype.userStep = function(fn){
    this.runId++; this.stopProg();
    var self = this, r = fn();
    Promise.resolve(r).then(function(){ if(self.playing) self.kick(); });
  };
  Sim.prototype.dwell = function(){
    var st = this.flow && this.flow.steps[this.i], len = st && st.say ? st.say.length : 40;
    return clamp(1500 + len * 26, 2200, 5200);
  };
  function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }
  Sim.prototype.stopProg = function(){ if(this.progAnim){ this.progAnim.cancel(); this.progAnim = null; } };
  Sim.prototype.kick = function(){
    if(this.mode !== "guide" || !this.playing || !this.visible || !this.flow) return;
    var self = this, id = ++this.runId;
    (async function(){
      while(id === self.runId && self.playing && self.visible && self.mode === "guide"){
        var d = self.dwell(), bar = $("i", self.prog);
        self.stopProg();
        self.progAnim = anim(bar, [{transform: "scaleX(0)"}, {transform: "scaleX(1)"}], {duration: d, easing: "linear", fill: "forwards"});
        await pause(d);
        if(id !== self.runId || !self.playing || !self.visible || self.mode !== "guide") return;
        var last = self.i >= self.flow.steps.length - 1;
        if(last){
          self.stopProg(); await self.advance(); await pause(2600);
          if(id !== self.runId || !self.playing) return;
          self.nextFlow(); return;                       /* nextFlow() restarts the loop */
        }
        await self.advance();
        if(id !== self.runId) return;
      }
    })();
  };
  Sim.prototype.nextFlow = function(){
    var fl = this.data.flows || [], k = 0;
    for(var j = 0; j < fl.length; j++) if(this.flow && fl[j].id === this.flow.id) k = j;
    this.setFlow(fl[(k + 1) % fl.length].id);
  };

  Sim.prototype.setMode = function(m){
    this.mode = m; this.root.dataset.mode = m; this.runId++; this.stopProg();
    Array.prototype.forEach.call(this.tabs.children, function(b){
      var on = m === "free" ? b.classList.contains("free") : (!b.classList.contains("free") && b.dataset.id === (this.flow && this.flow.id));
      b.classList.toggle("on", on); b.setAttribute("aria-selected", on ? "true" : "false");
    }, this);
    if(m === "free"){ this.resetFree(); }
    else if(this.flow){ this.go(0); this.kick(); }
  };
  /* After picking a walkthrough, bring the phone back into view so it can be watched from step 1. */
  Sim.prototype.showStage = function(){
    var st = this.ph.closest(".sim-stage") || this.ph, r = st.getBoundingClientRect();
    if(r.top >= 70 && r.bottom <= innerHeight) return;
    scrollTo({top: Math.max(0, r.top + pageYOffset - 84), behavior: "smooth"});
  };
  Sim.prototype.setFlow = function(id){
    var d = this.data;
    this.flow = (d.flows || []).filter(function(f){ return f.id === id; })[0] || null;
    this.mode = "guide"; this.root.dataset.mode = "guide";
    if(!this.flow){ this.setMode("free"); return; }
    this.desc.textContent = this.flow.desc || "";
    this.steps.innerHTML = "";
    var self = this;
    this.flow.steps.forEach(function(s, idx){
      var li = h("li", "", '<button type="button"><span class="n">' + (idx + 1) + '</span><span class="t">' + esc(s.say || s.press || "") + '</span></button>');
      li.firstChild.addEventListener("click", function(){ self.userStep(function(){ self.go(idx); }); });
      self.steps.appendChild(li);
    });
    this.setMode("guide");
  };

  /* ── chat plumbing ───────────────────────── */
  Sim.prototype.reset = function(userCmd){
    this.token++;
    this.scroll.innerHTML = "";
    this.userMsg = bubbleOut(userCmd || this.data.command || "/start");
    this.scroll.appendChild(this.userMsg);
    this.botMsg = bubbleIn();
    this.scroll.appendChild(this.botMsg);
    this.cur = null;
  };
  Sim.prototype.alive = function(){ return this.botMsg && this.scroll.contains(this.botMsg) && !this.botMsg.classList.contains("gone"); };

  /* swap the bot's message for another screen: measured height morph + cross-fade + staggered keys */
  Sim.prototype.show = function(id, animate){
    var s = this.screens[id]; if(!s) return Promise.resolve();
    var self = this, msg = this.botMsg, wrap = $(".mwrap", msg), bt = $(".bt", msg), kb = $(".kb", msg), body;
    this.cur = id;
    if(wrap.getAnimations) wrap.getAnimations().forEach(function(x){ x.cancel(); });
    Array.prototype.forEach.call(wrap.querySelectorAll(".ghost"), function(g){ g.remove(); });
    wrap.classList.remove("morphing");
    body = wrap.querySelector(".mbody:not(.ghost)");
    var render = function(){
      bt.innerHTML = fmt(s.text);
      fillKb(kb, s.rows);
      msg.dataset.kind = s.kind || "menu";
      self.markHint();
      var path = $(".sim-path", self.freeHint); if(path){ path.textContent = id; }
    };
    if(!animate || !wrap.animate){ render(); scrollDown(this.scroll); return Promise.resolve(); }

    var h0 = wrap.getBoundingClientRect().height;
    var ghost = body.cloneNode(true); ghost.classList.add("ghost"); ghost.setAttribute("aria-hidden", "true");
    render();
    var h1 = wrap.getBoundingClientRect().height;
    wrap.classList.add("morphing"); wrap.insertBefore(ghost, body);
    var dur = 380, done = [];
    done.push(anim(wrap, [{height: h0 + "px"}, {height: h1 + "px"}], {duration: dur, easing: EASE}).finished);
    done.push(anim(ghost, [{opacity: 1, transform: "none", filter: "blur(0)"}, {opacity: 0, transform: "translateY(-8px) scale(.985)", filter: "blur(2px)"}], {duration: 220, easing: "ease-out", fill: "forwards"}).finished);
    anim(body, [{opacity: 0, transform: "translateY(10px)"}, {opacity: 1, transform: "none"}], {duration: 320, delay: 80, easing: EASE, fill: "backwards"});
    Array.prototype.forEach.call(kb.children, function(row, k){
      anim(row, [{opacity: 0, transform: "translateY(8px) scale(.97)"}, {opacity: 1, transform: "none"}], {duration: 340, delay: 120 + k * 34, easing: EASE, fill: "backwards"});
    });
    var t0 = performance.now(), sc = this.scroll;
    (function follow(){ if(performance.now() - t0 < dur + 80){ sc.scrollTop = sc.scrollHeight; requestAnimationFrame(follow); } })();
    return Promise.all(done).catch(function(){}).then(function(){
      ghost.remove(); wrap.classList.remove("morphing"); sc.scrollTop = sc.scrollHeight;
    });
  };
  Sim.prototype.markHint = function(){
    Array.prototype.forEach.call(this.ph.querySelectorAll(".kbtn.hint"), function(b){ b.classList.remove("hint"); });
    if(this.mode !== "guide" || !this.flow) return;
    var st = this.flow.steps[this.i]; if(!st || !st.press) return;
    var btns = this.ph.querySelectorAll(".kbtn");
    for(var k = 0; k < btns.length; k++){ if(btns[k].dataset.t === st.press){ btns[k].classList.add("hint"); break; } }
  };
  Sim.prototype.findTarget = function(screenId, label){
    var s = this.screens[screenId]; if(!s) return null;
    for(var r = 0; r < s.rows.length; r++) for(var c = 0; c < s.rows[r].length; c++) if(s.rows[r][c].t === label) return s.rows[r][c].to;
    return null;
  };
  /* a tactile press: squish, spring back, ripple from the centre */
  Sim.prototype.pressVisual = function(label){
    var btns = this.ph.querySelectorAll(".kbtn"), hit = null;
    for(var k = 0; k < btns.length; k++){ if(btns[k].dataset.t === label){ hit = btns[k]; break; } }
    if(!hit || !hit.animate) return wait(120);
    var r = hit.getBoundingClientRect(), rip = h("i", "ripple");
    rip.style.cssText = "left:" + (r.width / 2) + "px;top:" + (r.height / 2) + "px";
    hit.appendChild(rip);
    anim(rip, [{transform: "translate(-50%,-50%) scale(0)", opacity: .45}, {transform: "translate(-50%,-50%) scale(" + Math.max(8, r.width / 12) + ")", opacity: 0}], {duration: 560, easing: "ease-out"}).finished.then(function(){ rip.remove(); }, function(){});
    var a = anim(hit, [{transform: "scale(1)"}, {transform: "scale(.92)", offset: .35}, {transform: "scale(1.02)", offset: .7}, {transform: "scale(1)"}], {duration: 280, easing: "ease-out"});
    return a.finished.then(function(){ return pause(90); }, function(){});
  };
  /* tap on a button: visual → go to target (prompt: type reply → after) */
  Sim.prototype.tap = function(label, to, replyText, skipAuto){
    var self = this, tok = this.token; this.busy = true;
    return this.pressVisual(label).then(function(){
      if(tok !== self.token) return;
      if(to === "__close"){
        self.botMsg.classList.add("gone");
        return wait(320).then(function(){ self.busy = false; if(self.mode === "free") self.resetFree(); });
      }
      if(!to || !self.screens[to]) return;
      if(self.screens[to].kind === "alert"){ self.toast(self.screens[to].text); return; }
      return self.show(to, true).then(function(){
        var s = self.screens[to];
        if(tok !== self.token) return;
        if(!skipAuto && s.kind === "prompt" && (replyText || s.reply) && s.after){
          return pause(self.mode === "guide" ? 450 : 650).then(function(){ return self.typeReply(replyText || s.reply, tok); })
            .then(function(){ if(tok !== self.token) return; return self.show(s.after, true); });
        }
      });
    }).then(function(){ self.busy = false; self.markHint(); }, function(){ self.busy = false; });
  };
  Sim.prototype.toast = function(text){
    var screen = $(".phone-screen", this.ph), old = $(".tg-toast", screen); if(old) old.remove();
    var t = h("div", "tg-toast", fmt(String(text).replace(/<[^>]+>/g, "")));
    screen.appendChild(t); setTimeout(function(){ t.classList.add("out"); setTimeout(function(){ t.remove(); }, 300); }, 2600);
  };
  Sim.prototype.typeReply = function(text, tok){
    var self = this, m = bubbleOut(""), bub = $(".bub", m);
    var mt = $(".mt", m); var holder = document.createElement("span"); bub.insertBefore(holder, mt);
    this.scroll.appendChild(m);
    scrollDown(this.scroll);
    var i = 0, str = String(text);
    return new Promise(function(res){
      (function tick(){
        if(tok !== self.token){ m.remove(); return res(); }
        holder.textContent = str.slice(0, ++i);
        scrollDown(self.scroll);
        if(i < str.length){ setTimeout(tick, 30 + Math.random() * 32); }
        else { setTimeout(function(){ m.classList.add("gone"); setTimeout(function(){ m.remove(); res(); }, 300); }, 560); }
      })();
    });
  };

  Sim.prototype.setCaption = function(html){
    var c = this.caption; if(c.innerHTML === html) return;
    if(!c.animate){ c.innerHTML = html; return; }
    var out = c.animate([{opacity: 1, transform: "none"}, {opacity: 0, transform: "translateY(-4px)"}], {duration: 110, fill: "forwards"});
    out.finished.then(function(){ c.innerHTML = html; out.cancel(); c.animate([{opacity: 0, transform: "translateY(5px)"}, {opacity: 1, transform: "none"}], {duration: 280, easing: EASE}); });
  };
  Sim.prototype.renderSteps = function(){
    var items = this.steps.children, i = this.i;
    for(var k = 0; k < items.length; k++){
      items[k].classList.toggle("on", k === i); items[k].classList.toggle("done", k < i);
    }
    var st = this.flow && this.flow.steps[i];
    this.setCaption(st ? '<b>Step ' + (i + 1) + ' of ' + this.flow.steps.length + '</b> ' + esc(st.say || "") : "");
    this.btnBack.disabled = i <= 0;
    $("span", this.btnNext).textContent = i >= this.flow.steps.length - 1 ? (this.finishedFlag ? "Replay" : "Finish") : "Next step";
  };
  Sim.prototype.go = function(idx){
    if(!this.flow) return Promise.resolve();
    var n = this.flow.steps.length; idx = Math.max(0, Math.min(n - 1, idx));
    var self = this, st = this.flow.steps[idx]; this.i = idx; this.token++; this.busy = false; this.finishedFlag = false;
    this.renderSteps();
    if(this.alive()){
      Array.prototype.slice.call(this.scroll.querySelectorAll(".msg.out")).slice(1).forEach(function(m){ m.remove(); });
      return this.show(st.screen, true).then(function(){ self.markHint(); });
    }
    this.reset(this.data.command);
    this.botMsg.classList.remove("enter"); this.userMsg.classList.remove("enter");
    return this.show(st.screen, false).then(function(){ self.markHint(); });
  };
  /* do the current step (press the button / type the reply), then move on. Resolves when it is finished. */
  Sim.prototype.advance = function(){
    if(this.busy || !this.flow) return Promise.resolve();
    var steps = this.flow.steps, st = steps[this.i], nx = steps[this.i + 1], self = this, last = this.i >= steps.length - 1;
    var step = function(){
      if(last){ self.setCaption('<b>Done.</b> Replay it, or pick another walkthrough above.'); self.finishedFlag = true; $("span", self.btnNext).textContent = "Replay"; return; }
      self.i++; self.renderSteps(); self.markHint();
    };
    if(last && this.finishedFlag){ this.finishedFlag = false; return this.go(0); }   /* "Replay" */
    var cur = this.cur || st.screen, scr = this.screens[cur];
    if(!st.press){ /* a reply step: the user types into a prompt */
      if(scr && scr.kind === "prompt" && (st.reply || scr.reply) && scr.after){
        this.busy = true; var tok = this.token;
        return this.typeReply(st.reply || scr.reply, tok).then(function(){ return self.show(scr.after, true); }).then(function(){ self.busy = false; step(); });
      }
      step(); return Promise.resolve();
    }
    var to = this.findTarget(cur, st.press);
    var skipAuto = nx && nx.screen === to && !nx.press;
    return this.tap(st.press, to, st.reply, skipAuto).then(step);
  };
  Sim.prototype.resetFree = function(){
    this.token++; this.busy = false; this.runId++; this.stopProg();
    if(this.alive()){
      Array.prototype.slice.call(this.scroll.querySelectorAll(".msg.out")).slice(1).forEach(function(m){ m.remove(); });
      this.show(this.data.start || "main", true);
    } else {
      this.reset(this.data.command);
      this.botMsg.classList.remove("enter"); this.userMsg.classList.remove("enter");
      this.show(this.data.start || "main", false);
    }
    this.setCaption("<b>Free mode</b> — every button is live.");
    this.root.dataset.mode = "free";
    Array.prototype.forEach.call(this.tabs.children, function(b){ b.classList.toggle("on", b.classList.contains("free")); });
  };

  /* ── hero: scripted /leech task ──────────── */
  function heroScene(el){
    var p = phone("WZML-X", "bot"); el.appendChild(p);
    var scroll = $(".tg-scroll", p), alive = true, loopTok = 0;
    var BAR = function(pct){
      var full = Math.floor(pct / 8), part = Math.floor(pct % 8 - 1), s = "■".repeat(full);
      if(part >= 0) s += ["▤", "▥", "▦", "▧", "▨", "▩", "■"][part];
      return "[" + s + "□".repeat(Math.max(0, 12 - full)) + "]";
    };
    function status(pct, phase, speed, eta, proc){
      return '<b>1.</b> <b><i>Dune.Part.Two.2024.2160p.mkv</i></b><br><br><b>Task By You</b> ( #ID1042 )<br>' +
        '┟ ' + BAR(pct) + ' <i>' + pct.toFixed(1) + '%</i><br>' +
        '┠ <b>Processed</b> → <i>' + proc + ' of 3.62GB</i><br>' +
        '┠ <b>Status</b> → <b>' + phase + '</b><br>' +
        '┠ <b>Speed</b> → <i>' + speed + '</i><br>' +
        '┠ <b>Time</b> → <i>' + eta + '</i><br>' +
        '┠ <b>Engine</b> → <i>qBittorrent</i><br>' +
        '┠ <b>In Mode</b> → <i>#qBit</i><br>' +
        '┠ <b>Out Mode</b> → <i>#Leech</i><br>' +
        '<b>┖ Stop</b> → <i>/c_a41f9c2e</i>';
    }
    var cmd = "/ql magnet:?xt=urn:btih:9f2e… -ff av1 -n Dune";
    async function run(){
      var tok = ++loopTok;
      while(alive && tok === loopTok){
        scroll.innerHTML = "";
        await wait(1400); if(!alive) return;
        var m = bubbleOut(""); var bub = $(".bub", m), mt = $(".mt", m), span = document.createElement("span"); bub.insertBefore(span, mt);
        scroll.appendChild(m);
        for(var i = 1; i <= cmd.length; i++){ span.textContent = cmd.slice(0, i); await wait(62 + Math.random() * 28); if(!alive || tok !== loopTok) return; }
        await wait(900);
        var b = bubbleIn(); scroll.appendChild(b); var bt = $(".bt", b); var kb = $(".kb", b);
        function put(html){ bt.innerHTML = html; if(bt.animate) bt.animate([{opacity: .35, transform: "translateY(3px)"}, {opacity: 1, transform: "none"}], {duration: 650, easing: EASE}); }
        put("<b>Task has been added</b> <i>#qBit</i><br>Your task is in queue. Check /status."); scrollDown(scroll);
        await wait(2200);
        var phases = [[3, "Download", "9.4MB/s", "6m 2s of 6m 19s", "0.11GB"], [26, "Download", "42.8MB/s", "1m 21s of 2m 3s", "0.94GB"], [58, "Download", "51.1MB/s", "34s of 1m 40s", "2.10GB"], [96, "Download", "47.9MB/s", "2s of 1m 51s", "3.48GB"]];
        for(var k = 0; k < phases.length; k++){ put(status.apply(null, phases[k])); scrollDown(scroll); await wait(2300); if(!alive || tok !== loopTok) return; }
        var enc = [[12, "FFmpeg", "1.9x", "11m of 12m 8s", "0.44GB"], [47, "FFmpeg", "1.9x", "6m of 12m 8s", "1.70GB"], [88, "FFmpeg", "1.9x", "1m of 12m 8s", "3.18GB"]];
        for(k = 0; k < enc.length; k++){ var e = enc[k]; put(status(e[0], e[1], e[2], e[3], e[4])); scrollDown(scroll); await wait(2100); if(!alive || tok !== loopTok) return; }
        var up = [[34, "Upload", "31.2MB/s", "46s of 1m 10s", "0.78GB"], [81, "Upload", "33.5MB/s", "13s of 1m 8s", "1.84GB"]];
        for(k = 0; k < up.length; k++){ var u = up[k]; put(status(u[0], u[1], u[2], u[3], u[4])); await wait(2000); if(!alive || tok !== loopTok) return; }
        put('<b>Dune.mkv</b><br>┌ <b>Size</b> → 1.41GB<br>├ <b>Type</b> → Video<br>└ <b>Leeched by</b> → You<br><br><i>Cc: Dune.mkv</i>');
        fillKb(kb, [[{t: "Cloud Link", to: ""}, {t: "Open in Telegram", to: ""}]]);
        scrollDown(scroll);
        await wait(6500);
      }
    }
    var io = new IntersectionObserver(function(en){
      en.forEach(function(x){ if(x.isIntersecting && !alive){ alive = true; run(); } else if(!x.isIntersecting){ alive = false; loopTok++; } });
    }, {threshold: .15});
    alive = false; io.observe(el);
    return {run: function(){ alive = true; run(); }};
  }

  window.WZSim = {
    mount: function(el){
      var key = el.dataset.bot, tries = 0;
      (function go(){
        var d = window.WZ_SCREENS && window.WZ_SCREENS[key];
        if(d){ if(el._sim) el._sim.destroy(); el._sim = new Sim(el, d); return; }
        if(++tries > 80){ el.innerHTML = '<p class="empty">Walkthrough data failed to load.</p>'; return; }
        setTimeout(go, 100);
      })();
    },
    hero: heroScene,
    phone: phone, bubbleOut: bubbleOut, bubbleIn: bubbleIn, fillKb: fillKb, fmt: fmt, esc: esc
  };
})();
