const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
const resultText = document.querySelector(".result__score");

const result = document.querySelector(".result__score-text");

// keeps track of scores
let playerScore = 0;
let compScore = 0;

resultText.textContent = `YOU: ${playerScore}
CPU: ${compScore}`;

const choices = ["rock", "paper", "scissors"];

const playRound = (playerSelection) => {
  let computerSelection = choices[Math.floor(Math.random() * 3)];
  if (playerSelection === computerSelection) {
    result.textContent = `It's a draw`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    compScore++;
    result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

const disableInput = () => {
  document.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
};

const showScore = () => {
  if (playerScore >= 5 && compScore < 5) {
    disableInput();
    resultText.textContent = `Game over! You win!`;
    result.textContent = "";
  } else if (compScore >= 5 && playerScore < 5) {
    disableInput();
    resultText.textContent = `Game over! You lose!`;
    result.textContent = "";
  } else {
    resultText.textContent = `You: ${playerScore}, CPU: ${compScore}`;
  }
};

btnRock.addEventListener("click", () => {
  playRound("rock");
  showScore();
});
btnPaper.addEventListener("click", () => {
  playRound("paper");
  showScore();
});
btnScissors.addEventListener("click", () => {
  playRound("scissors");
  showScore();
});
