// js/app.js
let currentLevel = 1;
let activeQuizId = null;
let currentQuizQuestionsSubset = [];
let examTimerInterval = null;
let secondsRemaining = 1800;

// Clics secretos (Modo Dios)
let l1Clicks = 0, l2Clicks = 0, l3Clicks = 0;
let timer1 = null, timer2 = null, timer3 = null;

function handleLevel1Click() {
  l1Clicks++;
  clearTimeout(timer1);
  timer1 = setTimeout(() => { l1Clicks = 0; }, 2000);
  if (l1Clicks >= 11) {
    l1Clicks = 0;
    userProgressL1 = {1:{passed:true, score:100}, 2:{passed:true, score:100}, 3:{passed:true, score:100}, 4:{passed:true, score:100}, 5:{passed:true, score:100}, 6:{passed:true, score:100}, 7:{passed:true, score:100}};
    localStorage.setItem('cusam_progress_l1', JSON.stringify(userProgressL1));
    renderDashboard();
    updateGeneralProgress();
    checkLevelsUnlockStatus();
    alert("🔓 [Modo Dios] ¡Nivel 1 completado al 100%!");
  } else {
    switchLevel(1);
  }
}

function handleLevel2Click() {
  l2Clicks++;
  clearTimeout(timer2);
  timer2 = setTimeout(() => { l2Clicks = 0; }, 2000);
  if (l2Clicks >= 11) {
    l2Clicks = 0;
    userProgressL1 = {1:{passed:true, score:100}, 2:{passed:true, score:100}, 3:{passed:true, score:100}, 4:{passed:true, score:100}, 5:{passed:true, score:100}, 6:{passed:true, score:100}, 7:{passed:true, score:100}};
    userProgressL2 = {1:{passed:true, score:100}, 2:{passed:true, score:100}, 3:{passed:true, score:100}, 4:{passed:true, score:100}, 5:{passed:true, score:100}, 6:{passed:true, score:100}, 7:{passed:true, score:100}, 8:{passed:true, score:100}};
    localStorage.setItem('cusam_progress_l1', JSON.stringify(userProgressL1));
    localStorage.setItem('cusam_progress_l2', JSON.stringify(userProgressL2));
    switchLevel(2);
    renderDashboard();
    updateGeneralProgress();
    checkLevelsUnlockStatus();
    alert("🔓 [Modo Dios] ¡Nivel 2 completado al 100%!");
  } else {
    switchLevel(2);
  }
}

function handleLevel3Click() {
  l3Clicks++;
  clearTimeout(timer3);
  timer3 = setTimeout(() => { l3Clicks = 0; }, 2000);
  if (l3Clicks >= 11) {
    l3Clicks = 0;
    userProgressL3 = {1:{passed:true, score:100}, 2:{passed:true, score:100}, 3:{passed:true, score:100}, 4:{passed:true, score:100}, 5:{passed:true, score:100}};
    localStorage.setItem('cusam_progress_l3', JSON.stringify(userProgressL3));
    switchLevel(3);
    renderDashboard();
    updateGeneralProgress();
    checkLevelsUnlockStatus();
    alert("🔓 [Modo Dios] ¡Nivel 3 completado al 100%!");
  } else {
    switchLevel(3);
  }
}

let userProgressL1 = JSON.parse(localStorage.getItem('cusam_progress_l1')) || {};
let userProgressL2 = JSON.parse(localStorage.getItem('cusam_progress_l2')) || {};
let userProgressL3 = JSON.parse(localStorage.getItem('cusam_progress_l3')) || {};
let currentModuleId = null;

function isLevel1Completed() {
  const total = Object.keys(modulesDataL1).length;
  let passed = 0;
  for (let id in modulesDataL1) { if (userProgressL1[id] && userProgressL1[id].passed) passed++; }
  return passed === total;
}

function isLevel2Completed() {
  const total = Object.keys(modulesDataL2).length;
  let passed = 0;
  for (let id in modulesDataL2) { if (userProgressL2[id] && userProgressL2[id].passed) passed++; }
  return passed === total;
}

function getActiveModules() { return currentLevel === 1 ? modulesDataL1 : (currentLevel === 2 ? modulesDataL2 : modulesDataL3); }
function getActiveQuizzes() { return currentLevel === 1 ? quizzesDataL1 : (currentLevel === 2 ? quizzesDataL2 : quizzesDataL3); }
function getActiveProgress() { return currentLevel === 1 ? userProgressL1 : (currentLevel === 2 ? userProgressL2 : userProgressL3); }

