try {
    let result = undefined;
    console.log(result.toUpperCase());
    console.log(result);
} catch (error){
    console.log("Terjasi kesalahan : ", error.message);
} finally {
    console.log("Blok Finally selalu di jalankan");
}