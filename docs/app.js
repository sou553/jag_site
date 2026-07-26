'use strict';

const MACHINES = {
  neo_im: {
    name: 'ネオアイムジャグラーEX', introduced: '2025年9月', note: 'アイムジャグラーEXと同一の公表ボーナス確率・出玉率です。',
    specs: [
      [273.1,439.8,168.5,97.0],[269.7,399.6,161.0,98.0],[269.7,331.0,148.6,99.5],
      [259.0,315.1,142.2,101.1],[259.0,255.0,128.5,103.3],[255.0,255.0,127.5,105.5]
    ]
  },
  ultra: {
    name: 'ウルトラミラクルジャグラー', introduced: '2024年12月', note: '',
    specs: [
      [267.5,425.6,164.3,97.0],[261.1,402.1,158.3,98.1],[256.0,350.5,147.9,99.8],
      [242.7,322.8,138.6,102.1],[233.2,297.9,130.8,104.5],[216.3,277.7,121.6,108.1]
    ]
  },
  mister: {
    name: 'ミスタージャグラー', introduced: '2024年7月', note: '',
    specs: [
      [268.6,374.5,156.4,97.0],[267.5,354.2,152.4,98.0],[260.1,331.0,145.6,99.8],
      [249.2,291.3,134.3,102.7],[240.9,257.0,124.4,105.5],[237.4,237.4,118.7,107.3]
    ]
  },
  girls: {
    name: 'ジャグラーガールズSS', introduced: '2024年4月', note: '',
    specs: [
      [273.1,381.0,159.1,97.0],[270.8,350.5,152.8,97.9],[260.1,316.6,142.8,99.9],
      [250.1,281.3,132.4,102.1],[243.6,270.8,128.3,104.0],[226.0,252.1,119.2,107.5]
    ]
  },
  gogo3: {
    name: 'ゴーゴージャグラー3', introduced: '2023年7月', note: '',
    specs: [
      [259.0,354.2,149.6,97.2],[258.0,332.7,145.3,98.2],[257.0,306.2,139.7,99.4],
      [254.0,268.6,130.5,101.6],[247.3,247.3,123.7,103.8],[234.9,234.9,117.4,106.5]
    ]
  },
  happy3: {
    name: 'ハッピージャグラーV III', introduced: '2022年10月', note: '',
    specs: [
      [273.1,397.2,161.8,97.0],[270.8,362.1,154.9,98.1],[263.2,332.7,146.9,99.9],
      [254.0,300.6,137.7,102.9],[239.2,273.1,127.5,105.8],[226.0,256.0,120.0,108.4]
    ]
  },
  my5: {
    name: 'マイジャグラーV', introduced: '2021年12月', note: '',
    specs: [
      [273.1,409.6,163.8,97.0],[270.8,385.5,159.1,98.0],[266.4,336.1,148.6,99.9],
      [254.0,290.0,135.4,102.8],[240.1,268.6,126.8,105.3],[229.1,229.1,114.6,109.4]
    ]
  },
  funky2: {
    name: 'ファンキージャグラー2', introduced: '2021年10月', note: '',
    specs: [
      [266.4,439.8,165.9,97.0],[259.0,407.1,158.3,98.5],[256.0,366.1,150.7,99.8],
      [249.2,322.8,140.6,102.0],[240.1,299.3,133.2,104.3],[219.9,262.1,119.6,109.0]
    ]
  },
  im_ex: {
    name: 'アイムジャグラーEX', introduced: '2020年12月', note: '',
    specs: [
      [273.1,439.8,168.5,97.0],[269.7,399.6,161.0,98.0],[269.7,331.0,148.6,99.5],
      [259.0,315.1,142.2,101.1],[259.0,255.0,128.5,103.3],[255.0,255.0,127.5,105.5]
    ]
  },
  my6: {
    name: 'マイジャグラーVI（導入予定）', introduced: '2026年10月予定', note: '導入予定機です。現在の実戦データには通常使用しません。',
    specs: [
      [273.1,409.6,163.8,97.0],[270.8,385.5,159.1,98.0],[266.4,336.1,148.6,99.9],
      [254.0,290.0,135.4,102.8],[240.1,268.6,126.8,105.3],[229.1,229.1,114.6,109.4]
    ]
  }
};

