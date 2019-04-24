const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/haha", function(req, res) {
  console.log(req.query);
  res.json({
    ok: 1,
    msg: "成功"
  });
});

app.listen(3000, function() {
  console.log("success");
});
