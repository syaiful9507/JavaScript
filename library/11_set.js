/**
 * Set
 * ● Set merupakan implementasi dari struktur data yang berisikan data-data unique
 * ● Set mirip seperti Array, hanya saja isi datanya selalu unique
 * ● Jika kita menambahkan data yang sama, maka data hanya akan diterima satu saja
 * ● Set mengimplementasikan kontrak iterable, sehingga bisa diiterasi secara default
 * ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */
const set = new Set();
set.add("ABIZAR");
set.add("syaiful");
set.add("wulan");
set.add("abizar");
set.add("syaiful");
console.log(set);
set.forEach(value => console.log(value));
