module.exports.getNowTime= function() {
    var nowTime = new Date();
    var timeStr = nowTime.getFullYear() + "-" +
        (nowTime.getMonth() + 1).toString().padStart(2, "0") + "-" +
        nowTime.getDate().toString().padStart(2, "0") + " " +
        nowTime.getHours().toString().padStart(2, "0") + ":" +
        nowTime.getMinutes().toString().padStart(2, "0") + ":" +
        nowTime.getSeconds().toString().padStart(2, "0");
    return timeStr;
}
module.exports.send = function (res,ok=-1,msg="网络连接失败") {
    res.json({
        ok,
        msg
    })
}