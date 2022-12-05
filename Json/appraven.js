/***********************************

Nama aplikasi: Appraven PRO
Tautan unduhan: https://apps.apple.com/id/app/appraven-apps-gone-free/id1490607195?l=id
Penulis naskah: Lailaazmi 💞
Waktu pembaruan: 4 Des 2022
Umpan balik : twitter @nandhaazmi
Grup umpan balik TG: https://t.me/nandhaazmi
Grup TG: https://t.me/IDGratis
Pernyataan penggunaan: ⚠️ Skrip ini hanya untuk pembelajaran dan komunikasi, Tolong jangan cetak ulang dan jual! ⚠️
 
[rewrite_local]

# ～ Appraven @nandhaazmi
^https?:\/\/appraven\.net\/AppRaven\/(app|social|buy) url script-response-body https://raw.githubusercontent.com/lailaazmi/Lailaazmi/master/Json/appraven.js

[mitm] 
hostname = appraven.net

***********************************/

var url = $request.url;
var obj = JSON.parse($response.body);
const tmp1 = '/AppRaven/app';
const tmp2 = '/AppRaven/social';
const tmp3 = '/AppRaven/buy';

if (url.indexOf(tmp1) != -1) {
	var body = $response.body.replace(/premium": false/g, 'premium": true');
}
if (url.indexOf(tmp2) != -1) {
	var body = $response.body.replace(/premium": false/g, 'premium": true');
}
if (url.indexOf(tmp3) != -1) {
	obj={"success":true,"message":"1896165181","isReceiptValid":true,"isSubscriptionActive":true};
	body = JSON.stringify(obj);
}
$done({body});
