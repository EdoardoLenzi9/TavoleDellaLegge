/*
*  {  
*    author = "edoardo lenzi"
*    license = "GPL-3"
*  }
*/


var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


let allowedRoutes = new Set();
allowedRoutes.add('/login');
allowedRoutes.add('/user');
allowedRoutes.add('/user/login');
allowedRoutes.add('/user/verify');


router.use(function (req, res, next) {
	next();	
});


module.exports = {
    router
}