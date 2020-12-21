var express = require("express");
var router = express.Router();
var config = require("./config.js");
var url = require("url");
var homehot = require("./data/home/hotdata");
var searchData = require("./data/search")


router.get(config.homehot1,function(req,res){
    // 接收城市参数
    var city = url.parse(req.url,true).query.city;
    console.log("城市:"+city);
    res.send(homehot.hot1)
})

router.get(config.homehot2,function(req,res){
    var city = url.parse(req.url,true).query.city;
    console.log("城市:"+city);
    res.send(homehot.hot2)
})

// 搜索接口
router.get("/search",function(req,res) {
    var cityName = url.parse(req.url,true).query.city;
    var searchContent = url.parse(req.url,true).query.content;
    console.log('城市:'+cityName+',内容:'+searchContent);
    res.send(searchData);
}) 

module.exports = router;