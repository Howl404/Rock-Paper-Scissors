const getComputerChoice = function () {
  // Returns random from Rock, Paper, Scissors
  const computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
};
const computerSelection = getComputerChoice();
const playerSelection = "rock";

const playRound = function (playerSelection, computerSelection) {
  console.log(computerSelection);
  b = playerSelection.toLowerCase();
  console.log(b);
  if (b === "rock") {
    if (b === computerSelection) {
      return "Draw!";
    } else if (computerSelection === "paper") {
      return "Computer wins!";
    } else if (computerSelection === "scissors") {
      return "Player wins!";
    }
  } else if (b === "paper") {
    if (b === computerSelection) {
      return "Draw!";
    } else if (computerSelection === "rock") {
      return "Player wins!";
    } else if (computerSelection === "scissors") {
      return "Computer wins!";
    }
  } else if (b === "scissors") {
    if (b === computerSelection) {
      return "Draw!";
    } else if (computerSelection === "paper") {
      return "Player wins!";
    } else if (computerSelection === "rock") {
      return "Computer wins!";
    }
  }
};

console.log(playRound(playerSelection, computerSelection));
