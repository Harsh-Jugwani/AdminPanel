const MongoInstance = require("../models/mongoInstance");

exports.getAllInstances = async (req, res, next) => {
  try {
    const instances = await MongoInstance.find();
    res.json(instances);
  } catch (error) {
    next(error);
  }
};