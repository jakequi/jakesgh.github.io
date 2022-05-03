/* Moya Cronin */

// /* Highscore Table */
// var highscore = [
//   { name: "--", score: 0 },
//   { name: "--", score: 0 },
//   { name: "--", score: 0 },
//   { name: "--", score: 0 },
//   { name: "--", score: 0 },
// ];

// function getScoreTable() {
//   html = "<table id = 'scores'>";

//   for (var i = 0; i < 5; i++) {
//     html += "<tr><td>";

//     html += i + 1;

//     html += "</td><td>";

//     html += highscore[i].name;

//     html += "</td><td>";

//     html += highscore[i].score;

//     html += "</td></tr>";
//   }

//   html += "</table>";

//   return html;
// }

// function updateTable() {
//   var newhtml = getScoreTable();

//   document.getElementById("highscoretable").innerHTML = newhtml;
// }

// window.addEventListener("load", updateTable);

// function sortScores(a, b) {
//   if (parseInt(b.score) < parseInt(a.score)) return -1;
//   else return 1;
// }
// function addToTable() {
//   var newscore = document.getElementById("scorein").value;

//   document.getElementById("scorein").value = "";

//   var newname = document.getElementById("namein").value;

//   document.getElementById("namein").value = "";

//   highscore.push({ name: newname, score: newscore });

//   highscore.sort(sortScores);

//   updateTable();
// }

/* Game Timer */
// var settime = 15;
// var level = 1;
var click = 0;
var pps = 0;
// var outOfTime = false;
// var highScore = 0;
// var time = settime;
// var started = false;

// function startGame() {
//   document.getElementById("kitty").className = "imgactive";
//   if (
//     (started == true) &
//     (document.getElementById("countdown").innerHTML !== "GAME OVER!")
//   ) {
//     return;
//   }
//   started = true;
//   click = 0;
//   time = settime + 1;
//   var countdown = setInterval(function () {
//     outOfTime = false;
//     time--;
//     document.getElementById("countdown").innerHTML = time + " seconds";
//     if (time == 0) {
//       clearInterval(countdown);
//       document.getElementById("countdown").innerHTML = "GAME OVER!";
//       outOfTime = true;
//       document.getElementById("kitty").className = "imginactive";
//       if (click > highScore) {
//         highScore = click;
//         document.getElementById("highScore").innerHTML = highScore;
//       }
//     }
//   }, 1000);
// }

// function endGame() {
//   time = 1;
//   started = false;
// }

//click countdown and timer
function addClick(amount) {
  click += amount;
  document.getElementById("click").innerHTML = click.toFixed(1);
  if (click < furballCost) {
    document
      .getElementById("furballButton")
      .setAttribute("disabled", "disabled");
  } else document.getElementById("furballButton").removeAttribute("disabled");
  if ((furballCount >= 10) & (catnipCount == 0)) {
    catnipUnlocked = true;
    document.getElementById("catnipButton").value = "Catnip (50) [0]";
    document.getElementById("catnipButton").classList.add("addscorebutton");
    document.getElementById("catnipButton").classList.remove("locked");
    if (click < catnipCost) {
      document
        .getElementById("catnipButton")
        .setAttribute("disabled", "disabled");
    } else document.getElementById("catnipButton").removeAttribute("disabled");
  }
}

function changeImage() {
  // if (document.getElementById("countdown").innerHTML == "GAME OVER!") {
  //   return;
  // }
  // if (started == false) {
  //   return;
  // }
  var image = document.getElementById("kitty");
  image.src = "images/cat2.png";
  setTimeout(() => (image.src = "images/cat1.png"), 300);
  randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber == 7) {
    document.getElementById("mew").volume = 0.5;
    document.getElementById("mew").play();
  }
}

var furballCost = 10;
var furballCount = 0;

function addFurball() {
  if (click >= furballCost) {
    click = click - furballCost;
    furballCount = furballCount + 1;
    setInterval(function () {
      addClick(0.002);
      document.getElementById("click").innerHTML = click.toFixed(1);
    }, 10);
    furballCost = Math.round(furballCost * 1.15);
    pps = pps + 0.2;
    document.getElementById("pps").innerHTML = pps.toFixed(1);
    document.getElementById("click").innerHTML = click.toFixed(1);
    document.getElementById("furballButton").value =
      "Furball (" + furballCost + ") [" + furballCount + "]";
  }
}

var catnipCost = 50;
var catnipCount = 0;

function addCatnip() {
  if ((click >= catnipCost) & catnipUnlocked) {
    click = click - catnipCost;
    catnipCount = catnipCount + 1;
    setInterval(function () {
      addClick(0.01);
      document.getElementById("click").innerHTML = click.toFixed(1);
    }, 10);
    furballCost = Math.round(catnipCost * 1.15);
    pps = pps + 1;
    document.getElementById("pps").innerHTML = pps.toFixed(1);
    document.getElementById("click").innerHTML = click.toFixed(1);
    document.getElementById("catnipButton").value =
      "Catnip (" + catnipCost + ") [" + catnipCount + "]";
  }
}

//stop click counter after game end
// if (secs < 0) {
//   document.getElementById("kitty").onclick = null;
//   clearTimeout(countdown);
//   alert("Game OVER!");
//   element.innerHTML = "<h1> GAME OVER!</h1>";
// }

// function changeLevel1() {
//   settime = 15;
//   document.getElementById("level1").className = "active";
//   document.getElementById("level2").className = "";
//   document.getElementById("level3").className = "";
//   highScore = 0;
// }

// function changeLevel2() {
//   settime = 10;
//   document.getElementById("level1").className = "";
//   document.getElementById("level2").className = "active";
//   document.getElementById("level3").className = "";
//   highScore = 0;
// }

// function changeLevel3() {
//   settime = 5;
//   document.getElementById("level1").className = "";
//   document.getElementById("level2").className = "";
//   document.getElementById("level3").className = "active";
//   highScore = 0;
// }
