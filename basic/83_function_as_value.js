/**
 * Function Sebagai Value
 * Function tidak hanya bisa digunakan sebagai kode program yang dieksekusi, tapi bisa juga sebagai value
 * Artinya, function bisa disimpan di variable, bisa juga dikirim melalui parameter ke function lainnya
 */



/**
 * 
 * @function as variable
 */
function  sayHello(name){
    console.log('Hello ' + name);
}

let say = sayHello;

sayHello("SYAIFUL");
say("WULAN");



function giveMeName(callback){
    callback("ABIZAR"); // sayHello("ABIZAR")
}

giveMeName(sayHello);
giveMeName(say); // == giveMeName(sayHello)

