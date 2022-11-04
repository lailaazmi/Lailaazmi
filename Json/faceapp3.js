/*
 FaceApp Buka Kunci Vip
 
^https:\/\/api\.faceapp\.io(.*)\/api\/v.*\/auth\/user\/credentials url script-response-body https://raw.githubusercontent.com/lailaazmi/Lailaazmi/master/Json/faceapp2.js

[MITM]
hostname = api.faceapp.io
*/

let headers = $response.headers;
    let status = $response.status;
    let obj = JSON.parse($response.body);

    {
    obj = {"subscription_apple":{"subscription_exp":99999999999,"product_id":"y"},"subscription_google":null};
    $done({body: JSON.stringify(obj)});
}
    {
    status = 200;
    $done({status});
}
    {
    delete headers['X-FaceApp-ErrorCode'];
    $done({headers});
}
