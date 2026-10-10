// 新手說明框：這台裝置第一次來時自動展開，之後預設收起
(function () {
  var guide = document.getElementById('guide');
  var SEEN_KEY = 'guibubu-guide-seen';
  var seen = false;

  // 瀏覽器擋下儲存時，當作沒看過（每次都展開），不能讓頁面壞掉
  try {
    seen = localStorage.getItem(SEEN_KEY) === '1';
  } catch (e) {}

  if (!seen) {
    guide.open = true;
    try {
      localStorage.setItem(SEEN_KEY, '1');
    } catch (e) {}
  }
})();
