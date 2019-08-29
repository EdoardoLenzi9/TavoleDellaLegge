/*
*  {  
*    author = "edoardo lenzi"
*    license = "GPL-3"
*  }
*/


var dbManager = require('./dbManager');
var db = dbManager.db;
var log = require('../utils/log');

var Rule = db.define('rule', {
    id:             {type: 'number', key: true}, // the auto-incrementing primary key
    description:    {type: 'text'},
    target_id:      {type: 'number'},
    bonus:          {type: 'number'},
    malus:          {type: 'number'},
  }, {
    methods : {
    }
});


var sync = function(){
    Rule.sync(function () {
        console.log("Rule table synchronized")
    });
}


sync();


var create = function(description, target_id, bonus, malus, callback){
    Rule.count({target_id:target_id}, function(err, last_id) {
        var newRule = new Rule({
            id: last_id + 1,
            description: description,
            target_id: target_id,
            bonus: bonus,
            malus: malus
        });

        newRule.save(function (err) {
            // err.field = "name" , err.value = "" , err.msg = "missing"
        });

        callback(newRule);
    })
}


var init = function(id, description, target_id, bonus, malus, callback){
    var newRule = new Rule({
        id: id,
        description: description,
        target_id: target_id,
        bonus: bonus,
        malus: malus
    });

    newRule.save(function (err) {
        // err.field = "name" , err.value = "" , err.msg = "missing"
    });

    callback(newRule);
}


var readByTargetId = function(target_id, callback){
    Rule.find({target_id: target_id}).order('id').run(function(err, results) {
        log.log(results);
        callback(results);
    });
}


var drop = function(){
    Rule.drop(function () { })
}


module.exports = {
    init,
    create,
    readByTargetId,
    drop,
    sync
}