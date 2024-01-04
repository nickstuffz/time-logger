import { internalFunc, masterLog } from "./internals";

const content = document.getElementById("content");
const button = document.createElement("button");
let state = false;

function initializePage() {
  button.classList.add(..."border-2 border-black".split(" "));
  button.innerText = "Start";
  button.addEventListener("click", buttonClick);
  content.append(button);

  internalFunc.applyLocalData();
  return;
}

function buttonClick() {
  if (state === false) {
    toggleButtonOn();
    internalFunc.timerStart();
    state = true;
  } else {
    toggleButtonOff();
    internalFunc.timerEnd();
    internalFunc.logTime();
    updateDisplay();
    internalFunc.saveLocalData();
    state = false;
  }
}

function toggleButtonOn() {
  button.innerText = "Stop";
}

function toggleButtonOff() {
  button.innerText = "Start";
}

function updateDisplay() {
  const entry = document.createElement("div");
  entry.innerText = Object.entries(masterLog);
  content.append(entry);
}

export { initializePage };
