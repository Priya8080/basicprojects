const form = document.getElementById("transaction-form");
const descInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const list = document.getElementById("transaction-list");
const balanceDisplay = document.getElementById("balance");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function updateBalance() {
  let balance = 0;
  transactions.forEach(t => {
    balance += t.type === "income" ? t.amount : -t.amount;
  });
  balanceDisplay.textContent = balance.toFixed(2);
}

function renderTransactions() {
  list.innerHTML = "";
  transactions.forEach((t, index) => {
    const li = document.createElement("li");
    li.classList.add(t.type);
    li.innerHTML = `
      ${t.description} (Rs.${t.amount})
      <button class="delete-btn" onclick="deleteTransaction(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateLocalStorage();
  renderTransactions();
  updateBalance();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const desc = descInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const type = typeInput.value;

  if (!desc || isNaN(amount) || amount <= 0) {
    alert("Please enter valid description and amount");
    return;
  }

  transactions.push({ description: desc, amount, type });
  updateLocalStorage();
  renderTransactions();
  updateBalance();

  form.reset();
});

renderTransactions();
updateBalance();
