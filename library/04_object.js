/*
Object
● Tipe data object sudah sering sekali kita bahas di JavaScript Dasar dan JavaScript OOP
● Pada materi ini, kita akan bahas banyak static method yang terdapat pada Object
● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */
/*
Object Freeze & Seal
● Secara default, object bisa diubah atau dihapus properties nya
● Jika kita ingin mengubah sebuah object menjadi object yang tidak bisa diubah atau dihapus, kita
bisa menggunakan beberapa static method
● Object.freeze() digunakan untuk mengubah object menjadi object yang tidak bisa diubah atau
dihapus attribute nya
● Object.seal() digunakan untuk mengubah object menjadi object yang tidak bisa dihapus attribute
nya
 */
const person = {
    firstName : "SYAIFUL",
    lastName : "ABIZAR",
};
Object.freeze(person);
person.firstName = "Ubah";
delete person.firstName;
console.log(person);
/*
Object Assign
● Kadang kita ada kasus menggabungkan semua attribute dari sebuah object ke object lain
● Hal ini bisa kita lakukan dengan menggunakan Object.assign(target, source)
 */
console.log("---------Object Assign------------")
const target = {firstName: "SYAIFUL"};
const source = {lastName: "ABIZAR"};
Object.assign(target, source);
console.log(target);
/*
 * Object Property Name & Value
 * ● Object juga memiliki static method untuk digunakan mengambil semua properties names dan values
 * ● Object.values() digunakan untuk mengambil semua property value
 * ● Object.getPropertyNames() digunakan untuk mengambil semua properti name
 */
console.log("------------Object Property Name & Value----------");
console.log(Object.values(person));
console.log(Object.getOwnPropertyNames(person));

