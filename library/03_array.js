/*
# Array
● Tipe data Array sudah kita bahas di materi JavaScript Dasar
● Namun kita hanya membahas beberapa instance method yang ada di Array
● Sebenarnya, terdapat banyak sekali Instance Method yang ada di Array, dan kita akan coba bahas
beberapa di sini
● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/*
# Array Loop
● Sebelumnya kita biasa menggunakan for in dan for of untuk melakukan iterasi Array, namun Array juga memiliki method yang bernama forEach()
● Method forEach bisa digunakan juga untuk melakukan iterasi data array
 */
const array = ["Horse", "Cat","Lion","Elephant"];
array.forEach(function (value, index){
    console.log(`${index} : ${value}`);
})

array.forEach((value, index) => console.log(`${index} : ${value}`));
array.forEach(value => console.log(value));


/*
# Array Queue
● Dalam struktur data, terdapat tipe struktur data bernama Queue (Antrian)
● Dimana data masuk akan diposisikan di urutan paling belakang
● Sedangkan data keluar akan diposisikan dari urutan paling depan
● Mirip sekali dengan antrian, atau istilahnya FIFO (first in first out)
● Kita bisa menggunakan Array dengan bantuan function push() untuk menambah data di belakang, dan shift() untuk mengambil dan menghapus data paling depan
 */

console.log("------- array queue -------");
// Array Queue
const queue = [];
queue.push("SYAIFUL");
queue.push("WULAN");
queue.push("ABIZAR");

console.log(queue);
console.log(queue.shift());
console.log(queue);
console.log(queue.shift());
console.log(queue);
console.log(queue.shift());
console.log(queue);

console.log("-------- array stack ----------");
/*
# Array Stack
● Struktur data Stack (Tumpukan) kebalikan dari Queue, dimana aturannya mirip dengan tumpukan kartu
● Saat kita memasukkan data, kita akan memasukkan di urutan paling belakang (atau atas)
● Sedangkan saat kita mengambil data, kita akan mengambil data dari paling belakang (atau atas)terlebih dahulu
● Stack ini sifatnya LIFO (last in first out)
● Untuk menambah diurutan belakang, kita bisa menggunakan function push()
● Dan untuk mengambil dan menghapus paling belakang, kita bisa menggunakan function pop()
 */

const stack = [];
stack.push("SYAIFUL");
stack.push("WULAN");
stack.push("ABIZAR");
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);


console.log("----------- Array Search ----------------")
/*
# Array Search
- Array memiliki banyak function untuk melakukan pencarian :
__________________________________________________________________________________________
| Function                                |          Keterangan                           |          |
------------------------------------------------------------------------------------------
| find(value => boolean) : value          | Mencari data sesuai dengan kondisi            |
------------------------------------------------------------------------------------------
| findIndex(value => boolean) : number    | Mencari data index sesuai dengan kondisi      |
------------------------------------------------------------------------------------------
| includes(value) : boolean               | Mengecek apakah terdapat data                 |
------------------------------------------------------------------------------------------
| indexOf(value) : number                 | Mengecek posisi index data                    |
------------------------------------------------------------------------------------------
| lastIndexOf(value) : number             | Mengecek posisi index data terakhir           |
------------------------------------------------------------------------------------------
 */

const sources = [1,2,3,4,5,1,2,3,4,5,8];
console.log(sources.find(value => value > 3)); // 4
console.log(sources.findIndex(value => value > 5)); // 10 (index ke 10)
console.log(sources.includes(7)) // false (data tidak ada)
console.log(sources.indexOf(5)); // 4 (angka 5 berada pada index ke 4 )
console.log(sources.lastIndexOf(5)); // 9 Elemen 5 terakhir kali muncul di indeks 9, sehingga hasilnya adalah 9.

console.log("----------- Array Filter ----------------")

/*
# Array Filter
- Array memiliki function untuk melakukan filter data
________________________________________________________________________________________________
| Function                                |          Keterangan                                 |
------------------------------------------------------------------------------------------------
| Filter(value => boolean) : Array         | Melakukan filter data yang kondisinya bernilai true |
------------------------------------------------------------------------------------------------
 */
const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.filter(value => value % 2 === 1)); // [ 1, 3, 5, 7, 9 ]
console.log(numbers.filter(value => value % 2 === 0)); // [ 2, 4, 6, 8, 10 ]

console.log("----------- Array Transform ----------------")
/*
Array Transform
Array juga memiliki function yang digunakan untuk melakukan transformasi
________________________________________________________________________________________________
| Function                                |          Keterangan                                 |
------------------------------------------------------------------------------------------------
| map(value => result) : Array<result>    | Melakukan transform tiap value dan menghasilkan array result |
------------------------------------------------------------------------------------------------
reduce(resultBefore, value => result) : result | Melakukan transform dengan menggunakan value array dan value selanjutnya, lalu hasilnya dilanjutkan ke iterasi selanjutnya
------------------------------------------------------------------------------------------------
reduceRight(resultBefore, value => result) | Sama seperti reduce(), namun dilakukan dari belakang
------------------------------------------------------------------------------------------------
 */

const names = "Syaiful ABIZAR SARFRAZ FAIZAN ALANSYA".split(" ");
console.log(names.map(value => value.toUpperCase()));
console.log(numbers.reduce((result, value)=> result + value));
console.log(numbers.reduceRight((result, value) => result + value));