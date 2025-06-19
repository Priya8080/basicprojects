function calculate() {
  let x = Number(document.getElementById("num1").value);
  let y = Number(document.getElementById("num2").value);
  let op = document.getElementById("operation").value;
  let result;

  if (op === "add") {
    result = x + y;
  } else if (op === "sub") {
    result = x - y;
  } else if (op === "mul") {
    result = x * y;
  } else if (op === "div") {
    if (y === 0) {
      result = "Cannot divide by zero!";
    } else {
      result = x / y;
    }
  }

  document.getElementById("resultAdd").innerHTML = "<strong>Result: </strong> " + result;
}
