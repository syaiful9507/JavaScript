//Kode : Function di Variable
function sayHello(name) {
    console.log('hello ' + name);
}
let say = sayHello;
sayHello("SYAIFUL"); // hello SYAIFUL
say("Budi"); //hello Budi

//Kode : Function di Parameter

function giveMeName(callback) {
    callback("SYAIFUL") //sayHello("SYAIFUL")
}

giveMeName(sayHello); //sayHello(params)
giveMeName(say); //sayHello(params)