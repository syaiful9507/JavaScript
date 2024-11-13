/**
 * Recursive Function
● Recursive function adalah kemampuan function memanggil function dirinya sendiri
● Kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunakan recursive
function, seperti contohnya kasus factorial
 */

/** FACTORIAL LOOP */
function factorial(values) {
    let result = 1;
    for (let i = 1; i <= values; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

function factorialRecursive(value){
    if(value === 1){
        return 1;
    } else {
        return value * factorialRecursive(value - 1); // 
}
}

console.log(factorialRecursive(3));
