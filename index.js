// 引入调用mongoose链接
require("./db/index");
const router = require("./router/index");
const express = require("express");
const path = require("path");

const app = express();
// app.set("view engine", "ejs");
// app.set("views", "views");
app.set("Content-Type", "text/html;charset=utf-8");
app.set("Access-Control-Allow-Origin", "*");
app.get("/", (req, res, next) => {
  const file = path.resolve(__dirname, "./public/index.ejs");
  // 通过render渲染到页面
  res.render(file, { data: "hello word" });
});
// 访问什么接口下载什么文件
// const file = path.resolve(__dirname, "./public/index.ejs");
// app.use("/acc", express.static(file));
app.all("*", function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  // res.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "X-Requested-With,content-type, Authorization"
  // );
  // res.setHeader("Content-Type", "application/json;charset=utf-8");
  next();
});
app.use(router);
app.listen("3000", "192.168.0.194", (err) => {
  if (err) {
    console.log("err:" + err);
    return;
  }
  console.log("连接成功");
});