function saveActiveProgress(prog) {
  if (currentLevel === 1) {
    userProgressL1 = prog;
    localStorage.setItem('cusam_progress_l1', JSON.stringify(prog));
  } else if (currentLevel === 2) {
    userProgressL2 = prog;
    localStorage.setItem('cusam_progress_l2', JSON.stringify(prog));
  } else {
    userProgressL3 = prog;
    localStorage.setItem('cusam_progress_l3', JSON.stringify(prog));
  }
  updateGeneralProgress();
  checkLevelsUnlockStatus();
}

function checkLevelsUnlockStatus() {
  const btn2 = document.getElementById('btn-lvl-2');
  const btn3 = document.getElementById('btn-lvl-3');

  if (isLevel1Completed()) {
    btn2.className = "px-3 py-1 text-xs font-bold rounded-md text-slate-400 hover:text-white transition-all";
    btn2.innerText = "Nivel 2";
  } else {
    btn2.className = "px-3 py-1 text-xs font-bold rounded-md text-slate-500 cursor-not-allowed transition-all";
    btn2.innerText = "Nivel 2 🔒";
  }

  if (isLevel2Completed()) {
    btn3.className = "px-3 py-1 text-xs font-bold rounded-md text-slate-400 hover:text-white transition-all";
    btn3.innerText = "Nivel 3 (Élite)";
  } else {
    btn3.className = "px-3 py-1 text-xs font-bold rounded-md text-slate-500 cursor-not-allowed transition-all";
    btn3.innerText = "Nivel 3 🔒";
  }
}

function switchLevel(level) {
  if (level === 2 && !isLevel1Completed()) {
    alert("🔒 El Nivel 2 está bloqueado.");
    return;
  }
  if (level === 3 && !isLevel2Completed()) {
    alert("🔒 El Nivel 3 está bloqueado.");
    return;
  }

  currentLevel = level;
  switchTab('dashboard');
  updateGeneralProgress();
}

function updateGeneralProgress() {
  const modules = getActiveModules();
  const progress = getActiveProgress();
  const total = Object.keys(modules).length;
  let completed = 0;
  for (let id in modules) { if (progress[id] && progress[id].passed) completed++; }
  const pct = Math.round((completed / total) * 100);
  document.getElementById('general-progress-pct').innerText = `${pct}% Completado`;
}

function hideAllRooms() {
  document.getElementById('view-dashboard').classList.add('hidden');
  document.getElementById('view-lesson').classList.add('hidden');
  document.getElementById('view-quiz-runner').classList.add('hidden');
  document.getElementById('view-quiz-results').classList.add('hidden');
  document.getElementById('view-quizzes').classList.add('hidden');
  document.getElementById('view-grades').classList.add('hidden');
  document.getElementById('exam-timer-box').classList.add('hidden');
  clearInterval(examTimerInterval);
}

function switchTab(tab) {
  hideAllRooms();
  if (tab === 'dashboard') {
    document.getElementById('view-dashboard').classList.remove('hidden');
    renderDashboard();
  } else if (tab === 'quizzes') {
    document.getElementById('view-quizzes').classList.remove('hidden');
    renderQuizzesHub(currentLevel);
  } else if (tab === 'grades') {
    document.getElementById('view-grades').classList.remove('hidden');
    renderGradesView();
  }
}

function isModuleUnlocked(id) {
  if (id === 1 || id === "1") return true;
  const prevId = parseInt(id) - 1;
  const progress = getActiveProgress();
  return progress[prevId] && progress[prevId].passed;
}

function renderDashboard() {
  const grid = document.getElementById('modules-grid');
  grid.innerHTML = '';
  const modules = getActiveModules();
  const progress = getActiveProgress();

  for (let id in modules) {
    const mod = modules[id];
    const unlocked = isModuleUnlocked(id);
    const prog = progress[id] || { passed: false, score: null };

    const card = document.createElement('div');
    card.className = "bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between";
    card.innerHTML = `
      <div>
        <div class="${mod.colorClass} h-3 w-full"></div>
        <div class="p-6 space-y-4">
          <h3 class="font-bold text-lg text-slate-900">${mod.title}</h3>
          <p class="text-sm text-slate-600">${mod.description}</p>
        </div>
      </div>
      <div class="p-6 pt-0">
        <button onclick="openLesson(${id})" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-colors text-center block">
          ${prog.passed ? 'Repasar Módulo' : 'Entrar al Módulo'}
        </button>
      </div>
    `;
    grid.appendChild(card);
  }
}

function openLesson(id) {
  currentModuleId = id;
  const mod = getActiveModules()[id];
  hideAllRooms();
  document.getElementById('view-lesson').classList.remove('hidden');
  document.getElementById('lesson-title').innerText = mod.title;
  document.getElementById('lesson-content').innerHTML = mod.contentHtml;
}

window.onload = function() {
  renderDashboard();
  updateGeneralProgress();
  checkLevelsUnlockStatus();
};