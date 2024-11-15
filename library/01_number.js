/*
# Number
● Number merupakan function yang digunakan untuk melakukan konversi ke tipe data number
● Jika data tidak bisa dikonversi ke number, secara otomatis hasilnya adalah NaN
● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 */
const input = '123456443';
const number = Number(input);
console.log(number);

/*
# Number Static Properties
● Number memiliki banyak static properties, seperti :
● Number.MIN_VALUE untuk mendapat number minimal
● Number.MAX_VALUE untuk mendapat number maksimal
● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_properties
 */
console.log("---Number Static Properties---");
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log("------------------------------");

/*
# Number Static Method
● Number memiliki banyak static method, seperti :
● Number.isNaN(value) untuk mengecek apakah value NaN atau bukan
● Number.isInteger(value) untuk mengecek apakah value berupa integer atau bukan
● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#s
tatic_methods
 */

console.log("---Number Static Method---");
const  data = Number('12133');
console.log(Number.isInteger(data));
console.log(Number.isNaN(data));
console.log("--------------------------");

/*
# Number Instance Method
● Number memiliki banyak instance method, seperti :
● Number.toLocalString(locale) untuk mengubah number menjadi string sesuai locale :
https://www.lansweeper.com/knowledgebase/list-of-currency-culture-codes/
● Number.toString(radix) untuk mengubah number menjadi string sesuai radix
● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#i
nstance_methods
 */
console.log("-----Number Instance Method-----");
const value = Number(12345);
console.log(value.toString(2));
console.log(value.toLocaleString("id-ID"));
console.log("--------------------------------");