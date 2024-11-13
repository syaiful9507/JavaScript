/*
# Getter dan Setter
● Getter dan Setter adalah kemampuan membuat function yang berbeda untuk mengambil data (Getter) dan mengubah data (Setter) pada sebuah property di Object
● Dengan menggunakan Getter dan Setter, kita bisa melakukan hal apapun dalam function sebelum sebuah property di akses atau diubah, misal menambah validasi dan lain-lain
 */

//getter
const person = {
    firstName: "SYAIFUL",
    lastName: "ABIZAR",
    _age : 25,
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set editFirstName(changeFistName) {
        this.firstName = changeFistName;
    },
    set editLastName(changeLastName){
        this.lastName = changeLastName;
    },
    get age(){
        return this._age;
    },
    set age(age){
        if (age > 0 && age < 160){
            this._age = age;
        } else {
            console.log("Invalid Age");
        }
    }
}

//otomatis memanggil get fullname()
console.log(person.fullName);

//ubah firstname via setter
person.editFirstName = "ABIZAR";
person.editLastName = "SARFRAZ FAIZAN ALANSYA";
console.log(person.fullName);
person.age = 10;
console.log(person._age);

