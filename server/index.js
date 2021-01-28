const express = require('express');
const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');
const router = require('./router');


const PORT = 3000 || process.env.PORT;
const PUB_DIR = path.resolve(__dirname, '..', 'public');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());
app.use(express.static(PUB_DIR));

app.use('/bundles', router.bundles);
app.use('/api', router.api);

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request on ${PORT}`)
  next();
})

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`)
})

module.exports = app;

