/**
 * BigInt
 * ● BigInt merupakan tipe data Number yang bisa mencakup data angka lebih dari Number.MAX_SAFE_INTEGER
 * ● Untuk kasus number yang lebih dari itu, sangat disarankan menggunakan tipe data BigInt
 * ● Cara penggunaan BigInt sama saja dengan penggunaan Number dan juga operator nya
 * ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

const a = BigInt(Number.MAX_SAFE_INTEGER);
const b = BigInt(Number.MAX_SAFE_INTEGER);

const c = a + b;
console.log(c);
console.log(typeof c);