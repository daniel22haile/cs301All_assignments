'use strict';

let myCar = {
    make: "Acura",
    model: "MDX",
    year: "2020",
    odometer: "1000",
    serviceCount: "20",
    getService: function() {
        return ("Service count reading is: ") + this.serviceCount++;

    },
    getOdometer: function() {
        return ("Odometer reading is: ") + this.odometer;
    },
    getReset: function() {
        let myOdometer = (this.odometer = 0);
        let myServiceCount = (this.serviceCount = 0);
        return ("Odometer get reset to ") + myOdometer +
            " and \nServiceCount also reset to " + myServiceCount + ".";
    }
}


console.log(myCar.getService());
console.log(myCar.getService());
console.log(myCar.getOdometer());
console.log(myCar.getReset())