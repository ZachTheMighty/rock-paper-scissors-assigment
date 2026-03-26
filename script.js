let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "Rock";
  else if (randomNumber === 1) return "Paper";
  else return "Scissors";
}

function getHumanChoice() {
  return prompt("Rock Paper Scissors?");
}

function humanRock(computerChoice) {
  switch (computerChoice) {
    case "Rock":
      return "Draw!";
    case "Paper":
      return "You lose! Paper beats Rock";
    case "Scissors":
      return "You win! Rock beats Scissors";
  }
}

function humanPaper(computerChoice) {
  switch (computerChoice) {
    case "Rock":
      return "You win! Paper beats Rock";
    case "Paper":
      return "Draw!";
    case "Scissors":
      return "You lose! Scissors beat Paper";
  }
}

function humanScissors(computerChoice) {
  switch (computerChoice) {
    case "Rock":
      return "You lose! Rock beats Scissors";
    case "Paper":
      return "You win! Scissors beat Paper";
    case "Scissors":
      return "Draw!";
  }
}
