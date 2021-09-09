const loginModel = require("../../model/login");

async function func(req, res, next) {
  const task = await loginModel.findOne({ username: "yuninglu" });
  console.log(task);
}
module.exports = {
  func,
  name: "/login",
};
