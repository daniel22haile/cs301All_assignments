const prompt = require('prompt-sync')();
let distInKillometer = prompt("Enter value in killometer: ");
distInKillometer = parseInt(distInKillometer);
let distInMile = parseFloat(distInKillometer)*1.609;
console.log(distInMile);