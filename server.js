const express = require("express");
const app = express();

var bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){

    res.render('index');
});

app.post('/result', function (req, res){
    console.log("POST DATA \n\n", req.body);
    console.log(req.body.name);
    var data = {
        'name': req.body.name,
        'location': req.body.location,
        'favorite': req.body.favorite,
        'comment': req.body.comment,        
    }
    console.log(data);
    res.render('results', {context: data});
});

app.listen(8000, function(){
    console.log("listenin' on port 8000");
});