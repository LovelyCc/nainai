const Mock = require('mockjs');

Mock.mock('http://api/getUserInfo',{
  "username": '@last',
  "lv": '1',
  "userNum": /\d{5,10}/,
  "msg": /^\d$/,
  "xinyu|300-600": 600,
  "renzheng1|1": true,
  "renzheng2|1": true,
  "money|1-100000": 100000
});

Mock.mock('http://api/getRecSell',{
  "isHas|1": true,
  "proName|1": ["铝矾土", "耐火球", "氧化铝"],
  "No": /\d{18}/,
  "money|1-100000": 100000,
  "order|1": [1,2]
});
Mock.mock('http://api/getRecBuy',{
  "isHas|1": true,
  "proName|1": ["铝矾土", "耐火球", "氧化铝"],
  "No": /\d{18}/,
  "money|1-100000": 100000,
  "order|1": [1,2]
});

Mock.mock('http://api/getBaseInfo',{
    "username": '@last',
    "telPhone": /^1[3|4|5|7|8]\d{9}$/,
    "email": '@email'
})