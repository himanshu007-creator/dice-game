var timer = document.getElementById("timer");
var img = document.getElementById("img");
var selected = document.getElementById("selected");
var score = document.getElementById("rght");
var pts = document.getElementById("pts");
var points = 0;

const gameSound = new Audio("./assets/music/main.mp3");
const win = new Audio("./assets/music/won.mp3");
const loose = new Audio("./assets/lost.mp3");

var start = document.getElementById("start");
start.addEventListener("click", (e) => {
  var rem = e.target.parentNode.parentNode;
  rem.style.visibility = "hidden";
  main();
});
function main() {
  gameSound.play();
  loose.loop = true;
  gameSound.loop = true;
  setInterval(() => {
    CountDown(timer);
    Shuffle(img);
    li.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
        selected.innerHTML = "Selected Variable:" + 0;
      }
    });
  }, 6000);
}

function CountDown(e) {
  var count = 5;
  setInterval(() => {
    if (count >= 0) {
      var ans = `Dice will change in <strong>${count}</strong> seconds`;
      e.innerHTML = ans;
      count -= 1;
      return ans;
    }
  }, 1000);
}

function Shuffle(e) {
  e.src = "./assets/dice-roll.gif";
  var ans = Math.floor(Math.random() * 6 + 1);
  var slctd = selected.innerHTML.slice(-1);
  //   e.src = "./assets/" + ans + ".jpg";
  if (String(ans) === slctd) {
    points += 10;
    score.innerHTML = `Score :${points}`;
    message("10 + ");
    console.log("Correct");
    win.play();
  } else {
    loose.play();
    message("No points earned this time");
  }
}

function message(msg) {
  pts.innerHTML = msg;
  pts.style.fontWeight = "bolder";
  setTimeout(() => {
    pts.innerHTML = "";
  }, 2000);
}
var li = document.querySelectorAll("li");
li.forEach((element) => {
  element.addEventListener("click", () => {
    li.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });
    element.classList.add("active");
    selected.innerHTML = "Selected Variable:" + element.innerHTML;
  });
});
