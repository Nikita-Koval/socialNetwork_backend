const bcrypts = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../db_models/usersScheme");

module.exports.register = async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    return res.status(409).json({
      message: "This email is already taken, try another one.",
    });
  } else {
    const salt = bcrypts.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
      city: req.body.city,
      country: req.body.country,
      gender: req.body.gender,
      password: bcrypts.hashSync(password, salt),
    }); 
      await user.save().then((result) => {
        const token = jwt.sign(
          {
            email: result.email,
            userId: result._id,
          },
          process.env.SECRET_KEY,
          { expiresIn: 60 * 60 }
        );
        res.status(201).json({
          token: `Bearer ${token}`,
          info: { email: result.email, userId: result._id, name: result.name },
        });
      });
  }
};
