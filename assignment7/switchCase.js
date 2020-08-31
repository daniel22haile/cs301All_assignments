"use-strict";

function switchCase(s) {
    let str = s.toLowerCase();
    let newStr = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === str[i]) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}
//expected output //disa
console.log(switchCase("DIsaHvantYge"));