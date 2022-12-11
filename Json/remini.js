var obj = JSON.parse($response.body);

obj={
  "delta" : 0,
  "last_event_timestamp" : 1670760447.9827609,
  "events" : [
    {
      "app" : "com.bigwinepot.nwdn.international",
      "id" : "095F7C13-D5EB-4552-BD1C-41588FFEA96F",
      "data" : {
        "storefront_country_code" : "IDN",
        "subtype" : "session_start",
        "storefront_id" : "143476"
      },
      "request_timestamp" : 1670760495.686991,
      "type" : "Session",
      "timestamp" : 1670760495.4691339,
      "user" : {
        "ids" : {
          "identifier_for_vendor" : "A5905AAB-376E-4293-8E7F-211B3AF01EB6",
          "not_backuppable_keychain_file_id" : "CBEF5B4F-A009-42C6-95C5-46311F1E9951",
          "keychain_userdefaults_id" : "163741F7-863F-4EA7-80C7-F95124EEA791",
          "userdefaults_id" : "05F40191-B0D2-4FEC-B6F9-8F996A132902",
          "keychain_id" : "4B7D8E97-3874-4A1F-AA40-7B044B0DE65E",
          "IDFA" : "00000000-0000-0000-0000-000000000000"
        },
        "info" : {
          "adjustattribution" : {
            "adid" : "d93f6cf91110825fdb35f0a3ccf70a5e",
            "trackertoken" : "c4ji9o5",
            "trackername" : "Organic",
            "network" : "Organic"
          },
          "timezone" : {
            "seconds" : 28800,
            "name" : "Asia/Kuala_Lumpur",
            "daylight_saving" : false
          },
          "enhanced_video_count" : 10,
          "is_baseline" : false,
          "is_frozen_app" : null,
          "app_version" : "2.8.2",
          "is_free" : false,
          "installed_before_pico" : false,
          "experiment" : {
            "multiple_face_lifting_models" : 2,
            "ai_avatars" : 0,
            "ai_avatars_ux_and_ai_pipeline" : 0,
            "no_mention_credits_recharge" : 0
          },
          "locale" : "id_MY",
          "app_language" : "id",
          "enhanced_photo_count" : 1,
          "paywall_hit" : true,
          "pico_lib_version" : "2.8.2",
          "monetization" : {
            "active_subscriptions" : [
              "com.bigwinepot.nwdn.international.1w_t20_1w"
            ],
            "is_subscribed" : true,
            "purchased_lifetimes" : [

            ],
            "active_bundle_subscriptions" : [

            ]
          },
          "saving_credit_count" : 5,
          "country" : "MY",
          "bundle_version" : "202106747",
          "device" : {
            "language" : "id-MY",
            "ios_version" : "14.2.1",
            "all_languages" : [
              "id-MY",
              "co-MY"
            ],
            "type" : "iPhone",
            "platform" : "iPhone13,1"
          }
        }
      }
    }
  ]
}

$done({body:JSON.stringify(obj)});