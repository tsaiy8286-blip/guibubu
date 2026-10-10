// 首頁最下方「六十四卦」：8×8 格，依文王卦序；點卦名前往卦典頁 gua.html#卦序
(function () {
  var grid = document.getElementById('gua-grid');

  // 小卦畫：由上爻往下畫，初爻在最下面
  function miniFigure(bits) {
    var fig = document.createElement('span');
    fig.className = 'mini-figure';
    fig.setAttribute('aria-hidden', 'true');
    for (var i = 5; i >= 0; i--) {
      var bar = document.createElement('span');
      bar.className = 'mini-yao ' + (bits[i] ? 'yao-yang' : 'yao-yin');
      bar.innerHTML = bits[i] ? '<i></i>' : '<i></i><i></i>';
      fig.appendChild(bar);
    }
    return fig;
  }

  for (var n = 1; n <= 64; n++) {
    var g = hexagramByNumber(n);
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.className = 'gua-cell';
    a.href = 'gua.html#' + n;
    a.setAttribute('aria-label', '第' + n + '卦　' + g.fullName);
    a.appendChild(miniFigure(g.bits));
    var name = document.createElement('span');
    name.className = 'gua-cell-name' + (g.name.length > 1 ? ' is-long' : '');
    name.textContent = g.name;
    a.appendChild(name);
    li.appendChild(a);
    grid.appendChild(li);
  }
})();
