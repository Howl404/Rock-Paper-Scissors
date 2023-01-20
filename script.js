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

  function computerImage() {
    if (document.querySelector(".image-computer") !== null) {
      document.querySelector(".image-computer").remove();
    }
    const img = document.createElement("img");
    const destination = document.querySelector(".computer-image");

    if (document.querySelector(".computer-text") !== null) {
      document.querySelector(".computer-text").remove();
    }

    img.classList.add("image-computer");
    destination.appendChild(img);
    img.src = `./images/${computerSelection}.png`;
  }
  computerImage();

  function playerImage() {
    if (document.querySelector(".image-player") !== null) {
      document.querySelector(".image-player").remove();
    }
    const img = document.createElement("img");
    const destination = document.querySelector(".player-image");

    if (document.querySelector(".text") !== null) {
      document.querySelector(".text").remove();
    }

    img.classList.add("image-player");
    destination.appendChild(img);
    img.src = `./images/${b}.png`;
  }
  playerImage();

  if (b === computerSelection) {
    return "Draw!";
  }
  if (b === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      if (computerScore >= 5) {
        gameState = false;
        return "Player wins a game!";
      }
      return "Computer wins!";
    } else if (computerSelection === "scissors") {
      playerScore++;
      if (playerScore >= 5) {
        gameState = false;
        return "Computer wins a game!";
      }
      return "Player wins!";
    }
  } else if (b === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      if (playerScore >= 5) {
        gameState = false;
        return "Player wins a game!";
      }
      return "Player wins!";
    } else if (computerSelection === "scissors") {
      computerScore++;
      if (computerScore >= 5) {
        gameState = false;
        return "Computer wins a game!";
      }
      return "Computer wins!";
    }
  } else if (b === "scissors") {
    if (computerSelection === "paper") {
      playerScore++;
      if (playerScore >= 5) {
        gameState = false;
        return "Player wins a game!";
      }
      return "Player wins!";
    } else if (computerSelection === "rock") {
      computerScore++;
      if (computerScore >= 5) {
        gameState = false;
        return "Computer wins a game!";
      }
      return "Computer wins!";
    }
  }
}

document.querySelector(".rock").addEventListener("click", function () {
  if (gameState === true) {
    document.querySelector(".result").innerHTML = playRound(
      "rock",
      getComputerChoice()
    );
    document.querySelector(".player").innerHTML = playerScore;
    document.querySelector(".computer").innerHTML = computerScore;
    if (playerScore >= 5) {
      document.querySelector(".player").classList.add("winner");
      document.querySelector(".computer").classList.add("looser");
    } else if (computerScore >= 5) {
      document.querySelector(".computer").classList.add("winner");
      document.querySelector(".player").classList.add("looser");
    }
  }
});

document.querySelector(".paper").addEventListener("click", function () {
  if (gameState === true) {
    document.querySelector(".result").innerHTML = playRound(
      "paper",
      getComputerChoice()
    );
    document.querySelector(".player").innerHTML = playerScore;
    document.querySelector(".computer").innerHTML = computerScore;
    if (playerScore >= 5) {
      document.querySelector(".player").classList.add("winner");
      document.querySelector(".computer").classList.add("looser");
    } else if (computerScore >= 5) {
      document.querySelector(".computer").classList.add("winner");
      document.querySelector(".player").classList.add("looser");
    }
  }
});

document.querySelector(".scissors").addEventListener("click", function () {
  if (gameState === true) {
    document.querySelector(".result").innerHTML = playRound(
      "scissors",
      getComputerChoice()
    );
    document.querySelector(".player").innerHTML = playerScore;
    document.querySelector(".computer").innerHTML = computerScore;
    if (playerScore >= 5) {
      document.querySelector(".player").classList.add("winner");
      document.querySelector(".computer").classList.add("looser");
    } else if (computerScore >= 5) {
      document.querySelector(".computer").classList.add("winner");
      document.querySelector(".player").classList.add("looser");
    }
  }
});

document.querySelector(".restart").addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  gameState = true;
  document.querySelector(".player").innerHTML = playerScore;
  document.querySelector(".computer").innerHTML = computerScore;
  document.querySelector(".computer").classList.remove("winner");
  document.querySelector(".computer").classList.remove("looser");
  document.querySelector(".player").classList.remove("winner");
  document.querySelector(".player").classList.remove("looser");
  document.querySelector(".player").innerHTML = playerScore;
  document.querySelector(".computer").innerHTML = computerScore;
  document.querySelector(".image-player").remove();
  document.querySelector(".image-computer").remove();

  function scoreDisplay() {
    const playerImage = document.createElement("p");
    const computerImage = document.createElement("p");

    const playerDiv = document.querySelector(".player-image");
    const computerDiv = document.querySelector(".computer-image");

    playerImage.innerHTML = "?";
    computerImage.innerHTML = "?";

    playerImage.classList.add("text");
    playerImage.classList.add("player-text");

    computerImage.classList.add("text");
    computerImage.classList.add("computer-text");

    playerDiv.appendChild(playerImage);
    computerDiv.appendChild(computerImage);
  }
  scoreDisplay();
});

function playerImage() {
  if (document.querySelector(".image-player") !== null) {
    document.querySelector(".image-player").remove();
  }
  const img = document.createElement("img");
  const destination = document.querySelector(".player-image");

  if (document.querySelector(".text") !== null) {
    document.querySelector(".text").remove();
  }

  img.classList.add("image-player");
  destination.appendChild(img);
  img.src = `./images/${b}.png`;
}
