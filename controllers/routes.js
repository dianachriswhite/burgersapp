var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js')

var router = express.Router();

router.get('/', function(req,res){
	burger.all(function(burger_data){
		console.log(burger_data)
		res.render('index',{burger_data});
	})
})

module.exports = router;

