/**
 * Anonymous Function
 * Sebelumnya kita selalu membuat function dengan nama
 * Kita juga bisa membuat function tanpa nama function, atau istilahnya adalah anonymous function
 * Kita bisa buat anonymous function dalam sebuah variable atau bisa juga kita buat ketika mengisi parameter
 */

/** Anonymous Function in Variable */
let say = function (name){
    console.log(`Hello ${name}`);
}

say("ABIZAR");

/** Anonymous Function in Parameter */
function giveMeName(callback){
    callback("AKU ABIZAR")
}

giveMeName(function(name){
    console.log(`Hello ${name}`);
})