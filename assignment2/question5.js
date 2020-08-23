const prompt = require('prompt-sync')();
let startMiles = prompt("Enter starting odometer reading: ");
let endMiles = prompt("Enter enter odometer reading: ");
let gallonsUsed = prompt("How many gallons? ");
let totalMiles = (endMiles - startMiles);
let milesPerGallon = parseFloat(totalMiles/gallonsUsed);
console.log("Total milles: " +totalMiles);
console.log("Miles per gallon: " +milesPerGallon);