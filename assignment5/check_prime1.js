const prompt = require("prompt-sync")();
let value = prompt("Please enter an integer: ");
value = parseInt(value);
let prime;
function isPrime(value) {

    prime = true;
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
            break;
        }else{
            return true;
            break;
        }
    }
    return value > 1;
}
console.log(isPrime(prime));
//console.log(value);
