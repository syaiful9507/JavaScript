/**
 * TERNARY OPERATOR
 * Ternary operator is simple operator from if statement
 * Ternary operator have valuate condition , if result true get the first value , if false get the second value.
 */

/**
 * Code without ternary operator
 */
const nilai = 75;
let ucapan;
if (nilai >= 75) {
    ucapan = "selamat anda lulus";
} else {
    ucapan = "Silahkan coba lagi";
}
console.log(ucapan);

/**
 * With Ternary Operator
 */

ucapan = nilai >= 75 ? "Selamat anda lulus" : "Silahkan coba lagi";
console.log(ucapan);