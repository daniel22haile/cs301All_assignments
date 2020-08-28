const prompt = require("prompt-sync")();
let value = prompt("Please enter an integer: ");
value = parseInt(value);

function isPrime(value) {

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
isPrime(value);
//console.log(value);
