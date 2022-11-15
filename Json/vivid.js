var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "purchasedProductId": "subscriptiont_year",
    "purchaseTime": "1664202091000",
    "isYearlySubscriptionThirty": false,
    "purchaseToken": "",
    "plan_meta": {
      "id": "com.wagndao.proapp.subscriptiont_year",
      "frequency": "yearly",
      "type": "renewable",
      "product_id": "subscriptiont_year",
      "description": "pro"
    },
    "expire_date": 1664202091000,
    "subscription_id": "com.wagndao.proapp.subscriptiont_year",
    "original_order_id": "",
    "purchase": true,
    "purchased": true,
    "momentsFinish": true,
    "showTabbarTextIntor": false,
    "reason": "ok"
}

body = JSON.stringify(obj);
$done({body});
