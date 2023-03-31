
/**
 * INTRODUCTION
 * In operator untuk mengecek apakah sebuah properti atau index ada atau tidak
 * Jika properti atau index ada di object maka hasilnya TRUE
 * 
 * PERINGATAN
 * In operator hanya akan mengecek apakah properti / index ada atau tidak
 * In operator tidak melihat value dari properti atau index apakah undefined atau null, maka tetap akan dianggap ada
 */
const myFamily = {
    father : "SYAIFUL",
    mother : "WULAN",
    boy    : "ABIZAR"
}

if ("father" in myFamily) {
    console.log('hello : ' , myFamily.father);
} else {
    console.log("Family does not exist");
}

/**
 * Mengecek apakah undefined dan null tetap diaggap ada
 */

const person = {
    firstName : undefined
};
const result = "firstName" in person; //true
console.log("Result is ",result);

const names = [null, "SYAIFUL", null];
const namesResult = 0 in names; //true , selama indexnya ada tidak peduli valuenya.
console.log("Name Result is " , namesResult);