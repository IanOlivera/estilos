function suma() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 + num2;
  document.getElementById("result").innerHTML = result;
}

function resta() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 - num2;
  document.getElementById("result").innerHTML = result;
}

function multiplicacion() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 * num2;
  document.getElementById("result").innerHTML = result;
}
