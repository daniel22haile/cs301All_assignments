"use strict";

function getSuffix(str1, str2) {
    let endStr = "";
    let yield = 0;
    while (true) {
        if (str1[str1.length - 1 - yield] === str2[str2.length - 1 - yield]) {
            endStr = str1[str1.length - 1 - yield] + endStr;
            yield ++;
        } else {
            break;
        }
    }
    return endStr;
}
//expected output ---- //ddd
console.log(getSuffix("adbdddd", "adddsddd"));