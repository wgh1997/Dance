/*上传图片
* @params:
* state:0 成功，-1未上传图片，-2上传图片格式错误
* params:图片以外的数据
* newPicName*/
const fs = require("fs");
const formidable = require("formidable");
const path = require("path");
const upPicUrl = path.resolve(__dirname,"../upPic");
// picName:接收图片的名字
module.exports.upPic = function (req,picName,cb) {
    // 接收表单数据，然后将你的数据更新到数据库当中
    var form = new formidable.IncomingForm();
    form.encoding = "utf-8";
    form.keepExtensions = true;// 是否保留扩展名
    form.uploadDir = upPicUrl;
    // params:除了file类型以外其它的数据
    form.parse(req,function (err,params,file) {
        /*思路：“
        * 1、判断图片是否上传
        *   1、未上传
        *       删除空文件，返回结果。{state:-1,params}
        *   2、已上传
        *       1、格式对不对
        *           1、对
        *               将你图片的名字重命名，然后返回{state:0,params,newPicName}
        *           2、不对
        *               删除空文件，返回结果{state:-2}*/
        var fileInfo = file[picName];
        console.log(fileInfo.size)
        if(fileInfo.size>0){
            // 已上传
            var extList =[".gif",".png",".jpg"];// 允许提交的扩展名列表
            var extName = path.extname(fileInfo.path).toLowerCase();// 获得文件的扩展名
            if(extList.includes(extName)){// 格式正确
                var newPicName = Date.now()+extName;
                fs.rename(fileInfo.path,upPicUrl+"/"+newPicName,function (err) {
                    params.newPicName = newPicName;
                    cb({
                        state:0,
                        params
                    })

                })
            }else{
                fs.unlink(fileInfo.path,function (err) {
                    cb({
                        state:-2,
                        msg:"请选择.gif,.png,.jpg格式的图片"
                    })
                })
            }
        }else{
            // 未上传
            fs.unlink(fileInfo.path,function () {
                cb({
                    state:-1,
                    params,
                    msg:"请选择上传的图片"
                })
            })
        }
    })

}