var router = require('express').Router();
module.exports = router;
var Day = require('../../db').models.Day;

router.get('/', function (req, res, next) {
	Day.find().then(function(days) {
		res.json(days);
	}, next);
});