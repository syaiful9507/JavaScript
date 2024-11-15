/**
 * Encode
 * ● Saat kita menulis URL, kadang kita ingin menambahkan informasi tambahan seperti query parameter misalnya
 * ● URL sendiri sudah memiliki standard encoding penulisan URL
 * ● Standard encoding ini dilakukan agar penulisan URL aman ketika diterima oleh server
 * ● Aman disini dalam artian informasi URL tidak berubah
 * ● Contoh paling sederhana, misal, walaupun kita bisa mengirim spasi dalam url, tapi disarankan
 * untuk di encode agar nilai spasi tidak benar-benar terlihat seperti spasi pada URL nya
 *
 * Contoh Masalah Jika Tidak Menggunakan Encode
 * ● Misal ada query parameter dengan nama data, lalu kita ingin mengirimkan nilai kesana
 * ● Misal nilainya adalah &eko=eko&, alhasil URL nya akan seperti berikut
 * ● http://contoh.com?data=&eko=eko&
 * ● URL diatas terlihat tidak ada masalah, tapi sebenarnya ketika diterima oleh server, parameter data
 * bernilai kosong, kenapa? karena & dianggap sebagai pemisah antar parameter
 * ● Artinya tanda seperti & dan lain-lain perlu di encode, agar tidak terjadi kesalahan data yang kita
 * kirim
 */
const url = 'http://syaiful.com/?name=Syaiful Abizar';
console.log(url);

const  encode = encodeURI(url);
console.log(encode);
const decode = decodeURI(url);
console.log(decode);

//encodeURIComponent dan decodeURICompoentn
const value = "Syaiful&Abizar=Sarfraz;";
const url2 = 'http://syaiful.com/?name=';
const encoded = encodeURIComponent(value);
console.log(url2 + encoded)
const decoded = decodeURIComponent(encoded);
console.log(url2 + decoded);
