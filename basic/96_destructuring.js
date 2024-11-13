/*
Destructuring
● Destructuring adalah fitur yang bisa digunakan untuk membongkar value-value di array atau object ke dalam variable-variable
● Fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan data satu persatu
 */
//Mengambil data di array (tanpa destructuring)

// const names = ["ABIZAR", "SYAIFUL","WULAN"];
// const firstName = names[0];
// const middleName = names[1];
// const lastName = names[2];
//
// console.log(firstName, middleName, lastName);

//Desctructuring Array (dengan destructuring)
const animal = ["Crocodile","Horse","Snake","Cow","Cat"];
const [animal1, animal2,...others] = animal;
console.log(animal1);
console.log(animal2);
console.log(others);
console.log(others[1])
console.log(animal);


console.log("__________________________")

const person = {
    firstName : "SYAIFUL",
    lastName: "ABIZAR",
    address : {
        street: "Cilandak",
        city : "DKI Jakarta",
        country: "Indonesia"
    },
    hobby : "Golf",
    channel : "Private",
};
//Mengambil data di object (dengan destructuring)
// const {firstName, lastName, address,...others0 } = person;
// console.log(firstName);

//Mengambil data di object (tanpa destructuring)
const firstName1 = person.firstName;
const lastName2 = person.lastName;

// Destructuring Nested Object
const  {firstName, lastName, address:{street,city,country}, ...others0} = person;
console.log(street, firstName, city, country, lastName, others0);

/*
#Destructuring Function Parameter
● Destructuring tidak hanya bisa dilakukan di variable, tapi juga bisa dilakukan di function parameter
● Hal ini membuat kita mudah ketika ingin mengambil nested data dalam array atau object dalam function
 */

// Destructuring di Function Parameter
function displayPerson({fName, mName, lName}, {street, city, country}){
    console.log(fName, mName, lName);
    console.log(street, city, country);
}
const persons = {
    fName : "ABIZAR",
    mName : "SARFRAZ",
    lName : "FAIZAN ALANSYA",
    address: {
        street: "street",
        city: "city",
        country: "country",
    }
};
displayPerson(persons, persons.address);

function sum([first, second]){
    return first + second;
}

console.log(sum([10,10]));
console.log(sum([20,10]));

/*
#Default Value
● Yang paling menarik di destructuring adalah, kita bisa menambahkan default value
● Jadi misal kita kita melakukan destructuring terhadap array, ternyata tidak ada datanya, maka kita bisa menambahkan default value
● Begitu juga pada object, jika ternyata property nya tidak ada, maka kita bisa menambahkan default value
 */

//Default Value Destructuring Array
const names = ["ABIZAR", "SARFRAZ"];
const [fName,mName, lName = "FAIZAN ALANSYA" ]= names;
console.log(fName);
console.log(mName);
console.log(lName);

//Default Value Destructuring Object

const fruit = {
    name : "Apple",
    family : "Rosaceae",
    genus : "Malus",
};
//const {name, species ="M. domestica", family, genus } = fruit;
//console.log(name, species, family, genus);

/*
# Menggunakan Nama Variable Lain
● Saat melakukan destructuring di Array, kita bisa dengan mudah membuat nama variable sesuka kita
● Namun pada saat melakukan destructuring, kita harus membuat nama variable sama dengan nama property
● Kita juga bisa menggunakan nama variable lain saat melakukan destructuring object jika kita mau
 */

const {name : namaBuah,  family:keluarga} = fruit;
console.log(namaBuah);
