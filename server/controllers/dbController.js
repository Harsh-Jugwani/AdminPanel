const Database = require("../models/Database");

exports.getAllDatabases = async (req, res, next) => {
  try {
    const databases = await Database.find();
    res.json(databases);
  } catch (error) {
    next(error);
  }
};
