'use strict';

function role(label, denoms, type = 'small', captureSensitive = true, note = '') {
  return { label, denoms, type, captureSensitive, note };
}

const MACHINES = {
  neo_im: {
    name: 'ネオアイムジャグラーEX', introduced: '2025年9月',
    note: 'ボーナス・小役はアイムジャグラーEX相当として扱います。',
    bonusCoins: [252, 96],
    specs: [[273.1,439.8,168.5,97.0],[269.7,399.6,161.0,98.0],[269.7,331.0,148.6,99.5],[259.0,315.1,142.2,101.1],[259.0,255.0,128.5,103.3],[255.0,255.0,127.5,105.5]],
    roles: {
      grape: role('ブドウ',[6.02,6.02,6.02,6.02,6.02,5.78],'small',true),
      nonCherry: role('非重複チェリー',[32.2,32.2,32.2,32.2,32.2,32.2],'small',true),
      singleBB: role('単独BIG',[389,382,382,370,370,362],'bonus',false),
      singleRB: role('単独REG',[630,575,475,449,364,364],'bonus',false),
      cherryBB: role('チェリー重複BIG',[916,920,920,863,863,864],'bonus',false),
      cherryRB: role('チェリー重複REG',[1456,1311,1092,1057,851,851],'bonus',false)
    }
  },
  ultra: {
    name: 'ウルトラミラクルジャグラー', introduced: '2024年12月',
    note: '小役はブドウ参考値のみ対応しています。',
    bonusCoins: [240, 96],
    specs: [[267.5,425.6,164.3,97.0],[261.1,402.1,158.3,98.1],[256.0,350.5,147.9,99.8],[242.7,322.8,138.6,102.1],[233.2,297.9,130.8,104.5],[216.3,277.7,121.6,108.1]],
    roles: { grape: role('ブドウ',[5.93,5.93,5.93,5.93,5.87,5.81],'small',true) }
  },
  mister: {
    name: 'ミスタージャグラー', introduced: '2024年7月', note: '',
    bonusCoins: [240, 96],
    specs: [[268.6,374.5,156.4,97.0],[267.5,354.2,152.4,98.0],[260.1,331.0,145.6,99.8],[249.2,291.3,134.3,102.7],[240.9,257.0,124.4,105.5],[237.4,237.4,118.7,107.3]],
    roles: {
      grape: role('ブドウ',[6.21,6.16,6.12,6.08,6.05,6.01],'small',true),
      cherry: role('チェリー',[40.0,39.5,39.0,38.5,38.0,37.5],'small',true)
    }
  },
  girls: {
    name: 'ジャグラーガールズSS', introduced: '2024年4月', note: '',
    bonusCoins: [240, 96],
    specs: [[273.1,381.0,159.1,97.0],[270.8,350.5,152.8,97.9],[260.1,316.6,142.8,99.9],[250.1,281.3,132.4,102.1],[243.6,270.8,128.3,104.0],[226.0,252.1,119.2,107.5]],
    roles: {
      grape: role('ブドウ',[5.98,5.98,5.98,5.98,5.88,5.83],'small',true),
      cherry: role('チェリー',[33.5,33.4,33.3,33.1,33.1,32.9],'small',true)
    }
  },
  gogo3: {
    name: 'ゴーゴージャグラー3', introduced: '2023年7月', note: '',
    bonusCoins: [240, 96],
    specs: [[259.0,354.2,149.6,97.2],[258.0,332.7,145.3,98.2],[257.0,306.2,139.7,99.4],[254.0,268.6,130.5,101.6],[247.3,247.3,123.7,103.8],[234.9,234.9,117.4,106.5]],
    roles: {
      grape: role('ブドウ',[6.25,6.20,6.15,6.07,5.99,5.92],'small',true),
      nonCherry: role('非重複チェリー',[33.4,33.3,33.2,33.1,32.9,32.8],'small',true),
      singleBB: role('単独BIG',[394.8,392.4,392.4,387.8,381.0,364.1],'bonus',false),
      singleRB: role('単独REG',[489.1,452.0,436.9,381.0,339.6,327.7],'bonus',false),
      cherryBB: role('チェリー重複BIG',[1456.4,1456.4,1456.4,1394.4,1394.4,1310.7],'bonus',false),
      cherryRB: role('チェリー重複REG',[1424.7,1310.7,1170.3,1110.8,1024.0,936.2],'bonus',false),
      rareCherryBB: role('レアチェリー重複BIG',[1559.0,1560.2,1524.4,1559.6,1424.8,1337.5],'bonus',false,'総BBから単独・チェリー重複を差し引いた推定値')
    }
  },
  happy3: {
    name: 'ハッピージャグラーV III', introduced: '2022年10月', note: '',
    bonusCoins: [240, 96],
    specs: [[273.1,397.2,161.8,97.0],[270.8,362.1,154.9,98.1],[263.2,332.7,146.9,99.9],[254.0,300.6,137.7,102.9],[239.2,273.1,127.5,105.8],[226.0,256.0,120.0,108.4]],
    roles: {
      grape: role('ブドウ',[6.04,6.01,5.98,5.84,5.81,5.79],'small',true),
      nonCherry: role('非重複チェリー',[62.2,62.5,63.0,64.0,64.6,65.4],'small',true),
      singleBB: role('単独BIG',[394.2,387.8,371.2,379.4,349.4,323.6],'bonus',false),
      singleRB: role('単独REG',[635.5,561.9,532.4,473.7,432.5,426.6],'bonus',false),
      cherryBonus: role('チェリー重複ボーナス合計',[515.4,496.2,464.2,421.0,389.6,370.3],'bonus',false)
    }
  },
  my5: {
    name: 'マイジャグラーV', introduced: '2021年12月', note: '',
    bonusCoins: [240, 96],
    specs: [[273.1,409.6,163.8,97.0],[270.8,385.5,159.1,98.0],[266.4,336.1,148.6,99.9],[254.0,290.0,135.4,102.8],[240.1,268.6,126.8,105.3],[229.1,229.1,114.6,109.4]],
    roles: {
      grape: role('ブドウ',[5.90,5.85,5.80,5.78,5.76,5.66],'small',true),
      nonCherry: role('非重複チェリー',[38.1,38.1,36.8,36.8,35.6,35.6],'small',true),
      singleBB: role('単独BIG',[420.1,414.8,404.5,376.6,348.6,341.3],'bonus',false),
      singleRB: role('単独REG',[655.4,595.8,496.5,404.5,390.1,327.7],'bonus',false),
      cherryBB: role('チェリー重複BIG',[1365,1365,1365,1365,1337,1130],'bonus',false),
      cherryRB: role('チェリー重複REG',[1092,1092,1040,1024,862,762],'bonus',false),
      rareCherryBB: role('レアチェリー重複BIG',[1822.6,1820.3,1821.6,1821.3,1823.6,1818.3],'bonus',false,'総BBから単独・チェリー重複を差し引いた推定値')
    }
  },
  funky2: {
    name: 'ファンキージャグラー2', introduced: '2021年10月', note: '',
    bonusCoins: [240, 96],
    specs: [[266.4,439.8,165.9,97.0],[259.0,407.1,158.3,98.5],[256.0,366.1,150.7,99.8],[249.2,322.8,140.6,102.0],[240.1,299.3,133.2,104.3],[219.9,262.1,119.6,109.0]],
    roles: {
      grape: role('ブドウ',[5.94,5.93,5.88,5.83,5.75,5.66],'small',true),
      nonCherry: role('非重複チェリー',[35.6,35.6,35.6,35.6,35.6,35.6],'small',true),
      singleBB: role('単独BIG',[405,397,395,383,375,334],'bonus',false),
      singleRB: role('単独REG',[630,585,512,449,405,352],'bonus',false),
      cherryBB: role('チェリー重複BIG',[1425,1365,1365,1365,1285,1260],'bonus',false),
      cherryRB: role('チェリー重複REG',[1456,1338,1285,1150,1150,1024],'bonus',false),
      rareCherryBB: role('レアチェリー重複BIG',[1715.7,1640.7,1557.6,1494.2,1388.8,1316.0],'bonus',false,'総BBから単独・チェリー重複を差し引いた推定値')
    }
  },
  im_ex: {
    name: 'アイムジャグラーEX', introduced: '2020年12月', note: '',
    bonusCoins: [252, 96],
    specs: [[273.1,439.8,168.5,97.0],[269.7,399.6,161.0,98.0],[269.7,331.0,148.6,99.5],[259.0,315.1,142.2,101.1],[259.0,255.0,128.5,103.3],[255.0,255.0,127.5,105.5]],
    roles: {
      grape: role('ブドウ',[6.02,6.02,6.02,6.02,6.02,5.78],'small',true),
      nonCherry: role('非重複チェリー',[32.2,32.2,32.2,32.2,32.2,32.2],'small',true),
      singleBB: role('単独BIG',[389,382,382,370,370,362],'bonus',false),
      singleRB: role('単独REG',[630,575,475,449,364,364],'bonus',false),
      cherryBB: role('チェリー重複BIG',[916,920,920,863,863,864],'bonus',false),
      cherryRB: role('チェリー重複REG',[1456,1311,1092,1057,851,851],'bonus',false)
    }
  }
};


const CHERRY_TARGET_PAYOUT_RATES = {
  neo_im: [97.82, 98.93, 100.58, 102.35, 104.73, 107.09],
  im_ex: [97.82, 98.93, 100.58, 102.35, 104.73, 107.09],
  my5: [97.67, 98.79, 101.02, 104.12, 106.99, 111.42],
  funky2: [97.67, 99.20, 100.82, 103.22, 105.85, 111.13],
  gogo3: [98.22, 99.18, 100.41, 102.63, 104.87, 107.61],
  happy3: [97.80, 99.07, 100.74, 104.19, 107.36, 110.27],
  girls: [98.03, 98.95, 101.01, 103.31, 105.22, 108.72],
  mister: [98.09, 99.11, 100.96, 103.84, 106.69, 108.49],
  ultra: [97.94, 99.04, 100.72, 103.11, 105.50, 109.19]
};

const COIN_HOLD_REFERENCE = {
  neo_im: {
    values: [40.6, 40.6, 40.6, 40.6, 40.6, 42.6],
    cherryCapture: 2 / 3,
    note: 'チェリー2/3取得・ベル／ピエロ完全こぼし'
  },
  im_ex: {
    values: [40.6, 40.6, 40.6, 40.6, 40.6, 42.6],
    cherryCapture: 2 / 3,
    note: 'チェリー2/3取得・ベル／ピエロ完全こぼし'
  },
  my5: {
    values: [42.27, 42.61, 43.01, 43.35, 43.71, 44.57],
    cherryCapture: 1,
    note: 'チェリー完全取得・ベル／ピエロ完全こぼし'
  },
  funky2: {
    values: [42.16, 42.24, 42.66, 43.08, 43.35, 43.62],
    cherryCapture: 1,
    note: 'チェリー完全取得・ベル／ピエロ完全こぼし'
  },
  happy3: {
    values: [40.68, 40.90, 41.13, 42.08, 42.24, 42.41],
    cherryCapture: 1,
    note: 'チェリー完全取得・ベル／ピエロ完全こぼし'
  },
  gogo3: {
    values: [40.03, 40.37, 40.72, 41.30, 41.85, 42.49],
    cherryCapture: 1,
    note: 'チェリー完全取得・ベル／ピエロ完全こぼし'
  },
  girls: {
    values: [41.72, 41.73, 41.74, 41.75, 42.47, 42.74],
    cherryCapture: 1,
    note: 'チェリー完全取得・ベル／ピエロ完全こぼし'
  },
  mister: {
    values: [39.93, 40.31, 40.63, 40.89, 41.16, 41.47],
    cherryCapture: 1,
    note: 'チェリー完全取得・ベル／ピエロ完全こぼし'
  },
  ultra: {
    values: [42.16, 42.18, 42.23, 42.26, 42.30, 42.38],
    cherryCapture: 1,
    note: 'チェリー完全取得・ベル／ピエロ完全こぼし'
  }
};


const DATA_REVIEWED_AT = '2026-07-26';

