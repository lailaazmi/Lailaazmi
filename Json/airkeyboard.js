/******************************

Fungsi Skrip: Translate Keyboard Pro
Versi perangkat lunak: 1.24.0 atau baru
Alamat unduhan: https://snip.ly/t1pr00
Penulis naskah: Lailaazmi 💞
Waktu pembaruan: 11 Des 2022
Umpan balik : twitter @nandhaazmi
Umpan balik TG: https://t.me/nandhaazmi
Grup TG: https://t.me/IDGratis
Pernyataan penggunaan: ⚠️⚠️ Script ini hanya untuk pembelajaran dan komunikasi, tolong jangan cetak ulang dan jual! ⚠️⚠️

********************************

[rewrite_local]
# Translate Keyboard Pro
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://https://raw.githubusercontent.com/lailaazmi/Lailaazmi/master/Json/airkeyboard.js

[mitm] 
hostname = buy.itunes.apple.com

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1502909594,
    "receipt_creation_date" : "2022-12-11 00:36:56 Etc/GMT",
    "bundle_id" : "co.airapps.translatorkeyboard",
    "original_purchase_date" : "2020-04-23 22:39:24 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1643256036000",
        "expires_date" : "2995-05-07 09:09:09 Etc/GMT",
        "expires_date_pst" : "2995-05-07 09:09:09 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "350001106280498",
        "is_trial_period" : "true",
        "original_transaction_id" : "350001106280498",
        "purchase_date" : "2022-01-27 04:00:36 Etc/GMT",
 "product_id" : "co.airapps.translatorkeyboard.yearly",
        "original_purchase_date_pst" : "2022-01-26 20:00:37 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1643256037000",
        "web_order_line_item_id" : "350000493595908",
        "expires_date_ms" : "32356801608000",
        "purchase_date_pst" : "2022-01-26 20:00:36 America/Los_Angeles",
        "original_purchase_date" : "2022-01-27 04:00:37 Etc/GMT"
      }
    ],
    "adam_id" : 1502909594,
    "receipt_creation_date_pst" : "2022-12-10 16:36:56 America/Los_Angeles",
    "request_date" : "2022-12-11 00:36:58 Etc/GMT",
    "request_date_pst" : "2022-12-10 16:36:58 America/Los_Angeles",
    "version_external_identifier" : 852909350,
    "request_date_ms" : "1670719018391",
    "original_purchase_date_pst" : "2020-04-23 15:39:24 America/Los_Angeles",
    "application_version" : "1.24.0.1001",
    "original_purchase_date_ms" : "1587681564000",
    "receipt_creation_date_ms" : "1670719016000",
    "original_application_version" : "1.0.1.2",
    "download_id" : 74046545360586
  },
  "status" : 0,
  "environment" : "Production"
}

$done({ body : JSON.stringify(objc) });