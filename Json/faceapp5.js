let headers = $response.headers; 
let obj = JSON.parse($response.body);
 
obj = {"subscription_apple":{"subscription_exp":3042979200,"product_id":"y"}};  

delete headers['X-FaceApp-ErrorCode'];
 
$done({
    body: JSON.stringify(obj),
    headers: headers,
    status: 200,
});