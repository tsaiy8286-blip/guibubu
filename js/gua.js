// 卦典頁：gua.html#卦序，沒有 # 或數字不對時顯示第 1 卦
(function () {
  var card = document.getElementById('gua-card');
  var prev = document.getElementById('gua-prev');
  var next = document.getElementById('gua-next');

  HexCard.bind(card);

  function currentNumber() {
    var n = parseInt(location.hash.slice(1), 10);
    return n >= 1 && n <= 64 && String(n) === location.hash.slice(1) ? n : 1;
  }

  // 卦畫：由上爻往下畫，初爻在最下面（與首頁結果區同款）
  function renderFigure(bits) {
    var fig = document.getElementById('gua-figure');
    fig.innerHTML = '';
    for (var i = 5; i >= 0; i--) {
      var li = document.createElement('li');
      li.className = 'figure-row';
      var bar = document.createElement('span');
      bar.className = 'yao yao-lg ' + (bits[i] ? 'yao-yang' : 'yao-yin');
      bar.innerHTML = bits[i] ? '<i></i>' : '<i></i><i></i>';
      li.appendChild(bar);
      fig.appendChild(li);
    }
  }

  // 爻辭：初爻排到上爻（乾坤的用九、用六在最後），爻題另外上色
  function renderYao(lines) {
    var list = document.getElementById('gua-yao');
    list.innerHTML = '';
    lines.forEach(function (line) {
      var li = document.createElement('li');
      var label = document.createElement('span');
      label.className = 'gua-label';
      label.textContent = line.slice(0, 2);
      li.appendChild(label);
      li.appendChild(document.createTextNode(line.slice(3)));
      list.appendChild(li);
    });
  }

  function setNav(link, n) {
    var g = hexagramByNumber(n);
    link.hidden = !g;
    if (!g) return;
    link.href = '#' + n;
    link.innerHTML = (link === prev ? '‹ 上一卦' : '下一卦 ›') + '<span class="gua-nav-name"></span>';
    link.querySelector('.gua-nav-name').textContent = '第' + n + '卦 ' + g.name;
  }

  function render() {
    var n = currentNumber();
    var g = hexagramByNumber(n);
    document.title = '第' + n + '卦 ' + g.fullName + '｜龜卜卜線上求卦';
    document.getElementById('gua-title').textContent = '第' + n + '卦　' + g.fullName;
    document.getElementById('gua-trigrams').textContent = '上' + g.upper + '下' + g.lower;
    renderFigure(g.bits);
    HexCard.set(card, g);
    document.getElementById('card-words').textContent = '「' + CARD_WORDS[n - 1] + '」';
    document.getElementById('gua-judgment').textContent = g.judgment;
    document.getElementById('gua-xiang').textContent = DA_XIANG[n - 1];
    renderYao(YAO_CI[n - 1]);
    setNav(prev, n - 1);
    setNav(next, n + 1);
  }

  window.addEventListener('hashchange', function () {
    HexCard.close();
    render();
    window.scrollTo(0, 0);
  });

  render();
})();
