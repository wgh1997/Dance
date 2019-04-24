// 封装一个插入数据的方法
/**
 * db 操作数据库
 * by:千锋
 * time:2019-03-26
 */
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
function _connect(callback) {
    mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function (err,client) {
        if(err)
            console.log("err");
        else{
            console.log("success");
            const db = client.db("ele");
            callback(db);
        }

    })
}
// 首页
/*
* 插入一条记录
* coll:集合
* insertOne:插入的内容
* cb:回调函数*/
module.exports.insertOne = function (coll,insertObj,cb) {
    _connect(function (db) {
        db.collection(coll).insertOne(insertObj,cb);
    })
    // mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function (err,client) {
    //     if(err)
    //         console.log("err");
    //     else{
    //         console.log("success");
    //         const db = client.db("weibo");
    //         db.collection(coll).insertOne(insertObj,cb);
    //     }
    //
    // })
}
module.exports.insertMany = function (coll,insertArr,cb) {
    _connect(function (db) {
        db.collection(coll).insertMany(insertArr,cb);
    })
    // mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function (err,client) {
    //     if(err)
    //         console.log("err");
    //     else{
    //         console.log("success");
    //         const db = client.db("weibo");
    //         db.collection(coll).insertMany(insertArr,cb);
    //     }
    //
    // })
}
// 根据条件获得指定集合的文档数量
module.exports.count = function (coll,whereObj,cb) {
    _connect(db=>{
        db.collection(coll).countDocuments(whereObj).then(cb)
})
}
// 根据条件查找集合当中的文档
module.exports.find = function (coll,obj,cb) {
    obj.whereObj = obj.whereObj || {};
    obj.limitNum = obj.limitNum || 0;
    obj.skipNum = obj.skipNum || 0;
    obj.sortObj = obj.sortObj || {};
    _connect(db =>{
        db.collection(coll)
        .find(obj.whereObj)
        .limit(obj.limitNum)
        .skip(obj.skipNum)
        .sort(obj.sortObj)
        .toArray(cb)
})
}
// 根据ID搜索指定的文档
module.exports.findOneById = function (coll,id,cb) {
    _connect(db=>{
        db.collection(coll).findOne({
        _id:mongodb.ObjectId(id)
    },cb)
})
}
// 根据条件搜索指定的文档
module.exports.findOne= function (coll,whereObj,cb) {
    _connect(db=>{
        db.collection(coll).findOne(whereObj,cb);
})
}
// 删除一条记录，根据ID
module.exports.deleteOneById = function (coll,id,cb) {
    _connect(db=>{
        db.collection(coll).deleteOne({_id:mongodb.ObjectId(id)},cb)
})
}

// 根据ID,进行修改
// upObj是你要修改的内容
module.exports.updateOneById = function (coll,id,upObj,cb) {
    _connect(db=>{
        db.collection(coll).updateOne({
        _id:mongodb.ObjectId(id)
    },upObj,cb)
})
}
module.exports.updateOne = function (coll,whereObj,upObj,cb) {
    _connect(db=>{
        db.collection(coll).updateOne(whereObj,upObj,cb)
})
}
module.exports.update = function (coll,whereObj,upObj,cb) {
    _connect(db=>{
        db.collection(coll).updateMany(whereObj,upObj,cb)
})
}


// module.exports.find("contextList",{},function (err,results) {
//     console.log(results);
// })
// module.exports.deleteOneById("contextList","5c987b4e805a142ffc4221ae");






// module.exports.find("contextList",{
//
//     limitNum:0,
//     skipNum:0,
//     sortObj:{addTime:-1}
// },(err,results)=>{
//     console.log(results);
// });


// module.exports.count("contextList",{},function (count) {
//     console.log(count);
// });



















// 模块：对某个功能进行封装。
/*
* 一、操作数据库
* 1、安装mongodb
* 2、使用mongodb
* 3、MogoClient 连接数据库
* 4、获得你要操作的db
* 5、指定集合
* 6、具体操作（增删改查）
*
* 一、找寻方法的共同点
*   1、连接数据库
*   2、找到指定的库
*   3、返回结果。
* 二、封装完的内容要适合大部分场景
* 三、异步操作，通过回调解决异步*/
