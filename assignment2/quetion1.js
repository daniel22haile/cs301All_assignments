const prompt = require('prompt-sync')();
let volInquart = prompt("Enter value in quart: ");
let volInLiter = 1.057 * parseInt(volInquart);
console.log(volInLiter);