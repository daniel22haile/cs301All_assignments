const prompt = require("prompt-sync")();
let cost_of_house = prompt("Please enter the cost of the house: ");
cost_of_house = parseFloat(cost_of_house);
let down_payment;
if (cost_of_house >= 0 && cost_of_house < 50000){
    down_payment = cost_of_house * 0.05;
}else if (cost_of_house >= 50000 && cost_of_house < 100000){
    down_payment = 2000 + 0.1 *(cost_of_house - 50000);
}else if (cost_of_house >= 100000 && cost_of_house < 200000){
    down_payment = 7500 + 0.2 *(cost_of_house - 100000);
}else {
    down_payment = 27500 + 0.25(cost_of_house -200000);
}