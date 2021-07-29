const bcrypts = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../db_models/usersScheme");

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email });
  if (!candidate) {
    res.status(404).json({
      message: "The user with this email was not found",
    });
  }
  let isPasswordCorrect = false;
  if (req.body.password) {
    isPasswordCorrect = bcrypts.compareSync(
      req.body.password,
      candidate.password
    );
  }
  if (req.body.type || isPasswordCorrect) {
    const token = jwt.sign(
      {
        email: candidate.email,
        userId: candidate._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
    res.status(200).json({
      token: `Bearer ${token}`,
      email: candidate.email,
    });
  } else {
    res.status(401).json({
      message: "The passwords don't match. Please try again",
    });
  }
};
