const User = require("../model/User");
const bcrypt = require("bcrypt");

exports.getUserDetailService = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};
