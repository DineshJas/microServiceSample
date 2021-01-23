const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const apiRoutes = require('./src/apiRoutes');
const config = require('../config/keyFile.json');

const app = express();
const PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.use('/api',apiRoutes);

mongoose.connect(config.URI,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{
    console.log('database connected on service One.');
    })
  .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`service one started on http://localhost:${PORT} `);
});