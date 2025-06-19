function convert() {
    let temp = parseFloat(document.getElementById("inputTemp").value);
    let unit = document.getElementById("selectTemp").value;
    let result;
    if (unit === "CtoF") {
    result = (temp * 9/5) + 32;
  } else {
    result = (temp - 32) * 5/9;
  }
   document.getElementById("result").innerHTML = "<strong>Result : </strong> " + result.toFixed(1);
}
