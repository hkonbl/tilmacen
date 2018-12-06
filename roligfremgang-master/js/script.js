window.onload = startFunction;

function startFunction() {
}

function calculateTax() {
  var boughtFor = document.getElementById("boughtFor").value;
  var eaTax = (boughtFor/100) *5;
  var breakEvenSum = parseInt(boughtFor) + parseInt(eaTax);
  var listPrice = (breakEvenSum * 1.05);

  document.getElementById("sellFor").innerHTML = listPrice;
}
