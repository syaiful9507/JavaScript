class Vehicle {
    static type = "Motorized";
}

console.log(Vehicle.type);

//Error jika coba mengakses via instance
const car = new Vehicle();
console.log(car.type); // undefined

class Calculator{
    static add(a,b){
        return a + b;
    }
}

console.log(Calculator.add(1,9));
// Error jika mencoba mengakses melalui instance
const sum = new Calculator();
console.log(sum.add); // Output: undefined


/**
 * Menyimpan Data yang Bersifat Global untuk Class
 */
class AppConfig{
    static appName = "My Application";
    static version = "1.0.0";
}

console.log(AppConfig.appName);
console.log(AppConfig.version);

//Membuat Fungsi Utility
class MathUtil{
    static square(number){
        return number * number;

    }
    static cube(number){
        return number * number * number;
    }
}

console.log(MathUtil.square()); // Output: 25
console.log(MathUtil.cube(3)); // Output: 27

// Menyimpan Konstanta

class Contants {
    static PI = 3.14;
}

console.log(Contants.PI); // Output: 3.14

