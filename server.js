let express = require('express'), app = express(),
  mongoose = require('mongoose'), bodyParser = require('body-parser'),
  Athlete = require('./models/Athlete.js'),
  apiRoutes = require('./routes/api.js');

mongoose.connect(require('./config.js'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(process.env.PORT || 8080);
console.log("App listening on port " + (process.env.PORT || 8080));