const PRIOR_HALL = [0.45, 0.25, 0.15, 0.08, 0.05, 0.02];
const STORAGE_KEY = 'juggler-setting-analyzer-v2';
const OLD_STORAGE_KEY = 'juggler-setting-analyzer-v1';
const $ = (id) => document.getElementById(id);
const machineSelect = $('machineSelect');
let keypadValue = '0';

Object.entries(MACHINES).forEach(([key, machine]) => {
  const option = document.createElement('option');
  option.value = key;
  option.textContent = `${machine.name}（${machine.introduced}）`;
  machineSelect.appendChild(option);
});

function clampNumber(value, min = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(min, n) : 0;
}

function formatDenominator(games, count) {
  if (!games || !count) return '—';
  return `1/${(games / count).toFixed(1)}`;
}

function formatPercent(value, digits = 1) {
  return `${(value * 100).toFixed(digits)}%`;
}

function formatSigned(value) {
  const n = Math.round(value);
  return `${n > 0 ? '+' : ''}${n.toLocaleString('ja-JP')}枚`;
}

function normalizeLogScores(logScores) {
  const max = Math.max(...logScores);
  const exps = logScores.map((value) => Math.exp(value - max));
  const sum = exps.reduce((a, b) => a + b, 0);
  return exps.map((value) => value / sum);
}

function parseHistory(text) {
  const entries = [];
  const errors = [];
  text.split(/\r?\n/).forEach((raw, index) => {
    const line = raw.trim();
    if (!line) return;
    const gMatch = line.match(/-?\d[\d,]*/);
    if (!gMatch) {
      errors.push(index + 1);
      return;
    }
    const games = Number(gMatch[0].replace(/,/g, ''));
    if (!Number.isFinite(games) || games < 0) {
      errors.push(index + 1);
      return;
    }
    const upper = line.toUpperCase();
    let type = 'UNKNOWN';
    if (/\bBB\b|\bBIG\b|(^|[^A-Z])B([^A-Z]|$)/.test(upper)) type = 'BB';
    else if (/\bRB\b|\bREG\b|(^|[^A-Z])R([^A-Z]|$)/.test(upper)) type = 'RB';
    entries.push({ games, type, raw: line });
  });
  return { entries, errors };
}

function entriesToText(entries) {
  return entries.map((entry) => `${entry.games} ${entry.type}`).join('\n');
}

function getInputs() {
  return {
    machineKey: machineSelect.value,
    games: Math.round(clampNumber($('totalGames').value)),
    bb: Math.round(clampNumber($('bbCount').value)),
    rb: Math.round(clampNumber($('rbCount').value)),
    diff: Number($('diffCoins').value || 0),
    historyText: $('historyInput').value,
    currentGames: Math.round(clampNumber($('currentGames').value)),
    priorMode: $('priorMode').value,
    diffWeight: Number($('diffWeight').value) / 100
  };
}

function validate(data) {
  const issues = [];
  if (data.games <= 0) issues.push('総回転数を入力してください。');
  if (data.bb + data.rb <= 0) issues.push('BBまたはRB回数を入力してください。');
  if (data.bb + data.rb > data.games) issues.push('BB＋RB回数が総回転数を超えています。');
  if (!Number.isFinite(data.diff)) issues.push('差枚を正しく入力してください。');
  return issues;
}

function calculate(data) {
  const machine = MACHINES[data.machineKey];
  const prior = data.priorMode === 'hall' ? PRIOR_HALL : Array(6).fill(1 / 6);
  const noBonus = data.games - data.bb - data.rb;

  const bonusLogScores = machine.specs.map((spec, index) => {
    const pBB = 1 / spec[0];
    const pRB = 1 / spec[1];
    const pNone = Math.max(1e-12, 1 - pBB - pRB);
    return Math.log(prior[index]) + data.bb * Math.log(pBB) + data.rb * Math.log(pRB) + noBonus * Math.log(pNone);
  });
  const bonusPosterior = normalizeLogScores(bonusLogScores);

  const sigma = Math.max(250, 28 * Math.sqrt(data.games));
  const diffLogScores = machine.specs.map((spec) => {
    const expectedDiff = 3 * data.games * (spec[3] / 100 - 1);
    const z = (data.diff - expectedDiff) / sigma;
    return -0.5 * z * z - Math.log(sigma);
  });
  const diffPosterior = normalizeLogScores(diffLogScores);

  const weight = data.diffWeight;
  const blendedLogs = bonusPosterior.map((probability, index) => {
    return (1 - weight) * Math.log(Math.max(probability, 1e-300))
      + weight * Math.log(Math.max(diffPosterior[index], 1e-300));
  });
  const posterior = normalizeLogScores(blendedLogs);
  const expectedDiffs = machine.specs.map((spec) => 3 * data.games * (spec[3] / 100 - 1));

  return { machine, posterior, bonusPosterior, diffPosterior, expectedDiffs, sigma };
}

