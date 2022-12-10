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

var body = $response.body
    .replace(/\"is_activated\":\d/g, "\"is_activated\":1")
    .replace(/\"remain_days\":\d+/g, "\"remain_days\":666666")
    .replace(/\"will_expire\":\d/g, "\"will_expire\":0")
    .replace(/\"vip_special\":\d/g, "\"vip_special\":1")
    .replace(/\"is_lifetime\":\d/g, "\"is_lifetime\":1")
    .replace(/\"expired_at\":\d+/g, "\"expired_at\":32495475600")
    .replace(/\"expire_time\":\".*?\"/g, "\"expire_time\":\"2999-09-28\"");
$done({
    body
});
