let hand = 3;
let playerChoice = "";
let aiChoice = "";
let playerScore = 0;
let aiScore = 0;
let playerChoiceEl = document.getElementById("player-choice");
let aiChoiceEl = document.getElementById("ai-choice");
let winOrLossEl = document.getElementById("win-or-loss");
let playerScoreEl = document.getElementById("player-score");
let aiScoreEl = document.getElementById("ai-score");

function rock() {
  playerChoice = "rock";
  playerChoiceEl.textContent = "🧱";
  randomHand();
  winOrLoss();
}

function paper() {
  playerChoice = "paper";
  playerChoiceEl.textContent = "📄";
  randomHand();
  winOrLoss();
}

function scissors() {
  playerChoice = "scissors";
  playerChoiceEl.textContent = "✂️";
  randomHand();
  winOrLoss();
}

function randomHand() {
  hand = Math.floor(Math.random() * 3);
  if (hand === 0) {
    aiChoice = "rock";
    aiChoiceEl.textContent = "🧱";
  } else if (hand === 1) {
    aiChoice = "paper";
    aiChoiceEl.textContent = "📄";
  } else {
    aiChoice = "scissors";
    aiChoiceEl.textContent = "✂️";
  }
}

function winOrLoss() {
  if (playerChoice === aiChoice) {
    winOrLossEl.textContent = "IT'S A DRAW 😲";
  } else if (playerChoice === "rock") {
    if (aiChoice === "paper") {
      winOrLossEl.textContent = "YOU LOSE 😭";
      aiScore += 1;
    } else {
      winOrLossEl.textContent = "YOU WIN 😀";
      playerScore += 1;
    }
  } else if (playerChoice === "paper") {
    if (aiChoice === "scissors") {
      winOrLossEl.textContent = "YOU LOSE 😭";
      aiScore += 1;
    } else {
      winOrLossEl.textContent = "YOU WIN 😀";
      playerScore += 1;
    }
  } else if (playerChoice === "scissors") {
    if (aiChoice === "rock") {
      winOrLossEl.textContent = "YOU LOSE 😭";
      aiScore += 1;
    } else {
      winOrLossEl.textContent = "YOU WIN 😀";
      playerScore += 1;
    }
  }
  playerScoreEl.textContent = playerScore;
  aiScoreEl.textContent = aiScore;
}
