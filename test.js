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

console.log('全部通過');
