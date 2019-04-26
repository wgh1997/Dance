const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const {upPic} = require("./module/upPic")

app.post("/user/updateStudent", function(req, res) {
  console.log(1)
  console.log(req.body.autograph);
  res.json({
    ok: 1,
    msg: "成功"
  });
});
app.post("user/updateStudent", function(req, res) {
  console.log(1)
  console.log(req.body.oldPwd);
  res.json({
    ok: 1,
    msg: "成功"
  });
});
app.post("/user/updatePwd",function (req,res) {
  console.log(1111111)
  res.json({
    ok: 1,
    msg: "成功"
  });
})
app.listen(3000, function() {
  console.log("success");
});
