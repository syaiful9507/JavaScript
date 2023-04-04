 /**
  * For In
  * - For In merupakan perulangan for yang digunakan untuk mengiterasi 
  *   seluruh data property di object atau index di array.
  * - Walaupun for in digunakan untuk array, namun tidak direkomendasikan untuk array,
  *   karena biasanya kita jarang sekali butuh index untuk array, kita bisa menggunakan For Of
  */
 
 const alamat = {
    provinsi: "DKI Jakarta",
    wilayah: "Jakarta Selatan",
    kecamatan: "Jagakarsa",
    kelurahan: "ciganjur",
 };

 for (const properti in alamat){
    console.log(properti + " = " +  alamat[properti]);
 }

 const topic = ["Js","Tailwind", "Bootstrap","Java", "Python"];
 for( const index in topic){
    console.log("index ke - " + index + " value = " + topic[index]);
 }