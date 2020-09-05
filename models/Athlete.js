var mongoose = require('mongoose'), { Schema, model } = mongoose;

const AthleteSchema = new Schema({
  name: {
    type: String
  },
  sport: {
    type: String
  },
  dob: {
    type: Date
  }
});

module.exports = model('Athlete', AthleteSchema);
