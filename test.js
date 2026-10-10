// 執行：node test.js
var assert = require('assert');
var data = require('./js/data.js');
var yao = require('./js/yao.js');

// 64 卦的上下卦組合不重複，卦序 1～64 齊全
var pairs = {};
data.HEXAGRAMS.forEach(function (h, i) {
  assert.strictEqual(h[0], i + 1, '卦序錯誤：' + h[1]);
  var key = h[2] + h[3];
  assert(!pairs[key], '上下卦重複：' + h[1] + ' 與 ' + pairs[key]);
  pairs[key] = h[1];
});
assert.strictEqual(Object.keys(pairs).length, 64);

// 每一種六爻組合都找得到卦
for (var n = 0; n < 64; n++) {
  var bits = [0, 1, 2, 3, 4, 5].map(function (k) { return (n >> k) & 1; });
  assert(yao.findHexagram(bits), '找不到卦：' + bits);
}

// 擲幣對照：0背老陰、1背少陽、2背少陰、3背老陽
assert.strictEqual(yao.throwToLine(0).name, '老陰');
assert.strictEqual(yao.throwToLine(1).name, '少陽');
assert.strictEqual(yao.throwToLine(2).name, '少陰');
assert.strictEqual(yao.throwToLine(3).name, '老陽');

// 已知卦例
function check(backs, primary, changed, moving) {
  var r = yao.cast(backs);
  assert.strictEqual(r.primary.fullName, primary);
  assert.strictEqual(r.changed ? r.changed.fullName : null, changed);
  assert.deepStrictEqual(r.moving, moving);
}
check([1, 1, 1, 1, 1, 1], '乾為天', null, []);
check([2, 2, 2, 2, 2, 2], '坤為地', null, []);
check([3, 3, 3, 3, 3, 3], '乾為天', '坤為地', [0, 1, 2, 3, 4, 5]);
check([1, 1, 1, 2, 2, 2], '地天泰', null, []);
check([2, 2, 2, 1, 1, 1], '天地否', null, []);
check([2, 3, 2, 1, 3, 1], '天水訟', '火地晉', [1, 4]);
check([1, 2, 2, 2, 1, 2], '水雷屯', null, []);
check([2, 1, 2, 2, 2, 1], '山水蒙', null, []);
check([1, 2, 1, 2, 1, 2], '水火既濟', null, []);
check([0, 2, 2, 2, 2, 2], '坤為地', '地雷復', [0]);
check([1, 1, 1, 1, 1, 3], '乾為天', '澤天夬', [5]);
check([2, 2, 1, 1, 2, 2], '雷山小過', null, []);
check([1, 1, 2, 2, 1, 1], '風澤中孚', null, []);

// 筆記格式
var md = yao.toMarkdown({ date: '2026-10-04T14:30', category: '工作事業', question: '這次面試能否錄取？' }, yao.cast([2, 3, 2, 1, 3, 1]));
assert(md.indexOf('本卦: 天水訟') > 0);
assert(md.indexOf('變卦: 火地晉') > 0);
assert(md.indexOf('動爻: [二爻, 五爻]') > 0);
assert(md.indexOf('擲出: [2, 3, 2, 1, 3, 1]') > 0);
assert(md.indexOf('## 我的解讀\n\n\n## 實際結果') > 0);
var md2 = yao.toMarkdown({ date: '2026-10-04T14:30', category: '工作事業', question: '問', insight: '  先穩住再前進  ' }, yao.cast([2, 3, 2, 1, 3, 1]));
assert(md2.indexOf('## 我的解讀\n\n先穩住再前進\n\n## 實際結果') > 0);

// 依卦序取卦
assert.strictEqual(yao.hexagramByNumber(22).fullName, '山火賁');
assert.strictEqual(yao.hexagramByNumber(22).upper + yao.hexagramByNumber(22).lower, '艮離');
assert.strictEqual(yao.hexagramByNumber(0), null);
assert.strictEqual(yao.hexagramByNumber(65), null);

// 牌卡的話：64 句都有，且和提示詞檔的「下方題字」逐字相同
var fs = require('fs');
var guaText = require('./js/gua-text.js');
var promptFile = fs.readFileSync('./docs/hexagram-images/64卦提示詞.md', 'utf8');
var re = /下方題字（[^）]*）：「([^」]+)」/g, m, words = [];
while ((m = re.exec(promptFile))) words.push(m[1]);
assert.strictEqual(words.length, 64, '提示詞檔的下方題字不是 64 句');
assert.deepStrictEqual(guaText.CARD_WORDS, words);

// 原文：大象傳 64 句；爻辭每卦 6 條（乾坤另有用九、用六），爻題的九／六和卦畫一致
assert.strictEqual(guaText.DA_XIANG.length, 64);
assert.strictEqual(guaText.YAO_CI.length, 64);
var POS = ['初', '二', '三', '四', '五', '上'];
guaText.YAO_CI.forEach(function (lines, i) {
  var n = i + 1, g = yao.hexagramByNumber(n);
  assert.strictEqual(lines.length, n <= 2 ? 7 : 6, '第' + n + '卦爻辭條數不對');
  for (var k = 0; k < 6; k++) {
    var num = g.bits[k] ? '九' : '六';
    var title = (k === 0 || k === 5) ? POS[k] + num : num + POS[k];
    assert.strictEqual(lines[k].slice(0, 3), title + '，', '第' + n + '卦第' + (k + 1) + '爻爻題應為' + title);
  }
});
assert.strictEqual(guaText.YAO_CI[0][6].slice(0, 3), '用九，');
assert.strictEqual(guaText.YAO_CI[1][6].slice(0, 3), '用六，');
assert.strictEqual(guaText.YAO_CI[21][5], '上九，白賁，無咎。');
assert.strictEqual(guaText.DA_XIANG[21], '山下有火，賁。君子以明庶政，無敢折獄。');

// 經文用繁體正字：網站資料不得出現古本的「无」（一律寫「無」）
['./js/data.js', './js/gua-text.js'].forEach(function (f) {
  assert.ok(fs.readFileSync(f, 'utf8').indexOf('无') < 0, f + ' 裡還有「无」，請改成「無」');
});
assert.strictEqual(yao.hexagramByNumber(25).name, '無妄');

console.log('全部通過');
