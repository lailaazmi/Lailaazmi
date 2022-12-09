var obj = JSON.parse($response.body);

obj={
  
  "is_in_intro_offer_period" : false,
  "is_grace_period" : false,
  "is_valid" : true,
  "promotional_offer_id" : "",
  "is_in_billing_retry_period" : false,
  "is_introductory_used" : true,
  "device_user_info" : {
    "subscription_valid" : true,
    "auth_type" : "apple",
  },
  "subscription_type" : "Lifetime",
  "platform" : "ios",
  "product_id" : "com.globaldelight.iBoom.LifetimeDiscountPackl",
  "auto_renew_enabled" : false,
  "expiration_date_unix" : 32356792106,
  "expiration_date" : "2995-05-7T04:31:45Z",
  "is_trial_period" : false,
  "status" : "ok",
  "processing_count" : 0
}

$done({body: JSON.stringify(obj)});
