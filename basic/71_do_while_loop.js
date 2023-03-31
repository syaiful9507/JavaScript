
/**
 * Do While Loop
 * - Do While loop adalah perulangan yang mirip dengan while
 * - Perbedaannya hanya pada pengecekan kondisi
 * - Pengecekan kondisi while loop dilakukan di awal sebelum perulangan dilakukan, sedangkan Do While loop dilakukan setelah perulangan dilakukan.
 * - Oleh karena itu dalam Do While loop, minimal pasti sekali perulangan dilakukan walaupun kondisi tidak bernilai true
 */
let counter = 1;
do {
    console.log(counter);
    counter++;
} while ( counter <= 7 );