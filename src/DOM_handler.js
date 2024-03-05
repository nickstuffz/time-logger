import { internalFunc, masterLog } from "./internals";

const content = document.getElementById("content");
const left = document.createElement("div");
const button_container = document.createElement("div");
const button = document.createElement("button");
const data_container = document.createElement("div");
const right = document.createElement("div");
const progress_bar = document.createElement("div");
const goal = document.createElement("div");
let state = false;
let hoursGoal = 3;

function initializePage() {
  initializeStructure();
  internalFunc.applyLocalData();
  updateDisplay();
}

function initializeStructure() {
  left.id = "left";
  button_container.id = "button-container";
  data_container.id = "data-container";
  right.id = "right";
  progress_bar.id = "progress-bar";
  goal.id = "goal";

  left.className = "flex h-screen grow flex-col";
  button_container.className =
    "flex justify-center border-2 border-black py-10";
  button.className =
    "flex h-14 w-36 items-center justify-center border-2 border-black";
  data_container.className = "flex flex-col";
  right.className =
    "relative flex h-screen w-1/3 flex-col justify-end border-2 border-dotted border-black bg-white";
  progress_bar.className = "w-full bg-black";
  goal.className =
    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white mix-blend-difference";

  button.innerText = "Start";
  goal.innerText = "goal is " + hoursGoal + " hours";

  button.addEventListener("click", buttonClick);
  // goal.addEventListener("click", goalClick);

  content.append(left);
  left.append(button_container, data_container);
  button_container.append(button);
  content.append(right);
  right.append(progress_bar, goal);
}

function buttonClick() {
  if (state === false) {
    state = true;
    toggleStylesOn();
    internalFunc.timerStart();
  } else {
    state = false;
    toggleStylesOff();
    internalFunc.timerEnd();
    internalFunc.logTime();
    internalFunc.saveLocalData();
    updateDisplay();
  }
}

function toggleStylesOn() {
  button_container.style.backgroundColor = "black";
  button.style.borderColor = "white";
  button.style.color = "white";

  left.style.backgroundColor = "black";
  right.style.backgroundColor = "black";
  right.style.borderLeftColor = "white";
  progress_bar.style.backgroundColor = "white";

  button.innerText = "Stop";

  document.title = "running...";

  // implement close event detection warning
}

function toggleStylesOff() {
  button_container.style.backgroundColor = "white";
  button.style.borderColor = "black";
  button.style.color = "black";

  left.style.backgroundColor = "white";
  right.style.backgroundColor = "white";
  right.style.borderLeftColor = "black";
  progress_bar.style.backgroundColor = "black";

  button.innerText = "Start";

  document.title = "timeLogger";
}

function updateDisplay() {
  clearDisplayData();
  updateProgressBar(updateDisplayData());
}

function clearDisplayData() {
  data_container.replaceChildren();
}

function updateDisplayData() {
  let date_percentage;
  let date_target = hoursGoal * 3600000;

  Object.keys(masterLog).forEach((element) => {
    const date = document.createElement("div");
    date.id = element;
    date.className = "w-full";
    date.innerText = element;
    data_container.append(date);

    const date_total = masterLog[element].reduce(
      (prev, curr) => prev + curr,
      0,
    );
    date_percentage = 100 * (date_total / date_target);
    if (date_percentage > 100) {
      date_percentage = 100;
    }

    const date_progress = document.createElement("div");
    date_progress.className = `bg-black h-6`;
    date_progress.style.width = `${date_percentage}%`;
    data_container.append(date_progress);
  });
  return date_percentage;

  // summing calculation should probably be done on the internals.js file
  // -masterLog -> date -> array / sum
}

function updateProgressBar(date_percentage) {
  progress_bar.style.height = `${date_percentage}%`;
}

export { initializePage };
