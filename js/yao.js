// 起卦計算：字 = 2、背 = 3，三枚相加
// 6 老陰（動）、7 少陽、8 少陰、9 老陽（動）
if (typeof module !== 'undefined') {
  var data = require('./data.js');
  var TRIGRAMS = data.TRIGRAMS;
  var HEXAGRAMS = data.HEXAGRAMS;
}

var POSITIONS = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'];

var LINE_TYPES = {
  6: { name: '老陰', yang: false, moving: true, mark: '✕' },
  7: { name: '少陽', yang: true, moving: false, mark: '' },
  8: { name: '少陰', yang: false, moving: false, mark: '' },
  9: { name: '老陽', yang: true, moving: true, mark: '○' }
};

function throwLabel(backs) {
  return backs + '背' + (3 - backs) + '字';
}

function throwToLine(backs) {
  var value = backs * 3 + (3 - backs) * 2;
  var t = LINE_TYPES[value];
  return { backs: backs, value: value, name: t.name, yang: t.yang, moving: t.moving, mark: t.mark };
}

function trigramOf(bits) {
  for (var key in TRIGRAMS) {
    var l = TRIGRAMS[key].lines;
    if (l[0] === bits[0] && l[1] === bits[1] && l[2] === bits[2]) return key;
  }
  return null;
}

// bits：六個 0/1，由初爻到上爻
function findHexagram(bits) {
  var lower = trigramOf(bits.slice(0, 3));
  var upper = trigramOf(bits.slice(3, 6));
  for (var i = 0; i < HEXAGRAMS.length; i++) {
    var h = HEXAGRAMS[i];
    if (h[2] === upper && h[3] === lower) {
      var fullName = upper === lower
        ? h[1] + '為' + TRIGRAMS[upper].nature
        : TRIGRAMS[upper].nature + TRIGRAMS[lower].nature + h[1];
      return { number: h[0], name: h[1], fullName: fullName, upper: upper, lower: lower, judgment: h[4], bits: bits };
    }
  }
  return null;
}

// backsList：六次擲出的背數，由第一擲（初爻）到第六擲（上爻）
function cast(backsList) {
  var lines = backsList.map(throwToLine);
  var primary = findHexagram(lines.map(function (l) { return l.yang ? 1 : 0; }));
  var moving = [];
  lines.forEach(function (l, i) { if (l.moving) moving.push(i); });
  var changed = moving.length
    ? findHexagram(lines.map(function (l) { return (l.yang !== l.moving) ? 1 : 0; }))
    : null;
  return { lines: lines, primary: primary, changed: changed, moving: moving };
}

function lineText(yang, mark) {
  return (yang ? '⚊ 陽' : '⚋ 陰') + (mark ? ' ' + mark : '');
}

// 產生貼到 Obsidian 的筆記（YAML 中文欄位）
function toMarkdown(info, result) {
  var p = result.primary;
  var c = result.changed;
  var movingNames = result.moving.map(function (i) { return POSITIONS[i]; });
  // 問事可能有換行：屬性欄位要一行，正文保留換行但去掉空行
  var questionOneLine = info.question.replace(/\s*\n\s*/g, ' ');
  var questionBody = info.question.replace(/\n\s*\n+/g, '\n');
  var out = [];

  out.push('---');
  out.push('日期: ' + info.date);
  out.push('類別: ' + info.category);
  out.push('問事: "' + questionOneLine.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"');
  out.push('本卦: ' + p.fullName);
  out.push('變卦: ' + (c ? c.fullName : '無'));
  out.push('動爻: [' + movingNames.join(', ') + ']');
  out.push('擲出: [' + result.lines.map(function (l) { return l.backs; }).join(', ') + ']');
  out.push('驗證: 未驗證');
  out.push('tags: [六爻, 卦例]');
  out.push('---');
  out.push('');
  out.push('# ' + p.fullName + (c ? ' → ' + c.fullName : '（六爻安靜）'));
  out.push('');
  out.push('**問事**：' + questionBody);
  out.push('**類別**：' + info.category);
  out.push('**時間**：' + info.date.replace('T', ' '));
  out.push('');
  out.push('| 爻 | 擲出 | 本卦 | 變卦 |');
  out.push('|---|---|---|---|');
  for (var i = 5; i >= 0; i--) {
    var l = result.lines[i];
    var changedYang = l.moving ? !l.yang : l.yang;
    out.push('| ' + POSITIONS[i] + ' | ' + throwLabel(l.backs) + '（' + l.name + '） | ' +
      lineText(l.yang, l.mark) + ' | ' + (c ? lineText(changedYang, '') : '') + ' |');
  }
  out.push('');
  out.push('**本卦**：第' + p.number + '卦 ' + p.fullName + '（上' + p.upper + '下' + p.lower + '）');
  out.push('> ' + p.judgment);
  out.push('');
  if (c) {
    out.push('**變卦**：第' + c.number + '卦 ' + c.fullName + '（上' + c.upper + '下' + c.lower + '）');
    out.push('> ' + c.judgment);
    out.push('');
    out.push('**動爻**：' + movingNames.join('、'));
  } else {
    out.push('**變卦**：無（六爻安靜）');
  }
  out.push('');
  out.push('## 我的解讀');
  out.push('');
  // 有填「我的啟發」就帶進來，沒填留白
  var insight = (info.insight || '').trim();
  if (insight) out.push(insight);
  out.push('');
  out.push('## 實際結果');
  out.push('');
  return out.join('\n');
}

if (typeof module !== 'undefined') {
  module.exports = { POSITIONS: POSITIONS, throwLabel: throwLabel, throwToLine: throwToLine, findHexagram: findHexagram, cast: cast, toMarkdown: toMarkdown };
}
