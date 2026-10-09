// 下載紀念圖：在瀏覽器裡把本卦＋變卦牌卡、我的啟發、日期落款合成一張 JPG，不上傳
// makeKeepsake({ primary, changed, insight, date }) → Promise<Blob>
//   primary／changed：卦資料（changed 為 null 表示沒有動爻）；date：「2026.10.09」
//   不放問事內容（避免私事外流）
(function () {
  var CW = 683, CH = 1024;   // 網頁版牌卡尺寸
  // 插畫區（原圖 1024×1536 的 y=170～1352、x=22～1002）換算成網頁版座標；變卦只翻這一塊
  var BAND = { x: 22 * CW / 1024, y: 170 * CH / 1536, w: 980 * CW / 1024, h: 1182 * CH / 1536 };
  var NO_HEAD = '，。；：、！？」』）〉》．,.;:!?)';   // 這些標點不放行首

  function cardSrc(g) {
    return 'images/hexagrams/card-' + (g.number < 10 ? '0' : '') + g.number + '.jpg';
  }

  function loadImg(src) {
    return new Promise(function (ok, bad) {
      var im = new Image();
      im.onload = function () { ok(im); };
      im.onerror = bad;
      im.src = src;
    });
  }

  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  // 依寬度斷行；遇到標點要放行首時，把它留在上一行尾
  function wrapLines(text, font, maxW) {
    var mc = document.createElement('canvas').getContext('2d');
    mc.font = font;
    var lines = [], line = '';
    Array.from(text).forEach(function (chr) {
      if (line && mc.measureText(line + chr).width > maxW && NO_HEAD.indexOf(chr) < 0) {
        lines.push(line);
        line = chr;
      } else {
        line += chr;
      }
    });
    if (line) lines.push(line);
    return lines;
  }

  function drawCard(g, img, x, y, mirror) {
    g.save();
    g.shadowColor = 'rgba(0,0,0,0.6)';
    g.shadowBlur = 30;
    g.shadowOffsetY = 12;
    roundRect(g, x, y, CW, CH, 10);
    g.fillStyle = '#1a1d2e';
    g.fill();
    g.restore();

    g.save();
    roundRect(g, x, y, CW, CH, 10);
    g.clip();
    g.drawImage(img, x, y, CW, CH);
    if (mirror) {
      g.beginPath();
      g.rect(x + BAND.x, y + BAND.y, BAND.w, BAND.h);
      g.clip();
      g.translate(x + CW, y);
      g.scale(-1, 1);
      g.drawImage(img, 0, 0, CW, CH);
    }
    g.restore();

    g.strokeStyle = 'rgba(214,180,106,0.6)';
    g.lineWidth = 2;
    roundRect(g, x, y, CW, CH, 10);
    g.stroke();
  }

  window.makeKeepsake = function (opts) {
    var p = opts.primary, c = opts.changed;
    var srcs = [cardSrc(p)].concat(c ? [cardSrc(c)] : []);
    var ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();

    return ready.then(function () {
      return Promise.all(srcs.map(loadImg));
    }).then(function (ims) {
      var font = getComputedStyle(document.body).fontFamily;
      var m = 90, gap = 120, top = 260, bottom = 200;
      var cardsW = c ? CW * 2 + gap : CW;
      var Wc = m * 2 + cardsW;

      // 啟發文字先排行，決定方框高度
      var text = (opts.insight || '').replace(/\s+/g, ' ').trim();
      var padX = 56, fs = 40, lh = 66;
      var lines = text ? wrapLines(text, fs + 'px ' + font, cardsW - padX * 2) : [];
      var boxTop = top + CH + 96;
      var boxH = lines.length ? 70 + lines.length * lh + 30 : 0;
      var Hc = top + CH + (lines.length ? 96 + boxH : 0) + bottom;

      var cv = document.createElement('canvas');
      cv.width = Wc;
      cv.height = Hc;
      var g = cv.getContext('2d');

      // 夜空底＋銀河＋星星
      var bg = g.createLinearGradient(0, 0, 0, Hc);
      bg.addColorStop(0, '#0b1232');
      bg.addColorStop(1, '#05071a');
      g.fillStyle = bg;
      g.fillRect(0, 0, Wc, Hc);
      g.save();
      g.translate(Wc / 2, Hc / 2);
      g.rotate(-0.5);
      var mw = g.createLinearGradient(0, -260, 0, 260);
      mw.addColorStop(0, 'rgba(90,110,190,0)');
      mw.addColorStop(0.5, 'rgba(214,180,106,0.10)');
      mw.addColorStop(1, 'rgba(90,110,190,0)');
      g.fillStyle = mw;
      g.fillRect(-Wc * 1.5, -260, Wc * 3, 520);
      g.restore();
      var starCount = Math.round(Wc * Hc / 4500);
      for (var i = 0; i < starCount; i++) {
        var gold = Math.random() < 0.25;
        g.globalAlpha = 0.3 + Math.random() * 0.7;
        g.fillStyle = gold ? '#f2d58f' : '#dfe6ff';
        g.beginPath();
        g.arc(Math.random() * Wc, Math.random() * Hc, gold ? 0.8 + Math.random() * 1.6 : 0.5 + Math.random(), 0, 6.283);
        g.fill();
      }
      g.globalAlpha = 1;

      // 金色雙框
      g.strokeStyle = 'rgba(214,180,106,0.7)';
      g.lineWidth = 2;
      g.strokeRect(28, 28, Wc - 56, Hc - 56);
      g.strokeStyle = 'rgba(214,180,106,0.3)';
      g.lineWidth = 1;
      g.strokeRect(40, 40, Wc - 80, Hc - 80);

      // 標題：占得＋卦名
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillStyle = '#b9b09c';
      g.font = '30px ' + font;
      g.fillText('占　得', Wc / 2, 112);
      g.save();
      g.fillStyle = '#f0d48e';
      g.shadowColor = 'rgba(240,212,142,0.45)';
      g.shadowBlur = 24;
      g.font = 'bold 88px ' + font;
      g.fillText(c ? p.name + '　之　' + c.name : p.name, Wc / 2, 186);
      g.restore();

      // 牌卡與名稱
      drawCard(g, ims[0], m, top, false);
      g.fillStyle = '#b9b09c';
      g.font = '30px ' + font;
      g.fillText('本卦　' + p.fullName, m + CW / 2, top + CH + 48);
      if (c) {
        drawCard(g, ims[1], m + CW + gap, top, true);
        g.fillStyle = '#b9b09c';
        g.fillText('變卦　' + c.fullName, m + CW + gap + CW / 2, top + CH + 48);
        g.fillStyle = '#d6b46a';
        g.font = '64px ' + font;
        g.fillText('→', Wc / 2, top + CH / 2);
      }

      // 我的啟發方框
      if (lines.length) {
        g.fillStyle = 'rgba(12,18,46,0.82)';
        roundRect(g, m, boxTop, cardsW, boxH, 12);
        g.fill();
        g.strokeStyle = 'rgba(214,180,106,0.6)';
        g.lineWidth = 2;
        roundRect(g, m, boxTop, cardsW, boxH, 12);
        g.stroke();
        g.strokeStyle = 'rgba(214,180,106,0.2)';
        g.lineWidth = 1;
        roundRect(g, m + 8, boxTop + 8, cardsW - 16, boxH - 16, 8);
        g.stroke();
        g.textAlign = 'left';
        g.fillStyle = '#d6b46a';
        g.font = '26px ' + font;
        g.fillText('我 的 啟 發', m + padX, boxTop + 44);
        g.fillStyle = '#efe6d2';
        g.font = fs + 'px ' + font;
        lines.forEach(function (ln, li) {
          g.fillText(ln, m + padX, boxTop + 70 + lh * li + lh / 2 + 8);
        });
      }

      // 落款：日期＋網站名＋易印
      g.textAlign = 'right';
      g.fillStyle = '#d6b46a';
      g.font = '30px ' + font;
      g.fillText(opts.date + '　龜卜卜線上求卦', Wc - m - 70, Hc - 92);
      g.fillStyle = '#b0352a';
      roundRect(g, Wc - m - 52, Hc - 118, 52, 52, 6);
      g.fill();
      g.fillStyle = '#fdf6e8';
      g.textAlign = 'center';
      g.font = 'bold 32px ' + font;
      g.fillText('易', Wc - m - 26, Hc - 91);

      return new Promise(function (ok, bad) {
        cv.toBlob(function (blob) { if (blob) ok(blob); else bad(new Error('toBlob')); }, 'image/jpeg', 0.9);
      });
    });
  };
})();
