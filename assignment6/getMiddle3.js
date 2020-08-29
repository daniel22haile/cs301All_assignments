function getMiddle(arr) {
    if (arr.length % 2 !== 0) {
      return arr[Math.floor(arr.length / 2)];
    } else {
      return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
    }
  }
  let arr1 = [12,23,45,67,89];
  let arr2 = [1,2,3,4,5,6,7,8];
  console.log(getMiddle(arr));