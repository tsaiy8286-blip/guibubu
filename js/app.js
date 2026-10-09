// 首頁互動：起卦資訊與摘要列
(function () {
  var timeInput = document.getElementById('cast-time');
  var categorySelect = document.getElementById('cast-category');
  var questionInput = document.getElementById('cast-question');
  var fillNowBtn = document.getElementById('fill-now');
  var startBtn = document.getElementById('start-cast');
  var castInfo = document.getElementById('cast-info');
  var summary = document.getElementById('summary');
  var editBtn = document.getElementById('edit-info');
  var throwArea = document.getElementById('throw-area');

  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }

  // 轉成時間欄要的格式：2026-10-04T14:30
  function nowValue() {
    var d = new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) +
      'T' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  function isFilled() {
    return timeInput.value !== '' &&
      categorySelect.value !== '' &&
      questionInput.value.trim() !== '';
  }

  function updateStartBtn() {
    startBtn.disabled = !isFilled();
    saveState();
  }

  function showSummary() {
    document.getElementById('summary-time').textContent = timeInput.value.replace('T', ' ');
    document.getElementById('summary-category').textContent = categorySelect.value;
    document.getElementById('summary-question').textContent = questionInput.value.trim();
    castInfo.hidden = true;
    summary.hidden = false;
    throwArea.hidden = false;
  }

  fillNowBtn.addEventListener('click', function () {
    timeInput.value = nowValue();
    updateStartBtn();
  });

  [timeInput, categorySelect, questionInput].forEach(function (el) {
    el.addEventListener('input', updateStartBtn);
    el.addEventListener('change', updateStartBtn);
  });

  startBtn.addEventListener('click', function () {
    if (!isFilled()) return;
    startBtn.textContent = '完成修改';
    showSummary();
    if (throws.length === 6) renderNote();
    saveState();
  });

  editBtn.addEventListener('click', function () {
    summary.hidden = true;
    castInfo.hidden = false;
    timeInput.focus();
    saveState();
  });

  updateStartBtn();

  // 擲卦區
  var throwTitle = document.getElementById('throw-title');
  var throwButtons = document.getElementById('throw-buttons');
  var hexagramLog = document.getElementById('hexagram-log');
  var undoBtn = document.getElementById('undo-throw');
  var resultArea = document.getElementById('result-area');
  var coinNote = document.getElementById('coin-note');

  // 已擲出的背數，由第一擲（初爻）到第六擲（上爻）
  var throws = [];

  // 每個按鈕下方畫三枚錢幣：先畫字（空心圓寫「字」），再畫背（實心圓）
  Array.prototype.forEach.call(throwButtons.querySelectorAll('.throw-btn'), function (btn) {
    var backs = Number(btn.getAttribute('data-backs'));
    var coins = btn.querySelector('.coins');
    for (var i = 0; i < 3; i++) {
      var coin = document.createElement('span');
      if (i < 3 - backs) {
        coin.className = 'coin coin-face';
        coin.textContent = '字';
      } else {
        coin.className = 'coin coin-back';
      }
      coins.appendChild(coin);
    }
    btn.addEventListener('click', function () {
      if (throws.length >= 6) return;
      throws.push(backs);
      renderThrows();
    });
  });

  undoBtn.addEventListener('click', function () {
    throws.pop();
    renderThrows();
  });

  function lineRow(backs, index) {
    var line = throwToLine(backs);
    var li = document.createElement('li');
    li.className = 'yao-row' + (line.moving ? ' is-moving' : '');

    var bar = document.createElement('span');
    bar.className = 'yao ' + (line.yang ? 'yao-yang' : 'yao-yin');
    bar.innerHTML = line.yang ? '<i></i>' : '<i></i><i></i>';

    var mark = document.createElement('span');
    mark.className = 'yao-mark';
    mark.textContent = line.mark;

    var note = document.createElement('span');
    note.className = 'yao-note';
    note.innerHTML = '第 ' + (index + 1) + ' 擲：' + throwLabel(backs) +
      ' <span class="nowrap">＝ ' + line.name + '，' + (line.moving ? '動爻' : '靜爻') + '</span>';

    li.appendChild(bar);
    li.appendChild(mark);
    li.appendChild(note);
    return li;
  }

  function renderThrows() {
    var n = throws.length;
    hexagramLog.innerHTML = '';
    throws.forEach(function (backs, i) {
      hexagramLog.appendChild(lineRow(backs, i));
    });
    hexagramLog.hidden = n === 0;

    var done = n === 6;
    throwTitle.textContent = done ? '六擲完成' : '第 ' + (n + 1) + ' 擲（' + POSITIONS[n] + '）';
    throwButtons.hidden = done;
    coinNote.hidden = done;
    undoBtn.disabled = n === 0;
    resultArea.hidden = !done;
    if (done) renderResult();
    saveState();
  }

  // 結果區
  function figureRow(yang, moving, mark) {
    var li = document.createElement('li');
    li.className = 'figure-row' + (moving ? ' is-moving' : '');
    var bar = document.createElement('span');
    bar.className = 'yao yao-lg ' + (yang ? 'yao-yang' : 'yao-yin');
    bar.innerHTML = yang ? '<i></i>' : '<i></i><i></i>';
    li.appendChild(bar);
    var m = document.createElement('span');
    m.className = 'yao-mark';
    m.textContent = mark;
    li.appendChild(m);
    return li;
  }

  function guaTitle(label, g) {
    return label + '：第' + g.number + '卦　' + g.fullName + '（上' + g.upper + '下' + g.lower + '）';
  }

  // 卦象牌卡：images/hexagrams/card-01.jpg～card-64.jpg；變卦的翻轉由 CSS 處理
  var cardPrimary = document.getElementById('card-primary');
  var cardChanged = document.getElementById('card-changed');
  var cardChangedCol = document.getElementById('card-changed-col');
  var cardArrow = document.getElementById('card-arrow');
  var cardZoom = document.getElementById('card-zoom');
  var cardZoomCard = document.getElementById('card-zoom-card');
  var zoomFrom = null;   // 關閉放大後，焦點回到原本那張牌卡

  function cardSrc(g) {
    return 'images/hexagrams/card-' + (g.number < 10 ? '0' : '') + g.number + '.jpg';
  }

  function setCard(btn, g) {
    var src = cardSrc(g);
    Array.prototype.forEach.call(btn.querySelectorAll('img'), function (img) {
      if (img.getAttribute('src') !== src) img.src = src;
    });
    btn.querySelector('img').alt = '第' + g.number + '卦　' + g.fullName + '牌卡';
    btn.setAttribute('aria-label', '放大 第' + g.number + '卦　' + g.fullName + '牌卡');
  }

  function openZoom(btn) {
    var src = btn.querySelector('img').getAttribute('src');
    Array.prototype.forEach.call(cardZoomCard.querySelectorAll('img'), function (img) { img.src = src; });
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

  cardPrimary.addEventListener('click', function () { openZoom(cardPrimary); });
  cardChanged.addEventListener('click', function () { openZoom(cardChanged); });
  cardZoom.addEventListener('click', closeZoom);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeZoom();
  });

  function renderResult() {
    var result = cast(throws);
    var primaryFig = document.getElementById('figure-primary');
    var changedFig = document.getElementById('figure-changed');
    var hasChange = !!result.changed;
    primaryFig.innerHTML = '';
    changedFig.innerHTML = '';

    // 由上爻往下畫，初爻在最下面；動爻在本卦與變卦都畫成朱紅
    for (var i = 5; i >= 0; i--) {
      var l = result.lines[i];
      primaryFig.appendChild(figureRow(l.yang, l.moving, l.mark));
      changedFig.appendChild(figureRow(l.moving ? !l.yang : l.yang, l.moving, ''));
    }

    document.getElementById('figure-primary-name').textContent = result.primary.name;
    document.getElementById('figure-arrow').hidden = !hasChange;
    document.getElementById('figure-changed-col').hidden = !hasChange;
    document.getElementById('result-quiet').hidden = hasChange;
    document.getElementById('result-zhande').textContent = hasChange
      ? '占得：' + result.primary.name + '　之　' + result.changed.name
      : '占得：' + result.primary.name;

    document.getElementById('primary-name').textContent = guaTitle('本卦', result.primary);
    document.getElementById('primary-judgment').textContent = result.primary.judgment;
    document.getElementById('changed-block').hidden = !hasChange;
    if (hasChange) {
      document.getElementById('figure-changed-name').textContent = result.changed.name;
      document.getElementById('changed-name').textContent = guaTitle('變卦', result.changed);
      document.getElementById('changed-judgment').textContent = result.changed.judgment;
    }

    setCard(cardPrimary, result.primary);
    cardChangedCol.hidden = !hasChange;
    cardArrow.hidden = !hasChange;
    if (hasChange) setCard(cardChanged, result.changed);

    var movingEl = document.getElementById('result-moving');
    movingEl.hidden = !hasChange;
    movingEl.textContent = '動爻：' + result.moving.map(function (i) { return POSITIONS[i]; }).join('、');

    renderNote();
  }

  // 複製區
  var copyBtn = document.getElementById('copy-note');
  var copyFail = document.getElementById('copy-fail');
  var notePreview = document.getElementById('note-preview');
  var noteText = document.getElementById('note-text');
  var newCastBtn = document.getElementById('new-cast');

  // 最後一次成功複製的筆記；筆記內容一改就不算複製過
  var copiedNote = null;

  var copyPromptBtn = document.getElementById('copy-prompt');
  var copiedPrompt = null;

  // 我的啟發：最多 60 字，會帶進 Obsidian 筆記的「## 我的解讀」
  var INSIGHT_MAX = 60;
  var insightInput = document.getElementById('insight');
  var insightCount = document.getElementById('insight-count');

  function updateInsightCount() {
    var n = insightInput.value.length;
    insightCount.textContent = n + ' / ' + INSIGHT_MAX;
    insightCount.classList.toggle('is-full', n >= INSIGHT_MAX);
  }

  insightInput.addEventListener('input', function (e) {
    // 注音選字時先不截，選完字再截（有些瀏覽器選字會超過上限）
    if (!e.isComposing && insightInput.value.length > INSIGHT_MAX) {
      insightInput.value = insightInput.value.slice(0, INSIGHT_MAX);
    }
    updateInsightCount();
    if (throws.length === 6) renderNote();
    saveState();
  });
  insightInput.addEventListener('compositionend', function () {
    if (insightInput.value.length > INSIGHT_MAX) insightInput.value = insightInput.value.slice(0, INSIGHT_MAX);
    updateInsightCount();
  });

  function currentInfo() {
    return {
      date: timeInput.value,
      category: categorySelect.value,
      question: questionInput.value.trim(),
      insight: insightInput.value.trim()
    };
  }

  function currentNote() {
    return toMarkdown(currentInfo(), cast(throws));
  }

  function currentPrompt() {
    return toPrompt(currentInfo(), cast(throws));
  }

  function renderNote() {
    var note = currentNote();
    noteText.textContent = note;
    copyBtn.textContent = note === copiedNote ? '✓ 已複製' : '複製到 Obsidian';
    copyPromptBtn.textContent = currentPrompt() === copiedPrompt ? '✓ 已複製' : '複製 AI 解卦提示詞';
    copyFail.hidden = true;
  }

  // 先用瀏覽器的剪貼簿功能，不行再用舊方法；都失敗才算失敗
  function copyText(text, done) {
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      done(ok);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
    } else {
      fallback();
    }
  }

  copyBtn.addEventListener('click', function () {
    var note = currentNote();
    copyText(note, function (ok) {
      if (ok) {
        copiedNote = note;
        copyBtn.textContent = '✓ 已複製';
        copyFail.hidden = true;
        saveState();
      } else {
        copyFail.hidden = false;
      }
    });
  });

  copyPromptBtn.addEventListener('click', function () {
    var prompt = currentPrompt();
    copyText(prompt, function (ok) {
      if (ok) {
        copiedPrompt = prompt;
        copyPromptBtn.textContent = '✓ 已複製';
        copyFail.hidden = true;
        saveState();
      } else {
        copyFail.hidden = false;
      }
    });
  });

  newCastBtn.addEventListener('click', function () {
    if (currentNote() !== copiedNote && !window.confirm('這一卦還沒複製，確定要清除嗎？')) return;
    timeInput.value = '';
    categorySelect.value = '';
    questionInput.value = '';
    insightInput.value = '';
    updateInsightCount();
    throws = [];
    copiedNote = null;
    copiedPrompt = null;
    notePreview.open = false;
    startBtn.textContent = '開始擲卦';
    updateStartBtn();
    summary.hidden = true;
    throwArea.hidden = true;
    castInfo.hidden = false;
    renderThrows();
    window.scrollTo(0, 0);
  });

  // 中途中斷接續：這一卦暫存在本機瀏覽器，重新打開時接著做；「再起一卦」清空後就刪掉
  var STORAGE_KEY = 'guibubu-current-cast';
  var ready = false;

  function saveState() {
    if (!ready) return;
    var started = startBtn.textContent === '完成修改';
    var empty = !timeInput.value && !categorySelect.value && !questionInput.value && !insightInput.value && throws.length === 0;
    try {
      if (empty) {
        localStorage.removeItem(STORAGE_KEY);
        return;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        time: timeInput.value,
        category: categorySelect.value,
        question: questionInput.value,
        started: started,
        editing: started && !castInfo.hidden,
        throws: throws,
        insight: insightInput.value,
        copiedNote: copiedNote,
        copiedPrompt: copiedPrompt
      }));
    } catch (e) {
      // 瀏覽器不讓存（例如無痕模式空間滿了）就算了，不影響使用
    }
  }

  function restoreState() {
    var s;
    try {
      s = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (e) {
      s = null;
    }
    if (!s || typeof s !== 'object') return;

    timeInput.value = s.time || '';
    categorySelect.value = s.category || '';
    questionInput.value = s.question || '';
    if (Array.isArray(s.throws)) {
      throws = s.throws.filter(function (b) {
        return b === 0 || b === 1 || b === 2 || b === 3;
      }).slice(0, 6);
    }
    insightInput.value = typeof s.insight === 'string' ? s.insight.slice(0, INSIGHT_MAX) : '';
    updateInsightCount();
    copiedNote = s.copiedNote || null;
    copiedPrompt = s.copiedPrompt || null;
    if (s.started && isFilled()) {
      startBtn.textContent = '完成修改';
      showSummary();
      if (s.editing) {
        summary.hidden = true;
        castInfo.hidden = false;
      }
    }
  }

  restoreState();
  ready = true;
  updateStartBtn();
  renderThrows();
})();
