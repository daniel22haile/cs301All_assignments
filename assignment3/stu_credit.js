const prompt = require("prompt-sync")();
let credits = prompt("Please enter your credit? ");
credits = parseInt(credits);

if (credits >= 0 && credits < 30){
    console.log("freshman");
}else if (credits >= 30 && credits < 60){
    console.log("sophomore");
}else if (credits >= 60 && credits < 90){
    consule.log("junior");
}else {
    consule.log("senior");
}
