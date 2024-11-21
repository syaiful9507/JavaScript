const abizar = {
    firstName: "abizar",
    lastName:"sarfraz",
};
const syaiful ={
    firstName: "syaiful",
    lastName: "abizar",
}

class Person{
    constructor(fN,lN){
        this.fN = fN;
        this.lN = lN;
    }
}

const orang = new Person("SYAIFUL", "ABIZAR");
//console.log(orang);

function Employee(firstName){
    this.firstName = firstName;
    this.sayHello = function (name){
        console.log(`Hi ${name}, my name is ${this.firstName}`);
    }
}

function Manager(firstName, lastName){
    Employee.call(this, firstName)
    this.lastName = lastName;
}

// const manager = new Manager("SYAIFUL");
// const employee = new Employee("ABIZAR");
// console.log(employee);

class Company {
    sayHello(name){
        console.info(`Hi ${name}, this headquarter company`);
    }
}

class Branch extends Company {
    sayHello(name) {
        super.sayHello(name);
        console.info(`Hi ${name}, this is branch company`);
    }
}


const branch = new Branch();
const company = new Company();
// console.log(company.sayHello("ABIZAR"));
// console.log(branch.sayHello("SYA"));

class Customer {
    firstName;
    lastName;
    balance = 0;
    #counter = 0;
    increment(){
        this.#counter++;
    }
    decrement(){
        this.#counter--;
    }
    get(){
        return this.#counter;
    }
}