const DATA_SOURCE_META = {
  official: {
    type: '公式',
    title: '北電子 パチスロ製品情報',
    url: 'https://www.kitadenshi.co.jp/slot/',
    updatedAt: '機種別製品ページ',
    verifiedAt: DATA_REVIEWED_AT,
    description: 'BB・RB・合算・公表機械割・獲得枚数'
  },
  payout: {
    type: '独自計算',
    title: 'ジャグラー設定判別ツールNEO 機械割一覧',
    url: 'https://jugcheckneo.link/payout-rates/',
    updatedAt: '更新日記載なし',
    verifiedAt: DATA_REVIEWED_AT,
    description: 'チェリー狙い参考機械割'
  },
  coin: {
    type: '解析',
    title: 'ジャグラーズネット コイン持ち一覧',
    url: 'https://jugglersnet.com/analysis/coinmochi',
    updatedAt: '2026-05-21',
    verifiedAt: DATA_REVIEWED_AT,
    description: '設定別50枚コイン持ち・取得条件'
  },
  roles: {
    type: '解析・推定',
    title: 'くずぱち日記 ジャグラーシリーズ設定差一覧',
    url: 'https://kuzupati.com/entry/2024/12/26/091238',
    updatedAt: '2024-12-26',
    verifiedAt: DATA_REVIEWED_AT,
    description: 'ブドウ・チェリー・単独／重複確率'
  }
};

const PRIOR_PRESETS = {
  uniform: [16.67, 16.67, 16.67, 16.67, 16.66, 16.66],
  hall: [45, 25, 15, 8, 5, 2],
  middle: [22, 24, 24, 16, 9, 5],
  event: [8, 12, 18, 25, 22, 15]
};

const STORAGE_KEY = 'juggler-setting-analyzer-v14';
const THEME_STORAGE_KEY = 'juggler-theme';
const DARK_THEME_COLOR = '#0a1020';
const LIGHT_THEME_COLOR = '#10172a';
const GRAPE_PAYOUT = 8;
const REPLAY_PAYOUT = 3;
const CHERRY_PAYOUT = 2;
const REPLAY_DENOM = 7.298;
const ROLE_ORDER = ['grape','nonCherry','cherry','singleBB','singleRB','cherryBB','cherryRB','rareCherryBB','cherryBonus'];
let pendingRoleCounts = {};
let activeRoleMode = 'reverse';
let bonusInputMode = 'simple';
let historySyncActive = false;
const $ = (id) => document.getElementById(id);
const machineSelect = $('machineSelect');
let keypadValue = '0';
let diffSign = 1;

Object.entries(MACHINES).forEach(([key, machine]) => {
  const option = document.createElement('option');
  option.value = key;
  option.textContent = `${machine.name}（${machine.introduced}）`;
  machineSelect.appendChild(option);
});

const referenceMachineSelect = $('referenceMachineSelect');
Object.entries(MACHINES).forEach(([key, machine]) => {
  const option = document.createElement('option');
  option.value = key;
  option.textContent = `${machine.name}（${machine.introduced}）`;
  referenceMachineSelect.appendChild(option);
});

function buildPriorEditor() {
  const editor = $('priorEditor');
  editor.innerHTML = '';
  for (let i = 1; i <= 6; i += 1) {
    const row = document.createElement('div');
    row.className = 'prior-row';
    row.innerHTML = `
      <label for="priorRange${i}">設定${i}</label>
      <input id="priorRange${i}" class="prior-range" data-setting="${i}" type="range" min="0" max="100" step="0.01" value="${PRIOR_PRESETS.uniform[i - 1]}">
      <div class="prior-number-wrap">
        <input id="priorValue${i}" class="prior-value" data-setting="${i}" type="number" min="0" max="100" step="0.01" value="${PRIOR_PRESETS.uniform[i - 1]}">
        <span>%</span>
      </div>`;
    editor.appendChild(row);
  }
}


function getRoleMode() {
  return activeRoleMode;
}

function setRoleMode(mode) {
  activeRoleMode = mode === 'manual' ? 'manual' : 'reverse';
  updateRoleMode();
}

function renderRoleInputs(savedCounts = null) {
  const machine = MACHINES[machineSelect.value];
  const container = $('roleInputs');
  container.innerHTML = '';

  const counts = savedCounts || pendingRoleCounts || {};
  const available = ROLE_ORDER.filter((key) => machine.roles[key] && machine.roles[key].type !== 'bonus');

  available.forEach((key) => {
    const roleData = machine.roles[key];
    const card = document.createElement('article');
    card.className = 'role-input-card';
    card.dataset.roleKey = key;
    const note = roleData.note || (roleData.captureSensitive ? '取りこぼし補正の対象' : 'ボーナス内訳');
    const firstDenom = roleData.denoms[0];
    const sixthDenom = roleData.denoms[5];

    card.innerHTML = `
      <div class="role-card-head">
        <div class="role-input-label">
          <strong>${roleData.label}</strong>
          <small>${note}</small>
        </div>
        <button class="role-clear-button" data-role-action="clear" type="button">空欄に戻す</button>
      </div>
      <div class="role-count-layout">
        <div class="role-counter">
          <button class="minus" data-role-action="minus" type="button" aria-label="${roleData.label}を1減らす">−</button>
          <input id="roleCount_${key}" class="role-count-input" data-role-key="${key}" inputmode="numeric" type="number" min="0" step="1" placeholder="未入力" value="${counts[key] ?? ''}">
          <button class="plus" data-role-action="plus" type="button" aria-label="${roleData.label}を1増やす">＋</button>
        </div>
        <div class="role-rate-box">
          <span>実測確率</span>
          <strong id="roleRate_${key}" class="role-live-rate">未使用</strong>
        </div>
      </div>
      <div class="role-reference">
        参考：<strong>設定1 1/${firstDenom}</strong> → <strong>設定6 1/${sixthDenom}</strong>
      </div>`;
    container.appendChild(card);
  });

  if (!available.length) {
    container.innerHTML = '<div class="role-card-empty">この機種で利用できる小役参考値は登録されていません。</div>';
  }

  $('roleDataNote').textContent = available.length
    ? `${machine.name}で利用できる${available.length}種類の小役を表示しています。単独・チェリー重複ボーナスはSTEP 1の内訳を自動使用します。`
    : '';

  container.querySelectorAll('[data-role-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.role-input-card');
      const input = card.querySelector('.role-count-input');

      if (button.dataset.roleAction === 'clear') {
        input.value = '';
      } else {
        const current = input.value === '' ? 0 : Math.max(0, Number(input.value) || 0);
        input.value = button.dataset.roleAction === 'plus'
          ? String(current + 1)
          : String(Math.max(0, current - 1));
      }

      updateRoleRates();
      saveState();
    });
  });

  container.querySelectorAll('.role-count-input').forEach((input) => {
    input.addEventListener('input', updateRoleRates);
    input.addEventListener('change', saveState);
  });

  pendingRoleCounts = {};
  updateRoleRates();
}

function readRoleCounts() {
  const counts = {};
  document.querySelectorAll('.role-count-input').forEach((input) => {
    if (input.value.trim() === '') counts[input.dataset.roleKey] = null;
    else counts[input.dataset.roleKey] = Math.max(0, Math.round(Number(input.value) || 0));
  });
  return counts;
}

function updateRoleRates() {
  const gamesInput = Math.round(clampNumber($('manualRoleGames').value));
  const totalGames = Math.round(clampNumber($('totalGames').value));
  const games = gamesInput > 0 ? gamesInput : totalGames;
  let usedCount = 0;

  document.querySelectorAll('.role-count-input').forEach((input) => {
    const rate = $(`roleRate_${input.dataset.roleKey}`);
    const card = input.closest('.role-input-card');
    if (!rate) return;

    if (input.value.trim() === '') {
      rate.textContent = '未使用';
      card?.classList.remove('used');
      return;
    }

    usedCount += 1;
    card?.classList.add('used');
    const count = Math.max(0, Number(input.value) || 0);
    rate.textContent = games > 0 && count > 0
      ? `1/${(games / count).toFixed(2)}`
      : count === 0
        ? '0回'
        : 'G数未入力';
  });

  if ($('roleInputSummary')) {
    $('roleInputSummary').textContent = `${usedCount}項目使用`;
  }
}

function updateRoleMode() {
  const mode = getRoleMode();
  $('reverseRolePanel').classList.toggle('hidden', mode !== 'reverse');
  $('manualRolePanel').classList.toggle('hidden', mode !== 'manual');
  $('roleStatusBadge').textContent = mode === 'reverse'
    ? (normalizeUnsignedNumericInput($('diffCoins').value).length ? '差枚で逆算' : '差枚未入力')
    : '小役回数を入力';

  const reverseButton = $('reverseModeButton');
  const manualButton = $('manualModeButton');
  reverseButton.classList.toggle('active', mode === 'reverse');
  manualButton.classList.toggle('active', mode === 'manual');
  reverseButton.setAttribute('aria-selected', String(mode === 'reverse'));
  manualButton.setAttribute('aria-selected', String(mode === 'manual'));

  updateEvidenceWeightLabels();
  updateRoleRates();
  saveState();
}

function updateEvidenceWeightLabels() {
  $('reverseRoleWeightValue').textContent = `${$('reverseRoleWeight').value}%`;
  $('manualRoleWeightValue').textContent = `${$('manualRoleWeight').value}%`;
}

function updatePriorUsage() {
  const enabled = $('usePriorCorrection').checked;
  $('priorDetails').classList.toggle('prior-disabled', !enabled);
}

function getReverseCherryDenom(machine) {
  const probabilities = [];
  for (let setting = 0; setting < 6; setting += 1) {
    let p = 0;
    if (machine.roles.nonCherry) p += 1 / machine.roles.nonCherry.denoms[setting];
    else if (machine.roles.cherry) p += 1 / machine.roles.cherry.denoms[setting];

    ['cherryBB','cherryRB','rareCherryBB'].forEach((key) => {
      if (machine.roles[key]) p += 1 / machine.roles[key].denoms[setting];
    });
    if (machine.roles.cherryBonus) p += 1 / machine.roles.cherryBonus.denoms[setting];
    if (p > 0) probabilities.push(p);
  }
  if (!probabilities.length) return 33.0;
  const averageP = probabilities.reduce((a, b) => a + b, 0) / probabilities.length;
  return 1 / averageP;
}

function updateReverseCherryNote() {
  const denom = getReverseCherryDenom(MACHINES[machineSelect.value]);
  $('reverseCherryNote').textContent = `逆算ではリプレイ1/7.298固定、${MACHINES[machineSelect.value].name}の登録小役値からチェリー約1/${denom.toFixed(2)}を使用します。`;
}

function updateDiffInputSize() {
  const input = $('diffCoins');
  if (!input) return;

  const length = normalizeUnsignedNumericInput(input.value).length;
  input.classList.remove(
    'diff-digits-5',
    'diff-digits-6',
    'diff-digits-7',
    'diff-digits-8plus'
  );

  if (length >= 8) input.classList.add('diff-digits-8plus');
  else if (length === 7) input.classList.add('diff-digits-7');
  else if (length === 6) input.classList.add('diff-digits-6');
  else if (length === 5) input.classList.add('diff-digits-5');
}

function normalizeUnsignedNumericInput(value) {
  return String(value ?? '')
    .replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xFEE0))
    .replace(/[^\d]/g, '');
}

function clampNumber(value, min = 0, max = Infinity) {
  const n = Number(value);
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
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

function formatCoins(value) {
  return `${Math.round(value).toLocaleString('ja-JP')}枚`;
}

function normalizeLogScores(logScores) {
  const max = Math.max(...logScores);
  const exps = logScores.map((value) => Math.exp(value - max));
  const sum = exps.reduce((a, b) => a + b, 0);
  if (!Number.isFinite(sum) || sum <= 0) return Array(logScores.length).fill(1 / logScores.length);
  return exps.map((value) => value / sum);
}

function normalizeWeights(values) {
  const clean = values.map((value) => clampNumber(value, 0, 1000000));
  const sum = clean.reduce((a, b) => a + b, 0);
  return sum > 0 ? clean.map((value) => value / sum) : Array(6).fill(1 / 6);
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

    const upper = line.toUpperCase().replace(/\s+/g, '');
    let type = 'UNKNOWN';
    let kind = 'unknown';

    if (/SBB|単独(?:BIG|BB)/.test(upper)) {
      type = 'BB';
      kind = 'single';
    } else if (/CBB|(?:チェリー)?重複(?:BIG|BB)|チェリー(?:BIG|BB)/.test(upper)) {
      type = 'BB';
      kind = 'cherry';
    } else if (/SRB|単独(?:REG|RB)/.test(upper)) {
      type = 'RB';
      kind = 'single';
    } else if (/CRB|(?:チェリー)?重複(?:REG|RB)|チェリー(?:REG|RB)/.test(upper)) {
      type = 'RB';
      kind = 'cherry';
    } else if (/\bBB\b|\bBIG\b|(^|[^A-Z])B([^A-Z]|$)/.test(line.toUpperCase())) {
      type = 'BB';
      kind = 'unknown';
    } else if (/\bRB\b|\bREG\b|(^|[^A-Z])R([^A-Z]|$)/.test(line.toUpperCase())) {
      type = 'RB';
      kind = 'unknown';
    }

    entries.push({ games, type, kind, raw: line });
  });

  return { entries, errors };
}

