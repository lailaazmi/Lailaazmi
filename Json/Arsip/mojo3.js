var obj = JSON.parse($response.body);

obj = 

{
  "request_date": "2022-10-01T01:11:33Z",
  "request_date_ms": 1664586693051,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": "2099-05-20T14:24:42Z",
        "grace_period_expires_date": null,
        "product_identifier": "video.mojo.pro.yearly",
        "purchase_date": "2022-05-17T14:24:42Z"
      }
    },
    "first_seen": "2022-05-17T08:03:17Z",
    "last_seen": "2022-10-01T01:11:27Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "cOZgWrllJIgop5W8vZsKbhzMLM22",
    "original_application_version": "578",
    "original_purchase_date": "2022-04-05T08:46:54Z",
    "other_purchases": {},
    "subscriptions": {
      "video.mojo.pro.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-05-20T14:24:42Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-05-17T14:24:43Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-05-17T14:24:42Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}
$done({body: JSON.stringify(obj)});