const person = {
    name: "SYAIFUL",
    address: "DK Jakarta",
    sayHello : (name) => {

        console.log(this)
        console.log(`Hello ${name} My name is ${this.address}`);
    }
};
person.sayHello("ABIZAR"); //Hello ABIZAR My name is undefined