function historyEntryCode(entry) {
  if (entry.type === 'BB' && entry.kind === 'single') return 'SBB';
  if (entry.type === 'BB' && entry.kind === 'cherry') return 'CBB';
  if (entry.type === 'RB' && entry.kind === 'single') return 'SRB';
  if (entry.type === 'RB' && entry.kind === 'cherry') return 'CRB';
  if (entry.type === 'BB') return 'BB';
  if (entry.type === 'RB') return 'RB';
  return 'UNKNOWN';
}

function entriesToText(entries) {
  return entries.map((entry) => `${entry.games} ${historyEntryCode(entry)}`).join('\n');
}

function getBonusInputMode() {
  return bonusInputMode;
}

function detailedBonusFieldsAreEmpty() {
  return ['singleBBCount','cherryBBCount','unknownBBCount','singleRBCount','cherryRBCount','unknownRBCount']
    .every((id) => $(id).value.trim() === '' || Number($(id).value) === 0);
}

function updateBonusInputModeUI() {
  const simple = bonusInputMode === 'simple';
  $('simpleBonusPanel').classList.toggle('hidden', !simple);
  $('detailedBonusPanel').classList.toggle('hidden', simple);
  $('simpleBonusModeButton').classList.toggle('active', simple);
  $('detailedBonusModeButton').classList.toggle('active', !simple);
  $('simpleBonusModeButton').setAttribute('aria-selected', String(simple));
  $('detailedBonusModeButton').setAttribute('aria-selected', String(!simple));
  $('bonusModeBadge').textContent = simple ? 'かんたん入力' : '詳細入力';
}

function setBonusInputMode(mode, syncValues = true) {
  const nextMode = mode === 'detailed' ? 'detailed' : 'simple';
  if (nextMode === bonusInputMode) {
    updateBonusInputModeUI();
    return;
  }

  if (syncValues && nextMode === 'detailed' && detailedBonusFieldsAreEmpty()) {
    const simpleBB = Math.round(clampNumber($('simpleBBCount').value));
    const simpleRB = Math.round(clampNumber($('simpleRBCount').value));
    $('unknownBBCount').value = simpleBB > 0 ? String(simpleBB) : '';
    $('unknownRBCount').value = simpleRB > 0 ? String(simpleRB) : '';
  }

  if (syncValues && nextMode === 'simple') {
    const detailed = readDetailedBonusBreakdown();
    $('simpleBBCount').value = detailed.bb > 0 ? String(detailed.bb) : '';
    $('simpleRBCount').value = detailed.rb > 0 ? String(detailed.rb) : '';
  }

  bonusInputMode = nextMode;
  updateBonusInputModeUI();
  updateLiveRates();
  saveState();
}

function updateDiffUsageNote() {
  const hasDiff = normalizeUnsignedNumericInput($('diffCoins').value).length > 0;
  $('diffUsageNote').textContent = hasDiff
    ? `${diffSign < 0 ? '−' : '＋'}差枚を入力済み。差枚逆算モードではブドウ推定に使用します。`
    : '未入力なら差枚・逆算ブドウを判定に使用しません。';
  $('diffUsageNote').classList.toggle('used', hasDiff);

  if (getRoleMode() === 'reverse') {
    $('roleStatusBadge').textContent = hasDiff ? '差枚で逆算' : '差枚未入力';
  }
}

function markManualSummaryInput() {
  if (!historySyncActive) return;
  historySyncActive = false;
  $('historySyncStatus').textContent = '台データを手動変更しました。履歴を編集すると再び自動同期します。';
}

function getPriorRawValues() {
  return Array.from({ length: 6 }, (_, index) => clampNumber($(`priorValue${index + 1}`).value, 0, 100));
}

function readDetailedBonusBreakdown() {
  const values = {
    singleBB: Math.round(clampNumber($('singleBBCount').value)),
    cherryBB: Math.round(clampNumber($('cherryBBCount').value)),
    unknownBB: Math.round(clampNumber($('unknownBBCount').value)),
    singleRB: Math.round(clampNumber($('singleRBCount').value)),
    cherryRB: Math.round(clampNumber($('cherryRBCount').value)),
    unknownRB: Math.round(clampNumber($('unknownRBCount').value))
  };
  values.bb = values.singleBB + values.cherryBB + values.unknownBB;
  values.rb = values.singleRB + values.cherryRB + values.unknownRB;
  return values;
}

function readBonusBreakdown() {
  if (bonusInputMode === 'simple') {
    const bb = Math.round(clampNumber($('simpleBBCount').value));
    const rb = Math.round(clampNumber($('simpleRBCount').value));
    return {
      singleBB: 0,
      cherryBB: 0,
      unknownBB: bb,
      singleRB: 0,
      cherryRB: 0,
      unknownRB: rb,
      bb,
      rb
    };
  }
  return readDetailedBonusBreakdown();
}

function updateBonusTotals() {
  const bonus = readBonusBreakdown();
  $('bbCount').value = String(bonus.bb);
  $('rbCount').value = String(bonus.rb);
  $('bbTotalDisplay').textContent = bonus.bb.toLocaleString('ja-JP');
  $('rbTotalDisplay').textContent = bonus.rb.toLocaleString('ja-JP');
  return bonus;
}

function calculateBonusBreakdownEvidence(data, machine) {
  const logLikelihoods = Array(6).fill(0);
  const evidence = [];

  const categories = [
    {
      type: 'BB',
      singleCount: data.bonusBreakdown.singleBB,
      cherryCount: data.bonusBreakdown.cherryBB,
      totalSpecIndex: 0,
      singleRole: machine.roles.singleBB,
      label: 'BIG内訳'
    },
    {
      type: 'RB',
      singleCount: data.bonusBreakdown.singleRB,
      cherryCount: data.bonusBreakdown.cherryRB,
      totalSpecIndex: 1,
      singleRole: machine.roles.singleRB,
      label: 'REG内訳'
    }
  ];

  categories.forEach((category) => {
    const knownCount = category.singleCount + category.cherryCount;
    if (knownCount <= 0 || !category.singleRole) return;

    const categoryLogs = category.singleRole.denoms.map((singleDenominator, index) => {
      const totalProbability = 1 / machine.specs[index][category.totalSpecIndex];
      const singleProbability = 1 / singleDenominator;
      const conditionalSingle = Math.min(
        1 - 1e-9,
        Math.max(1e-9, singleProbability / totalProbability)
      );
      return binomialLogLikelihood(
        knownCount,
        category.singleCount,
        conditionalSingle
      );
    });

    categoryLogs.forEach((value, index) => {
      logLikelihoods[index] += value;
    });

    const bestValue = Math.max(...categoryLogs);
    const bestIndexes = categoryLogs
      .map((value, index) => ({ value, index }))
      .filter(({ value }) => Math.abs(value - bestValue) <= 1e-10)
      .map(({ index }) => index);

    evidence.push({
      type: category.type,
      label: category.label,
      singleCount: category.singleCount,
      cherryCount: category.cherryCount,
      knownCount,
      bestIndexes,
      logLikelihoods: categoryLogs
    });
  });

  return { logLikelihoods, evidence };
}

function getInputs() {
  const diffRaw = normalizeUnsignedNumericInput($('diffCoins').value);
  const hasDiff = diffRaw.length > 0;
  const absoluteDiff = hasDiff ? Number(diffRaw) : null;
  const priorRaw = getPriorRawValues();
  const priorEnabled = $('usePriorCorrection').checked;
  const games = Math.round(clampNumber($('totalGames').value));
  const manualGamesValue = Math.round(clampNumber($('manualRoleGames').value));
  const bonusBreakdown = updateBonusTotals();

  return {
    machineKey: machineSelect.value,
    games,
    bb: bonusBreakdown.bb,
    rb: bonusBreakdown.rb,
    bonusInputMode,
    bonusBreakdown,
    hasDiff,
    diff: hasDiff ? diffSign * absoluteDiff : null,
    historyText: $('historyInput').value,
    currentGames: Math.round(clampNumber($('currentGames').value)),
    historySyncActive,
    priorEnabled,
    priorRaw,
    priors: priorEnabled ? normalizeWeights(priorRaw) : Array(6).fill(1 / 6),
    roleMode: getRoleMode(),
    reverseRoleWeight: Number($('reverseRoleWeight').value) / 100,
    reverseCherryCapture: clampNumber($('reverseCherryCapture').value, 0, 1),
    manualRoleWeight: Number($('manualRoleWeight').value) / 100,
    manualGames: manualGamesValue > 0 ? manualGamesValue : games,
    smallRoleCapture: clampNumber($('smallRoleCapture').value, 0, 1),
    roleCounts: readRoleCounts()
  };
}

function validate(data) {
  const issues = [];
  if (data.games <= 0) issues.push('総回転数を入力してください。');
  if (data.bb + data.rb <= 0) issues.push('BBまたはRB回数を入力してください。');
  if (data.bb + data.rb > data.games) issues.push('BB＋RB回数が総回転数を超えています。');
  if (data.hasDiff && !Number.isFinite(data.diff)) issues.push('差枚を正しく入力してください。');
  if (data.priorEnabled && data.priorRaw.reduce((a, b) => a + b, 0) <= 0) issues.push('設定配分を1つ以上入力してください。');

  if (data.roleMode === 'manual') {
    if (data.manualGames <= 0) issues.push('小役を数えたゲーム数を入力してください。');
    Object.entries(data.roleCounts).forEach(([key, count]) => {
      if (count !== null && count > data.manualGames) {
        const label = MACHINES[data.machineKey].roles[key]?.label || key;
        issues.push(`${label}回数が小役計測G数を超えています。`);
      }
    });
    const totalSmallRoleCounts = Object.entries(data.roleCounts)
      .filter(([key, count]) => count !== null && MACHINES[data.machineKey].roles[key]?.type === 'small')
      .reduce((sum, [, count]) => sum + count, 0);
    if (totalSmallRoleCounts > data.manualGames) {
      issues.push('入力した小役回数の合計が小役計測G数を超えています。');
    }
  }
  return issues;
}

function estimateGrape(data, machine) {
  if (!data.hasDiff) {
    return {
      valid: false,
      skipped: true,
      message: '差枚未入力のため、逆算ブドウは判定に使用していません。'
    };
  }

  const cherryDenom = getReverseCherryDenom(machine);
  const totalOut = data.games * 3 + data.diff;
  const bonusOut = data.bb * machine.bonusCoins[0] + data.rb * machine.bonusCoins[1];
  const replayOut = data.games / REPLAY_DENOM * REPLAY_PAYOUT;
  const cherryOut = data.games / cherryDenom * CHERRY_PAYOUT * data.reverseCherryCapture;
  const grapeOut = totalOut - bonusOut - replayOut - cherryOut;
  const grapeCount = grapeOut / GRAPE_PAYOUT;
  const denominator = grapeCount > 0 ? data.games / grapeCount : Infinity;
  const valid = Number.isFinite(denominator)
    && grapeCount > 0
    && grapeCount < data.games
    && denominator >= 3.5
    && denominator <= 12;

  let message = '';
  if (!valid) {
    message = '逆算値が現実的な範囲外です。差枚・回転数・ボーナス回数を確認してください。逆算ブドウは判定から除外しました。';
  } else if (data.games < 3000) {
    message = '3,000G未満の差枚逆算は誤差が大きいため参考値です。';
  } else {
    message = '差枚からの推定値です。ベル・ピエロ、目押しロス、データ機器の差を含むため、証拠強度を低めにしています。';
  }

  return {
    totalOut,
    bonusOut,
    replayOut,
    cherryOut,
    grapeOut,
    grapeCount,
    denominator,
    valid,
    skipped: false,
    message,
    cherryDenom
  };
}

