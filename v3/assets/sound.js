/* Procedural sound design — no audio files. Starts at the visitor's first tap/key (browsers block autoplay). */
(function(){
  "use strict";
  var ctx = null, master = null, noiseBuf = null, on = false, padNodes = null, lastThunk = 0;

  function ensure(){
    if(ctx) return true;
    var AC = window.AudioContext || window.webkitAudioContext; if(!AC) return false;
    ctx = new AC(); master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    var len = ctx.sampleRate * 1.2; noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = noiseBuf.getChannelData(0); for(var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return true;
  }
  function now(){ return ctx.currentTime; }
  function noise(dur, type, f0, f1, vol){
    var s = ctx.createBufferSource(); s.buffer = noiseBuf;
    var f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(f0, now());
    if(f1) f.frequency.exponentialRampToValueAtTime(f1, now() + dur);
    var g = ctx.createGain(); g.gain.setValueAtTime(0, now()); g.gain.linearRampToValueAtTime(vol, now() + Math.min(.02, dur / 3)); g.gain.exponentialRampToValueAtTime(.0001, now() + dur);
    s.connect(f); f.connect(g); g.connect(master); s.start(now(), Math.random() * .5, dur + .05);
  }
  function tone(freq, dur, vol, type, glideTo){
    var o = ctx.createOscillator(); o.type = type || "sine"; o.frequency.setValueAtTime(freq, now());
    if(glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, now() + dur);
    var g = ctx.createGain(); g.gain.setValueAtTime(0, now()); g.gain.linearRampToValueAtTime(vol, now() + .015); g.gain.exponentialRampToValueAtTime(.0001, now() + dur);
    o.connect(g); g.connect(master); o.start(); o.stop(now() + dur + .05);
  }

  var Sound = {
    get on(){ return on; },
    set: function(v){
      if(v && !ensure()) return false;
      on = !!v;
      if(ctx){
        if(on && ctx.state === "suspended") ctx.resume();
        master.gain.cancelScheduledValues(now()); master.gain.linearRampToValueAtTime(on ? .5 : 0, now() + .25);
        if(!on) Sound.padStop();
      }
      return true;
    },
    tick: function(){ if(!on) return; noise(.018, "highpass", 3200 + Math.random() * 1400, 0, .22); tone(900 + Math.random() * 200, .03, .02, "square"); },
    pop: function(){ if(!on) return; tone(520, .09, .12, "sine", 780); },
    whoosh: function(){ if(!on) return; noise(.9, "bandpass", 300, 3800, .5); tone(110, .8, .06, "sawtooth", 60); },
    thunk: function(){ if(!on) return; var t = performance.now(); if(t - lastThunk < 160) return; lastThunk = t; tone(150, .22, .22, "sine", 48); noise(.05, "lowpass", 600, 0, .16); },
    lock: function(){ if(!on) return; tone(220, .35, .1, "triangle", 110); },
    chime: function(){ if(!on) return; [523.25, 659.25, 783.99, 1046.5].forEach(function(f, i){ setTimeout(function(){ if(on) tone(f, 1.4, .13, "sine"); }, i * 110); }); },
    padStart: function(){
      if(!on || padNodes) return;
      var o1 = ctx.createOscillator(), o2 = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
      o1.type = "sawtooth"; o2.type = "sawtooth"; o1.frequency.value = 82; o2.frequency.value = 82.9;
      f.type = "lowpass"; f.frequency.value = 180; g.gain.value = 0;
      o1.connect(f); o2.connect(f); f.connect(g); g.connect(master); o1.start(); o2.start();
      g.gain.linearRampToValueAtTime(.18, now() + .6);
      padNodes = {o1: o1, o2: o2, f: f, g: g};
    },
    padSet: function(p){ /* p: 0..1 — pitch and brightness rise with the hold */
      if(!padNodes) return;
      var t = now(); padNodes.o1.frequency.setTargetAtTime(82 + p * 120, t, .08); padNodes.o2.frequency.setTargetAtTime(82.9 + p * 121, t, .08);
      padNodes.f.frequency.setTargetAtTime(180 + p * p * 4200, t, .08); padNodes.g.gain.setTargetAtTime(.12 + p * .22, t, .1);
    },
    padStop: function(){
      if(!padNodes) return; var n = padNodes; padNodes = null;
      n.g.gain.cancelScheduledValues(now()); n.g.gain.setTargetAtTime(0, now(), .12);
      setTimeout(function(){ try{ n.o1.stop(); n.o2.stop(); }catch(e){} }, 600);
    }
  };
  window.WZSound = Sound;
})();
