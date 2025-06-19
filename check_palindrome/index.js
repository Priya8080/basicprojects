function checkPalindrome() {
      let text = document.getElementById("inputText").value;
      let original = text.toLowerCase().replace(/[^a-z0-9]/gi, "");
      let reversed = original.split("").reverse().join("");

      if (original === "") {
        document.getElementById("result").innerText = "Please enter something.";
      } else if (original === reversed) {
        document.getElementById("result").innerHTML = `<strong>${text}</strong> is a Palindrome.`;
      } else {
        document.getElementById("result").innerHTML = `<strong>${text}</strong> is Not a Palindrome.`;
      }
    }

