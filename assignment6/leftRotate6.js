//let list = [17,8, 9, 5, 20];

function leftRotate(list, n){
    const newArr = list.concat();

    for (let i =0; i < n; i++){
        const frontItem = newArr.shift();
        newArr.push(frontItem);

    }
    return newArr;
}
console.log(leftRotate([11,22,33,44,55], 2));