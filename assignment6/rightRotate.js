function rotateRight(arr) {
    let temp = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 1; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    return arr;
  }
  let temp1 = [12,22,33,44,55];
  let temp2 = rotateRight(temp1);
  console.log(rotateRight(temp2));