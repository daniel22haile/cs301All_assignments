function leftRotate(arr) {
    for (let i = 0; i + 1 < arr.length; i++) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap
    }
    return arr;
}

console.log(leftRotate(arr))