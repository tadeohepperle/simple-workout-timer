let STATE = "IDLE";

let params = new URL(document.location).searchParams;
console.log(params.get("time"));

let timerRunning = false;
let timeParam = parseInt(params.get("time"));
const TIME = timeParam ? timeParam : 60;

let element = document.getElementById("middle");
element.onclick = function () {
  startTimer(TIME);
};
element.innerHTML = `Start (${timeString(TIME)})`;
element.classList = ["green"];

const autostart = params.get("autostart") !== null;
if (autostart) {
  startTimer(TIME);
}

async function startTimer(secs) {
  if (timerRunning) return;
  element.classList = ["ticking"];
  timerRunning = true;
  for (let s = secs; s >= 0; s--) {
    console.log();
    element.innerHTML = timeString(s);

    await wait(1000);
  }
  element.innerHTML = "Let's go!";
  element.classList = ["red"];

  timerRunning = false;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function timeString(s) {
  return (
    Math.floor(s / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (s % 60).toString().padStart(2, "0")
  );
}

document.getElementById("resetbtn").onclick = function () {
  window.location.reload();
};
