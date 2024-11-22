const janjiMakan = new Promise((resolve, reject) => {
   const bahanAda = true;
   if (bahanAda){
       resolve("Makanan sudah siap!");
   } else {
       reject("Maaf, Bahan Habis ");
   }
});

janjiMakan.then((pesan)=> {
    console.log(pesan)
}).catch((error) => {
    console.log(error);
});