const mongoose = require("mongoose");
const inster = new mongoose.Schema({
  name: {
    type: String, // 类型
    required: true, // 是否必穿
    unique: true, // 是否唯一
  },
  // password: {
  //   type: String, // 类型
  //   required: true, // 是否必穿
  //   unique: true, // 是否唯一
  // },
  age: {
    type: String,
  },
});
const loginModel = mongoose.model("data", inster);
module.exports = loginModel;
