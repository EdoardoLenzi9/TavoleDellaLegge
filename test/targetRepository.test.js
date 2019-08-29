/*
*  {  
*    author = "edoardo lenzi"
*    license = "GPL-3"
*  }
*/


var repo = require('../repositories/targetRepository');


var createTest = function(){
    repo.create("Massimo", function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.create("Mariavittoria", function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
}


setTimeout(repo.drop, 1000);
setTimeout(repo.sync, 1000);
setTimeout(createTest, 1000);


module.exports = {
    createTest,
}