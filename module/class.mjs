class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello(name){
        console.info(`Hello ${name}, my name is ${this.name}`);
    }
}

const company = "SYAIFUL ABIZAR ALANSYA";
function sum(first, second){
    return first + second;
}
class Company{
}

//Export Multiple
export {company,sum,Company,Person}



