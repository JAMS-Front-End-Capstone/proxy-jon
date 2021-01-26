const express = require('express');
const path = require('path');
const morgan = require('morgan');
const router = require('./router)

const PORT = 3000 || process.env.PORT;
const PUB_DIR = path.resolve(__dirname, '..', 'public');

const app = express();

app.use(morgan('dev'));
app.use('/', express.static(PUB_DIR));

app.use('/bundle', router.bundle);
app.use('/api', router.api);

module.exports = app;
