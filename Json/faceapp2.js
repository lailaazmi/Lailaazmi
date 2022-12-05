var obj = JSON.parse($response.body);

obj =  
{
  "product_ids" : [
    "pro2",
    "pro_month"
  ],
  "receipt_creation_timestamp" : 1658649180
}
$done({body: JSON.stringify(obj)});