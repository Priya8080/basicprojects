   const guessNo = Math.floor(Math.random() * 100) + 1;
    console.log("Guess Number:", guessNo); 
    function checkGuess() {
      let guess = parseInt(document.getElementById("guessInput").value);
      if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("result").innerText = "Please enter a number between 1 and 100.";
        return;
      }
      if (guess === guessNo) {
        document.getElementById("result").innerHTML = "<strong>Correct... You guessed the number.</strong>";
      } else if (guess < guessNo) {
        document.getElementById("result").innerHTML = "<strong>Too low... Try again.</strong>";
      } else {
        document.getElementById("result").innerHTML = "<strong>Too high... Try again.</strong>";
      }
    }
  