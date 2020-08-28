const prompt = require("prompt-sync")();
let num = prompt("Please enter an integer: ");
num = parseInt(num);
let is_prime;
function isPrime(num) {
     is_prime = true;
    for(let i = 2; i < num; i++){
      if(num % i === 0) 
        is_prime = false;
        break;
    }
    return num > 1;
  }


  //console.log(isPrime(is_prime));
 console.log(isPrime(is_prime));