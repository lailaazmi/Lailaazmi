var obj = JSON.parse($response.body);

obj={
  
  "is_grace_period" : false,
  "is_valid" : true,
  "promotional_offer_id" : "",
  "is_in_billing_retry_period" : false,
  "is_introductory_used" : true,
  "device_user_info" : {
    "subscription_valid" : true,
    "auth_type" : "apple",
  },
  "subscription_type" : "annual",
  "platform" : "ios",
  "product_id" : "premium.discount.annual",
  "auto_renew_enabled" : true,
  "expiration_date_unix" : 32356792106,
  "expiration_date" : "2995-05-7T04:31:45Z",
  "is_trial" : false,
  "status" : "ok",
  "processing_count" : 0
}


$done({body: JSON.stringify(obj)});