function getConfidence(games) {
  if (games < 1000) return ['参考', 'low'];
  if (games < 3000) return ['信頼度 低', 'low'];
  if (games < 5000) return ['信頼度 中', 'medium'];
  if (games < 8000) return ['信頼度 高', 'high'];
  return ['信頼度 高+', 'high'];
}

function getVerdict(posterior, games) {
  const p4 = posterior.slice(3).reduce((a, b) => a + b, 0);
  const p5 = posterior.slice(4).reduce((a, b) => a + b, 0);
  const top = posterior.indexOf(Math.max(...posterior)) + 1;
  let title;
  let text;

  if (games < 1000) {
    title = `設定${top}が最有力だが、回転数不足`;
    text = '短期の偏りが大きいため参考判定です。';
  } else if (p5 >= 0.65) {
    title = '設定5・6寄り';
    text = `設定5以上の相対確率が${formatPercent(p5)}です。高設定側との整合度が高い結果です。`;
  } else if (p4 >= 0.65) {
    title = '設定4以上寄り';
    text = `設定4以上の相対確率が${formatPercent(p4)}です。中間以上を中心に評価します。`;
  } else if (posterior[0] + posterior[1] >= 0.65) {
    title = '設定1・2寄り';
    text = '低設定域との整合度が高い結果です。差枚だけの上振れには注意してください。';
  } else {
    title = `設定${top}中心の混戦`;
    text = '複数設定の確率が近く、追加回転またはRB推移の確認が必要です。';
  }
  return { title, text, top, p4, p5 };
}

function renderResult(data, result) {
  $('emptyResult').classList.add('hidden');
  $('resultContent').classList.remove('hidden');

  const confidence = getConfidence(data.games);
  $('confidenceBadge').textContent = confidence[0];
  $('confidenceBadge').className = `badge ${confidence[1]}`;

  const verdict = getVerdict(result.posterior, data.games);
  $('verdictTitle').textContent = verdict.title;
  $('verdictText').textContent = verdict.text;
  $('topSetting').textContent = `設定${verdict.top}`;
  $('topProbability').textContent = formatPercent(result.posterior[verdict.top - 1]);
  $('actualBB').textContent = formatDenominator(data.games, data.bb);
  $('actualRB').textContent = formatDenominator(data.games, data.rb);
  $('actualCombined').textContent = formatDenominator(data.games, data.bb + data.rb);
  $('prob4Plus').textContent = formatPercent(verdict.p4);
  $('prob5Plus').textContent = formatPercent(verdict.p5);
  $('expectedSetting').textContent = result.posterior.reduce((sum, probability, index) => sum + probability * (index + 1), 0).toFixed(2);
  $('analysisModeLabel').textContent = `BB/RB ${Math.round((1 - data.diffWeight) * 100)}%・差枚 ${Math.round(data.diffWeight * 100)}%`;

  const bars = $('probabilityBars');
  bars.innerHTML = '';
  result.posterior.forEach((probability, index) => {
    const row = document.createElement('div');
    row.className = 'prob-row';
    row.innerHTML = `
      <div class="prob-label">設定${index + 1}</div>
      <div class="prob-track"><div class="prob-fill" style="width:${Math.max(0.3, probability * 100)}%"></div></div>
      <div class="prob-value">${formatPercent(probability)}</div>`;
    bars.appendChild(row);
  });

  const tbody = $('specComparisonBody');
  tbody.innerHTML = '';
  result.machine.specs.forEach((spec, index) => {
    const tr = document.createElement('tr');
    if (index + 1 === verdict.top) tr.className = 'best-row';
    tr.innerHTML = `
      <td>設定${index + 1}</td>
      <td>1/${spec[0]}</td>
      <td>1/${spec[1]}</td>
      <td>1/${spec[2]}</td>
      <td>${spec[3].toFixed(1)}%</td>
      <td>${formatSigned(result.expectedDiffs[index])}</td>
      <td>${formatPercent(result.posterior[index])}</td>`;
    tbody.appendChild(tr);
  });
}

