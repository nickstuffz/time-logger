import { internalFunc, masterLog } from "./internals";

const content = document.getElementById("content");
const left = document.createElement("div");
const button_container = document.createElement("div");
const button = document.createElement("button");
const right = document.createElement("div");
const progress_bar = document.createElement("div");
let state = false;

function initializePage() {
  left.id = "left";
  button_container.id = "button-container";
  right.id = "right";
  progress_bar.id = "progress-bar";

  left.className = "h-screen grow";
  button_container.className = "flex justify-center py-10";
  button.className =
    "flex h-14 w-36 items-center justify-center border-2 border-black";
  right.className = "flex h-screen w-1/3 flex-col justify-end";
  progress_bar.className = "h-3/4 w-full bg-black";

  button.innerText = "Start";

  button.addEventListener("click", buttonClick);

  content.append(left);
  left.append(button_container);
  button_container.append(button);
  content.append(right);
  right.append(progress_bar);

  internalFunc.applyLocalData();
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
  button_container.className = "flex justify-center bg-black py-10";
  button.className =
    "flex h-14 w-36 items-center justify-center border-2 border-white text-white";

  button.innerText = "Stop";
}

function toggleButtonOff() {
  button_container.className = "flex justify-center py-10";
  button.className =
    "flex h-14 w-36 items-center justify-center border-2 border-black";

  button.innerText = "Start";
}

function updateDisplay() {
  Object.keys(masterLog).forEach((element) => {
    const key = document.createElement("div");
    key.innerText = element;
    left.append(key);
  });
  Object.values(masterLog).forEach((element) => {
    const value = document.createElement("div");
    value.innerText = element;
    left.append(value);
  });
}

export { initializePage };
