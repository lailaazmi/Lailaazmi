let obj = JSON.parse($response.body);
obj =

{
  "request_date": "2022-10-16T01:39:23Z",
  "request_date_ms": 1665884363350,
  "subscriber": {
    "entitlements": {
      "business": {
        "expires_date": "2022-07-14T03:31:23Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.background.business.monthly",
        "purchase_date": "2022-07-14T03:26:23Z"
      },
      "pro": {
        "expires_date": "2995-05-07T02:36:10Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.background.pro.yearly",
        "purchase_date": "2022-10-16T01:36:10Z"
      }
    },
    "first_seen": "2022-06-30T03:17:49Z",
    "last_seen": "2022-10-16T01:04:48Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "Jx2s15BPbPXTVqeK6G5X8KbO80v2",
    "original_application_version": "1.0",
    "original_purchase_date": "2013-08-01T07:00:00Z",
    "other_purchases": {},
    "subscriptions": {
      "com.background.business.monthly": {
        "billing_issues_detected_at": null,
        "expires_date": "2022-07-14T03:31:23Z",
        "grace_period_expires_date": null,
        "is_sandbox": true,
        "original_purchase_date": "2022-05-21T23:58:50Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-07-14T03:26:23Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      },
      "com.background.pro.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2995-05-07T02:36:10Z",
        "grace_period_expires_date": null,
        "is_sandbox": true,
        "original_purchase_date": "2022-05-21T23:58:50Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-10-16T01:36:10Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}


$done({body: JSON.stringify(obj)});