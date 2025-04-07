const logger = require("../config/logger");

const getData = (req, res) => {
  try {
    logger.info(`Hitted to getData`);
    res.status(200).json({ message: "something for end user" });
  } catch (error) {
    logger.error(`Error on getData: ${error}`);
    res.status(500).json(error.message);
  }
};

const errorData = (req, res) => {
  try {
    logger.info(`Hitted to errorData`);
    throw new Error("some error");
    res.status(200).json({ message: "something for end user" });
  } catch (error) {
    logger.error(`Error on getData: ${error}`);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getData, errorData };
