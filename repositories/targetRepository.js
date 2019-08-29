/*
*  {  
*    author = "edoardo lenzi"
*    license = "GPL-3"
*  }
*/


var dbManager = require('./dbManager');
var db = dbManager.db;


var Target = db.define('target', {
    id:             {type: 'number', key: true}, // the auto-incrementing primary key
    name:           {type: 'text'},
  }, {
    methods : {
    }
});


var sync = function(){
    Target.sync(function () {
        console.log("Target table synchronized")
    });
}


sync();


var create = function(name, callback){
    Target.count({}, function(err, last_id) {
        var newTarget = new Target({
            id: last_id,
            name: name,
        });

        newTarget.save(function (err) {
            // err.field = "name" , err.value = "" , err.msg = "missing"
        });

        callback(newTarget);
    })
}


var drop = function(){
    Target.drop(function () { })
}


module.exports = {
    create,
    drop,
    sync
}