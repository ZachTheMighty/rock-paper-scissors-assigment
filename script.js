let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");

container.addEventListener("click", (e) =>
  playRound(e.target.textContent, getComputerChoice()),
);

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
      computerScore++;
      return "You lose! Paper beats Rock";
    case "Scissors":
      humanScore++;
      return "You win! Rock beats Scissors";
  }
}

function humanPaper(computerChoice) {
  switch (computerChoice) {
    case "Rock":
      humanScore++;
      return "You win! Paper beats Rock";
    case "Paper":
      return "Draw!";
    case "Scissors":
      computerScore++;
      return "You lose! Scissors beat Paper";
  }
}

function humanScissors(computerChoice) {
  switch (computerChoice) {
    case "Rock":
      computerScore++;
      return "You lose! Rock beats Scissors";
    case "Paper":
      humanScore++;
      return "You win! Scissors beat Paper";
    case "Scissors":
      return "Draw!";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === "rock")
    console.log(humanRock(computerChoice));
  else if (humanChoice.toLowerCase() === "paper")
    console.log(humanPaper(computerChoice));
  else console.log(humanScissors(computerChoice));
}

function playGame() {
  while (humanScore != 5 && computerScore != 5)
    playRound(getHumanChoice(), getComputerChoice());

  const score = `Score is ${humanScore}:${computerScore} `;
  return score + (humanScore === 5 ? "Congrats! bitch :>" : "Hah what a loser");
}
