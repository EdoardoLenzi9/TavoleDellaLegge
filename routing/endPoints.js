var express = require('express');
var log = require('../utils/log');
var scoreService = require("../services/scoreService");
var ruleService = require("../services/ruleService");
var router = express.Router();


/* End Points */
router.post("/score", function(req, res) {
	var target_id = parseInt(req.headers.target_id);
	var points = parseInt(req.headers.points);
    scoreService.create(target_id, points, function(result){
        res.send("ok")
})
});


router.get("/score", function(req, res) {
	var target_id = parseInt(req.headers.target_id);
    scoreService.getScore(target_id, function(result){
        res.send(result)
    })
});


router.post("/rule", function(req, res) {
	var target_id = parseInt(req.headers.target_id);
	var description = req.headers.description;
	var bonus = parseInt(req.headers.bonus);
	var malus = parseInt(req.headers.malus);
	ruleService.create(description, target_id, bonus, malus, function(result){
		res.send(result)
	})
});


router.get("/rule", function(req, res) {
	var target_id = parseInt(req.headers.target_id);
	ruleService.readByTargetId(target_id, function(result){
		res.send(result)
	})
});


module.exports = {
    router
}


