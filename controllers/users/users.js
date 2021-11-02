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

module.exports.getUserList = (req, res) => {
  try {
    if (req.query.startage && req.query.gender !== "All") {
      User.find({
        gender: req.query.gender,
        age: { $gt: req.query.startage, $lt: req.query.endage },
      }).then((result) => {
        res.status(200).json(result);
      });
    } else if (req.query.startage) {
      User.find({
        age: { $gt: req.query.startage, $lt: req.query.endage },
      }).then((result) => {
        res.status(200).json(result);
      });
    } else if (req.query.gender !== "All") {
      User.find({ gender: req.query.gender }).then((result) => {
        res.status(200).json(result);
      });
    } else {
      User.find().then((result) => {
        res.status(200).json(result);
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Incorrect data. Please wait for debug..." });
  }
};
