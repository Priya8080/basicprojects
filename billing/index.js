let items = [];

function addItem() {
  const name = document.getElementById("itemName").value.trim();
  const qty = parseInt(document.getElementById("itemQty").value);
  const price = parseFloat(document.getElementById("itemPrice").value);

  if (!name || isNaN(qty) || isNaN(price)) {
    alert("Please enter valid item name, quantity, and price");
    return;
  }

  const total = qty * price;

  const newItem = { name, qty, price, total };
  items.push(newItem);

  renderTable();
  updateTotal();
  clearForm();
}

function renderTable() {
  const tbody = document.querySelector("#itemTable tbody");
  tbody.innerHTML = "";

  items.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>₹${item.price.toFixed(2)}</td>
      <td>₹${item.total.toFixed(2)}</td>
      <td><button onclick="deleteItem(${index})">Delete</button></td>
    `;
    tbody.appendChild(row);
  });
}

function deleteItem(index) {
  items.splice(index, 1);
  renderTable();
  updateTotal();
}

function updateTotal() {
  const total = items.reduce((sum, item) => sum + item.total, 0);
  document.getElementById("totalAmount").innerText = total.toFixed(2);
}

function clearForm() {
  document.getElementById("itemName").value = "";
  document.getElementById("itemQty").value = "";
  document.getElementById("itemPrice").value = "";
}

function generatePDF() {
  const invoice = document.getElementById("invoiceArea");

  const options = {
    margin: 0.5,
    filename: 'invoice.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(options).from(invoice).save();
}

