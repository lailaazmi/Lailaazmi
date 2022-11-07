/*
JibJab Premium

***************************
QuantumultX:

[rewrite_local]
https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user url script-response-body https://raw.githubusercontent.com/lailaazmi/Lailaazmi/master/Json/jibjab.js

[mitm]
hostname = origin-prod-phoenix.jibjab.com

***************************
Surge dan Loon:

[Script]
http-response https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/lailaazmi/Lailaazmi/master/Json/jibjab.js

[MITM]
hostname = origin-prod-phoenix.jibjab.com

**************************/

let obj = JSON.parse($response.body);
obj.data.attributes["is-paid"] = true;
obj.data.attributes["email"] = "Lailaazmi@my.com";
$done({body: JSON.stringify(obj)});
