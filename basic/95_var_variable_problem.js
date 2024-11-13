/*
# Masalah Variable var
● Sebelumnya sudah dijelaskan bahwa penggunaan var sudah tidak direkomendasikan lagi, dan diganti dengan let
● Pertanyaannya kenapa?
● Alasan var tidak direkomendasikan digunakan lagi adalah, karena var tidak memiliki block scope,
artinya dia tidak mengikat ke local scope yang sebelumnya sudah kita bahas
● Karena masalah ini, var bisa tidak terprediksi
● Kita akan buat contoh penggunaan var dan let
 */

//Menggunakan let
let i =20;
for (let i = 0; i<10; i++){
    console.log(`Local : ${i}`);
}
console.log(`Global : ${i}`);

var j = 20;
for (j = 0; j < 10; j++){
    console.log(`Local : ${j}`);
}
console.log(`Global ${j}`);