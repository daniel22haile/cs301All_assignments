const prompt = require('prompt-sync')();
const Heart_Rate_Range = 220;
let input_age = prompt("Please enter your age: ");
input_age = parseInt(input_age);
const Max_Heart_Rate = Heart_Rate_Range - input_age;


 if (Max_Heart_Rate < (0.65 * Max_Heart_Rate)){
     consule.log("Lower heart rate");
 }else if(Max_Heart_Rate > (0.85 * Max_Heart_Rate)){
     console.log("Faster heart rate");
 } else{
     consule.log("Normal heart rate");
 }

