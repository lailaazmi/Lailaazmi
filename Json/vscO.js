var obj = JSON.parse($response.body);
"undefined" : null,
'user-agent' :{
"VSCO": "membership",
"id": "com.circles.fin.premium.yearly'",
"1Blocker": "premium"
"id" : "blocker.ios.subscription.yearly"},
"data" : {
"expires_date": "2030-02-18T07:52:54Z",
"original_purchase_date": "2020-02-11T07:52:55Z",
"purchase_date": "2020-02-11T07:52:54Z"
},
"user_subscription" :{
"expires_on_sec":1655536094,
"is_intro_period":false,
"expired":false,
"payment_type":2,
"user_id":54624336,
"source":1,
"is_trial_period":true,
"starts_on_sec":1560831070,
"intro_offer_consumed":true,
"is_active":true,
"canceled_at_sec":null,
"auto_renew":true,
"is_in_grace_period":false,
"last_verified_sec":1560831070,
"invalid_reason":null,
"subscription_code":"VSCOANNUAL"}
$done({body:JSON.stringify(obj)});