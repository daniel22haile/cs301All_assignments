const prompt = require('prompt-sync')();
let totalBoxes = prompt("Enter the total boxes: ");
let boxInStack = prompt("Enter boxes in each stack");
let numStacks = (totalBoxes/boxInStack);

console.log(Math.ceil(numStacks));