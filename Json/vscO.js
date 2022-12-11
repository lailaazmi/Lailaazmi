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
}
$done({body:JSON.stringify(obj)});