const firstName = Symbol();
const lastName = Symbol();

const person = {}
person[firstName] = "SYAIFUL";
person[lastName] = "ABIZAR";
console.log(person);
console.log(person[firstName]);
console.log(person[lastName]);