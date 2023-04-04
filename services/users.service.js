const User = require("../model/User");
const bcrypt = require("bcrypt");

exports.createUserService = async (data) => {
  const hashedPassword = await bcrypt.hash(data.phone, 10);
  const user = { ...data, password: hashedPassword };

  console.log(user);

  return await User.create(user);
};
