/**
 * Operator Logika di Non Boolean
 * - Sebelumnya kita sudah tahu bahwa operator logika AND (&&) dan OR (||) digunakan untuk dua data boolean
 * - Namun berbeda di JavaScript, kita bisa menggunakan operator logika AND dan OR untuk tipe data non boolean
 * 
 * #### Operator OR (||) di Non Boolean #########
 * - Operator logika OR (||), membaca dari kiri ke kanan.
 * - Operator ini akan mengambil nilai pertama yang truthy
 * - Jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang akan diambil
 * 
 * CONTOH
 */
console.log("====== OPERATOR OR (||) =========");
console.log("hello" || ''); // hello
console.log("" || []); // []
console.log("0" || "NOL"); // "0"
console.log(0 || "NOL"); // NOL
console.log(null || "NULL"); // NULL
console.log(undefined || "UNDEFINED"); // UNDEFINED

//contoh kasus penggunaan real
const person = {
    firstName : "SYAIFUL",
    lastName : "ABIZAR"
}
const name = person.firstName || person.lastName;
console.log(name);

/**
 * ######## Operator AND (&&) di Non Boolean ############
 * - Operator logika AND (&&), membaca dari kiri ke kanan.
 * - Operator ini akan mengambil nilai pertama yang falsy
 * - Jika tidak ada satupun yang bernilai falsy, maka yang terakhir yang akan diambil
 * 
 * CONTOH
 */
console.log("====== OPERATOR AND (&&) =========");
console.log("hello" && ''); // ''
console.log("" && []); // ""
console.log("0" && "NOL"); // "NOL"
console.log(0 && "NOL"); // 0
console.log(null && "NULL"); // NULL
console.log(undefined && "UNDEFINED"); // UNDEFINED
console.log("undefined" && "null"); // null

