
const userSchema = require('../model/userSchema');

exports.home = (req, res) => {
      userSchema.find({ referanceId: req.userId }).then((data, err) => {
        if (err) {
          res.json({ status: "failed", message: err });
        } else {
          res.json({ status: "success", message: data });
        }
      });
    };