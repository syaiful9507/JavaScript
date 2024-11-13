/**
 * Optional Parameter
 * ● Secara default, parameter di function itu optional
 * ● Artinya kita tidak wajib mengisi value nya ketika memanggil function
 * ● Jika tidak ada value yang kita kirim ke parameter ketika memanggil function, maka secara otomatis
     parameter tersebut bernilai undefined
 */


function sayHello(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}
sayHello("syaiful");

function sayHello2(x = 4, y = 5, z = 6){ //ada parameter default , ketika function dipaggil dan dimasukkan value yang baru, maka value dafault akan berubah.
    console.log(x);
    console.log(y);
    console.log(z);
}

sayHello2(10);