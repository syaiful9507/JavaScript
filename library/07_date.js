/**
 * Date
 * ● JavaScript memiliki tipe data untuk representasi waktu dan tanggal, yaitu Date
 * ● Date merupakan representasi milisecond sejak tanggal 1 Januari 1970, atau dikenal dengan Epoch
 * & Unix Timestamp
 * ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */
/**
 * Membuat Object Date
 * Untuk membuat object Date, kita bisa menggunakan new Date(), dimana terdapat constructor parameter
 *
 */
const date1 = new Date();
console.log(date1);
const date2 = new Date(2020, 10,10);
console.log(date2);
const date3 = new Date(2020, 10,10,0,0,0);
console.log(date3);