/*Computer Choice */
function getComputerChoice() {
  const pick = ["Rock", "Paper", "Scissors"];
  return pick[Math.floor(Math.random() * pick.length)];
}

/*Single Round*/
/* Checks if player choose rock*/
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      return "You won!";
    } else {
      return "You lost!";
    }
  }
}
/* Checks if player choose paper*/

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      return "You lost!";
    } else {
      return "You won!";
    }
  }
}

/* Checks if player choose scissors*/
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      return "You lost!";
    } else {
      return "You won!";
    }
  }
}

const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);
