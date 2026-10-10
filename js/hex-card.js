// 卦象牌卡（首頁與卦典頁共用）：images/hexagrams/card-01.jpg～card-64.jpg
// 點牌卡全畫面放大，再點一下或按 Esc 關閉；變卦的翻轉由 CSS 處理
var HexCard = (function () {
  var cardZoom = document.getElementById('card-zoom');
  var cardZoomCard = document.getElementById('card-zoom-card');
  var zoomFrom = null;   // 關閉放大後，焦點回到原本那張牌卡

  function src(g) {
    return 'images/hexagrams/card-' + (g.number < 10 ? '0' : '') + g.number + '.jpg';
  }

  function set(btn, g) {
    var s = src(g);
    Array.prototype.forEach.call(btn.querySelectorAll('img'), function (img) {
      if (img.getAttribute('src') !== s) img.src = s;
    });
    btn.querySelector('img').alt = '第' + g.number + '卦　' + g.fullName + '牌卡';
    btn.setAttribute('aria-label', '放大 第' + g.number + '卦　' + g.fullName + '牌卡');
  }

  function openZoom(btn) {
    var s = btn.querySelector('img').getAttribute('src');
    Array.prototype.forEach.call(cardZoomCard.querySelectorAll('img'), function (img) { img.src = s; });
    cardZoomCard.querySelector('img').alt = btn.querySelector('img').alt;
    cardZoomCard.classList.toggle('is-mirror', btn.classList.contains('is-mirror'));
    cardZoom.hidden = false;
    document.body.classList.add('zoom-open');
    cardZoomCard.focus();
    zoomFrom = btn;
  }

  function closeZoom() {
    if (cardZoom.hidden) return;
    cardZoom.hidden = true;
    document.body.classList.remove('zoom-open');
    if (zoomFrom) zoomFrom.focus();
  }

  function bind(btn) {
    btn.addEventListener('click', function () { openZoom(btn); });
  }

  cardZoom.addEventListener('click', closeZoom);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeZoom();
  });

  return { src: src, set: set, bind: bind, close: closeZoom };
})();
