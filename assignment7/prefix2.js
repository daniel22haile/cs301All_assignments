"use-strict";

function switchCase(str1, str2) {
    let newStr = "";
    let count = 0;
    while (true) {
        if (str1[0 + count] === str2[0 + count]) {
            newStr = newStr + str1[0 + count];
            count++;
        } else {
            break;
        }

    }
    return newStr;
}
//expected output //disa
console.log(switchCase("disadvantage", "disallowed"));