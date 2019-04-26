const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const { upPic } = require("./module/upPic");

app.post("/user/updateStudent", function(req, res) {
  console.log(1);
  console.log(req.body.autograph);
  res.json({
    ok: 1,
    msg: "成功"
  });
});
app.post("user/updateStudent", function(req, res) {
  console.log(1);
  console.log(req.body.oldPwd);
  res.json({
    ok: 1,
    msg: "成功"
  });
});
app.post("/user/updatePwd", function(req, res) {
  console.log(1111111);
  res.json({
    ok: 1,
    msg: "成功"
  });
});

// 注册试验接口
app.get("/haha", function(req, res) {
  console.log(req.query);
  res.json({
    ok: 1,
    msg: "成功",
    url: "hha"
  });
});
app.get("/xixi", function(req, res) {
  console.log(req.query);
  res.json({
    ok: 1,
    msg: "成功",
    url: "hha"
  });
});

app.listen(3000, function() {
  console.log("success");
});
