function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const includeLower = document.getElementById("lowercase").checked;
  const includeUpper = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  let lowerChars = "abcdefghijklmnopqrstuvwxyz";
  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numberChars = "0123456789";
  let symbolChars = "!@#$%^&*()_+[]{}<>?";

  let allChars = "";
  if (includeLower) allChars += lowerChars;
  if (includeUpper) allChars += upperChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  if (allChars.length === 0) {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * allChars.length);
    password += allChars[index];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
