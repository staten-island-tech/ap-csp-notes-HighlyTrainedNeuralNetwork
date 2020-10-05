const tipForm = document.getElementById("tip-form"); //global scope

tipForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const billAmount = Number(document.querySelector("#bill-amount").value);
  const tipPercentage = Number(document.querySelector("#tip-amount").value);
  const tipvalue = (billAmount * tipPercentage) / 100;
  const tipAmount = document.querySelector("#final-tip");
  tipAmount.innerHTML = `The tip is ${tipvalue}`;
  const totalAmount = document.querySelector("#total-bill");
  const total = tipvalue + billAmount;
  totalAmount.innerHTML = `The total bill is ${total}`;
});
