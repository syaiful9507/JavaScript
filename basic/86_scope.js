/** 
 * Scope
● Scope merupakan area akses sebuah data
● Ada dua jenis scope, global scope dan local scope.
● Setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
● Data di global scope bisa diakses dari local scope, namun data di local scope hanya bisa di akses di
local scope tersebut atau di scope local dibawahnya (dalam kasus function dalam function)
 */

/** GLOBAL SCOPE */
let counter = 0;
function hitMe(){
    //local scope function hitMe
    counter++; // we can access this variable
}

hitMe(); // counter = 1
hitMe(); // counter = 2
console.log(counter); 


/** LOCAL SCOPE */
function first() {
    let firstVariable = "First";
}

function second() {
    let secondVariable = "Second";
}

first();
second();

// console.log(firstVariable); // cannot acces local scope
// console.log(secondVariable); // cannot acces local scope


/** NESTED FUNCTION SCOPE */

function firstx() {
    let firstVariable = "First";

    function second() {
        console.log(firstVariable); // can access local scope in first function
        
    }
    second();
}

firstx();