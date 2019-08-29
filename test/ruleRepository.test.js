/*
*  {  
*    author = "edoardo lenzi"
*    license = "GPL-3"
*  }
*/


var repo = require('../repositories/ruleRepository');


var initTest = function(){
    repo.init(1, "Preparare la tavola (a colazione, pranzo, merenda e cena)", 0, 2, -1, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(2, "Mangiare la frutta e la pappa senza storie", 0, 1, -3, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(3, "Non essere rognoso", 0, 2, -1, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(4, "Aiutare la Mariavittoria, giocare con lei e sopportarla", 0, 3, -3, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(5, "Fare i compiti senza trucchi", 0, 1, -2, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(6, "Prendersi cura degli animali e dei giochi (fai ordine)", 0, 3, -1, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(7, "Non molestare il Dodo", 0, 2, -5, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(8, "Stendi i panni lavati", 0, 2, -1, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(1, "Non urlare", 1, 2, -3, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(2, "Non essere prepotente", 1, 2, -3, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(3, "Non graffiare, leccare, mordere, ferire gli altri", 1, 2, -3, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(4, "Fai ordine", 1, 3, -3, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(5, "Tratta bene il Massimo (lascialo stare se studia)", 1, 1, -3, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(6, "A nanna presto", 1, 5, -1, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(7, "Non molestare il Dodo", 1, 2, -5, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
    repo.init(8, "Stendi i panni lavati", 1, 2, -1, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
}


var createTest = function(){
    repo.create("fa el brao", 0, 2, -1, function(newRecord){
        console.log("creation result: " + JSON.stringify(newRecord))
    })
}


setTimeout(repo.drop, 1000);
setTimeout(repo.sync, 1000);
setTimeout(initTest, 1000);
setTimeout(createTest, 1000);


module.exports = {
    createTest,
}