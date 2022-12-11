var obj = JSON.parse($response.body);

obj={
  "delta" : 0,
  "last_event_timestamp" : 1670760114.039876,
  "events" : [
    {
      "app" : "com.bigwinepot.nwdn.international",
      "id" : "5557CBF1-04E4-4062-B091-5ECC19165D52",
      "data" : {
        "process_id" : "F6BFBEDC-29E3-4EAF-B003-1134FFD78D50",
        "action_info" : {
          "home_photos_type" : "all",
          "is_processing" : false,
          "suggested_ui_type" : "main_gallery",
          "number_of_photos_with_faces" : 0,
          "number_of_photos_processed" : 1165
        },
        "last_foreground_session_id" : null,
        "is_background_event" : false,
        "session_id" : "51BF6BDB-CAA7-47EB-9B89-8E4929720A0A",
        "seconds_from_session_start" : 16.725051045417786,
        "action_kind" : "home_photos_loaded"
      },
      "request_timestamp" : 1670760123.5322561,
      "type" : "UserAction",
      "timestamp" : 1670760122.245882,
      "user" : {
        "ids" : {
          "identifier_for_vendor" : "A5905AAB-376E-4293-8E7F-211B3AF01EB6",
          "not_backuppable_keychain_file_id" : "CBEF5B4F-A009-42C6-95C5-46311F1E9951",
          "keychain_userdefaults_id" : "163741F7-863F-4EA7-80C7-F95124EEA791",
          "keychain_id" : "4B7D8E97-3874-4A1F-AA40-7B044B0DE65E",
          "userdefaults_id" : "05F40191-B0D2-4FEC-B6F9-8F996A132902",
          "IDFA" : "00000000-0000-0000-0000-000000000000"
        },
        "info" : {
          "country" : "MY",
          "adjustattribution" : {
            "adid" : "d93f6cf91110825fdb35f0a3ccf70a5e",
            "trackername" : "Organic",
            "trackertoken" : "c4ji9o5",
            "network" : "Organic"
          },
          "enhanced_video_count" : 10,
          "is_frozen_app" : null,
          "is_baseline" : false,
          "is_free" : false,
          "installed_before_pico" : false,
          "app_version" : "2.8.2",
          "experiment" : {
            "multiple_face_lifting_models" : 2,
            "ai_avatars" : 0,
            "ai_avatars_ux_and_ai_pipeline" : 0,
            "no_mention_credits_recharge" : 0
          },
          "locale" : "id_MY",
          "app_language" : "id",
          "enhanced_photo_count" : 1,
          "pico_lib_version" : "2.8.2",
          "paywall_hit" : true,
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
          "timezone" : {
            "daylight_saving" : false,
            "name" : "Asia/Kuala_Lumpur",
            "seconds" : 28800
          },
          "saving_credit_count" : 5,
          "bundle_version" : "202106747",
          "device" : {
            "language" : "id-MY",
            "platform" : "iPhone13,1",
            "type" : "iPhone",
            "all_languages" : [
              "id-MY",
              "co-MY"
            ],
            "ios_version" : "14.2.1"
          }
        }
      }
    }
  ]
}

$done({body:JSON.stringify(obj)});