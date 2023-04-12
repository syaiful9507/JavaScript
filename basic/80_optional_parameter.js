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