var mongo = require('mongoose')
mongo.connect('mongodb://localhost:27017/jiuwu',function(err){
    if(!err){
        console.log('数据库链接成功')
    }
})
// banner数据存储
var banScham=new mongo.Schema({
    id:Number,
    picurl:String,
    link:String,
})
var bantable=mongo.model("bannerTab",banScham)
//  分类数据存储
var cateSchma=new mongo.Schema({
    id:Number,
    picurl:String,
    cateName:String
})
var cateTable=mongo.model("cateTab",cateSchma)
// 商品数据存储
var shopScham=new mongo.Schema({
    id:Number,
    size:Number,
    type:String,
    perfect:String,
    class:String,
    brand:String,
    marketPrice:Number,
    price:Number,
    description:String,
    collect:Number,
    stock:Number,
    huohao:String,
    detailPic:Array,
    fastSend:Boolean,
    menbao:Boolean
})
var shopTable=mongo.model("shopTab",shopScham)
// 用户数据存储
var userSchema=new mongo.Schema({
    photo:String,
    nickName:String,
    phone:String,
    realName:String,
    zhifubao:String,
})
var userTable=mongo.model("userTable",userSchema)
// 地址列表存储
var addressSchema=new mongo.Schema({
    user:String,
    addressList:Array,
})
var addresssTaab
module.exports = {bantable,cateTable,shopTable,userTable}