function titleCase1(s) {
    let arr = s.split(" ");
    for (let a = 0; a < arr.length; a++) {
        arr[a] = arr[a][0].toUpperCase() + arr[a].substring(1);
    }
    return arr.join(" ");
}
//E.g. expected output is //DANIEL
console.log(titleCase1("dANIEL"));