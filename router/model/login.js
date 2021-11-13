const loginModel = require("../../model/login");

async function func(req, res, next) {
  // const task = await loginModel.create({ name: "lisi" });
  // const task = await loginModel.findOne({ name: "zhangsan" });
  const task = await loginModel.update(
    { name: "zhangsan" },
    { $set: { age: 16 } }
  );
  console.log(task);
  res.send({ a: "成功", task });
}
module.exports = {
  func,
  name: "/login",
};
