let playerScore = 0;
let computerScore = 0;
let gameState = true;

function getComputerChoice() {
  // Returns random from Rock, Paper, Scissors
  a = ["rock", "paper", "scissors"];
  b = a[Math.floor(Math.random() * 3)];
  return b;
}

function playRound(playerSelection, computerSelection) {
  b = playerSelection.toLowerCase();
  if (b === computerSelection) {
    return "Draw!";
  }
  if (b === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return "Computer wins!";
    } else if (computerSelection === "scissors") {
      playerScore++;
      return "Player wins!";
    }
  } else if (b === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "Player wins!";
    } else if (computerSelection === "scissors") {
      computerScore++;
      return "Computer wins!";
    }
  } else if (b === "scissors") {
    if (computerSelection === "paper") {
      playerScore++;
      return "Player wins!";
    } else if (computerSelection === "rock") {
      computerScore++;
      return "Computer wins!";
    }
  }
}

let computerSelection = getComputerChoice();
// const playerSelection = prompt("Player selection");

function game() {
  let player = 0;
  let computer = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound(playerSelection, getComputerChoice());
    console.log(result);
    if (result === "Computer wins!") {
      computer++;
    } else if (result === "Player wins!") {
      player++;
    }
  }
  return `Game is finished, score is - Player ${player}, ${computer} Computer`;
}

// console.log(playRound(playerSelection, getComputerChoice()));

if (gameState === true) {
  document.querySelector(".rock").addEventListener("click", function () {
    if (computerScore >= 5) {
      gameState = false;
      document.querySelector(
        ".result"
      ).innerHTML = `Computer wins the round! ${computerScore} : ${playerScore}`;
    } else if (playerScore >= 5) {
      gameState = false;
      document.querySelector(
        ".result"
      ).innerHTML = `Player wins the round! ${playerScore} : ${computerScore}`;
    } else {
      document.querySelector(".result").innerHTML = playRound(
        "rock",
        getComputerChoice()
      );
      document.querySelector(".player").innerHTML = playerScore;
      document.querySelector(".computer").innerHTML = computerScore;
    }
  });
  document.querySelector(".paper").addEventListener("click", function () {
    if (computerScore >= 5) {
      gameState = false;
      document.querySelector(
        ".result"
      ).innerHTML = `Computer wins the round! ${computerScore} : ${playerScore}`;
    } else if (playerScore >= 5) {
      gameState = false;
      document.querySelector(
        ".result"
      ).innerHTML = `Player wins the round! ${playerScore} : ${computerScore}`;
    } else {
      document.querySelector(".result").innerHTML = playRound(
        "paper",
        getComputerChoice()
      );
      document.querySelector(".player").innerHTML = playerScore;
      document.querySelector(".computer").innerHTML = computerScore;
    }
  });
  document.querySelector(".scissors").addEventListener("click", function () {
    if (computerScore >= 5) {
      gameState = false;
      document.querySelector(
        ".result"
      ).innerHTML = `Computer wins the round! ${computerScore} : ${playerScore}`;
    } else if (playerScore >= 5) {
      gameState = false;
      document.querySelector(
        ".result"
      ).innerHTML = `Player wins the round! ${playerScore} : ${computerScore}`;
    } else {
      document.querySelector(".result").innerHTML = playRound(
        "scissors",
        getComputerChoice()
      );
      document.querySelector(".player").innerHTML = playerScore;
      document.querySelector(".computer").innerHTML = computerScore;
    }
  });
}
