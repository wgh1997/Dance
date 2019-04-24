const db = require("../db2");
const tool = require("../tool");
const config = require("../config");
module.exports.addWeibo = function (req,res) {
    db.count("contextList",{
        context:req.body.context
    },function (count) {
        if(count>0){
            tool.send(res,-1,"请不要添加重复的内容")
        }else{
            // 添加微博信息
            db.insertOne("contextList",{
                topNum:0,
                downNum:0,
                addTime:tool.getNowTime(),
                context:req.body.context
            },function (err,results) {
                if(err)
                    tool.send(res);
                else
                    tool.send(res,1,"成功")
            })
        }
    })
}
module.exports.getWeibo = function (req,res) {
    let pageIndex = req.query.pageIndex/1;// 当前页
    // let pageNum = 5;// 每页显示的数量
    db.count("contextList",{},function (count) {
        let pageSum = Math.ceil(count/config.PAGE_NUM) // 总页数
        if(pageSum < 1)
            pageSum = 1;
        if(pageIndex < 1)
            pageIndex = 1;
        if(pageIndex >pageSum)
            pageIndex = pageSum;
        db.find("contextList",{
            sortObj:{addTime:-1},
            limitNum:config.PAGE_NUM,
            skipNum:(pageIndex -1)*config.PAGE_NUM
        },function (err,contextList) {
            if(err)
                tool.send(res);
            else{
                res.json({
                    ok:1,
                    pageIndex,
                    pageSum,
                    contextList
                })
            }
        })
    })
}
module.exports.deleteWeibo = function (req,res) {
    // 伪静态
    // 真静态 http://163.com/show/2345.html
    var id = req.params.id;
    db.deleteOneById(config.DB_CONTEXT_LIST,id,function (err,results) {
        if(err)
            tool.send(res);
        else
            tool.send(res,1,"删除成功");
    })
}
module.exports.upWeibo = function (req,res) {
    // 顶  踩
    var id = req.params.id;
    var type = req.params.type/1;
    if(type === 1 || type === 2){
        // type 1顶，2踩
        // 初始值为顶
        var upObj = {
            $inc:{topNum:1}
        }
        if(type === 2)
            upObj.$inc = {downNum:1}

        db.updateOneById(config.DB_CONTEXT_LIST,id,upObj,(err,results)=>{
            if(err)
                tool.send(res);
            else
                tool.send(res,1,"成功")
        })
    }else{
        tool.send(res);
    }

}


function fn(str) {

}
var str = "啦啦"
fn(str)