function binomialLogLikelihood(n, x, probability) {
  const p = Math.min(1 - 1e-12, Math.max(1e-12, probability));
  return x * Math.log(p) + (n - x) * Math.log(1 - p);
}

function multinomialLogLikelihood(totalGames, categories) {
  const totalObserved = categories.reduce((sum, category) => sum + category.count, 0);
  const otherCount = totalGames - totalObserved;
  if (otherCount < 0) return -Infinity;

  let probabilitySum = 0;
  let logLikelihood = 0;

  categories.forEach((category) => {
    const probability = Math.min(1 - 1e-12, Math.max(1e-12, category.probability));
    probabilitySum += probability;
    logLikelihood += category.count * Math.log(probability);
  });

  const otherProbability = Math.min(
    1 - 1e-12,
    Math.max(1e-12, 1 - probabilitySum)
  );
  logLikelihood += otherCount * Math.log(otherProbability);
  return logLikelihood;
}


function closestSettingForRole(roleData, actualDenom) {
  if (!Number.isFinite(actualDenom)) return '—';
  let best = 0;
  let bestDistance = Infinity;
  roleData.denoms.forEach((denom, index) => {
    const distance = Math.abs(Math.log(actualDenom / denom));
    if (distance < bestDistance) {
      bestDistance = distance;
      best = index;
    }
  });
  return `設定${best + 1}`;
}

function calculate(data) {
  const machine = MACHINES[data.machineKey];
  const noBonus = data.games - data.bb - data.rb;

  const bonusLogLikelihoods = machine.specs.map((spec) => {
    const pBB = 1 / spec[0];
    const pRB = 1 / spec[1];
    const pNone = Math.max(1e-12, 1 - pBB - pRB);
    return data.bb * Math.log(pBB) + data.rb * Math.log(pRB) + noBonus * Math.log(pNone);
  });

  const priorLogs = data.priors.map((prior) => Math.log(Math.max(prior, 1e-300)));
  const bonusBreakdownResult = calculateBonusBreakdownEvidence(data, machine);
  const bonusOnlyPosterior = normalizeLogScores(
    bonusLogLikelihoods.map(
      (value, index) => value + bonusBreakdownResult.logLikelihoods[index] + priorLogs[index]
    )
  );
  const roleLogLikelihoods = Array(6).fill(0);
  const usedEvidence = [];
  let grape = { valid: false, message: '小役を使用していません。' };
  let roleModel = { method: 'none', categoryCount: 0, observedCount: 0, otherCount: data.games };

  if (data.roleMode === 'reverse') {
    grape = estimateGrape(data, machine);
    const grapeRole = machine.roles.grape;
    if (grape.valid && grapeRole && data.reverseRoleWeight > 0) {
      grapeRole.denoms.forEach((denom, index) => {
        roleLogLikelihoods[index] += data.reverseRoleWeight
          * binomialLogLikelihood(data.games, grape.grapeCount, 1 / denom);
      });
      roleModel = {
        method: 'binomial',
        categoryCount: 1,
        observedCount: grape.grapeCount,
        otherCount: data.games - grape.grapeCount
      };
      usedEvidence.push({
        key: 'grape',
        label: 'ブドウ（差枚逆算）',
        count: grape.grapeCount,
        games: data.games,
        denominator: grape.denominator,
        capture: null,
        weight: data.reverseRoleWeight,
        closest: closestSettingForRole(grapeRole, grape.denominator)
      });
    }
  } else {
    const weight = data.manualRoleWeight;
    const enteredRoles = Object.entries(data.roleCounts)
      .filter(([key, count]) => {
        const roleData = machine.roles[key];
        return count !== null && roleData && roleData.type === 'small';
      })
      .map(([key, count]) => ({
        key,
        count,
        roleData: machine.roles[key],
        capture: machine.roles[key].captureSensitive ? data.smallRoleCapture : 1
      }));

    if (enteredRoles.length && weight > 0) {
      machine.specs.forEach((_, settingIndex) => {
        const categories = enteredRoles.map((entry) => ({
          count: entry.count,
          probability: (1 / entry.roleData.denoms[settingIndex]) * entry.capture
        }));
        roleLogLikelihoods[settingIndex] += weight
          * multinomialLogLikelihood(data.manualGames, categories);
      });

      enteredRoles.forEach((entry) => {
        const correctedCount =
          entry.roleData.captureSensitive && entry.capture > 0
            ? entry.count / entry.capture
            : entry.count;
        const actualDenom =
          correctedCount > 0 ? data.manualGames / correctedCount : Infinity;

        usedEvidence.push({
          key: entry.key,
          label: entry.roleData.label,
          count: entry.count,
          games: data.manualGames,
          denominator: actualDenom,
          capture: entry.roleData.captureSensitive ? entry.capture : null,
          weight,
          closest: closestSettingForRole(entry.roleData, actualDenom)
        });
      });

      const totalObserved = enteredRoles.reduce((sum, entry) => sum + entry.count, 0);
      roleModel = {
        method: 'multinomial',
        categoryCount: enteredRoles.length,
        observedCount: totalObserved,
        otherCount: data.manualGames - totalObserved
      };
    }
  }

  const posterior = normalizeLogScores(
    bonusLogLikelihoods.map(
      (value, index) =>
        value
        + bonusBreakdownResult.logLikelihoods[index]
        + roleLogLikelihoods[index]
        + priorLogs[index]
    )
  );
  const expectedDiffs = machine.specs.map((spec) => 3 * data.games * (spec[3] / 100 - 1));

  return {
    machine,
    posterior,
    bonusOnlyPosterior,
    bonusBreakdownEvidence: bonusBreakdownResult.evidence,
    bonusBreakdownLogLikelihoods: bonusBreakdownResult.logLikelihoods,
    roleLogLikelihoods,
    roleModel,
    usedEvidence,
    grape,
    expectedDiffs
  };
}

function getConfidence(games, roleUsed) {
  if (games < 1000) return ['参考', 'low'];
  if (games < 3000) return ['信頼度 低', 'low'];
  if (games < 5000) return [roleUsed ? '信頼度 中' : '信頼度 低', roleUsed ? 'medium' : 'low'];
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
    text = '低設定域との整合度が高い結果です。差枚の上振れだけで判断しないでください。';
  } else {
    title = `設定${top}中心の混戦`;
    text = '複数設定の確率が近く、追加回転またはRB・ブドウ推移の確認が必要です。';
  }
  return { title, text, top, p4, p5 };
}


function findClosestSettingIndexes(actualDenominator, referenceDenominators) {
  if (!Number.isFinite(actualDenominator) || actualDenominator <= 0) return [];

  const distances = referenceDenominators.map((denominator) => {
    if (!Number.isFinite(denominator) || denominator <= 0) return Infinity;
    return Math.abs(Math.log(actualDenominator / denominator));
  });
  const minimum = Math.min(...distances);
  if (!Number.isFinite(minimum)) return [];

  const tolerance = Math.max(1e-12, minimum * 1e-9);
  return distances
    .map((distance, index) => ({ distance, index }))
    .filter(({ distance }) => Math.abs(distance - minimum) <= tolerance)
    .map(({ index }) => index);
}

function formatSettingRange(indexes) {
  if (!indexes.length) return '—';
  const settings = indexes.map((index) => index + 1).sort((a, b) => a - b);

  const groups = [];
  let start = settings[0];
  let previous = settings[0];

  for (let i = 1; i <= settings.length; i += 1) {
    const current = settings[i];
    if (current === previous + 1) {
      previous = current;
      continue;
    }

    groups.push(start === previous ? `設定${start}` : `設定${start}〜${previous}`);
    start = current;
    previous = current;
  }

  return groups.join('・');
}

function setNearestMetricSummary(elementId, indexes, available = true) {
  const element = $(elementId);
  if (!element) return;

  if (!available || !indexes.length) {
    element.textContent = '判定なし';
    element.classList.add('unavailable');
    return;
  }

  element.textContent = formatSettingRange(indexes);
  element.classList.remove('unavailable');
}

function buildSpecMetricCell(value, metricClass, isNearest) {
  const classes = ['spec-metric-cell'];
  if (isNearest) classes.push('nearest-cell', `nearest-${metricClass}`);

  return `<td class="${classes.join(' ')}">
    <span class="spec-value">${value}</span>

  </td>`;
}

function getDecisionStrength(data, posterior) {
  const ranked = posterior
    .map((probability, index) => ({ probability, index }))
    .sort((a, b) => b.probability - a.probability);
  const gap = ranked[0].probability - ranked[1].probability;

  let label = '弱い';
  let className = 'low';
  if (data.games >= 5000 && gap >= 0.15 && ranked[0].probability >= 0.40) {
    label = '強い';
    className = 'strong';
  } else if (data.games >= 3000 && gap >= 0.07 && ranked[0].probability >= 0.28) {
    label = '中';
    className = 'medium';
  }

  return {
    label,
    className,
    gap,
    first: ranked[0],
    second: ranked[1]
  };
}

function createEvidenceItem({ label, title, detail, status, tone = '', unused = false }) {
  const item = document.createElement('article');
  item.className = `evidence-item ${tone}${unused ? ' unused' : ''}`.trim();
  item.innerHTML = `
    <div class="evidence-item-label">${label}</div>
    <div class="evidence-item-copy">
      <strong>${title}</strong>
      <small>${detail}</small>
    </div>
    <span class="evidence-item-status">${status}</span>`;
  return item;
}

