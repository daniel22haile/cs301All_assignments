const prompt = require("prompt-sync")();
let user_input = prompt("Please enter a number: ");
user_input = parseInt(user_input);

if (user_input % 2 === 0){
    console.log("Even number");
}else{
    console.log("odd number");
}