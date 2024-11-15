/**
 * RegExp
 * ● RegExp merupakan implementasi dari regular expression di JavaScript
 * ● Regular expression merupakan fitur untuk mencari text dengan pola
 * ● Membuat regular expression di JavaScript bisa dilakukan dengan dua cara, yaitu menggunakan
 * literal notation atau membuat object RegExp
 * ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 */
const regex1 =/[a]/;
const regex2 = new RegExp("[a]");
const regex3 = new RegExp(/[a]/);

const name = "Syaiful Abizar Sarfraz";
const regex = /Syaiful/
let result = regex.exec(name);
console.log(result);

let test = regex.test(name);
console.log(test);