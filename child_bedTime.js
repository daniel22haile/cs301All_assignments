const prompt = require("prompt-sync")();
let child_age = prompt("Please enter child's age: ");
let season = prompt("Please enter a season: ");
child_age = parseInt(child_age);
season = season.toLowerCase();
let bed_time;

if (child_age >= 5){
    if (season === "summer" || season === "fall")
        bed_time = "8:30 p.m.";
    else if (season === "winter" || season === "spring")
        bed_time = "8:00 p.m.";
}else if (child_age >= 6 && child_age <= 12){
    if (season === "summer")
        bed_time = "9:30 p.m.";
    else if (season === "winter" || season === "spring" || season === "fall")
        bed_time = "8:30 p.m.";
}else if (child_age >=13){
    if (season === "summer")
        bed_time = "10:30 p.m.";
}else {
    bed_time = "9:30 p.m.";
}

console.log(bed_time);