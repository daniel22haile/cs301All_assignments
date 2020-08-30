'use strict';

let myCar = {
    make: "Acura",
    model: "MDX",
    year: "2020",
    odometer: "1000",
    serviceCount: "20",
    getDetails: function() {
        return "My " + this.make + " " + this.model + " " + this.year + " is currently with " +
            this.odometer + " odometer and " + this.serviceCount + " service count.";
    }
}
console.log(myCar.getDetails());