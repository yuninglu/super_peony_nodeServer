const mongoose = require("mongoose");

mongoose.connect("mongodb://luge.pro:27017/lu_ge");
mongoose.connection.once("open", (err) => {
  if (err) {
    console.log("err:" + err);
    return;
  }
  console.log("mongodb链接成功❀");
});
