
var obj = JSON.parse($response.body);
obj = {

  "status" : "ok",
  "device" : {
    "has_authenticated_user" : true
  },
  "is_valid" : true,
  "user" : {
    "email" : "fedemf38@icloud.com",
    "prisma_allow_send_email" : true,
    "auth_type" : "apple",
    "lensa_allow_send_email" : true
  }
}
$done({body: JSON.stringify(obj)})