const keyDisplay = document.getElementById("key");
const codeDisplay = document.getElementById("code");
document.addEventListener("keydown", function (event) {
  keyDisplay.textContent = `You pressed: ${event.key}`;
  codeDisplay.textContent = `Key code: ${event.keyCode}`;
});
