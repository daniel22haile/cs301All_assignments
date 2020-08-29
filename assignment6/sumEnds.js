let list = [12,22,11,32,50];

function addEnds(list){
    let sum = 0;
    for (let i =0; i < list.length; i++){
        let num1 = list[0];
        let num2 = (list.length - 1);
        let total = num1 + num2;
        return total;
    }



 
}

console.log(addEnds(list));

// let num1 = list(list[0]);
// let num2 = lists([list.length-1]);
// let totalArr = num1 + num2;
// return totalArr;