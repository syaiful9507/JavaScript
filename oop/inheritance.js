class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    vehicleDisplay(){
        return `Brand : ${this.brand}, Year : ${this.year}`;
    }
    startEngine(){
        return `${this.brand} engine started!`;
    }
}

class Car extends Vehicle {
    constructor(brand, year, model) {
        super(brand, year);
        this.model = model;
    }
    carDisplay(){
        return `${this.vehicleDisplay()}, Model : ${this.model}`;
    }
    startEngine() {
        return `${this.brand} ${this.model} engine roars to life!`;
    }
}

const vehicle = new Vehicle("TOYOTA", 2023); //Brand : TOYOTA, Year : 2023
console.log(vehicle.vehicleDisplay());
const car = new Car("TOYOTA",2023,"ALPHARD"); //Brand : TOYOTA, Year : 2023, Model : ALPHARD
console.log(car.carDisplay());
console.log(vehicle.startEngine());
console.log(car.startEngine());
