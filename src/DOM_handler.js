import { internalFunc, masterLog } from "./internals";

const content = document.getElementById("content");
const top = document.createElement("div");
const button = document.createElement("button");
let state = false;

function initializePage() {
  top.className = "flex justify-center py-10";
  button.className =
    "flex h-14 w-36 items-center justify-center border-2 border-black";

  top.id = "top";
  button.innerText = "Start";

  button.addEventListener("click", buttonClick);

  content.append(top);
  top.append(button);

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
  top.className = "flex justify-center bg-black py-10";
  button.className =
    "flex h-14 w-36 items-center justify-center border-2 border-white text-white";

  button.innerText = "Stop";
}

function toggleButtonOff() {
  top.className = "flex justify-center py-10";
  button.className =
    "flex h-14 w-36 items-center justify-center border-2 border-black";

  button.innerText = "Start";
}

function updateDisplay() {
  Object.keys(masterLog).forEach((element) => {
    const key = document.createElement("div");
    key.innerText = element;
    content.append(key);
  });
  Object.values(masterLog).forEach((element) => {
    const value = document.createElement("div");
    value.innerText = element;
    content.append(value);
  });
}

export { initializePage };
