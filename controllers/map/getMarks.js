const GoogleMap = require("../../db_models/mapScheme");

module.exports.getMarks = (req, res) => {
  GoogleMap.find().then((result) => {
    if (!result) {
      return res
        .status(500)
        .send({message:"Incorrect map data. Please wait for debug..."});
    } else {
      res.status(200).json(result);
    }
  });
};
