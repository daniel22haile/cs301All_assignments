function leftRotate(list, d) {
    var list = [];
    for (var i = 0; i < list.length; i++) {
        list.push(list[i]);
    };
    for (var j = 1; j <= d; j++) {
        list.shift(list.push(list[0]));
    }
    return list;
}
console.log(leftRotate([11,22,33,44,55], 2));