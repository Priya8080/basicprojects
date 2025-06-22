let userScore = 0;
let compScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const compChoice = choices[Math.floor(Math.random() * 3)];

  let resultText = `You chose ${userChoice} | Computer chose ${compChoice}. `;

  if (userChoice === compChoice) {
    resultText += "It's a Draw!";
  } else if (
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')
  ) {
    userScore++;
    resultText += "You Win!";
  } else {
    compScore++;
    resultText += "Computer Wins!";
  }

  document.getElementById("result").innerText = resultText;
  document.getElementById("score").innerText = `User: ${userScore} | Computer: ${compScore}`;
}

function resetGame() {
  userScore = 0;
  compScore = 0;
  document.getElementById("result").innerText = "";
  document.getElementById("score").innerText = "User: 0 | Computer: 0";
}
