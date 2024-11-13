/*
→ Closure
🥝Closure adalah kombinasi function dan bundel referensi ke data disekitarnya.
🥝Kita sudah tahu bahwa local scope tidak bisa diakses diluar scope-nya
🥝Dengan kemampuan closure, kita bisa membuat sebuah function di local scope dan referensi ke data di sekitar local scope tersebut, keluar scope-nya
 */
function createAdder(value){
    const owner = "SYAIFUL";
    function add(param){
        console.log(owner);
        return value + param;
    }
    return add;
}
const addTwo = createAdder(2);
console.log(addTwo(10));
console.log(addTwo(20));