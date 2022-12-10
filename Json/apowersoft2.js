/******************************

Fungsi skrip: BG Eraser Pro
Versi perangkat lunak: 1.5.1 atau baru
Alamat unduhan: http://t.cn/A6xBOE5d
Penulis naskah: Lailaazmi 💞
Waktu pembaruan: 7 Des 2022
Umpan balik : twitter @nandhaazmi
Umpan balik TG: https://t.me/nandhaazmi
Grup TG: https://t.me/IDGratis
Pernyataan penggunaan: ⚠️⚠️ Script ini hanya untuk pembelajaran dan komunikasi, tolong jangan cetak ulang dan jual! ⚠️⚠️

*******************************

[rewrite_local]
# BG Eraser Pro
^https?:\/\/gw\.aoscdn\.com\/base\/vip\/client\/authorizations$ url script-response-body https://raw.githubusercontent.com/lailaazmi/Lailaazmi/master/Json/apowersoft.js

[mitm] 
hostname = gw.aoscdn.com

*******************************/

var obj = JSON.parse($response.body); 
 obj['is_activated'] = true;
 obj['remain_days'] = '666666';
 obj['will_expire'] = '0';
 obj['vip_special'] = true;
 obj['is_lifetime'] = true;
 obj['expired_at'] = '32356792106';
 obj['expire_time'] = '2995-05-07T04:31:45Z';
$done({body: JSON.stringify(obj)});
