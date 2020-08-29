let list = [1,2,3,4,5];

function addEnds(list){
    //let sum = 0;
    for (let i =0; i < list.length; i++){
        let num1 = list[0];
        let num2 = (list.length - 1);
        let total = num1 + num2;
        return total;
    }
    
}

console.log(addEnds(list));

