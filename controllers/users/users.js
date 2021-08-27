const User = require("../../db_models/usersScheme");

module.exports.getUserInfo = (req, res) => {
  try {
    User.find({
      _id: req.query.userId,
    }).then((result) => {
      res.status(200).json(result);
    });
  } catch {
    return res
      .status(500)
      .send({ message: "Something wrong. Please wait for debug..." });
  }
};