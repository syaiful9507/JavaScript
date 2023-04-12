/**
 * Function Return Value
 * ● Secara default, function itu tidak menghasilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah function mengembalikan value
 * ● Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam function nya.
 * ● Dan di dalam block function, untuk menghasilkan nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yang ingin kita hasilkan.
 * ● Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus, kita bisa menggunakan Array sebagai return value nya
 */

function addition(x, y){
    const xy = x + y;
    return xy;
}

const result = addition(5,2);
console.log(result);


function getFinalScore(x){
    if (x > 90) {
        return "A";
    } else if(x > 80) {
        return "B";
    } else if (x > 70) {
        return "C";
    } else if (x > 60) {
        return "D";
    } else {
        return "E";
    }
}

const passorFail = getFinalScore(90);
console.log(passorFail);

/**
 * 🥝 Menghentikan Eksekusi dengan Return
 * ● Saat kita menggunakan kata kunci return, maka kode setelah return tersebut tidak akan dieksekusi
 * ● Kita bisa menggunakan return untuk menghentikan eksekusi sebuah function
 */

function isContains(array, searchvalue){
    for (const elements of array){
        if (elements === searchvalue) {
            return true;
        }
    }
    return false;
}
console.log(isContains([1,2,3,4,5,6,7,8,9,10], 5));
