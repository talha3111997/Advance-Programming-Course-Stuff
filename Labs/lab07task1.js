var express = require("express")
var bodyparser = require("body-parser");
var app= express();
app.use(express.static('./'));

app.post('/',function(req,res){
    res.render(index.html);
    

})
app.use(bodyparser.urlencoded({extended:false}));
app.post('/submit',function(req,res){
    res.send(req.body.firstname + " Studying in "+ req.body.uni);

})
app.listen(8081, "localhost")
    