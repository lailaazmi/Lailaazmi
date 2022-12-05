var obj = JSON.parse($response.body);

obj = 

{
  "product_ids" : [
    "pro"
  ],
  "receipt_creation_timestamp" : 1667106646
}
$done({body: JSON.stringify(obj)});