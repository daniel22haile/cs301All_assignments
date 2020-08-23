const prompt = require("prompt-sync")();
let weather = prompt("What is the weather outside? ");
weather = weather.toLowerCase();

if (weather === "rain"){
    console.log("galoshes");
}else if(weather === "hot"){
    console.log("sandals");
}else if (weather === "snow"){
    console.log("boots");
}else {
    console.log("shoes");
}