const prompt = require("prompt-sync")();
let num1 = prompt("Please enter a number: ");
let num2 = prompt("Please enter the second number: ");

if (num1 >= num2) {
    consule.log(Math.abs(num1 - num2));
}else {
    consule.log(Math.abs(num2 -num1));
}