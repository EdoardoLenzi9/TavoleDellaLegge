/*
*  {  
*    author = "edoardo lenzi"
*    license = "GPL-3"
*  }
*/


var massimo = new Vue({
    el: '#massimo',
    data: {
        score: 0,
        rules: [ ]
    }
})


var mariavittoria = new Vue({
    el: '#mariavittoria',
    data: {
        score: 0,
        rules: [ ]
    }
})


function addRule(){
    var description = $('#description')[0].value;
    var bonus = parseInt($('#bonus')[0].value);
    var malus = parseInt($('#malus')[0].value);
    var target_id = $('#target1').text().trim().toLowerCase() == "massimo" ? 0 : 1;

    httpPostAsync( '/rule', [["description", description], ["bonus", bonus], ["malus", malus], ["target_id", target_id]], null, function(reply){
        alert(reply);
    });
}


function addPoints(){
    var points = $('#points')[0].value;
    var target_id = $('#target2').text().trim().toLowerCase() == "massimo" ? 0 : 1;
    debugger;
    httpPostAsync( '/score', [["points", points], ["target_id", target_id]], null, function(reply){
        alert(reply);
    });
}


window.setInterval(function() {
    httpGetAsync( '/rule', [["target_id", 0]], function(reply){
        massimo.rules =  reply;
    });
    
    
    httpGetAsync( '/rule', [["target_id", 1]], function(reply){
        mariavittoria.rules =  reply;
    });
    
    
    httpGetAsync( '/score', [["target_id", 0]], function(reply){
        var score = 0;
        reply.forEach(item => {
            score += item.value;
        });
        massimo.score = score;
    });
    
    
    httpGetAsync( '/score', [["target_id", 1]], function(reply){
        var score = 0;
        reply.forEach(item => {
            score += item.value;
        });
        mariavittoria.score = score;
    });
}, 1000);