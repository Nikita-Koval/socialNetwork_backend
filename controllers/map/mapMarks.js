const GoogleMap = require("../../db_models/mapScheme");

module.exports.getMarks = (req, res) => {
  try {
    if (req.query.endtime && req.query.type !== "All") {
      GoogleMap.find({
        type: req.query.type,
        timestamp: { $gt: req.query.starttime, $lt: req.query.endtime },
      }).then((result) => {
        res.status(200).json(result);
      });
    } else if (req.query.endtime) {
      GoogleMap.find({
        timestamp: { $gt: req.query.starttime, $lt: req.query.endtime },
      }).then((result) => {
        res.status(200).json(result);
      });
    } else if (req.query.type !== "All") {
      GoogleMap.find({ type: req.query.type }).then((result) => {
        res.status(200).json(result);
      });
    } else {
      GoogleMap.find().then((result) => {
        res.status(200).json(result);
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Incorrect map data. Please wait for debug..." });
  }
};

module.exports.getUserMarks = (req, res) => {
  try {
    GoogleMap.find({
      userId: req.query.userId,
    }).then((result) => {
      res.status(200).json(result);
    });
  } catch {
    return res
      .status(500)
      .send({ message: "Something wrong. Please wait for debug..." });
  }
};

module.exports.addNewMark = (req, res) => {
  const mark = new GoogleMap({
    type: req.body.type,
    title: req.body.title,
    description: req.body.description,
    userId: req.body.userId,
    timestamp: req.body.timestamp,
    lat: req.body.coordinates.lat,
    lng: req.body.coordinates.lng,
  });
  mark.save().then((result) => {
    res.send(result);
  });
};

module.exports.changeMark = (req, res) => {
  GoogleMap.updateOne({ _id: req.body.itemId }, req.body).then((result) => {
    GoogleMap.find({ userId: req.body.userId }).then((result) => {
      res.status(200).json(result);
    });
  });
};

module.exports.deleteMark = (req, res) => {
  GoogleMap.deleteOne({ _id: req.query.itemId }).then((result) => {
    GoogleMap.find({ userId: req.query.userId }).then((result) => {
      res.status(200).json(result);
    });
  });
};
