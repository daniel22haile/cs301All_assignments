"use strict";
function countEvens(list){
    let count = 0;
    for (let i =0; i <list.length; i++){
        if (list[i] % 2 === 0)
            count++;
        
    }
    return count;
}
let arr = [22,22,13,15,19,20];
console.log(countEvens(arr));