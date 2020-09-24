function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log("Running Calculator Bill!!");
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal = calculateBill(100, wesTaxRate);

function sayHiTo(fistName) {
  return `Hello ${firstName}`;
}

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = "Silly Goose") {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill();
