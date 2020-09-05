var { Router } = require('express'), Athlete = require('../models/Athlete.js');

var router = Router();

// POST Route
router.post('/create-athlete', function(req, res, next) {
  var athlete = new Athlete();
  athlete.set('name', req.body.name);
  athlete.set('sport', req.body.sport);
  athlete.set('dob', req.body.dob);
  athlete.save();
  return next();
});

// PUT Route
router.put('/update-athlete', function(req, res, next) {
  var athlete = new Athlete();
  athlete.set('name', req.body.name);
  athlete.set('sport', req.body.sport);
  athlete.set('dob', req.body.dob);
  athlete.save();
  return next();
});

// GET Route
router.get('/get-athletes', async function(req, res, next) {
  return res.json(await Athlete.find());
})

module.exports = router;
