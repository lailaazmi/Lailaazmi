var obj = JSON.parse($response.body);

obj = {
  "data" : {
    "getProfile" : {
      "uid" : "sqQRzaLlhRQc6Z1GzKSgT6prXTB3",
      "profilePicture" : null,
      "teams" : [

      ],
      "isPro" : true,
      "email" : null,
      "__typename" : "User",
      "name" : null
    }
  }
}

$done({body: JSON.stringify(obj)});