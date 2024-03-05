// create onClick slider to set hours on progress bar
// slide between 1-24 from bottom to top of bar

// create animations, progress bar slide out, dates type out

let settingGoal = "off";

function goalClick(event) {
  event.stopPropagation();
  if (settingGoal === "on") return;
  settingGoal = "on";

  progress_bar.style.display = "none";

  right.addEventListener("mousemove", goalMove);
  right.addEventListener("click", goalSet);
}

function goalMove(event) {
  let percentY = 100 * (1 - event.clientY / window.innerHeight);
  console.log(percentY);
}

function goalSet() {
  console.log("GOALSET");
  right.removeEventListener("mousemove", goalMove);
  right.removeEventListener("click", goalSet);

  settingGoal = "off";

  progress_bar.style.display = "";
}

function goalMap(percentY) {}
// lookup event propogation
