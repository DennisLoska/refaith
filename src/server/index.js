const express = require('express');
const pino = require('pino');
const expressPino = require('express-pino-logger');

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });

const app = express();
const port = process.env.PORT || 5000;

app.use(expressLogger);

app.use((req, res, next) => {
  logger.info(req);
  next();
});

app.use(express.static('dist'));
app.listen(port, () => logger.info(`Server running on port ${port || 5000}!`));