function cumulativeHitProbability(combinedDenominator, games) {
  const probability = 1 / combinedDenominator;
  return 1 - Math.pow(1 - probability, games);
}

function renderHistoryAnalysis(entries, machine) {
  if (!entries.length) {
    $('historyEmpty').classList.remove('hidden');
    $('historyContent').classList.add('hidden');
    return;
  }

  $('historyEmpty').classList.add('hidden');
  $('historyContent').classList.remove('hidden');
  const games = entries.map((entry) => entry.games);
  const average = games.reduce((a, b) => a + b, 0) / games.length;
  const max = Math.max(...games);
  const in100 = games.filter((value) => value <= 100).length / games.length;

  $('historyCount').textContent = `${games.length}件`;
  $('historyAverage').textContent = `${average.toFixed(1)}G`;
  $('historyMax').textContent = `${max}G`;
  $('history100').textContent = formatPercent(in100);

  const tbody = $('hitProbabilityBody');
  tbody.innerHTML = '';
  [100,200,300,400,500,600,700,800,900,1000].forEach((limit) => {
    const actualCount = games.filter((value) => value <= limit).length;
    const actual = actualCount / games.length;
    const cells = machine.specs.map((spec) => formatPercent(cumulativeHitProbability(spec[2], limit)));
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${limit}G以内</td><td>${formatPercent(actual)}（${actualCount}/${games.length}）</td>${cells.map((value) => `<td>${value}</td>`).join('')}`;
    tbody.appendChild(tr);
  });
  drawHistoryChart(entries);
}

function drawHistoryChart(entries) {
  const canvas = $('historyChart');
  const context = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  context.clearRect(0, 0, width, height);
  context.fillStyle = '#fbfcfd';
  context.fillRect(0, 0, width, height);

  const margin = { left: 55, right: 24, top: 22, bottom: 42 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const maxGames = Math.max(300, Math.ceil(Math.max(...entries.map((entry) => entry.games)) / 100) * 100);

  context.strokeStyle = '#d9dde5';
  context.lineWidth = 1;
  context.fillStyle = '#667085';
  context.font = '12px sans-serif';
  for (let y = 0; y <= 4; y += 1) {
    const yy = margin.top + plotHeight * y / 4;
    context.beginPath();
    context.moveTo(margin.left, yy);
    context.lineTo(width - margin.right, yy);
    context.stroke();
    context.fillText(String(Math.round(maxGames * (1 - y / 4))), 8, yy + 4);
  }

  const barGap = 4;
  const barWidth = Math.max(5, (plotWidth / entries.length) - barGap);
  entries.forEach((entry, index) => {
    const x = margin.left + index * (plotWidth / entries.length) + barGap / 2;
    const barHeight = Math.max(1, (entry.games / maxGames) * plotHeight);
    context.fillStyle = entry.type === 'BB' ? '#e73243' : entry.type === 'RB' ? '#1f6fe5' : '#8b95a7';
    context.fillRect(x, margin.top + plotHeight - barHeight, barWidth, barHeight);
  });

  context.fillStyle = '#667085';
  context.fillText('古い ← ボーナス履歴 → 新しい', margin.left, height - 14);
  context.fillStyle = '#e73243';
  context.fillRect(width - 210, 12, 12, 12);
  context.fillStyle = '#475467';
  context.fillText('BB', width - 192, 22);
  context.fillStyle = '#1f6fe5';
  context.fillRect(width - 150, 12, 12, 12);
  context.fillStyle = '#475467';
  context.fillText('RB', width - 132, 22);
}

function setActiveTab(tabName, scrollTop = true) {
  document.querySelectorAll('.tab-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === tabName);
  });
  document.querySelectorAll('.tab-page').forEach((page) => {
    page.classList.toggle('active', page.dataset.page === tabName);
  });
  if (scrollTop) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateLiveRates() {
  const games = Math.round(clampNumber($('totalGames').value));
  const bb = Math.round(clampNumber($('bbCount').value));
  const rb = Math.round(clampNumber($('rbCount').value));
  $('liveBB').textContent = formatDenominator(games, bb);
  $('liveRB').textContent = formatDenominator(games, rb);
  $('liveCombined').textContent = formatDenominator(games, bb + rb);
}

function updateKeypadDisplay() {
  $('keypadDisplay').textContent = Number(keypadValue).toLocaleString('ja-JP');
}

function handleKeypad(key) {
  if (/^\d$/.test(key)) {
    keypadValue = keypadValue === '0' ? key : `${keypadValue}${key}`;
    if (keypadValue.length > 5) keypadValue = keypadValue.slice(0, 5);
  } else if (key === 'clear') {
    keypadValue = '0';
  } else if (key === 'back') {
    keypadValue = keypadValue.length <= 1 ? '0' : keypadValue.slice(0, -1);
  }
  updateKeypadDisplay();
}

function addHistoryEntry(type) {
  const games = Number(keypadValue);
  if (!Number.isFinite(games) || games < 0) return;
  const parsed = parseHistory($('historyInput').value);
  parsed.entries.push({ games, type, raw: `${games} ${type}` });
  $('historyInput').value = entriesToText(parsed.entries);
  keypadValue = '0';
  updateKeypadDisplay();
  updateHistoryViews();
  saveState();
}

function setCurrentFromKeypad() {
  $('currentGames').value = Number(keypadValue);
  keypadValue = '0';
  updateKeypadDisplay();
  $('historyParseStatus').textContent = `現在G数を${$('currentGames').value}Gに設定しました。`;
  saveState();
}

function deleteLastHistory() {
  const parsed = parseHistory($('historyInput').value);
  if (!parsed.entries.length) return;
  parsed.entries.pop();
  $('historyInput').value = entriesToText(parsed.entries);
  updateHistoryViews();
  saveState();
}

function deleteHistoryAt(index) {
  const parsed = parseHistory($('historyInput').value);
  parsed.entries.splice(index, 1);
  $('historyInput').value = entriesToText(parsed.entries);
  updateHistoryViews();
  saveState();
}

function clearHistory() {
  if (!$('historyInput').value.trim() && Number($('currentGames').value) === 0) return;
  const confirmed = window.confirm('登録したボーナス履歴と現在G数を消去します。');
  if (!confirmed) return;
  $('historyInput').value = '';
  $('currentGames').value = '0';
  $('historyParseStatus').textContent = '';
  updateHistoryViews();
  saveState();
}

function renderHistoryList(entries) {
  const list = $('historyList');
  const empty = $('historyListEmpty');
  list.innerHTML = '';
  $('historyCountBadge').textContent = `${entries.length}件`;

  if (!entries.length) {
    list.classList.add('hidden');
    empty.classList.remove('hidden');
    return;
  }
  list.classList.remove('hidden');
  empty.classList.add('hidden');

  const reverse = $('reverseHistory').checked;
  const indexed = entries.map((entry, index) => ({ entry, index }));
  if (reverse) indexed.reverse();

  indexed.forEach(({ entry, index }) => {
    const li = document.createElement('li');
    const orderNumber = reverse ? entries.length - index : index + 1;
    const chipClass = entry.type === 'BB' ? 'bb' : entry.type === 'RB' ? 'rb' : 'unknown';
    const chipText = entry.type === 'BB' ? 'BIG' : entry.type === 'RB' ? 'REG' : '?';
    li.innerHTML = `
      <span class="history-order">${orderNumber}回目</span>
      <strong class="history-games">${entry.games.toLocaleString('ja-JP')}G</strong>
      <span class="type-chip ${chipClass}">${chipText}</span>
      <button class="delete-entry" type="button" aria-label="この履歴を削除">×</button>`;
    li.querySelector('.delete-entry').addEventListener('click', () => deleteHistoryAt(index));
    list.appendChild(li);
  });
}

function updateHistoryViews() {
  const parsed = parseHistory($('historyInput').value);
  renderHistoryList(parsed.entries);
  renderHistoryAnalysis(parsed.entries, MACHINES[machineSelect.value]);
  if (parsed.errors.length) {
    $('historyParseStatus').textContent = `読み取れない行：${parsed.errors.join(', ')}行目`;
  }
}

function analyze() {
  const data = getInputs();
  const issues = validate(data);
  const validation = $('validationMessage');
  if (issues.length) {
    validation.textContent = issues.join(' ');
    validation.classList.remove('hidden');
    setActiveTab('input');
    return;
  }

  validation.classList.add('hidden');
  const result = calculate(data);
  renderResult(data, result);
  const parsed = parseHistory(data.historyText);
  renderHistoryAnalysis(parsed.entries, result.machine);
  saveState();
  window.lastAnalysis = { data, result, parsed };
  setActiveTab('result');
}

function applyHistoryToSummary() {
  const parsed = parseHistory($('historyInput').value);
  const known = parsed.entries.filter((entry) => entry.type !== 'UNKNOWN');
  const bb = known.filter((entry) => entry.type === 'BB').length;
  const rb = known.filter((entry) => entry.type === 'RB').length;
  const games = parsed.entries.reduce((sum, entry) => sum + entry.games, 0) + Math.round(clampNumber($('currentGames').value));

  if (!parsed.entries.length) {
    $('historyParseStatus').textContent = '読み取れる履歴がありません。';
    return;
  }

  $('totalGames').value = games;
  if (known.length) {
    $('bbCount').value = bb;
    $('rbCount').value = rb;
  }
  const unknown = parsed.entries.length - known.length;
  $('historyParseStatus').textContent = `${parsed.entries.length}件を集計値へ反映${unknown ? `（種別不明${unknown}件）` : ''}${parsed.errors.length ? `・読取失敗 ${parsed.errors.join(',')}行` : ''}`;
  updateLiveRates();
  saveState();
}

function updateMachineNote() {
  const machine = MACHINES[machineSelect.value];
  $('machineNote').textContent = `${machine.introduced}${machine.note ? `｜${machine.note}` : ''}`;
}

function updateDiffWeight() {
  $('diffWeightValue').textContent = `${$('diffWeight').value}%`;
}

function collectState() {
  return {
    machineKey: machineSelect.value,
    totalGames: $('totalGames').value,
    bbCount: $('bbCount').value,
    rbCount: $('rbCount').value,
    diffCoins: $('diffCoins').value,
    historyInput: $('historyInput').value,
    currentGames: $('currentGames').value,
    priorMode: $('priorMode').value,
    diffWeight: $('diffWeight').value,
    reverseHistory: $('reverseHistory').checked
  };
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collectState()));
    $('saveStatus').textContent = '保存済み';
    window.clearTimeout(saveState.timer);
    saveState.timer = window.setTimeout(() => {
      $('saveStatus').textContent = '自動保存';
    }, 800);
  } catch (_) {
    $('saveStatus').textContent = '端末保存なし';
  }
}

function loadState() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) raw = localStorage.getItem(OLD_STORAGE_KEY);
    const state = JSON.parse(raw);
    if (!state) return;
    if (MACHINES[state.machineKey]) machineSelect.value = state.machineKey;
    ['totalGames','bbCount','rbCount','diffCoins','historyInput','currentGames','priorMode','diffWeight'].forEach((id) => {
      if (state[id] !== undefined && $(id)) $(id).value = state[id];
    });
    if (typeof state.reverseHistory === 'boolean') $('reverseHistory').checked = state.reverseHistory;
  } catch (_) {
    // 壊れた保存値は無視する。
  }
}

function resetAll() {
  const hasData = ['totalGames','bbCount','rbCount','diffCoins','historyInput'].some((id) => $(id).value.trim());
  if (hasData && !window.confirm('入力内容と履歴をすべて消去します。')) return;

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(OLD_STORAGE_KEY);
  machineSelect.value = 'neo_im';
  ['totalGames','bbCount','rbCount','diffCoins','historyInput'].forEach((id) => { $(id).value = ''; });
  $('currentGames').value = '0';
  $('priorMode').value = 'uniform';
  $('diffWeight').value = '20';
  $('reverseHistory').checked = true;
  keypadValue = '0';
  updateKeypadDisplay();

  $('resultContent').classList.add('hidden');
  $('emptyResult').classList.remove('hidden');
  $('historyContent').classList.add('hidden');
  $('historyEmpty').classList.remove('hidden');
  $('confidenceBadge').textContent = '未計算';
  $('confidenceBadge').className = 'badge neutral';
  $('validationMessage').classList.add('hidden');
  $('historyParseStatus').textContent = '';
  window.lastAnalysis = null;

  updateMachineNote();
  updateDiffWeight();
  updateLiveRates();
  updateHistoryViews();
  setActiveTab('input');
}

function loadSample() {
  machineSelect.value = 'neo_im';
  $('totalGames').value = '7371';
  $('bbCount').value = '28';
  $('rbCount').value = '28';
  $('diffCoins').value = '600';
  $('historyInput').value = '107 BB\n154 RB\n82 BB\n310 RB\n65 BB\n210 RB\n98 BB\n441 RB\n73 BB\n122 RB\n268 BB\n91 RB';
  $('currentGames').value = '107';
  $('priorMode').value = 'uniform';
  $('diffWeight').value = '20';
  updateMachineNote();
  updateDiffWeight();
  updateLiveRates();
  updateHistoryViews();
  saveState();
  setActiveTab('input');
}

function exportCsv() {
  if (!window.lastAnalysis) {
    analyze();
    if (!window.lastAnalysis) return;
  }

  const { data, result, parsed } = window.lastAnalysis;
  const rows = [
    ['機種', result.machine.name],
    ['総回転数', data.games],
    ['BB', data.bb],
    ['RB', data.rb],
    ['差枚', data.diff],
    ['実測BB確率', formatDenominator(data.games, data.bb)],
    ['実測RB確率', formatDenominator(data.games, data.rb)],
    ['実測合算', formatDenominator(data.games, data.bb + data.rb)],
    [],
    ['設定','相対確率','公表BB','公表RB','公表合算','出玉率','期待差枚']
  ];
  result.machine.specs.forEach((spec, index) => {
    rows.push([index + 1, result.posterior[index], spec[0], spec[1], spec[2], spec[3], Math.round(result.expectedDiffs[index])]);
  });
  rows.push([], ['履歴番号','当選G','種別']);
  parsed.entries.forEach((entry, index) => rows.push([index + 1, entry.games, entry.type]));

  const csv = '\uFEFF' + rows.map((row) => row.map((value) => `"${String(value ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `juggler_analysis_${new Date().toISOString().slice(0, 10)}.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  document.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', () => setActiveTab(button.dataset.tab));
  });
  document.querySelectorAll('.jump-input').forEach((button) => {
    button.addEventListener('click', () => setActiveTab('input'));
  });
  document.querySelectorAll('.keypad button').forEach((button) => {
    button.addEventListener('click', () => handleKeypad(button.dataset.key));
  });

  $('analyzeButton').addEventListener('click', analyze);
  $('mobileAnalyzeButton').addEventListener('click', analyze);
  $('applyHistory').addEventListener('click', applyHistoryToSummary);
  $('loadSample').addEventListener('click', loadSample);
  $('resetAll').addEventListener('click', resetAll);
  $('exportCsv').addEventListener('click', exportCsv);
  $('addBB').addEventListener('click', () => addHistoryEntry('BB'));
  $('addRB').addEventListener('click', () => addHistoryEntry('RB'));
  $('setCurrent').addEventListener('click', setCurrentFromKeypad);
  $('deleteLastHistory').addEventListener('click', deleteLastHistory);
  $('clearHistory').addEventListener('click', clearHistory);
  $('reverseHistory').addEventListener('change', () => {
    updateHistoryViews();
    saveState();
  });

  machineSelect.addEventListener('change', () => {
    updateMachineNote();
    updateHistoryViews();
    saveState();
  });
  $('diffWeight').addEventListener('input', updateDiffWeight);
  ['totalGames','bbCount','rbCount'].forEach((id) => $(id).addEventListener('input', updateLiveRates));
  $('historyInput').addEventListener('input', updateHistoryViews);

  document.querySelectorAll('input, select, textarea').forEach((element) => {
    element.addEventListener('change', saveState);
  });
}

loadState();
bindEvents();
updateMachineNote();
updateDiffWeight();
updateKeypadDisplay();
updateLiveRates();
updateHistoryViews();
