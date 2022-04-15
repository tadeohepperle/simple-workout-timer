console.log("Hallo");

let STATE = "IDLE";
const TIME = 60;
let element = document.getElementById("middle");
element.onclick = function () {
  startTimer(TIME);
};

element.classList = ["green"];
let timerRunning = false;
async function startTimer(secs) {
  if (timerRunning) return;
  element.classList = ["ticking"];
  timerRunning = true;
  for (let s = secs; s >= 0; s--) {
    console.log();
    element.innerHTML =
      Math.floor(s / 60)
        .toString()
        .padStart(2, "0") +
      ":" +
      (s % 60).toString().padStart(2, "0");
    await wait(1000);
  }
  element.innerHTML = "Let's go!";
  element.classList = ["red"];

  timerRunning = false;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
