let obj = JSON.parse($response.body);

obj =

{
  "request_date": "2022-11-29T23:28:37Z",
  "request_date_ms": 1669764517599,
  "subscriber": {
    "entitlements": {
      "premium": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "blocker.ios.iap.lifetime.x",
        "purchase_date": "2022-11-29T23:27:56Z"
      }
    },
    "first_seen": "2022-11-29T23:25:51Z",
    "last_seen": "2022-11-29T23:25:51Z",
    "management_url": null,
    "non_subscriptions": {
      "blocker.ios.iap.lifetime.x": [{
        "id": "f5cb49282e",
        "is_sandbox": false,
        "original_purchase_date": "2022-11-29T23:27:56Z",
        "purchase_date": "2022-11-29T23:27:56Z",
        "store": "app_store"
      }]
    },
    "original_app_user_id": "C5FF7E7C-3BD1-43AA-AFC8-D4FDC4BFF549",
    "original_application_version": "1.0",
    "original_purchase_date": "2013-08-01T07:00:00Z",
    "other_purchases": {
      "blocker.ios.iap.lifetime.x": {
        "purchase_date": "2022-11-29T23:27:56Z"
      }
    },
    "subscriptions": {}
  }
}
$done({body: JSON.stringify(obj)});