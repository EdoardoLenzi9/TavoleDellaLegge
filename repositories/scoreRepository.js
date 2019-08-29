/*
*  {  
*    author = "edoardo lenzi"
*    license = "GPL-3"
*  }
*/


var dbManager = require('./dbManager');
var db = dbManager.db;


var Score = db.define('score', {
    id:             {type: 'number', key: true}, // the auto-incrementing primary key
    target_id:      {type: 'number'},
    value:          {type: 'number'},
    date:           {type: 'number'},
  }, {
    methods : {
    }
});


var sync = function(){
    Score.sync(function () {
        console.log("Score table synchronized")
    });
}


sync();


var create = function(target_id, value, callback){
    Score.count({}, function(err, last_id) {
        var date = new Date()
        var newScore = new Score({
            id: last_id,
            target_id: target_id,
            value: value,
            date: parseInt("" + date.getDate() + date.getMonth() + date.getFullYear())
        });

        newScore.save(function (err) {
            // err.field = "name" , err.value = "" , err.msg = "missing"
        });

        callback(newScore);
    })
}


var getScore = function(target_id, callback){
    var date = new Date()
    Score.find({target_id: target_id, date: parseInt("" + date.getDate() + date.getMonth() + date.getFullYear())}, function(err, results) {
        console.log(JSON.stringify(results))
        callback(results);
    })
}


var drop = function(){
    Score.drop(function () { })
}


module.exports = {
    create,
    getScore,
    drop,
    sync
}