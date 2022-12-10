/******************************

Fungsi Skrip: Polaris Office Pro
Versi perangkat lunak: 9.6.1 atau baru
Tautan unduhan: http://t.cn/A67a1dbB
Penulis naskah: Lailaazmi 💞
Waktu pembaruan: 7 Des 2022
Umpan balik : twitter @nandhaazmi
Umpan balik TG: https://t.me/nandhaazmi
Grup TG: https://t.me/IDGratis
Pernyataan penggunaan: ⚠️⚠️ Script ini hanya untuk pembelajaran dan komunikasi, tolong jangan cetak ulang dan jual! ⚠️⚠️

*******************************

[rewrite_local]
# Polaris Office Pro
^https?:\/\/api\.polarisoffice\.com\/api\/1\/account\/userinfo$ url script-response-body https://https://raw.githubusercontent.com/lailaazmi/Lailaazmi/master/Json/polarisoffice.js

[mitm] 
hostname = api.polarisoffice.com

*******************************/

var body = $response.body;
var objc = JSON.parse(body);
objc.level = 2;
body = JSON.stringify(objc);
$done(body);
