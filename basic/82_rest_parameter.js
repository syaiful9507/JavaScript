/**
 * Rest Parameter
 * ● Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyak nya pada satu parameter, dan secara otomatis akan di konversi menjadi Array
 * ● Untuk membuat rest parameter, ada ketentuannya
 * ● Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu
 * ● Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan atau di tengah, kecuali memang cuma ada 1 parameter
 * ● Di bahasa pemrograman lain, ada juga yang bilang ini adalah variable argument
 */

function sum(name, ...data) {
    let total = 0;
    for (const item of data) {
        //console.log(item);
        total += item;
    }
    console.log('total ' + name + ' is ' + total);
}

sum('Orange', 1, 2, 3, 6, 7, 8);
sum('Apple', 5, 5, 6, 7, 5, 6);
sum('Banana', 9, 5, 2, 3, 4);

function oldSum(...arguments) {
    let total = 0;
    for (const item of arguments) {
        total += item;
    }
    console.log(total);
}
oldSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);