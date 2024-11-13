/**
 * Function Generator
● Function generator adalah function yang digunakan untuk membuat data generator
● Generator adalah data yang bisa di interasi seperti Array
● Untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function
● Dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti datanya
 */

function* createNames(){
    yield "SYAIFUL";
    yield "ABIZAR";
    yield "WULAN";
}

const names = createNames();
for (const name of names){
    console.log(name);
    
}

/**
 * Function Generator Kompleks 
 * */

function* buatGanjil(value){
    for (let i = 1; i <= value; i++){
        if(i % 2 === 1){
            yield i;
        }
        //yield i;
    }
}
const angkaGanjil = buatGanjil(100);
for (const angka of angkaGanjil){
    console.log(angka);
}

/**
 * 
 * Lazy Evaluation
 * Generator itu sifatnya lazy
 * Jadi artinya jika kita tidak data belum kita ambil dari generator, maka yield selanjutnya tidak akan di eksekusi
 */

/** Contoh */

function* buatGanjilLE(value){
    for (let i = 1; i <= value; i++){
        if(i % 2 === 1){
            console.log(`Perulangan ke ${i}`);
            yield i;
        }
        //yield i;
    }
}

const angkaGanjilLE = buatGanjilLE(100);
console.log(angkaGanjilLE.next().value);
console.log(angkaGanjilLE.next().value);
console.log(angkaGanjilLE.next().value);

