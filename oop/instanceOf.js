class Animal {}
class Cat extends Animal{}
const myCat = new Cat();
console.log(myCat instanceof Cat); // true = myCat dibuah dari class Cat
console.log(myCat instanceof Animal); // true = myCat diturunkan dari class Animal
console.log(myCat instanceof Object); // true = semua objek adalah turunan dari Object