function renderDecisionEvidence(data, result, closestSettings) {
  const strength = getDecisionStrength(data, result.posterior);
  const lowProbability = result.posterior.slice(0, 3).reduce((sum, value) => sum + value, 0);
  const highProbability = result.posterior.slice(3, 6).reduce((sum, value) => sum + value, 0);

  $('evidenceStrengthBadge').textContent = `判別強度 ${strength.label}`;
  $('evidenceStrengthBadge').className = `status-pill evidence-strength-${strength.className}`;
  $('evidenceTopPair').textContent =
    `設定${strength.first.index + 1} ${formatPercent(strength.first.probability)} ／ `
    + `設定${strength.second.index + 1} ${formatPercent(strength.second.probability)}`;
  $('evidenceTopGap').textContent = `${(strength.gap * 100).toFixed(1)}pt`;
  $('evidenceLowProbability').textContent = formatPercent(lowProbability);
  $('evidenceHighProbability').textContent = formatPercent(highProbability);
  $('evidenceInputMode').textContent =
    `${data.bonusInputMode === 'simple' ? 'かんたん' : '詳細'}${data.historySyncActive ? '・履歴同期' : ''}`;

  const list = $('evidenceList');
  list.innerHTML = '';

  const actualBB = formatDenominator(data.games, data.bb);
  const actualRB = formatDenominator(data.games, data.rb);
  const actualCombined = formatDenominator(data.games, data.bb + data.rb);

  list.appendChild(createEvidenceItem({
    label: 'BB',
    title: `${actualBB} → ${formatSettingRange(closestSettings.bb)}`,
    detail: `${data.bb}回を設定別BB確率と比較`,
    status: '使用',
    tone: 'bb'
  }));

  list.appendChild(createEvidenceItem({
    label: 'RB',
    title: `${actualRB} → ${formatSettingRange(closestSettings.rb)}`,
    detail: `${data.rb}回を設定別RB確率と比較`,
    status: '使用',
    tone: 'rb'
  }));

  list.appendChild(createEvidenceItem({
    label: '合算',
    title: `${actualCombined} → ${formatSettingRange(closestSettings.combined)}`,
    detail: '表示上の近似目安。総合尤度ではBBとRBを分けて計算',
    status: '参考',
    tone: 'combined'
  }));

  if (result.bonusBreakdownEvidence.length) {
    result.bonusBreakdownEvidence.forEach((evidence) => {
      list.appendChild(createEvidenceItem({
        label: evidence.label,
        title: `単独${evidence.singleCount}回・重複${evidence.cherryCount}回 → ${formatSettingRange(evidence.bestIndexes)}`,
        detail: 'ボーナス当選時の単独／重複比率を条件付き尤度で追加',
        status: '使用',
        tone: 'breakdown'
      }));
    });
  } else {
    list.appendChild(createEvidenceItem({
      label: '単独／重複',
      title: '内訳未入力',
      detail: 'BB・RB合計だけで判定しています。',
      status: '未使用',
      tone: 'breakdown',
      unused: true
    }));
  }

  if (data.roleMode === 'reverse') {
    if (!data.hasDiff) {
      list.appendChild(createEvidenceItem({
        label: '差枚・ブドウ',
        title: '差枚未入力',
        detail: '差枚0枚とは扱わず、逆算ブドウを完全に除外しました。',
        status: '未使用',
        tone: 'role',
        unused: true
      }));
    } else if (result.grape.valid) {
      list.appendChild(createEvidenceItem({
        label: '逆算ブドウ',
        title: `1/${result.grape.denominator.toFixed(3)} → ${formatSettingRange(closestSettings.grape)}`,
        detail: `証拠強度${Math.round(data.reverseRoleWeight * 100)}%で追加`,
        status: '使用',
        tone: 'role'
      }));
    } else {
      list.appendChild(createEvidenceItem({
        label: '逆算ブドウ',
        title: '現実的な範囲外',
        detail: result.grape.message,
        status: '除外',
        tone: 'role',
        unused: true
      }));
    }
  } else if (result.usedEvidence.length) {
    result.usedEvidence.forEach((evidence) => {
      list.appendChild(createEvidenceItem({
        label: evidence.label,
        title: Number.isFinite(evidence.denominator)
          ? `1/${evidence.denominator.toFixed(3)} → ${evidence.closest}`
          : `0回 → ${evidence.closest}`,
        detail: `計測${evidence.games}G・多項分布・証拠強度${Math.round(evidence.weight * 100)}%`,
        status: '使用',
        tone: 'role'
      }));
    });
  } else {
    list.appendChild(createEvidenceItem({
      label: '実測小役',
      title: '入力なし',
      detail: '小役情報を判定に使用していません。',
      status: '未使用',
      tone: 'role',
      unused: true
    }));
  }

  list.appendChild(createEvidenceItem({
    label: '設定配分',
    title: data.priorEnabled ? 'ユーザー設定を使用' : '均等配分',
    detail: data.priorEnabled
      ? '入力した設定1〜6の配分を事前確率として反映'
      : '設定1〜6を同じ事前確率で比較',
    status: data.priorEnabled ? '補正あり' : '補正なし',
    tone: 'prior'
  }));

  list.appendChild(createEvidenceItem({
    label: '履歴',
    title: data.historySyncActive ? '台データへ自動同期済み' : '区間分析のみ',
    detail: '履歴のハマり・100G以内率は設定尤度へ重複加算していません。',
    status: data.historySyncActive ? '同期' : '診断',
    tone: 'history'
  }));
}

function renderResult(data, result) {
  $('emptyResult').classList.add('hidden');
  $('resultContent').classList.remove('hidden');

  const roleUsed = result.usedEvidence.length > 0;
  const confidence = getConfidence(data.games, roleUsed);
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
  $('actualBBBreakdown').textContent =
    `単独${data.bonusBreakdown.singleBB}・重複${data.bonusBreakdown.cherryBB}・不明${data.bonusBreakdown.unknownBB}`;
  $('actualRBBreakdown').textContent =
    `単独${data.bonusBreakdown.singleRB}・重複${data.bonusBreakdown.cherryRB}・不明${data.bonusBreakdown.unknownRB}`;

  const actualDenominators = {
    bb: data.bb > 0 ? data.games / data.bb : null,
    rb: data.rb > 0 ? data.games / data.rb : null,
    combined: data.bb + data.rb > 0 ? data.games / (data.bb + data.rb) : null
  };
  const closestSettings = {
    bb: findClosestSettingIndexes(actualDenominators.bb, result.machine.specs.map((spec) => spec[0])),
    rb: findClosestSettingIndexes(actualDenominators.rb, result.machine.specs.map((spec) => spec[1])),
    combined: findClosestSettingIndexes(actualDenominators.combined, result.machine.specs.map((spec) => spec[2])),
    grape: []
  };

  if (!roleUsed) $('actualSmallRole').textContent = '未使用';
  else if (result.usedEvidence.length === 1) {
    const evidence = result.usedEvidence[0];
    $('actualSmallRole').textContent = Number.isFinite(evidence.denominator)
      ? `${evidence.label.replace('（差枚逆算）','')} 1/${evidence.denominator.toFixed(3)}`
      : `${evidence.label} 0回`;
  } else {
    $('actualSmallRole').textContent = `${result.usedEvidence.length}項目使用`;
  }

  const grapeEvidence = result.usedEvidence.find((evidence) => evidence.key === 'grape');
  const grapeRoleForNearest = result.machine.roles.grape;
  if (grapeEvidence && grapeRoleForNearest && Number.isFinite(grapeEvidence.denominator)) {
    closestSettings.grape = findClosestSettingIndexes(
      grapeEvidence.denominator,
      grapeRoleForNearest.denoms
    );
  }

  setNearestMetricSummary('nearestBB', closestSettings.bb, Number.isFinite(actualDenominators.bb));
  setNearestMetricSummary('nearestRB', closestSettings.rb, Number.isFinite(actualDenominators.rb));
  setNearestMetricSummary('nearestCombined', closestSettings.combined, Number.isFinite(actualDenominators.combined));
  setNearestMetricSummary('nearestGrape', closestSettings.grape, Boolean(grapeEvidence));

  const nearestParts = [
    closestSettings.bb.length ? `BB=${formatSettingRange(closestSettings.bb)}` : null,
    closestSettings.rb.length ? `RB=${formatSettingRange(closestSettings.rb)}` : null,
    closestSettings.combined.length ? `合算=${formatSettingRange(closestSettings.combined)}` : null,
    closestSettings.grape.length ? `ブドウ=${formatSettingRange(closestSettings.grape)}` : null
  ].filter(Boolean);
  $('nearestSpecSummary').textContent = nearestParts.length
    ? `対応目安：${nearestParts.join('、')}。同じ公表値は複数設定を同時表示します。`
    : '比較できる実測値がありません。';

  $('prob4Plus').textContent = formatPercent(verdict.p4);
  $('prob5Plus').textContent = formatPercent(verdict.p5);
  $('expectedSetting').textContent = result.posterior.reduce((sum, probability, index) => sum + probability * (index + 1), 0).toFixed(2);

  if (data.priorEnabled) {
    const topPriorIndex = data.priors.indexOf(Math.max(...data.priors));
    $('priorSummary').textContent = `設定${topPriorIndex + 1} ${formatPercent(data.priors[topPriorIndex], 0)}`;
  } else {
    $('priorSummary').textContent = '補正なし';
  }

  const roleLabel = data.roleMode === 'reverse'
    ? data.hasDiff
      ? `逆算ブドウ ${Math.round(data.reverseRoleWeight * 100)}%`
      : '差枚未入力・小役なし'
    : roleUsed ? `実測小役・多項分布 ${Math.round(data.manualRoleWeight * 100)}%` : '小役なし';
  const breakdownLabel = result.bonusBreakdownEvidence.length ? ' ＋ 単独/重複内訳' : '';
  $('analysisModeLabel').textContent =
    `BB/RB 100%${breakdownLabel} ＋ ${roleLabel}${data.priorEnabled ? ' ＋ 設定配分' : ''}`;

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

  renderDecisionEvidence(data, result, closestSettings);

  const reverse = data.roleMode === 'reverse';
  $('reverseBreakdown').classList.toggle('hidden', !reverse);
  $('smallRoleStatusBadge').textContent = roleUsed ? `${result.usedEvidence.length}項目使用` : '未使用';
  $('smallRoleStatusBadge').className = roleUsed ? 'status-pill grape-ok' : 'status-pill';

  if (reverse) {
    $('grapeTotalOut').textContent = result.grape.totalOut !== undefined ? formatCoins(result.grape.totalOut) : '—';
    $('grapeBonusOut').textContent = result.grape.bonusOut !== undefined ? formatCoins(result.grape.bonusOut) : '—';
    $('grapeReplayOut').textContent = result.grape.replayOut !== undefined ? formatCoins(result.grape.replayOut) : '—';
    $('grapeCherryOut').textContent = result.grape.cherryOut !== undefined ? formatCoins(result.grape.cherryOut) : '—';
    $('grapePayoutTotal').textContent = result.grape.grapeOut !== undefined ? formatCoins(result.grape.grapeOut) : '—';
    $('grapeCount').textContent = result.grape.valid ? `${Math.round(result.grape.grapeCount).toLocaleString('ja-JP')}回` : '—';
    $('smallRoleCaution').textContent = result.grape.message;
  } else {
    $('smallRoleCaution').textContent = roleUsed
      ? `入力した${result.roleModel.categoryCount}項目とその他${Math.max(0, Math.round(result.roleModel.otherCount)).toLocaleString('ja-JP')}Gを多項分布でまとめて評価しました。空欄項目は除外し、捕捉率も反映しています。`
      : '小役入力が空欄のため、BB・RBだけで推測しました。';
  }

  const usedWrap = $('usedRoleTableWrap');
  const usedBody = $('usedRoleEvidenceBody');
  usedBody.innerHTML = '';
  usedWrap.classList.toggle('hidden', !roleUsed);
  result.usedEvidence.forEach((evidence) => {
    const tr = document.createElement('tr');
    const actual = Number.isFinite(evidence.denominator)
      ? `1/${evidence.denominator.toFixed(3)}（${Math.round(evidence.count)}回）`
      : `0回`;
    tr.innerHTML = `
      <td>${evidence.label}</td>
      <td>${actual}</td>
      <td>${evidence.games.toLocaleString('ja-JP')}G</td>
      <td>${evidence.capture === null ? '—' : formatPercent(evidence.capture, 0)}</td>
      <td>${formatPercent(evidence.weight, 0)}</td>
      <td>${evidence.closest}</td>`;
    usedBody.appendChild(tr);
  });

  const bonusOnlyTop = result.bonusOnlyPosterior.indexOf(Math.max(...result.bonusOnlyPosterior)) + 1;
  $('bonusOnlySummary').textContent =
    `${result.bonusBreakdownEvidence.length ? 'BB/RB・内訳' : 'BB/RB'}＋配分のみ：設定${bonusOnlyTop} ${formatPercent(result.bonusOnlyPosterior[bonusOnlyTop - 1])}`;

  const tbody = $('specComparisonBody');
  tbody.innerHTML = '';
  const grapeRole = result.machine.roles.grape;
  result.machine.specs.forEach((spec, index) => {
    const tr = document.createElement('tr');
    if (index + 1 === verdict.top) tr.className = 'best-row';

    const grapeValue = grapeRole ? `1/${grapeRole.denoms[index].toFixed(2)}` : '—';
    tr.innerHTML = `
      <td>設定${index + 1}</td>
      ${buildSpecMetricCell(`1/${spec[0]}`, 'bb', closestSettings.bb.includes(index))}
      ${buildSpecMetricCell(`1/${spec[1]}`, 'rb', closestSettings.rb.includes(index))}
      ${buildSpecMetricCell(`1/${spec[2]}`, 'combined', closestSettings.combined.includes(index))}
      ${buildSpecMetricCell(grapeValue, 'grape', closestSettings.grape.includes(index))}
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
    const historyColor =
      entry.type === 'BB' && entry.kind === 'single' ? '#c91f35'
      : entry.type === 'BB' && entry.kind === 'cherry' ? '#ef6a7c'
      : entry.type === 'RB' && entry.kind === 'single' ? '#1764be'
      : entry.type === 'RB' && entry.kind === 'cherry' ? '#54a3e8'
      : entry.type === 'BB' ? '#9d4050'
      : entry.type === 'RB' ? '#4e7199'
      : '#8b95a7';
    context.fillStyle = historyColor;
    context.fillRect(x, margin.top + plotHeight - barHeight, barWidth, barHeight);
  });

  context.fillStyle = '#667085';
  context.fillText('古い ← ボーナス履歴 → 新しい', margin.left, height - 14);
  const legendItems = [
    ['#c91f35', '単独BIG'],
    ['#ef6a7c', '重複BIG'],
    ['#1764be', '単独REG'],
    ['#54a3e8', '重複REG']
  ];
  legendItems.forEach(([color, label], index) => {
    const x = width - 390 + index * 95;
    context.fillStyle = color;
    context.fillRect(x, 12, 10, 10);
    context.fillStyle = '#475467';
    context.fillText(label, x + 14, 21);
  });
}

function getCherryProbabilityForSetting(machine, settingIndex) {
  let probability = 0;

  if (machine.roles.nonCherry) {
    probability += 1 / machine.roles.nonCherry.denoms[settingIndex];
  } else if (machine.roles.cherry) {
    probability += 1 / machine.roles.cherry.denoms[settingIndex];
  }

  ['cherryBB', 'cherryRB', 'rareCherryBB'].forEach((key) => {
    if (machine.roles[key]) {
      probability += 1 / machine.roles[key].denoms[settingIndex];
    }
  });

  if (machine.roles.cherryBonus) {
    probability += 1 / machine.roles.cherryBonus.denoms[settingIndex];
  }

  return probability;
}

function formatReferenceDenominator(probability, digits = 2) {
  if (!Number.isFinite(probability) || probability <= 0) return '—';
  return `1/${(1 / probability).toFixed(digits)}`;
}

function getCherryTargetPayoutRate(machineKey, settingIndex, officialRate) {
  const rates = CHERRY_TARGET_PAYOUT_RATES[machineKey];
  if (!rates || !Number.isFinite(rates[settingIndex])) return officialRate;
  return rates[settingIndex];
}

function getSelectedPayoutRate(machineKey, machine, settingIndex, mode, interpolationRate) {
  const officialRate = machine.specs[settingIndex][3];
  const cherryTargetRate =
    getCherryTargetPayoutRate(machineKey, settingIndex, officialRate);

  if (mode === 'cherry') return cherryTargetRate;
  if (mode === 'interpolate') {
    return officialRate
      + interpolationRate * (cherryTargetRate - officialRate);
  }
  return officialRate;
}

function getAdjustedCoinHold(machineKey, machine, settingIndex, coinMode) {
  const reference = COIN_HOLD_REFERENCE[machineKey];
  if (!reference || !Number.isFinite(reference.values[settingIndex])) return null;

  const referenceCoinHold = reference.values[settingIndex];
  if (coinMode === 'reference') return referenceCoinHold;

  const captureRate = clampNumber(coinMode, 0, 1);
  const referenceNetConsumption = 50 / referenceCoinHold;
  const cherryProbability =
    getCherryProbabilityForSetting(machine, settingIndex);

  if (!Number.isFinite(cherryProbability) || cherryProbability <= 0) {
    return referenceCoinHold;
  }

  const captureDifference =
    reference.cherryCapture - captureRate;
  const adjustedNetConsumption =
    referenceNetConsumption
    + captureDifference * cherryProbability * CHERRY_PAYOUT;

  if (!Number.isFinite(adjustedNetConsumption) || adjustedNetConsumption <= 0) {
    return null;
  }

  return 50 / adjustedNetConsumption;
}

function getReferenceRoleColumns(machine) {
  const preferred = [
    'grape',
    'cherry',
    'nonCherry',
    'singleBB',
    'singleRB',
    'cherryBB',
    'cherryRB',
    'rareCherryBB',
    'cherryBonus'
  ];

  return preferred.filter((key) => machine.roles[key]);
}

function renderReferenceRoleTable(machine) {
  const roleKeys = getReferenceRoleColumns(machine);
  const head = $('referenceRoleHead');
  const body = $('referenceRoleBody');

  head.innerHTML = `
    <tr>
      <th>設定</th>
      ${roleKeys.map((key) => `<th>${machine.roles[key].label}</th>`).join('')}
    </tr>`;

  body.innerHTML = '';
  machine.specs.forEach((_, settingIndex) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>設定${settingIndex + 1}</td>
      ${roleKeys.map((key) => {
        const denominator = machine.roles[key].denoms[settingIndex];
        return `<td>${Number.isFinite(denominator) ? `1/${denominator}` : '—'}</td>`;
      }).join('')}`;
    body.appendChild(row);
  });
}

