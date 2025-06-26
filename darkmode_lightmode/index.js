const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});
