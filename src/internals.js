let start;
let end;
let elapsed;
const masterLog = {};

const internalFunc = {
  timerStart,
  timerEnd,
  logTime,
  saveLocalData,
  applyLocalData,
};

function timerStart() {
  start = Date.now();
}

function timerEnd() {
  end = Date.now();
  elapsed = end - start;
}

function logTime() {
  let date = new Date();
  let today =
    date.getMonth() + 1 + "." + date.getDay() + "." + date.getFullYear();
  if (!masterLog[today]) {
    masterLog[today] = [];
  }
  masterLog[today].push(elapsed);
}

function saveLocalData() {
  const myJSON = JSON.stringify(masterLog);
  localStorage.setItem("masterLog_string", myJSON);
}

function applyLocalData() {
  const myJSON = localStorage.getItem("masterLog_string");
  const masterLogCopy = JSON.parse(myJSON);
  Object.assign(masterLog, masterLogCopy);
}

export { internalFunc, masterLog };
