let headers = $response.headers; 
let obj = JSON.parse($response.body);
 
obj = {"subscription_apple":{"subscription_exp":2995-05-07T05:05:04Z,"product_id":"y"}};  

delete headers['X-FaceApp-ErrorCode'];
 
$done({
    body: JSON.stringify(obj),
    headers: headers,
    status: 200,
});