 /**Error Code */
 let person = {
    address : {
        country : "Indonesia"
    }
 };
 //const country = person.address.country;
 //console.log(country);

 /**Using if statement */
 let say;
 if (person.address !== undefined && person.address !== null) {
    say = person.address.country;
 }
 console.log(say);

 /**
  * Using Optional Chaining
  */
 let country = person?.address?.country;

 console.log(country);