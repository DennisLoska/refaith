const express = require('express');
const pino = require('pino');
const expressPino = require('express-pino-logger');
const compression = require('compression');

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(expressLogger);
app.use((req, res, next) => {
    logger.info(req);
    next();
});

app.use(compression());
app.get('*.js', (req, res, next) => {
    req.url += '.gz';
    logger.info(req.url);
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.listen(port, () => logger.info(`Server running on port ${port || 5000}!`));
