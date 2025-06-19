function calculateAge(){
     let birthDate = new Date(document.getElementById("inDate").value);
      let today = new Date();
      let age = today - birthDate;

      if (isNaN(age)) {
        document.getElementById("result").innerHTML = "Please enter a valid date.";
        return;
      }
      let ageDate = new Date(age);
      let years = ageDate.getUTCFullYear() - 1970;
      let months = ageDate.getUTCMonth();
      let days = ageDate.getUTCDate() - 1;
      document.getElementById("result").innerHTML = `
        <strong>Your Age is:</strong><br>
        ${years} Years<br>
        ${months} Months<br>
        ${days} Days
      `;
    }