function renderAllMachineComparison() {
  const body = $('allMachineCompareBody');
  body.innerHTML = '';

  Object.entries(MACHINES).forEach(([key, machine]) => {
    const grape = machine.roles.grape;
    const row = document.createElement('tr');
    row.dataset.machineKey = key;
    row.innerHTML = `
      <td>
        <button class="machine-link-button" type="button" data-machine-key="${key}">
          ${machine.name}
        </button>
      </td>
      <td>1/${machine.specs[0][2]}</td>
      <td>1/${machine.specs[5][2]}</td>
      <td>${machine.specs[0][3].toFixed(1)}%</td>
      <td>${machine.specs[5][3].toFixed(1)}%</td>
      <td>${grape ? `1/${grape.denoms[0]}` : '—'}</td>
      <td>${grape ? `1/${grape.denoms[5]}` : '—'}</td>`;
    body.appendChild(row);
  });

  body.querySelectorAll('.machine-link-button').forEach((button) => {
    button.addEventListener('click', () => {
      referenceMachineSelect.value = button.dataset.machineKey;
      renderMachineReference();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function renderReferenceSources(machineKey) {
  const sourceList = $('referenceSourceList');
  const machine = MACHINES[machineKey];
  const entries = [
    DATA_SOURCE_META.official,
    DATA_SOURCE_META.payout,
    DATA_SOURCE_META.coin,
    DATA_SOURCE_META.roles
  ];

  sourceList.innerHTML = '';
  entries.forEach((source) => {
    const card = document.createElement('article');
    card.className = 'reference-source-card';
    card.innerHTML = `
      <div class="reference-source-card-head">
        <span class="source-type source-type-${source.type.replace(/[^一-龥ぁ-んァ-ヶA-Za-z0-9]/g, '-')}">${source.type}</span>
        <span class="source-date">更新 ${source.updatedAt}</span>
      </div>
      <a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.title}</a>
      <p>${source.description}</p>
      <small>確認日 ${source.verifiedAt}</small>`;
    sourceList.appendChild(card);
  });

  if (machineKey === 'neo_im') {
    const assumption = document.createElement('article');
    assumption.className = 'reference-source-card source-assumption-card';
    assumption.innerHTML = `
      <div class="reference-source-card-head">
        <span class="source-type source-type-assumption">仮定</span>
        <span class="source-date">確認 ${DATA_REVIEWED_AT}</span>
      </div>
      <strong>アイムジャグラーEX相当値</strong>
      <p>${machine.note}</p>
      <small>機種固有解析値が揃うまでの暫定扱い</small>`;
    sourceList.appendChild(assumption);
  }

  $('referenceReviewedAt').textContent = `データ確認 ${DATA_REVIEWED_AT}`;
}

function updateReferenceConditionUI() {
  const mode = $('referencePayoutMode').value;
  const interpolation = mode === 'interpolate';
  $('referenceInterpolationPanel').classList.toggle('hidden', !interpolation);
  $('referenceInterpolationValue').textContent = `${$('referenceInterpolationRate').value}%`;
}

function renderMachineReference() {
  const machineKey = referenceMachineSelect.value || machineSelect.value;
  const machine = MACHINES[machineKey];
  if (!machine) return;

  const payoutMode = $('referencePayoutMode').value;
  const interpolationRate =
    clampNumber($('referenceInterpolationRate').value, 0, 100) / 100;
  const coinMode = $('referenceCoinMode').value;
  const coinReference = COIN_HOLD_REFERENCE[machineKey];

  updateReferenceConditionUI();
  renderReferenceSources(machineKey);

  $('referenceIntroduced').textContent = machine.introduced;
  $('referenceBigCoins').textContent = `${machine.bonusCoins[0]}枚`;
  $('referenceRegCoins').textContent = `${machine.bonusCoins[1]}枚`;

  const payoutMessage =
    payoutMode === 'official'
      ? '機械割はメーカー公表値（適当打ち基準）を選択中です。'
      : payoutMode === 'cherry'
        ? '機械割はチェリー狙い参考値（NEO独自計算値）を選択中です。'
        : `機械割は公表値からチェリー狙い参考値へ${Math.round(interpolationRate * 100)}%の概算補間です。`;

  const coinMessage = coinReference
    ? coinMode === 'reference'
      ? `コイン持ち：掲載元条件（${coinReference.note}）`
      : `コイン持ち：チェリー取得${Math.round(Number(coinMode) * 100)}%として概算`
    : 'コイン持ち：未登録';

  $('referenceMachineNote').textContent =
    [machine.note, payoutMessage, coinMessage].filter(Boolean).join('｜');

  $('referenceCaptureBadge').textContent =
    payoutMode === 'official'
      ? '公表値'
      : payoutMode === 'cherry'
        ? 'チェリー狙い参考'
        : `概算${Math.round(interpolationRate * 100)}%`;

  const body = $('referenceSpecBody');
  body.innerHTML = '';

  machine.specs.forEach((spec, settingIndex) => {
    const officialRate = spec[3];
    const cherryTargetRate =
      getCherryTargetPayoutRate(machineKey, settingIndex, officialRate);
    const selectedRate =
      getSelectedPayoutRate(
        machineKey,
        machine,
        settingIndex,
        payoutMode,
        interpolationRate
      );
    const expectedDiff1000 =
      3 * 1000 * (selectedRate / 100 - 1);
    const cherryProbability =
      getCherryProbabilityForSetting(machine, settingIndex);
    const coinHold =
      getAdjustedCoinHold(machineKey, machine, settingIndex, coinMode);

    const row = document.createElement('tr');
    const diffClass =
      expectedDiff1000 >= 0 ? 'positive-diff' : 'negative-diff';

    row.innerHTML = `
      <td>設定${settingIndex + 1}</td>
      <td>1/${spec[0]}</td>
      <td>1/${spec[1]}</td>
      <td>1/${spec[2]}</td>
      <td>${officialRate.toFixed(1)}%</td>
      <td class="cherry-target-rate">${cherryTargetRate.toFixed(2)}%</td>
      <td class="adjusted-rate">${selectedRate.toFixed(2)}%</td>
      <td class="${diffClass}">${formatSigned(expectedDiff1000)}</td>
      <td class="coin-hold-value">${coinHold ? `${coinHold.toFixed(2)}G` : '—'}</td>
      <td>${formatReferenceDenominator(cherryProbability)}</td>`;
    body.appendChild(row);
  });

  renderReferenceRoleTable(machine);
}

function setActiveTab(tabName, scrollTop = true) {
  if (tabName === 'reference') {
    referenceMachineSelect.value = machineSelect.value;
    renderMachineReference();
  }

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
  const bonus = updateBonusTotals();
  $('liveBB').textContent = formatDenominator(games, bonus.bb);
  $('liveRB').textContent = formatDenominator(games, bonus.rb);
  $('liveCombined').textContent = formatDenominator(games, bonus.bb + bonus.rb);
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

function addHistoryEntry(type, kind = 'unknown') {
  historySyncActive = true;
  const games = Number(keypadValue);
  if (!Number.isFinite(games) || games < 0) return;
  const parsed = parseHistory($('historyInput').value);
  parsed.entries.push({ games, type, kind, raw: `${games} ${type}` });
  $('historyInput').value = entriesToText(parsed.entries);
  keypadValue = '0';
  updateKeypadDisplay();
  updateHistoryViews();
  saveState();
}

function setCurrentFromKeypad() {
  historySyncActive = true;
  $('currentGames').value = Number(keypadValue);
  keypadValue = '0';
  updateKeypadDisplay();
  $('historyParseStatus').textContent = `現在G数を${$('currentGames').value}Gに設定しました。`;
  updateHistoryViews();
  saveState();
}

function deleteLastHistory() {
  historySyncActive = true;
  const parsed = parseHistory($('historyInput').value);
  if (!parsed.entries.length) return;
  parsed.entries.pop();
  $('historyInput').value = entriesToText(parsed.entries);
  updateHistoryViews();
  saveState();
}

function deleteHistoryAt(index) {
  historySyncActive = true;
  const parsed = parseHistory($('historyInput').value);
  parsed.entries.splice(index, 1);
  $('historyInput').value = entriesToText(parsed.entries);
  updateHistoryViews();
  saveState();
}

function clearAllRoleInputs() {
  const inputs = Array.from(document.querySelectorAll('.role-count-input'));
  if (!inputs.some((input) => input.value.trim() !== '')) return;
  if (!window.confirm('入力した小役・ボーナス内訳をすべて空欄に戻します。')) return;

  inputs.forEach((input) => {
    input.value = '';
  });
  updateRoleRates();
  saveState();
}

function clearHistory() {
  if (!$('historyInput').value.trim() && Number($('currentGames').value) === 0) return;
  if (!window.confirm('登録したボーナス履歴、現在G数、同期した台データを消去します。')) return;

  historySyncActive = true;
  $('historyInput').value = '';
  $('currentGames').value = '';
  $('historyParseStatus').textContent = '';
  updateHistoryViews();
  historySyncActive = false;
  $('historySyncStatus').textContent = '履歴を追加すると総回転数とボーナス回数を自動更新します。';
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
    let chipClass = 'unknown';
    let chipText = '?';

    if (entry.type === 'BB' && entry.kind === 'single') {
      chipClass = 'single-bb';
      chipText = '単独BIG';
    } else if (entry.type === 'BB' && entry.kind === 'cherry') {
      chipClass = 'cherry-bb';
      chipText = '重複BIG';
    } else if (entry.type === 'RB' && entry.kind === 'single') {
      chipClass = 'single-rb';
      chipText = '単独REG';
    } else if (entry.type === 'RB' && entry.kind === 'cherry') {
      chipClass = 'cherry-rb';
      chipText = '重複REG';
    } else if (entry.type === 'BB') {
      chipClass = 'unknown-bb';
      chipText = '不明BIG';
    } else if (entry.type === 'RB') {
      chipClass = 'unknown-rb';
      chipText = '不明REG';
    }
    li.innerHTML = `
      <span class="history-order">${orderNumber}回目</span>
      <strong class="history-games">${entry.games.toLocaleString('ja-JP')}G</strong>
      <span class="type-chip ${chipClass}">${chipText}</span>
      <button class="delete-entry" type="button" aria-label="この履歴を削除">×</button>`;
    li.querySelector('.delete-entry').addEventListener('click', () => deleteHistoryAt(index));
    list.appendChild(li);
  });
}

function getHistorySummary(parsed) {
  const currentGames = Math.round(clampNumber($('currentGames').value));
  const counts = {
    singleBB: 0,
    cherryBB: 0,
    unknownBB: 0,
    singleRB: 0,
    cherryRB: 0,
    unknownRB: 0,
    unknownType: 0
  };

  parsed.entries.forEach((entry) => {
    if (entry.type === 'BB' && entry.kind === 'single') counts.singleBB += 1;
    else if (entry.type === 'BB' && entry.kind === 'cherry') counts.cherryBB += 1;
    else if (entry.type === 'BB') counts.unknownBB += 1;
    else if (entry.type === 'RB' && entry.kind === 'single') counts.singleRB += 1;
    else if (entry.type === 'RB' && entry.kind === 'cherry') counts.cherryRB += 1;
    else if (entry.type === 'RB') counts.unknownRB += 1;
    else counts.unknownType += 1;
  });

  const games = parsed.entries.reduce((sum, entry) => sum + entry.games, 0) + currentGames;
  return { games, currentGames, counts };
}

function syncHistoryToSummary(parsed, announce = true) {
  if (!historySyncActive) {
    if (announce) {
      const hasHistoryInput = $('historyInput').value.trim() !== ''
        || Number($('currentGames').value) > 0;
      $('historySyncStatus').textContent = hasHistoryInput
        ? '手動入力中。履歴を追加・編集すると自動同期を再開します。'
        : '履歴を追加すると総回転数とボーナス回数を自動更新します。';
    }
    return;
  }

  const summary = getHistorySummary(parsed);
  const hasHistorySource = parsed.entries.length > 0
    || summary.currentGames > 0
    || $('historyInput').value.trim() !== '';

  if (!hasHistorySource) {
    $('totalGames').value = '';
    $('simpleBBCount').value = '';
    $('simpleRBCount').value = '';
    ['singleBBCount','cherryBBCount','unknownBBCount','singleRBCount','cherryRBCount','unknownRBCount']
      .forEach((id) => { $(id).value = ''; });
    updateLiveRates();
    $('historySyncStatus').textContent = '履歴は空です。台データも空欄へ同期しました。';
    return;
  }

  const counts = summary.counts;
  $('totalGames').value = summary.games > 0 ? String(summary.games) : '';
  $('singleBBCount').value = counts.singleBB > 0 ? String(counts.singleBB) : '';
  $('cherryBBCount').value = counts.cherryBB > 0 ? String(counts.cherryBB) : '';
  $('unknownBBCount').value = counts.unknownBB > 0 ? String(counts.unknownBB) : '';
  $('singleRBCount').value = counts.singleRB > 0 ? String(counts.singleRB) : '';
  $('cherryRBCount').value = counts.cherryRB > 0 ? String(counts.cherryRB) : '';
  $('unknownRBCount').value = counts.unknownRB > 0 ? String(counts.unknownRB) : '';

  const bb = counts.singleBB + counts.cherryBB + counts.unknownBB;
  const rb = counts.singleRB + counts.cherryRB + counts.unknownRB;
  $('simpleBBCount').value = bb > 0 ? String(bb) : '';
  $('simpleRBCount').value = rb > 0 ? String(rb) : '';

  const hasKnownBreakdown = counts.singleBB + counts.cherryBB + counts.singleRB + counts.cherryRB > 0;
  bonusInputMode = hasKnownBreakdown ? 'detailed' : 'simple';
  updateBonusInputModeUI();
  updateLiveRates();
  updateRoleRates();

  if (announce) {
    $('historySyncStatus').textContent =
      `${parsed.entries.length}件・総回転${summary.games.toLocaleString('ja-JP')}Gを同期`
      + `（BB${bb}・RB${rb}）`;
  }
}

function updateHistoryViews() {
  const parsed = parseHistory($('historyInput').value);
  renderHistoryList(parsed.entries);
  renderHistoryAnalysis(parsed.entries, MACHINES[machineSelect.value]);
  syncHistoryToSummary(parsed, true);

  if (parsed.errors.length) {
    $('historyParseStatus').textContent = `読み取れない行：${parsed.errors.join(', ')}行目`;
  } else if (historySyncActive && parsed.entries.length) {
    $('historyParseStatus').textContent = '履歴内容を台データへ自動反映しました。';
  }
}

function analyze() {
  if (isFormControl(document.activeElement)) document.activeElement.blur();
  document.body.classList.remove('keyboard-open');
  updateKeyboardOffset();

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
  historySyncActive = true;
  updateHistoryViews();
  saveState();
}

function updateMachineNote() {
  const machine = MACHINES[machineSelect.value];
  $('machineNote').textContent = `${machine.introduced}${machine.note ? `｜${machine.note}` : ''}｜BIG ${machine.bonusCoins[0]}枚・REG ${machine.bonusCoins[1]}枚`;
  updateReverseCherryNote();
}

function updateGrapeWeight() {
  updateEvidenceWeightLabels();
}

function updateDiffSignButton() {
  const button = $('diffSignToggle');
  const negative = diffSign < 0;
  button.textContent = negative ? '−' : '＋';
  button.classList.toggle('negative', negative);
  button.setAttribute('aria-pressed', String(negative));
}

function toggleDiffSign() {
  diffSign *= -1;
  updateDiffSignButton();
  updateDiffUsageNote();
  saveState();
}

function setPriorPreset(name) {
  const preset = PRIOR_PRESETS[name] || PRIOR_PRESETS.uniform;
  preset.forEach((value, index) => {
    $(`priorRange${index + 1}`).value = value;
    $(`priorValue${index + 1}`).value = value;
  });
  updatePriorTotal();
  saveState();
}

function updatePriorTotal() {
  const total = getPriorRawValues().reduce((a, b) => a + b, 0);
  $('priorTotal').textContent = `${total.toFixed(2)}%`;
  $('priorTotal').classList.toggle('prior-warning', Math.abs(total - 100) > 0.02);
}

function normalizePriorInputs() {
  const normalized = normalizeWeights(getPriorRawValues()).map((value) => value * 100);
  normalized.forEach((value, index) => {
    const rounded = Number(value.toFixed(2));
    $(`priorRange${index + 1}`).value = rounded;
    $(`priorValue${index + 1}`).value = rounded;
  });
  updatePriorTotal();
  saveState();
}

function syncPriorInput(source) {
  const setting = source.dataset.setting;
  const value = clampNumber(source.value, 0, 100);
  const otherId = source.classList.contains('prior-range') ? `priorValue${setting}` : `priorRange${setting}`;
  $(otherId).value = value;
  updatePriorTotal();
}

function collectState() {
  return {
    machineKey: machineSelect.value,
    bonusInputMode,
    historySyncActive,
    totalGames: $('totalGames').value,
    simpleBBCount: $('simpleBBCount').value,
    simpleRBCount: $('simpleRBCount').value,
    singleBBCount: $('singleBBCount').value,
    cherryBBCount: $('cherryBBCount').value,
    unknownBBCount: $('unknownBBCount').value,
    singleRBCount: $('singleRBCount').value,
    cherryRBCount: $('cherryRBCount').value,
    unknownRBCount: $('unknownRBCount').value,
    diffRaw: normalizeUnsignedNumericInput($('diffCoins').value),
    diffSign,
    historyInput: $('historyInput').value,
    currentGames: $('currentGames').value,
    reverseHistory: $('reverseHistory').checked,
    usePriorCorrection: $('usePriorCorrection').checked,
    priorValues: getPriorRawValues(),
    roleMode: getRoleMode(),
    reverseRoleWeight: $('reverseRoleWeight').value,
    reverseCherryCapture: $('reverseCherryCapture').value,
    manualRoleGames: $('manualRoleGames').value,
    smallRoleCapture: $('smallRoleCapture').value,
    manualRoleWeight: $('manualRoleWeight').value,
    roleCounts: readRoleCounts()
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
    const state = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!state) {
      renderRoleInputs();
      updateBonusInputModeUI();
      return;
    }

    if (MACHINES[state.machineKey]) machineSelect.value = state.machineKey;
    [
      'totalGames','simpleBBCount','simpleRBCount',
      'singleBBCount','cherryBBCount','unknownBBCount',
      'singleRBCount','cherryRBCount','unknownRBCount',
      'historyInput','currentGames','reverseRoleWeight','reverseCherryCapture',
      'manualRoleGames','smallRoleCapture','manualRoleWeight'
    ].forEach((id) => {
      if (state[id] !== undefined && $(id)) $(id).value = state[id];
    });

    bonusInputMode = state.bonusInputMode === 'detailed' ? 'detailed' : 'simple';
    historySyncActive = Boolean(state.historySyncActive);

    if (state.diffRaw !== undefined) {
      $('diffCoins').value = normalizeUnsignedNumericInput(state.diffRaw);
      diffSign = Number(state.diffSign) < 0 ? -1 : 1;
      updateDiffInputSize();
    }

    if (typeof state.reverseHistory === 'boolean') $('reverseHistory').checked = state.reverseHistory;
    if (typeof state.usePriorCorrection === 'boolean') $('usePriorCorrection').checked = state.usePriorCorrection;

    if (Array.isArray(state.priorValues) && state.priorValues.length === 6) {
      state.priorValues.forEach((value, index) => {
        $(`priorRange${index + 1}`).value = clampNumber(value, 0, 100);
        $(`priorValue${index + 1}`).value = clampNumber(value, 0, 100);
      });
    }

    pendingRoleCounts = state.roleCounts || {};
    renderRoleInputs(pendingRoleCounts);
    activeRoleMode = state.roleMode === 'manual' ? 'manual' : 'reverse';
    updateRoleMode();
    updateBonusInputModeUI();
  } catch (_) {
    renderRoleInputs();
    updateBonusInputModeUI();
  }
}

function resetAll() {
  const hasData = Number($('totalGames').value) !== 0
    || Number($('simpleBBCount').value) !== 0
    || Number($('simpleRBCount').value) !== 0
    || ['singleBBCount','cherryBBCount','unknownBBCount','singleRBCount','cherryRBCount','unknownRBCount']
      .some((id) => Number($(id).value) !== 0)
    || Number($('diffCoins').value) !== 0
    || $('historyInput').value.trim()
    || Object.values(readRoleCounts()).some((value) => value !== null);
  if (hasData && !window.confirm('入力内容と履歴をすべて消去します。')) return;

  localStorage.removeItem(STORAGE_KEY);
  machineSelect.value = 'neo_im';
  bonusInputMode = 'simple';
  historySyncActive = false;
  $('totalGames').value = '';
  $('simpleBBCount').value = '';
  $('simpleRBCount').value = '';
  ['singleBBCount','cherryBBCount','unknownBBCount','singleRBCount','cherryRBCount','unknownRBCount']
    .forEach((id) => { $(id).value = ''; });
  $('bbCount').value = '0';
  $('rbCount').value = '0';
  $('diffCoins').value = '';
  updateDiffInputSize();
  diffSign = 1;
  $('historyInput').value = '';
  $('currentGames').value = '';
  $('reverseHistory').checked = true;
  $('usePriorCorrection').checked = false;
  $('reverseRoleWeight').value = '25';
  $('reverseCherryCapture').value = '1';
  $('manualRoleGames').value = '';
  $('smallRoleCapture').value = '1';
  $('manualRoleWeight').value = '50';
  setPriorPreset('uniform');
  keypadValue = '0';
  pendingRoleCounts = {};
  renderRoleInputs();
  setRoleMode('reverse');

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
  updateBonusInputModeUI();
  updateDiffUsageNote();
  $('historySyncStatus').textContent = '履歴を追加すると総回転数とボーナス回数を自動更新します。';
  updateEvidenceWeightLabels();
  updatePriorUsage();
  updateDiffSignButton();
  updateKeypadDisplay();
  updateLiveRates();
  updateRoleRates();
  updateHistoryViews();
  setActiveTab('input');
}

function loadSample() {
  machineSelect.value = 'im_ex';
  bonusInputMode = 'detailed';
  historySyncActive = true;
  $('totalGames').value = '1399';
  $('simpleBBCount').value = '4';
  $('simpleRBCount').value = '1';
  $('singleBBCount').value = '3';
  $('cherryBBCount').value = '1';
  $('unknownBBCount').value = '0';
  $('singleRBCount').value = '1';
  $('cherryRBCount').value = '0';
  $('unknownRBCount').value = '0';
  $('diffCoins').value = '566';
  updateDiffInputSize();
  diffSign = -1;
  $('historyInput').value = '455 SBB\n698 SRB\n246 CBB\n0 SBB\n0 SBB';
  $('currentGames').value = '0';
  $('usePriorCorrection').checked = false;
  $('reverseRoleWeight').value = '25';
  $('reverseCherryCapture').value = '1';
  $('manualRoleGames').value = '1399';
  $('smallRoleCapture').value = '1';
  $('manualRoleWeight').value = '50';
  setPriorPreset('uniform');
  pendingRoleCounts = {};
  renderRoleInputs();
  setRoleMode('reverse');
  updateMachineNote();
  updateBonusInputModeUI();
  updateDiffUsageNote();
  updateEvidenceWeightLabels();
  updatePriorUsage();
  updateDiffSignButton();
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
    ['単独BIG', data.bonusBreakdown.singleBB],
    ['チェリー重複BIG', data.bonusBreakdown.cherryBB],
    ['内訳不明BIG', data.bonusBreakdown.unknownBB],
    ['RB', data.rb],
    ['単独REG', data.bonusBreakdown.singleRB],
    ['チェリー重複REG', data.bonusBreakdown.cherryRB],
    ['内訳不明REG', data.bonusBreakdown.unknownRB],
    ['差枚', data.hasDiff ? data.diff : '未入力'],
    ['実測BB確率', formatDenominator(data.games, data.bb)],
    ['実測RB確率', formatDenominator(data.games, data.rb)],
    ['実測合算', formatDenominator(data.games, data.bb + data.rb)],
    ['小役モード', data.roleMode === 'reverse' ? '差枚で逆算' : '自分で入力'],
    ['設定配分補正', data.priorEnabled ? '使用' : '未使用'],
    [],
    ['使用小役','回数','計測G','実測確率','捕捉率','証拠強度','近似設定']
  ];
  result.usedEvidence.forEach((evidence) => {
    rows.push([
      evidence.label,
      Math.round(evidence.count),
      evidence.games,
      Number.isFinite(evidence.denominator) ? `1/${evidence.denominator.toFixed(3)}` : '0回',
      evidence.capture === null ? '' : evidence.capture,
      evidence.weight,
      evidence.closest
    ]);
  });
  rows.push([], ['設定','事前配分','相対確率','BB/RBのみ','公表BB','公表RB','公表合算','ブドウ参考','出玉率','期待差枚']);
  const grapeRole = result.machine.roles.grape;
  result.machine.specs.forEach((spec, index) => {
    rows.push([
      index + 1,
      data.priors[index],
      result.posterior[index],
      result.bonusOnlyPosterior[index],
      spec[0],
      spec[1],
      spec[2],
      grapeRole ? grapeRole.denoms[index] : '',
      spec[3],
      Math.round(result.expectedDiffs[index])
    ]);
  });
  rows.push([], ['履歴番号','当選G','種別']);
  parsed.entries.forEach((entry, index) => rows.push([index + 1, entry.games, historyEntryCode(entry)]));

  const csv = '\uFEFF' + rows.map((row) => row.map((value) => `"${String(value ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `juggler_analysis_v13_${new Date().toISOString().slice(0, 10)}.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function getCurrentTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function updateThemeToggle() {
  const dark = getCurrentTheme() === 'dark';
  $('themeToggle').setAttribute('aria-pressed', String(dark));
  $('themeToggleIcon').textContent = dark ? '☀' : '☾';
  $('themeToggleText').textContent = dark ? 'ライト' : 'ダーク';

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute('content', dark ? DARK_THEME_COLOR : LIGHT_THEME_COLOR);
  }
}

function applyTheme(theme, persist = false) {
  const resolved = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = resolved;
  if (persist) localStorage.setItem(THEME_STORAGE_KEY, resolved);
  updateThemeToggle();
}

function toggleTheme() {
  applyTheme(getCurrentTheme() === 'dark' ? 'light' : 'dark', true);
}

function bindSystemTheme() {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const handler = (event) => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      applyTheme(event.matches ? 'dark' : 'light', false);
    }
  };

  if (typeof media.addEventListener === 'function') media.addEventListener('change', handler);
  else if (typeof media.addListener === 'function') media.addListener(handler);
}

function isFormControl(element) {
  return Boolean(element && element.matches && element.matches('input, textarea, select'));
}

function updateKeyboardOffset() {
  if (window.innerWidth > 640 || !document.body.classList.contains('keyboard-open')) {
    document.documentElement.style.setProperty('--keyboard-offset', '0px');
    return;
  }

  const viewport = window.visualViewport;
  if (!viewport) {
    document.documentElement.style.setProperty('--keyboard-offset', '0px');
    return;
  }

  const keyboardHeight = Math.max(
    0,
    window.innerHeight - viewport.height - viewport.offsetTop
  );
  document.documentElement.style.setProperty(
    '--keyboard-offset',
    `${Math.round(keyboardHeight)}px`
  );
}

function bindKeyboardVisibility() {
  document.addEventListener('focusin', (event) => {
    if (window.innerWidth <= 640 && isFormControl(event.target)) {
      document.body.classList.add('keyboard-open');
      window.setTimeout(updateKeyboardOffset, 50);
      window.setTimeout(updateKeyboardOffset, 220);
    }
  });

  document.addEventListener('focusout', () => {
    window.setTimeout(() => {
      if (!isFormControl(document.activeElement)) {
        document.body.classList.remove('keyboard-open');
        updateKeyboardOffset();
      }
    }, 180);
  });

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', updateKeyboardOffset);
    window.visualViewport.addEventListener('scroll', updateKeyboardOffset);
  }
  window.addEventListener('resize', updateKeyboardOffset);
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

  $('themeToggle').addEventListener('click', toggleTheme);
  $('analyzeButton').addEventListener('click', analyze);
  $('mobileAnalyzeButton').addEventListener('click', analyze);
  $('loadSample').addEventListener('click', loadSample);
  $('resetAll').addEventListener('click', resetAll);
  $('exportCsv').addEventListener('click', exportCsv);
  $('addSingleBB').addEventListener('click', () => addHistoryEntry('BB', 'single'));
  $('addCherryBB').addEventListener('click', () => addHistoryEntry('BB', 'cherry'));
  $('addSingleRB').addEventListener('click', () => addHistoryEntry('RB', 'single'));
  $('addCherryRB').addEventListener('click', () => addHistoryEntry('RB', 'cherry'));
  $('setCurrent').addEventListener('click', setCurrentFromKeypad);
  $('deleteLastHistory').addEventListener('click', deleteLastHistory);
  $('clearHistory').addEventListener('click', clearHistory);
  $('diffSignToggle').addEventListener('click', toggleDiffSign);
  $('diffCoins').addEventListener('input', () => {
    const normalized = normalizeUnsignedNumericInput($('diffCoins').value);
    if ($('diffCoins').value !== normalized) {
      $('diffCoins').value = normalized;
    }
    updateDiffInputSize();
    updateDiffUsageNote();
  });
  $('normalizePrior').addEventListener('click', normalizePriorInputs);

  document.querySelectorAll('.prior-preset').forEach((button) => {
    button.addEventListener('click', () => setPriorPreset(button.dataset.preset));
  });
  document.querySelectorAll('.prior-range, .prior-value').forEach((input) => {
    input.addEventListener('input', () => syncPriorInput(input));
    input.addEventListener('change', saveState);
  });
  $('simpleBonusModeButton').addEventListener('click', () => setBonusInputMode('simple'));
  $('detailedBonusModeButton').addEventListener('click', () => setBonusInputMode('detailed'));
  $('reverseModeButton').addEventListener('click', () => setRoleMode('reverse'));
  $('manualModeButton').addEventListener('click', () => setRoleMode('manual'));
  $('clearAllRoles').addEventListener('click', clearAllRoleInputs);

  $('usePriorCorrection').addEventListener('change', () => {
    updatePriorUsage();
    saveState();
  });
  $('reverseRoleWeight').addEventListener('input', updateEvidenceWeightLabels);
  $('manualRoleWeight').addEventListener('input', updateEvidenceWeightLabels);
  $('manualRoleGames').addEventListener('input', updateRoleRates);

  $('reverseHistory').addEventListener('change', () => {
    updateHistoryViews();
    saveState();
  });

  machineSelect.addEventListener('change', () => {
    pendingRoleCounts = {};
    renderRoleInputs();
    updateMachineNote();
    updateHistoryViews();
    referenceMachineSelect.value = machineSelect.value;
    renderMachineReference();
    saveState();
  });

  referenceMachineSelect.addEventListener('change', () => {
    machineSelect.value = referenceMachineSelect.value;
    pendingRoleCounts = {};
    renderRoleInputs();
    updateMachineNote();
    updateHistoryViews();
    renderMachineReference();
    saveState();
  });

  $('referencePayoutMode').addEventListener('change', renderMachineReference);
  $('referenceCoinMode').addEventListener('change', renderMachineReference);
  $('referenceInterpolationRate').addEventListener('input', renderMachineReference);

  ['totalGames','simpleBBCount','simpleRBCount','singleBBCount','cherryBBCount','unknownBBCount','singleRBCount','cherryRBCount','unknownRBCount']
    .forEach((id) => {
      $(id).addEventListener('input', () => {
        markManualSummaryInput();
        updateLiveRates();
        updateRoleRates();
      });
    });

  $('historyInput').addEventListener('input', () => {
    historySyncActive = true;
    updateHistoryViews();
    saveState();
  });

  $('currentGames').addEventListener('input', () => {
    historySyncActive = true;
    updateHistoryViews();
    saveState();
  });

  document.querySelectorAll('input, select, textarea').forEach((element) => {
    element.addEventListener('change', saveState);
  });
  bindKeyboardVisibility();
}

buildPriorEditor();
loadState();
bindEvents();
updateThemeToggle();
bindSystemTheme();
updateMachineNote();
updateBonusInputModeUI();
updateDiffUsageNote();
updateEvidenceWeightLabels();
updatePriorUsage();
updateDiffSignButton();
updateDiffInputSize();
updateKeypadDisplay();
updateLiveRates();
updateRoleRates();
updatePriorTotal();
updateHistoryViews();
referenceMachineSelect.value = machineSelect.value;
renderMachineReference();
renderAllMachineComparison();