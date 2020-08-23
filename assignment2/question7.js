const prompt = require('prompt-sync')();
let regHours = prompt("Enter the regular hours: ");
let regWage = prompt("Enter the regular wage amount: ");
let regPay = (regHours * regWage);
let tax = (regPay * 0.15);
let netPay = regPay - tax;

console.log(netPay);