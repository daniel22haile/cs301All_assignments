const prompt = require("prompt-sync")();
let num = parseInt(prompt("Please enter a number: "));

for (let i = 1; i <= num; i++){
    console.log(i + " " + 2 * num + " " + 3 * num + " " + Math.pow(num, 2) + " " + Math.pow(num, 3) + "\n");
}