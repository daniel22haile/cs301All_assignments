
const prompt = require("prompt-sync")();
let fahrenheit = prompt("Please enter a temperature in degree fahrenheit: ");
fahrenheit = parseFloat(fahrenheit);

function farhToCels(fahrenheit){
    let fTemp = fahrenheit;
    let fToC = (fTemp - 32) * 5 / 9;
    let result = fTemp + " degree fahrenheit is " + fToC+ " degree celsius.";
    return result;
    
}

console.log(farhToCels(fahrenheit));