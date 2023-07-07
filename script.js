"use strict";

console.log(document.querySelector(".message").textContent); //console.log to view the text content

document.querySelector(".message").textcontent = "🎉 Correct Number!"; //to change the above text content

/*document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there's no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔No number';
    displayMessage("⛔No number");
    //when players win
  } else if (guess === secretnumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretnumber;

    //style
    document.querySelector("body").style.backgroundColor = "#60b347";

    //high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".number").style.width = "30rem";
  }

  //when number is wrong
  else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretnumber ? " ⬆️Too High!" : "⬇️Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥You lost the game !';
      displayMessage("💥You lost the game !");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("😅 Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
