
    value = prompt("enter an integer: ");
    value = parseInt(value);
function isPrime(value) {

    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }else{
            return true;
        }
    }
    return value > 1;
}

