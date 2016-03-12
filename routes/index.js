var express = require('express');
var router = express.Router();

//return index 
router.get('/',function(req, res, next){
	res.render('index', {title: "Chirp"});
});

//return index1 view
router.get('/index1',function(req, res, next){
	res.render('index1', {title: "Index1"});
});

module.exports = router;