const prompt = require("prompt-sync")();
let num = prompt("Please enter an integer: ");
num = parseInt(num);
 let user_input_phrase = prompt("Please enter a phrase: ");
    
    
for (  let i = 1; i <= num; i++){
    console.log(user_input_phrase + "\n");
}