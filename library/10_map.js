/**
 * Map
 * ● Map merupakan representasi dari struktur data key-value
 * ● Map mirip dengan tipe data object, hanya saja pada Map, semua method untuk manipulasi data
 * sudah disediakan
 * ● Map mengikuti kontrak iterable, sehingga bisa di iterasi secara default
 * ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */
const map = new Map();
map.set("Name", "SYAIFUL");
map.set("Address", "Indonesia");

console.log(map);
console.log(map.get("Name"));
console.log(map.get("Address"));

