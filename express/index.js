const app = require('express')();
require("dotenv").config();
const passport = require('passport');
const bodyParser = require('body-parser');
const noc = require('no-console');
const cors = require('cors');

require("./bootstrap");

noc(app);
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(passport.initialize());
app.use(cors());

require('./db');

require('./passport')(passport);

require("./../src/routes")(app);


module.exports = app;