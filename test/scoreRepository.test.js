/*
*  {  
*    author = "edoardo lenzi"
*    license = "GPL-3"
*  }
*/


var repo = require('../repositories/scoreRepository');


var createTest = function(){
    repo.create(1, 3, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
}


var computeScoreTest = function(){
    repo.getScore(1, function(newRecord){
        console.log("score result: " + JSON.stringify(newRecord))
    })
}


setTimeout(repo.drop, 1000);
setTimeout(repo.sync, 1000);
setTimeout(createTest, 1000);
setTimeout(computeScoreTest, 1000);


module.exports = {
    createTest,
}