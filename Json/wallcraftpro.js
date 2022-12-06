var obj = JSON.parse($response.body);

obj =  

{
  "items": {
    "all_time": {
      "is_active": true,
      "type": "nonconsumable"
    },
    "all_time.19.5baks": {
      "is_active": false,
      "type": "nonconsumable"
    },
    "all_time.26baks": {
      "is_active": false,
      "type": "nonconsumable"
    },
    "com.wallpaperscraft.wallpapers.6months.1": {
      "already_used_introductory_price": false,
      "is_active": false,
      "type": "subscription"
    },
    "com.wallpaperscraft.wallpapers.6months.1.10baks": {
      "already_used_introductory_price": false,
      "is_active": false,
      "type": "subscription"
    },
    "com.wallpaperscraft.wallpapers.6months.1.7.5baks": {
      "already_used_introductory_price": false,
      "is_active": false,
      "type": "subscription"
    },
    "com.wallpaperscraft.wallpapers.month.1": {
      "already_used_introductory_price": false,
      "is_active": false,
      "type": "subscription"
    },
    "com.wallpaperscraft.wallpapers.month.1.1.5baks": {
      "already_used_introductory_price": false,
      "is_active": false,
      "type": "subscription"
    },
    "com.wallpaperscraft.wallpapers.month.1.2baks": {
      "already_used_introductory_price": false,
      "is_active": false,
      "type": "subscription"
    },
    "com.wallpaperscraft.wallpapers.month.1.3baks": {
      "already_used_introductory_price": false,
      "is_active": false,
      "type": "subscription"
    },
    "com.wallpaperscraft.wallpapers.year.1": {
      "already_used_introductory_price": false,
      "is_active": false,
      "type": "subscription"
    },
    "com.wallpaperscraft.wallpapers.year.1.13.5baks": {
      "already_used_introductory_price": false,
      "is_active": false,
      "type": "subscription"
    },
    "com.wallpaperscraft.wallpapers.year.1.18baks": {
      "already_used_introductory_price": false,
      "is_active": false,
      "type": "subscription"
    },
    "com.wallpaperscraft.wallpapers.year.1.1baks": {
      "already_used_introductory_price": false,
      "is_active": false,
      "type": "subscription"
    },
    "com.wallpaperscraft.wallpapers.year.1.5baks": {
      "already_used_introductory_price": false,
      "is_active": false,
      "type": "subscription"
    }
  }
}
$done({body: JSON.stringify(obj)});