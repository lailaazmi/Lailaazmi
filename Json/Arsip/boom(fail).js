let obj = JSON.parse($response.body);

obj ={
  "status" : "0",
  "receipt-data" : {
    "status" : 0,
    "environment" : "Production",
    "receipt" : {
      "receipt_type" : "Production",
      "app_item_id" : 1065511007,
      "receipt_creation_date" : "2019-10-25 01:51:02 Etc/GMT",
      "bundle_id" : "com.globaldelight.iBoom",
      "original_purchase_date" : "2019-10-25 01:43:54 Etc/GMT",
      "in_app" : {
        "quantity" : "1",
        "purchase_date_ms" : "1571968251000",
        "expires_date" : "2029-11-01 01:50:51 Etc/GMT",
        "expires_date_pst" : "2029-10-31 18:50:51 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "20000617694038",
        "is_trial_period" : "false",
        "original_transaction_id" : "20000617694038",
        "purchase_date" : "2019-10-25 01:50:51 Etc/GMT",
        "product_id" : "com.globaldelight.iBoom.LifetimeDiscountPack",
        "original_purchase_date_pst" : "2019-10-24 18:50:51 America/Los_Angeles",
        "original_purchase_date_ms" : "1571968251000",
        "web_order_line_item_id" : "20000194718574",
        "expires_date_ms" : "1888167051000",
        "purchase_date_pst" : "2019-10-24 18:50:51 America/Los_Angeles",
        "original_purchase_date" : "2019-10-25 01:50:51 Etc/GMT"
      },
      "adam_id" : 1065511007,
      "receipt_creation_date_pst" : "2019-10-24 18:51:02 America/Los_Angeles",
      "request_date" : "2019-10-25 01:53:35 Etc/GMT",
      "request_date_pst" : "2019-10-24 18:53:35 America/Los_Angeles",
      "version_external_identifier" : 832251566,
      "request_date_ms" : "1571968415590",
      "original_purchase_date_pst" : "2019-10-24 18:43:54 America/Los_Angeles",
      "application_version" : "1.4.70002",
      "original_purchase_date_ms" : "1571967834000",
      "receipt_creation_date_ms" : "1571968262000",
      "original_application_version" : "1.4.70002",
      "download_id" : 22057166984396
    },
    "latest_receipt_info" : {
      "quantity" : "1",
      "purchase_date_ms" : "1571968251000",
      "expires_date" : "2029-11-01 01:50:51 Etc/GMT",
      "expires_date_pst" : "2029-10-31 18:50:51 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "20000617694038",
      "is_trial_period" : "false",
      "original_transaction_id" : "20000617694038",
      "purchase_date" : "2019-10-25 01:50:51 Etc/GMT",
      "product_id" : "com.globaldelight.iBoom.LifetimeDiscountPack",
      "original_purchase_date_pst" : "2019-10-24 18:50:51 America/Los_Angeles",
      "subscription_group_identifier" : "20461753",
      "original_purchase_date_ms" : "1571968251000",
      "web_order_line_item_id" : "20000194718574",
      "expires_date_ms" : "1888167051000",
      "purchase_date_pst" : "2019-10-24 18:50:51 America/Los_Angeles",
      "original_purchase_date" : "2019-10-25 01:50:51 Etc/GMT"
    },
    "pending_renewal_info" : {
      "product_id" : "com.globaldelight.iBoom.LifetimeDiscountPack",
      "original_transaction_id" : "20000617694038",
      "auto_renew_product_id" : "com.globaldelight.iBoom.LifetimeDiscountPack",
      "auto_renew_status" : "0"
    }
  }
}

$done({body: JSON.stringify(obj)})