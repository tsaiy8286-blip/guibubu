// 首頁最下方「六十四卦」：8×8 格，依文王卦序；點卦名前往卦典頁 gua.html#卦序
// 「✦ 自選卦做紀念圖」：選卦模式下點卦名不換頁，第一個是本卦、第二個是變卦，可下載「觀象」紀念圖
// 選卦內容不暫存，也不碰上方正在起的卦
(function () {
  var grid = document.getElementById('gua-grid');
  var cells = [];   // cells[n] = 第 n 卦的格子

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
    a.dataset.number = n;
    a.setAttribute('aria-label', '第' + n + '卦　' + g.fullName);
    a.appendChild(miniFigure(g.bits));
    var name = document.createElement('span');
    name.className = 'gua-cell-name' + (g.name.length > 1 ? ' is-long' : '');
    name.textContent = g.name;
    a.appendChild(name);
    var mark = document.createElement('span');
    mark.className = 'pick-mark';
    mark.setAttribute('aria-hidden', 'true');
    a.appendChild(mark);
    li.appendChild(a);
    grid.appendChild(li);
    cells[n] = a;
  }

  // 選卦模式
  var toggleBtn = document.getElementById('pick-toggle');
  var hint = document.getElementById('gua-index-hint');
  var preview = document.getElementById('pick-preview');
  var cardPrimary = document.getElementById('pick-card-primary');
  var cardChanged = document.getElementById('pick-card-changed');
  var changedCol = document.getElementById('pick-changed-col');
  var arrow = document.getElementById('pick-arrow');
  var insightInput = document.getElementById('pick-insight');
  var insightCount = document.getElementById('pick-insight-count');
  var keepBtn = document.getElementById('pick-download');
  var INSIGHT_MAX = 60;
  var HINT = hint.textContent;
  var picking = false;
  var picked = [];   // 卦序，[本卦, 變卦]

  HexCard.bind(cardPrimary);
  HexCard.bind(cardChanged);

  function render() {
    cells.forEach(function (cell, n) {
      if (!cell) return;
      var at = picked.indexOf(n);
      cell.classList.toggle('is-picked', at >= 0);
      cell.querySelector('.pick-mark').textContent = at === 0 ? '本' : at === 1 ? '變' : '';
      if (picking) cell.setAttribute('aria-pressed', String(at >= 0));
      else cell.removeAttribute('aria-pressed');
    });
    preview.hidden = picked.length === 0;
    if (picked.length) HexCard.set(cardPrimary, hexagramByNumber(picked[0]));
    changedCol.hidden = arrow.hidden = picked.length < 2;
    if (picked.length === 2) HexCard.set(cardChanged, hexagramByNumber(picked[1]));
  }

  function setPicking(on) {
    picking = on;
    picked = [];
    insightInput.value = '';
    updateInsightCount();
    grid.classList.toggle('is-picking', on);
    toggleBtn.textContent = on ? '取消選卦' : '✦ 自選卦做紀念圖';
    toggleBtn.setAttribute('aria-pressed', String(on));
    hint.textContent = on ? '先點你的本卦；有紅字動爻的話，再點第二個卦當變卦。只有本卦也能做紀念圖。點已選的卦可取消。' : HINT;
    render();
  }

  toggleBtn.addEventListener('click', function () { setPicking(!picking); });

  grid.addEventListener('click', function (e) {
    var cell = e.target.closest('.gua-cell');
    if (!cell || !picking) return;
    e.preventDefault();
    var n = Number(cell.dataset.number);
    var at = picked.indexOf(n);
    if (at >= 0) picked.splice(at, 1);   // 取消本卦時，變卦遞補成本卦
    else if (picked.length < 2) picked.push(n);
    render();
  });

  function updateInsightCount() {
    var len = insightInput.value.length;
    insightCount.textContent = len + ' / ' + INSIGHT_MAX;
    insightCount.classList.toggle('is-full', len >= INSIGHT_MAX);
  }

  insightInput.addEventListener('input', function (e) {
    // 注音選字時先不截，選完字再截
    if (!e.isComposing && insightInput.value.length > INSIGHT_MAX) {
      insightInput.value = insightInput.value.slice(0, INSIGHT_MAX);
    }
    updateInsightCount();
  });
  insightInput.addEventListener('compositionend', function () {
    if (insightInput.value.length > INSIGHT_MAX) insightInput.value = insightInput.value.slice(0, INSIGHT_MAX);
    updateInsightCount();
  });

  // 紀念圖：上方小字「觀　象」，日期是下載當天
  keepBtn.addEventListener('click', function () {
    if (!picked.length) return;
    var p = hexagramByNumber(picked[0]);
    var c = picked[1] ? hexagramByNumber(picked[1]) : null;
    var now = new Date();
    var day = [now.getFullYear(), ('0' + (now.getMonth() + 1)).slice(-2), ('0' + now.getDate()).slice(-2)];
    downloadKeepsake(keepBtn, {
      primary: p,
      changed: c,
      insight: insightInput.value,
      date: day.join('.'),
      label: '觀　象'
    }, '龜卜卜_' + p.name + (c ? '之' + c.name : '') + '_' + day.join('') + '.jpg');
  });
})();
