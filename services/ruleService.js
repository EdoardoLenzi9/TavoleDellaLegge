/*
*  {  
*    author = "edoardo lenzi"
*    license = "GPL-3"
*  }
*/


var log = require('../utils/log');
var ruleRepository = require('../repositories/ruleRepository');


var create = function(description, target_id, bonus, malus, callback){
    ruleRepository.create(description, target_id, bonus, malus, function(res){
        callback(res)
    })
}


var readByTargetId = function(target_id, callback){
    ruleRepository.readByTargetId(target_id, function(res){
        callback(res)
    })
}


module.exports = {
    create,
    readByTargetId
}