const prompt = require("prompt-sync")();
let num = prompt("Please enter an integer number: ");
num = parseInt(num);

//Method to check if a number is odd
function odd(num){
    return Boolean(num%2);
}


    let sum = 0;
    for (let i = 1; i <= num; i++){
        if (odd(i)){
            sum +=i;
        }
    }
    console.log("The sum of the given odd numbers is " + sum);
