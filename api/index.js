const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
// Require API routes
const users = require('./routes/users')

// Create express instnace
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors())
// Import API Routes
app.use(users)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// подключение
mongoose.connect('mongodb://localhost:27017/nuxtmongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

// Export the server middleware
// module.exports = {
//   path: '/api',
//   handler: app
// }