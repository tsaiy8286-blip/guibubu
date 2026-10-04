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
})();
