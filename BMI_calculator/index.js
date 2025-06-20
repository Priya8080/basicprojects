    function calculateBMI() {
      let weight = parseFloat(document.getElementById("weight").value);
      let height = parseFloat(document.getElementById("height").value);

      if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerText = "Please enter valid weight and height.";
        return;
      }
      let heightM = height / 100;
      let bmi = weight / (heightM * heightM);
      let category = "";
      if (bmi < 18.5) {
        category = "Underweight";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
      } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
      } else {
        category = "Obese";
      }

      document.getElementById("result").innerHTML = `
        <strong>Your BMI:</strong> ${bmi.toFixed(2)}<br><br>
        <strong>Category:</strong> ${category}
      `;
    }
  
