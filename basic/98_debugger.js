/*
# Debugger
● Debugger digunakan untuk melakukan proses debugging
● Debugging adalah proses mencari bug (masalah) yang biasa terjadi di kode program kita
● Dengan debugger kita bisa menghentikan kode program di posisi yang kita inginkan (breakpoint),
lalu melihat semua isi variable yang ada pada saat kode program sedang berhenti
 */

function createFullName(firstName, middleName, lastName){
    debugger;
    const fullName = `${firstName} ${lastName} ${lastName}`;
    return fullName;
}
const name = createFullName("ABIZAR", "SARFRAZ","FAIZAN ALANSYA");
console.log(name);