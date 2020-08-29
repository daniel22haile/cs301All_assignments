"use strict";
function multiply(list, multiplier){

    for (let i =0; i< list.length; i++){
        list[i] = list[i] * multiplier;
    }
    return list;
}

  
console.log(multiply([11,2,33,44,55,6],3));

