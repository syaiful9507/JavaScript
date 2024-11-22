function ambilDataDariServer(callback){
    setTimeout(function (){
        let data = "Data yang diambil dari server";
        callback(data);
    }, 2000);
}
function tampilkanData(data){
    console.log(data);
}

ambilDataDariServer(tampilkanData);
