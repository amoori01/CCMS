const mongoose = require('mongoose');
const { logger } = require('./logger');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/CCMS';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    logger.info('✅ MongoDB connected successfully');
  } catch (error) {
    logger.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  await mongoose.disconnect();
  logger.info('MongoDB disconnected');
};

// Graceful shutdown
process.on('SIGINT', async () => {
  await disconnectDB();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await disconnectDB();
  process.exit(0);
});

module.exports = {
  connectDB,
  disconnectDB
};


//// Or Other Databases
