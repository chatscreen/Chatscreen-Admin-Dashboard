const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// Function to log events to a file
const logEvents = async (message, logName) => {
  // Getting the current date and time in the required format
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;

  // Generating a unique identifier using uuid
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  try {
    // Checking if the 'logs' directory exists, if not, create it
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }

    // Appending the log item to the specified log file
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logName),
      logItem
    );
  } catch (err) {
    console.log(err); // Logging any errors that occur
  }
};

// Middleware function to log request
const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.txt");
  console.log(`${req.method} ${req.path}`);
  next();
};
module.exports = { logger, logEvents };
