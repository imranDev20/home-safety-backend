const userService = require("../services/users.service");

module.exports.getAllUsers = async (req, res, next) => {
  try {
    // const db = getDb();
    // const users = await db.collection("users").find().toArray();
    // res.status(200).send({ success: true, data: users });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getUserDetail = async (req, res, next) => {
  try {
    // const db = getDb();
    // const { id } = req.params;
    // if (!ObjectId.isValid(id))
    //   return res
    //     .send(400)
    //     .send({ success: false, error: "Not a valid user id." });
    // const user = await db.collection("users").findOne({ _id: ObjectId(id) });
    // if (!user)
    //   return res
    //     .status(400)
    //     .send({ success: false, error: "Couldn't find a user with this ID" });
    // res.status(200).send({ success: true, data: user });
  } catch (error) {
    console.log(error);
  }
};

module.exports.createUser = async (req, res, next) => {
  try {
    const result = await userService.createUserService(req.body);

    res.status(200).send({
      success: true,
      messages: `User added with id: ${result._id}`,
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports.updateAUser = async (req, res, next) => {
  try {
    // const db = getDb();
    // const { id } = req.params;
    // if (!ObjectId.isValid(id))
    //   return res
    //     .send(400)
    //     .send({ success: false, error: "Not a valid user id." });
    // const user = await db
    //   .collection("users")
    //   .updateOne({ _id: ObjectId(id) }, { $set: req.body });
    // if (!user.modifiedCount)
    //   return res
    //     .status(400)
    //     .send({ success: false, error: "Couldn't find a user with this ID" });
    // res.status(200).send({
    //   success: true,
    //   data: user,
    //   message: "Successfully updated the user",
    // });
  } catch (error) {
    console.log(error);
  }
};
