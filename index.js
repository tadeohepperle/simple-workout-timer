console.log("Hallo");

let STATE = "IDLE";
let timeParam = parseInt(findGetParameter("time"));
const TIME = timeParam ? timeParam : 60;
let element = document.getElementById("middle");
element.onclick = function () {
  startTimer(TIME);
};
element.innerHTML = `Start (${timeString(TIME)})`;

element.classList = ["green"];
let timerRunning = false;
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

function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

document.getElementById("resetbtn").onclick = function () {
  window.location.reload();
};
