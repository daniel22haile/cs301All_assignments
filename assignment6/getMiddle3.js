"use strict";

function getMiddle(arr) {
    if (arr.length % 2 !== 0) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
    }
}

console.log(getMiddle([1, 2, 3, 4, 5, 1]))