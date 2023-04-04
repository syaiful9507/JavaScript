
/**
 * With Statement
 * - With statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data
 * - Dengan menggunakan "with statement" kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya.
 * 
 * Namun .. With Statement tidak direkomendasikan
 * - Walaupun fitur with statement ini sangat menarik
 * - Namun kebanyakan orang tidak merekomendasikan penggunaan "with statement".
 * - Hal ini dikarenakan "with statement" kadang membuat sebuah kode menjadi ambigu.
 * 
 */

//Without "with statement"
const name = {
    firstName: "SYAIFUL",
    lastName: "Abizar",
}
console.log(name.firstName);
console.log(name.lastName);

//Use "with statement"
with(name){
    console.log("==WITH STATEMENT==");
    console.log(firstName);
}

//contoh data bisa menjadi ambigu

const firstName = "Wulan";
const lastName = "Indah";
with (name){
    console.log(firstName); //harapannya ingin wulan
    console.log(lastName); //niatnya ingin indah
}