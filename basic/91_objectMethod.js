/*
Object Method
● Pada tipe data object, kita sudah membahas tentang property di object
● Karena sebenarnya function juga merupakan salah satu tipe data, jadi function pun sebenarnya
bisa ditambahkan sebagai property di object
● Cara pembuatannya pun sama dengan function sebagai value
● Function di object kadang disebut juga sebagai Object Method
 */


//Membuat Object dengan Method
const person = {
    name: "SYAIFUL",
    sayHello : function (name){
        console.log(`Hello ${name}`);
    }
};

// Menambah Method ke Object
person.sayHello("ABIZAR");

const person1 = {
    name: "ABIZAR"
};
person1.sayHello = function (name){
    console.log(`Hello ${name}`);
};

person1.sayHello("WULAN");

