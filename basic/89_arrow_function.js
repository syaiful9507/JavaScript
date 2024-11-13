/**
 * Arrow Function
    * Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
    * Namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi
    * Dinamakan arrow function karena menggunakan tanda => (seperti panah)
    * Berikut contoh beberapa kekurangan arrow function :
        * tidak memiliki fitur arguments object
        * tidak bisa menggunakan function generator
        * tidak bisa mengakses this (yang nanti akan dibahas di function di object)
        * tidak bisa mengakses super (yang nanti akan dibahas di JavaScript Object Oriented Programming)
 */


let sayHello = (name) => {
    const say = `Hello ${name}`;
    console.log(say);
}
sayHello("SYAIFUL")

let Halo = (name) => console.log(`Hello ${name}`);
Halo("SYAIFUL ABIZAR");


// Arrow Fucntion Return Value
/*
● Arrow function bisa mengembalikan value, sama seperti function biasanya
● Jika menggunakan block, maka kita perlu menggunakan kata kunci return
● Jika tidak menggunakan block, kita tidak perlu menggunakan kata kunci return
 */
let Addition = (x, y) => {
    let add = x + y;
    return `${x} + ${y} = ${add}`;
}

let getAddition = Addition(10,12);
console.log(getAddition);

const sum = (x, y) => x + y;
console.log(sum(10,12));

/*
Arrow Function Tanpa Kurung Parameter
● Jika parameter di arrow function hanya satu, kita bisa tidak menggunakan kurung pada paramete
 */
const profile = name => console.log(`Hay ${name}`);
profile("SYAIFUL ABIZAR WULAN");

/*
Arrow Function Sebagai Parameter
🥝 Karena arrow function sama seperti anonymous function
🥝 Jadi kita juga bisa menggunakan arrow function sebagai parameter di function lain
 */

function giveMeName(callback){
    callback("SYAIFUL");
}
giveMeName(name => console.log(`Hello ${name}`));


function me(x){
    return x(9);
}
me(x => console.log(`iam is ${x}`));