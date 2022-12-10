/******************************

Fungsi Skrip: TOKCAM Pro
Versi perangkat lunak: 1.8.43 atau baru
Alamat unduhan: http://t.cn/A6iHacBq
Penulis naskah: Lailaazmi 💞
Waktu pembaruan: 7 Des 2022
Umpan balik : twitter @nandhaazmi
Umpan balik TG: https://t.me/nandhaazmi
Grup TG: https://t.me/IDGratis
Pernyataan penggunaan: ⚠️⚠️ Script ini hanya untuk pembelajaran dan komunikasi, tolong jangan cetak ulang dan jual! ⚠️⚠️

********************************

[rewrite_local]
# TOKCAM Pro
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/lailaazmi/Lailaazmi/master/Json/tokcam.js

[mitm] 
hostname = buy.itunes.apple.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1522192046,
    "receipt_creation_date" : "2022-02-11 02:26:22 Etc/GMT",
    "bundle_id" : "com.muyin.camera",
    "original_purchase_date" : "2020-09-09 01:01:59 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1642850859000",
        "transaction_id" : "350001102215973",
        "is_trial_period" : "false",
        "original_transaction_id" : "350001102215973",
        "purchase_date" : "2022-01-22 11:27:39 Etc/GMT",
        "product_id" : "incentive01",
        "original_purchase_date_pst" : "2022-01-22 03:27:39 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1642850859000",
        "purchase_date_pst" : "2022-01-22 03:27:39 America/Los_Angeles",
        "original_purchase_date" : "2022-01-22 11:27:39 Etc/GMT"
      }
    ],
    "adam_id" : 1522192046,
    "receipt_creation_date_pst" : "2022-02-10 18:26:22 America/Los_Angeles",
    "request_date" : "2022-02-11 02:28:49 Etc/GMT",
    "request_date_pst" : "2022-02-10 18:28:49 America/Los_Angeles",
    "version_external_identifier" : 846803077,
    "request_date_ms" : "1644546529150",
    "original_purchase_date_pst" : "2020-09-08 18:01:59 America/Los_Angeles",
    "application_version" : "202201230001",
    "original_purchase_date_ms" : "1599613319000",
    "receipt_creation_date_ms" : "1644546382000",
    "original_application_version" : "2020090601",
    "download_id" : 75077048258874
  },
  "status" : 0,
  "environment" : "Production"
};

$done({ body : JSON.stringify(objc) });
