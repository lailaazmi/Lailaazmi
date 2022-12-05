/*

*******************************
 
Fitur Skrip: FaceApp Pro Seumur Hidup
Versi perangkat lunak: Terbaru
Penulis naskah: Lailaazmi 💞
Waktu pembaruan: 7 Des 2022
Umpan balik : twitter @nandhaazmi
Umpan balik TG: https://t.me/nandhaazmi
Grup TG: https://t.me/IDGratis
Pernyataan penggunaan: ⚠️⚠️ Script ini hanya untuk pembelajaran dan komunikasi, tolong jangan cetak ulang dan jual! ⚠️⚠️

*******************************

*/

let headers = $response.headers; 
let obj = JSON.parse($response.body);
 
obj = {"subscription_apple":{"subscription_exp":32356792106,"product_id":"y"}};  

delete headers['X-FaceApp-ErrorCode'];
 
$done({
    body: JSON.stringify(obj),
    headers: headers,
    status: 200,
});