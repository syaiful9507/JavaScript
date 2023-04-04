/**
 * For Of
 * - Jika For In digunakan untuk melakukan iterasi properti atau index, berbeda dengan For Of, 
 *   ini digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti Array, String , dll
 * - For Of tidak bisa digunakan untuk melakukan iterasi data di object, 
 *   karena object bukanlah iterable.
 */
const topics = ["Js","Tailwind", "Bootstrap","Java", "Python"];

for(const topic of topics){
    console.log(topic);
}

const myName = "Syaiful Wulan Indah Safitri Abizar Sarfraz Faizan Alansya";
for(const name of myName){
    console.log(name);
}