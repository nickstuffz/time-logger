import { internalFunc } from "./internals";

const content = document.getElementById("content");
const button = document.createElement("button");
let state = false;

function initializePage() {
  button.classList.add(..."border-2 border-black".split(" "));
  button.innerText = "Start";
  button.addEventListener("click", buttonClick);
  content.append(button);
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
  entry.innerText = elapsed;
  content.append(entry);
}

function saveLocalData() {}

export { initializePage };

// object
// timeLog {
// date: {}
