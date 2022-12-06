/*
 FaceApp Buka Kunci Vip
 
^https:\/\/api\.faceapp\.io(.*)\/api\/v.*\/auth\/user\/credentials url script-response-body https://raw.githubusercontent.com/lailaazmi/Lailaazmi/master/Json/faceapp2.js

[MITM]
hostname = api.faceapp.io
*/

var obj = JSON.parse($response.body);

obj={
  "subscription_apple" : {
    "subscription_exp" : 32356792106,
    "product_id" : "y"
  },
  "subscription_google" : null,
  "user_token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkZXZpY2VfaWQiOiIzMzhCMDA1Ny1BQUIzLTQ4OTYtODgxNS1GQTM2ODJBRTE3MTQiLCJleHAiOjE2MjI2MTA1MDUsInN1YnNjcmlwdGlvbiI6eyJzdWJzY3JpcHRpb25fZXhwIjoxNjIyNjEwNTA1LCJjdXN0b21lcl9pZCI6ImlzMTc0NjAiLCJwcm9kdWN0X2lkIjoiMSJ9fQ.NJ0yCml8QKdp1QqsVtH0jZFthw2KRADxfBfB2KYTInmgkZ3Q0EnGgykHZyUXgxfLsJMN7k7DhvDriUymFRcwdQ",
  "user_token_lifetime" : 86400,
  "user" : null
}

$done({body: JSON.stringify(obj)});
