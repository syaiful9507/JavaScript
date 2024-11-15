/**
 * Proxy
 * ● Proxy merupakan fitur yang bisa digunakan sebagai wakil sebuah data
 * ● Dengan menggunakan proxy, semua interaksi ke data akan selalu melalui Proxy terlebih dahulu
 * ● Dengan ini, kita bisa melakukan apapun sebelum interaksi dilakukan ke data yang dituju
 * ● https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */
const target = {}
const handler = {
    get:function (target, property){
        console.log(`Access property ${property}, target ${target}`);
        return target[property];
    },
    set:function (target, property, value){
        console.log(`Change property ${property} : value ${value}`);
      target[property] = value;
    }
}
const proxy = new Proxy(target, handler);
console.log(proxy);
proxy.firstName = "Syaiful";
proxy.lastName = "Abizar";
console.log(proxy);

console.log(proxy.firstName);
console.log(proxy.lastName);