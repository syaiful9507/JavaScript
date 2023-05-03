/**
 * Anonymous Function
 * ● Sebelumnya kita selalu membuat function dengan nama
 * ● Kita juga bisa membuat function tanpa nama function, atau istilahnya adalah anonymous function
 * ● Kita bisa buat anonymous function dalam sebuah variable atau bisa juga kita buat ketika mengisi
     parameter
 */

//Kode : Anonymous Function di Variable
let say = function (name) {
    console.log('Hello ' + name);
}
say("WULAN")

//Kode : Anonymous Function di Parameter
function giveMeName(callback) {
    callback("SYAIFUL")
}
giveMeName(function (name) {
    console.log('Hello ' + name);
})