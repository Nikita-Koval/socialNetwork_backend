const Test = require('../db_models/testScheme');

module.exports.addNewNote = async (req, res) => {
    const note = new Test(req.query);
    await note.save().then(result => {
      res.send(result);
    });
  };