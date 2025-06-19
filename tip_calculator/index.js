    function calculateTip() {
      let billAmount = parseFloat(document.getElementById("bill").value);
      let tipPercent = parseFloat(document.getElementById("tip").value);
      if (isNaN(billAmount) || isNaN(tipPercent) || billAmount <= 0 || tipPercent < 0) {
        document.getElementById("result").innerHTML = "Please enter valid bill and tip.";
        return;
      }
      let tipAmount = (billAmount * tipPercent) / 100;
      let total = billAmount + tipAmount;
      document.getElementById("result").innerHTML = `
        <strong>Tip:</strong> Rs. ${tipAmount.toFixed(2)} <br>
        <strong>Total Amount:</strong> Rs. ${total.toFixed(2)}
      `;
    }