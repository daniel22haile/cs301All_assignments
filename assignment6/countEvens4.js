let list = [17,8,9,5,20];
let sum = 0;
let count ;
function countEvens (list){

    for (let i =0; i <list.length; i++){
        if (list[i] % 2 === 0)
            count++;
        sum+=count;
    }
    return sum;
}
console.log(countEvens(list));