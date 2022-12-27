function getComputerChoice() {
  // Returns random from Rock, Paper, Scissors
  a = ["rock", "paper", "scissors"];
  b = a[Math.floor(Math.random() * 3)];
  return b;
}

function playRound(playerSelection, computerSelection) {
  console.log(computerSelection);
  b = playerSelection.toLowerCase();
  console.log(b);
  if (b === computerSelection) {
    return "Draw!";
  }
  if (b === "rock") {
    if (computerSelection === "paper") {
      return "Computer wins!";
    } else if (computerSelection === "scissors") {
      return "Player wins!";
    }
  } else if (b === "paper") {
    if (computerSelection === "rock") {
      return "Player wins!";
    } else if (computerSelection === "scissors") {
      return "Computer wins!";
    }
  } else if (b === "scissors") {
    if (computerSelection === "paper") {
      return "Player wins!";
    } else if (computerSelection === "rock") {
      return "Computer wins!";
    }
  }
}

let computerSelection = getComputerChoice();
const playerSelection = prompt("Player selection");

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

console.log(playRound(playerSelection, getComputerChoice()));
