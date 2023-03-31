/**
 * Break & Continue
 * - Pada Switch Statement, kita sudah mengenal kata kunci break, yaitu untuk mengentikan case dalam dalam switch.
 * - Sama dengan perulangan , break juga digunakan untuk menghentikan seluruh perulangan
 * - Namun berbeda dengan continue, continue digunakan untuk menghentikan perulangan saat ini,
 *   lalu melanjutkan ke perulangan selanjutnya.
 */


//e.g. Break
console.log('');
console.log('e.g Break');
let counter = 1;
while (true) {
    console.log('Loop - ' + counter);
    counter++;
    if (counter == 35) {
        break;
    }
}

//e.g Continue;
console.log('');
console.log('e.g Continue');
for (let index = 0; index < 10; index++) {
    if (index % 2 === 0) {
        continue;
    }
    console.log('loop - ' + index);
    
}

