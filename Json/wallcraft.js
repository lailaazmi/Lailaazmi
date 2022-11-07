/*
 *
 *
Fitur Skrip: WallCraft Pro Seumur Hidup
Versi perangkat lunak: 3.3
Alamat unduhan: http://t.cn/A6iO7Eht
Penulis naskah: Lailaazmi 💞
Waktu pembaruan: 3 Nov 2022
Umpan balik : twitter @nandhaazmi
Grup umpan balik TG: https://t.me/nandhaazmi
Grup TG: https://t.me/IDGratis
Pernyataan penggunaan: ⚠️⚠️ Script ini hanya untuk pembelajaran dan komunikasi, tolong jangan cetak ulang dan jual! ⚠️⚠️

*******************************

[rewrite_local]

# > WallCraft Edisi Pro Permanen
^https?:\/\/billing-ios\.wallpaperscraft\.com\/verify_receipt\/remove_ads$ url script-response-body https://raw.githubusercontent.com/lailaazmi/Lailaazmi/master/Json/wallcraft.js

[mitm] 

hostname = *.wallpaperscraft.com
*
*
*/


var body = $response.body;
var objc = JSON.parse(body);

objc.items["all_time"] = {
    "type" : "nonconsumable",
    "is_active" : true
};

body = JSON.stringify(objc);
$done({ body });
