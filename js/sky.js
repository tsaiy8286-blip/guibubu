// 流金星空背景：銀河柔光、閃爍星星（繞天極極慢旋轉）、北斗七星金線、上浮金色微塵、偶發金色流星
// 「減少動態效果」時只畫一張靜止星空；切到別的分頁時暫停
(function () {
  var canvas = document.getElementById('sky');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var motionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var reduce = motionQuery ? motionQuery.matches : false;

  var W, H, stars = [], dust = [], meteor = null, nextMeteor = 0;
  var start = performance.now(), last = start, running = !document.hidden, rafId = 0;

  // 北斗七星（相對座標，左上角起）
  var DIPPER = [[0, 0], [0.09, 0.03], [0.17, 0.08], [0.25, 0.09], [0.31, 0.16], [0.42, 0.13], [0.39, 0.03]];
  var TURN_SECONDS = 2400;   // 星空轉一圈約 40 分鐘
  var DIPPER_CYCLE = 16;     // 北斗描出、停留、淡去一輪約 16 秒

  function rand(a, b) { return a + Math.random() * (b - a); }

  function newDust(anywhere) {
    return { x: rand(0, W), y: anywhere ? rand(0, H) : H + 10, vy: rand(6, 16), vx: rand(-3, 3), s: rand(0.6, 1.6), life: rand(0.4, 1) };
  }

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var reach = Math.hypot(W, H) * 1.15;
    var count = Math.round(Math.min(420, W * H / 2600));
    stars = [];
    for (var i = 0; i < count; i++) {
      var gold = Math.random() < 0.22;
      stars.push({
        a: rand(0, Math.PI * 2), r: Math.sqrt(Math.random()) * reach,
        s: gold ? rand(0.8, 1.8) : rand(0.4, 1.2), gold: gold, tw: rand(0.6, 2.2), ph: rand(0, 6.28)
      });
    }
    dust = [];
    for (var j = 0; j < 46; j++) dust.push(newDust(true));
    if (reduce || !running) draw(performance.now(), 0);
  }

  function draw(now, dt) {
    var t = (now - start) / 1000;
    ctx.clearRect(0, 0, W, H);

    // 底色
    var bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#0a1030');
    bg.addColorStop(0.55, '#070b22');
    bg.addColorStop(1, '#05071a');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // 銀河：斜向柔光帶
    ctx.save();
    ctx.translate(W * 0.5, H * 0.45);
    ctx.rotate(-0.55);
    var band = H * 0.22;
    var mw = ctx.createLinearGradient(0, -band, 0, band);
    mw.addColorStop(0, 'rgba(60,80,160,0)');
    mw.addColorStop(0.45, 'rgba(90,110,190,0.16)');
    mw.addColorStop(0.5, 'rgba(214,180,106,0.10)');
    mw.addColorStop(0.55, 'rgba(90,110,190,0.16)');
    mw.addColorStop(1, 'rgba(60,80,160,0)');
    ctx.fillStyle = mw;
    ctx.fillRect(-W * 1.2, -band, W * 2.4, band * 2);
    ctx.restore();

    // 星星：繞右上方畫面外的天極旋轉
    var px = W * 0.82, py = -H * 0.15;
    var rot = reduce ? 0 : t * (Math.PI * 2 / TURN_SECONDS);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i], a = s.a + rot;
      var x = px + Math.cos(a) * s.r, y = py + Math.sin(a) * s.r;
      if (x < -5 || x > W + 5 || y < -5 || y > H + 5) continue;
      var tw = reduce ? 0.8 : 0.55 + 0.45 * Math.sin(t * s.tw + s.ph);
      ctx.globalAlpha = tw;
      ctx.fillStyle = s.gold ? '#f2d58f' : '#dfe6ff';
      ctx.beginPath();
      ctx.arc(x, y, s.s, 0, 6.283);
      ctx.fill();
      if (s.gold && s.s > 1.4) {
        ctx.globalAlpha = tw * 0.25;
        ctx.beginPath();
        ctx.arc(x, y, s.s * 3.2, 0, 6.283);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    // 北斗七星：金線慢慢描出、停留、淡去
    // 寬螢幕放左側空白處；手機沒有空白，放到畫面下方，避開頁首文字
    var k, ox, oy;
    if (W >= 700) { k = Math.min(W * 0.2 / 0.42, H * 0.6); ox = W * 0.05; oy = H * 0.12; }
    else { k = W * 0.85; ox = W * 0.1; oy = H * 0.7; }
    var cyc = reduce ? 0.6 : (t % DIPPER_CYCLE) / DIPPER_CYCLE;
    var drawn = Math.min(1, cyc / 0.35);
    var fade = cyc > 0.8 ? 1 - (cyc - 0.8) / 0.2 : 1;
    var segs = (DIPPER.length - 1) * drawn;
    ctx.strokeStyle = 'rgba(214,180,106,' + (0.55 * fade) + ')';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    for (var d = 0; d < DIPPER.length; d++) {
      var dx = ox + DIPPER[d][0] * k, dy = oy + DIPPER[d][1] * k;
      if (d === 0) { ctx.moveTo(dx, dy); continue; }
      if (d <= segs) { ctx.lineTo(dx, dy); continue; }
      if (d - 1 < segs) {
        var f = segs - (d - 1);
        var qx = ox + DIPPER[d - 1][0] * k, qy = oy + DIPPER[d - 1][1] * k;
        ctx.lineTo(qx + (dx - qx) * f, qy + (dy - qy) * f);
      }
    }
    ctx.stroke();
    for (var e = 0; e < DIPPER.length; e++) {
      var sx = ox + DIPPER[e][0] * k, sy = oy + DIPPER[e][1] * k;
      ctx.fillStyle = 'rgba(246,220,150,' + (0.5 + 0.5 * fade) + ')';
      ctx.beginPath();
      ctx.arc(sx, sy, 1.9, 0, 6.283);
      ctx.fill();
      ctx.fillStyle = 'rgba(246,220,150,' + (0.15 * fade) + ')';
      ctx.beginPath();
      ctx.arc(sx, sy, 6, 0, 6.283);
      ctx.fill();
    }

    if (reduce) return;

    // 流金：金色微塵緩緩上浮
    for (var m = 0; m < dust.length; m++) {
      var u = dust[m];
      u.y -= u.vy * dt;
      u.x += u.vx * dt + Math.sin(t + m) * 0.08;
      if (u.y < -10) { u = dust[m] = newDust(false); }
      var al = Math.min(1, (H - u.y) / (H * 0.3)) * 0.55 * u.life;
      ctx.fillStyle = 'rgba(230,196,120,' + al + ')';
      ctx.beginPath();
      ctx.arc(u.x, u.y, u.s, 0, 6.283);
      ctx.fill();
    }

    // 偶發金色流星（每 15～40 秒一道）
    if (!meteor && t >= nextMeteor) {
      meteor = { x: rand(W * 0.3, W), y: rand(0, H * 0.4), life: 0 };
    }
    if (meteor) {
      meteor.life += dt;
      var L = meteor.life / 1.1;
      var mx = meteor.x - L * 260, my = meteor.y + L * 130;
      var tail = ctx.createLinearGradient(mx, my, mx + 90, my - 45);
      tail.addColorStop(0, 'rgba(250,226,160,' + (0.9 * (1 - L)) + ')');
      tail.addColorStop(1, 'rgba(250,226,160,0)');
      ctx.strokeStyle = tail;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(mx, my);
      ctx.lineTo(mx + 90, my - 45);
      ctx.stroke();
      if (L >= 1) { meteor = null; nextMeteor = t + rand(15, 40); }
    }
  }

  function frame(now) {
    if (!running || reduce) { rafId = 0; return; }
    var dt = Math.min(0.1, (now - last) / 1000);   // 切回分頁時不要一次跳很遠
    last = now;
    draw(now, dt);
    rafId = requestAnimationFrame(frame);
  }

  function play() {
    if (rafId || reduce || !running) return;
    last = performance.now();
    rafId = requestAnimationFrame(frame);
  }

  document.addEventListener('visibilitychange', function () {
    running = !document.hidden;
    if (running) play();
  });

  if (motionQuery) {
    var onMotionChange = function () {
      reduce = motionQuery.matches;
      if (reduce) draw(performance.now(), 0); else play();
    };
    if (motionQuery.addEventListener) motionQuery.addEventListener('change', onMotionChange);
    else if (motionQuery.addListener) motionQuery.addListener(onMotionChange);
  }

  window.addEventListener('resize', resize);
  nextMeteor = rand(6, 20);   // 第一道流星在打開後 6～20 秒內出現
  resize();
  play();
})();
