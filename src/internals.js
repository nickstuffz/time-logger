let start;
let end;
let elapsed;
const masterLog = {};

const internalFunc = {
  timerStart,
  timerEnd,
  logTime,
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
  masterLog[today] = elapsed;
  console.log(masterLog);
}

export { internalFunc };
