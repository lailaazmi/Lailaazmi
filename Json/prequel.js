var obj = JSON.parse($response.body);

obj = {

  "data": {
    "results": {
      "id": "6dc82710-9799-4d7a-86c9-ea336d628b70",
      "user_id": "KCH-A08858F7-B136-4393-8438-DDAD0205CD17",
      "locale": "es_ES",
      "created_at": "2022-11-04T03:30:30.817Z",
      "currency": {
        "id": "d0cb35d7-7fa4-4a69-866a-539ea241718b",
        "code": "EUR",
        "country_code": "ES"
      },
      "subscriptions": [{
        "id": "300bb1f3-31f1-43eb-b947-fe0acd877370",
        "autorenew_enabled": true,
        "in_retry_billing": false,
        "expires_at": "2022-11-14T00:35:03.000Z",
        "cancelled_at": null,
        "retries_count": 0,
        "started_at": "2022-11-04T03:31:38.000Z",
        "unit": "day",
        "units_count": 7,
        "next_check_at": "2022-11-06T00:42:03.000Z",
        "product_id": "com.aiarlabs.prequel.subscription.weekly",
        "introductory_activated": true,
        "kind": "autorenewable",
        "platform": "ios",
        "environment": "production",
        "local": false,
        "status": "trial",
        "group_id": "e9359adb"
      }],
      "devices": [],
      "paywalls": [{
        "id": "b5639f76",
        "json": null,
        "name": "test",
        "identifier": "testsss",
        "default": false,
        "experiment_id": null,
        "experiment_name": null,
        "from_paywall": null,
        "variation_identifier": null,
        "variation_name": null,
        "items": [{
          "id": "3d966428",
          "name": "Product 6",
          "product_id": "com.aiarlabs.prequel.subscription.all_year_29.99_notrial_test06202",
          "store": "app_store"
        }]
      }, {
        "id": "48a82fed",
        "json": null,
        "name": "ewrty",
        "identifier": "23456u7i",
        "default": true,
        "experiment_id": null,
        "experiment_name": null,
        "from_paywall": null,
        "variation_identifier": null,
        "variation_name": null,
        "items": []
      }]
    },
    "meta": null
  },
  "errors": null
}
 
$done({body: JSON.stringify(obj)});