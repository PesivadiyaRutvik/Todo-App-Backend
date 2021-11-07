const mongoose = require('mongoose');
const logger = require('./logger');

const connectDb = async (url) => {
  await mongoose.connect(url);
  logger.info('Connect database successfully');
};

module.exports = connectDb;
