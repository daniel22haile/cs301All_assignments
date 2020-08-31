"use strict";

const prompt = require("prompt-sync")();

function extractGivenName(fullName) {

    let empty_space = fullName.indexOf(" ");
    //add 1 to empty pace to avoid the space and get the given name 
    let givenName = fullName.substring(empty_space + 1, (fullName.length));
    return givenName;
}

let user = prompt("Please enter full name: ");
console.log(extractGivenName(user));