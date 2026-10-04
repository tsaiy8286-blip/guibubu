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
  });

  editBtn.addEventListener('click', function () {
    summary.hidden = true;
    castInfo.hidden = false;
    timeInput.focus();
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
  }

  renderThrows();
})();
