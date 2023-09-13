// assigns to a variable the game function
const game = () => {
  // keeps track of scores
  let playerScore = 0;
  let compScore = 0;

  // the three possible choices the computer has
  const choices = ["rock", "paper", "scissors"];

  // creates a loop that runs the game for 5 rounds
  for (i = 0; i < 5; i++) {
    // randomly chooses R, P or S for the computer
    const computerSelection = choices[Math.floor(Math.random() * 3)];

    // lets the player choose R, P, or S
    const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    // the possible combinations for one round
    const playRound = () => {
      if (playerSelection === computerSelection) {
        return "It's a draw";
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissors"
      ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
      ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
      } else {
        compScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      }
      // starts a round
    };
    console.log(playRound());
    console.log(`You: ${playerScore}, Computer: ${compScore}`);
  }
};
// starts the game
game();
