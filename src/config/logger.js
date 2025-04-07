const winston = require("winston");
const dailyRotateFile = require("winston-daily-rotate-file");
const { printf, combine, timestamp, errors } = require("winston").format;

const logFormat = printf(({ level, message, stack, timestamp }) => {
  return stack
    ? `${timestamp} [${level}] ${message} - ${stack}`
    : `${timestamp} [${level}] ${message}`;
});

const isProduction = process.env.NODE_ENV === "production";

const transports = [
  new winston.transports.Console({
    level: isProduction ? "info" : "debug",
    format: combine(winston.format.colorize(), winston.format.simple(), logFormat),
  }),

  new dailyRotateFile({
    filename: `logs/application-%DATE%.log`,
    maxFiles: "14d",
    level: "info",
    datePattern: "YYYY-MM-DD",
  }),

  new winston.transports.File({
    filename: `logs/errors.log`,
    level: "error",
  }),
];

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), errors({ stack: true }), logFormat),
  transports,
  exceptionHandlers: [
    new winston.transports.File({ filename: `logs/exceptions.log` }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: `logs/rejections.log` }),
  ],
});

module.exports = logger;
