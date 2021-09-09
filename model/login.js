const mongoose = require("mongoose");
const inster = new mongoose.Schema({
  uername: {
    type: String, // 类型
    required: true, // 是否必穿
    unique: true, // 是否唯一
  },
  password: {
    type: String, // 类型
    required: true, // 是否必穿
    unique: true, // 是否唯一
  },
});
const loginModel = mongoose.model("datas", inster);
module.exports = loginModel;
