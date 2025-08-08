const morgan = require('morgan');
const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf, colorize, errors } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }),
    logFormat
  ),
  transports: [new transports.Console()],
});

const httpLogger = morgan('dev', {
  stream: { write: (message) => logger.info(message.trim()) },
});

module.exports = {
  logger,
  httpLogger
};
