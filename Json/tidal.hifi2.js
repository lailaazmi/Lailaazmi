/******************************

Fungsi skrip: Tidal HiFi Plus
Versi perangkat lunak: 3.5 [unduh di AS]
Penulis naskah: Lailaazmi 💞
Waktu pembaruan: 3 Nov 2022
Umpan balik : twitter @nandhaazmi
Grup umpan balik TG: https://t.me/nandhaazmi
Grup TG: https://t.me/IDGratis
Pernyataan penggunaan: ⚠️⚠️ Script ini hanya untuk pembelajaran dan komunikasi, tolong jangan cetak ulang dan jual! ⚠️⚠️

*******************************
[rewrite_local]
# > Tidal HiFi Plus
^https?:\/\/api\.tidal\.com\/v1\/users\/\d+\/subscription.+ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/TIDALHiFiPlusCrack.js
^https?:\/\/api\.tidal\.com\/v1\/tracks/\d+\/playbackinfopostpaywall.+ url script-analyze-echo-response https://raw.githubusercontent.com/lailaazmi/Lailaazmi/master/Json/tidal.hifi2.js

[mitm] 
hostname = api.tidal.com

*******************************/

$done({
    body: JSON.stringify({
        "status": "ACTIVE",
        "canGetTrial": false,
        "startDate": "2019-09-28T09:09:09.000+0000",
        "subscription": {
            "type": "PREMIUM_PLUS",
            "offlineGracePeriod": 999999
        },
        "premiumAccess": true,
        "paymentType": "ADYEN_CREDIT_CARD",
        "paymentOverdue": false,
        "highestSoundQuality": "HI_RES",
        "validUntil": "2999-09-28T09:09:09.000+0000"
    })
});
