
const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const morgan     = require('morgan');
const cors       = require('cors')


app.use(morgan('dev')); // log requests to the console

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

var port     = process.env.PORT || 8080; // set our port

// DATABASE SETUP
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mv1'); // connect to our database

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});

/*var User     = require('./app/models/user');
var Login = require('./app/models/login');*/
// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {

    res.json({ message: 'hooray! welcome to our api!' });

});
app.use('/api/users', require('./routes/users'));
app.use('/api/login', require('./routes/login'));
app.use('/api/candidate', require('./routes/candidate'));
app.use('/api/employee', require('./routes/employee'));

app.listen(port);
console.log('Magic happens on port ' + port);
