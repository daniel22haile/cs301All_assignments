let list = [17,8,9,5,20];

function multiply(list, multiplier){

    for (let i =0; i< list.length; i++){
        list[i] = list[i] * multiplier;
    }
    return list;
}
console.log(multiply(list[i],3));