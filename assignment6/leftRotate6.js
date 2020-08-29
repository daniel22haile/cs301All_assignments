function leftRotate(arr) {
    for (let i = 0; i + 1 < arr.length; i++) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap
    }
    return arr;
}
let temp = [1,2,3,4,5,6,7];
let temp2 = leftRotate(temp);
console.log(leftRotate(temp2));