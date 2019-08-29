/*
*  {  
*    author = "edoardo lenzi"
*    license = "GPL-3"
*  }
*/


var scoreRepository = require('../repositories/scoreRepository')


var create = function(target_id, value, callback){
    scoreRepository.create(target_id, value, function(res){
        callback(res);    
    });
}


var getScore = function(target_id, callback){
    scoreRepository.getScore(target_id, function(res){
        callback(res);    
    });
}


module.exports = {
    create,
    getScore
}