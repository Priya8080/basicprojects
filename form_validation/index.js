function validateForm() {
  let valid = true;
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  document.getElementById("userError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passError").textContent = "";
  document.getElementById("confirmError").textContent = "";
  if (username === "") {
    document.getElementById("userError").textContent = "Username is required.";
    valid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    valid = false;
  }
  if (password.length < 6) {
    document.getElementById("passError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }
  if (confirmPassword !== password) {
    document.getElementById("confirmError").textContent = "Passwords do not match.";
    valid = false;
  }

  return valid;
}
