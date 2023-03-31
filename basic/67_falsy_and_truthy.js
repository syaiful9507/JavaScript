/**
 * ######## Falsy ###########
 * - Falsy atau kadang ditulis falsey, adalah value yang ketika dalam konteks boolean, dia dianggap false
 * - Ini adalah salah satu fitur unik dari javaScript, yang berguna, namun kadang juga sering membingungkan
 * - Jadi di javaScript, kondisi itu tidak hanya bisa boolean, tapi diluar boolean pun bisa, 
 *   namun kita harus tahu berapa data falsy, atau di anggap false
 * 
 * ---- DATA FALSY --------
 * ________________________________________________________________
 * | Data dianggap Falsy  | Keterangan                             |
 * ----------------------------------------------------------------
 * | false                | Boolean false                          |
 * | 0, -0                | Number 0 dan -0 dianggap false         |
 * | "", '', ``           | Semua string kosong dianggap false     |
 * | null                 | null dianggap false                    |
 * | undefined            | undefined dianggap false               |
 * | NaN                  | Not a Number dianggap false            |
 * -----------------------------------------------------------------
 * 
 * ########Truthy
 * - Truthy adalah kebalikan dari falsy, dimana datanya dianggap bernilai true
 * - Sederhana sekali sebenarnya untuk mengetahui sebuah data itu adalah truthy, 
 *   yaitu data yang bukan bernilai falsy
 */
let data = "";
if (data) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}