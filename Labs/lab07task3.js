var express = require("express")
//var bodyparser = require("body-parser");
//var multer= require ("multer");

var app= express();
app.use(express.static('./'));
//app.use(bodyparser.urlencoded({extended:false}));
//var upload=multer();
app.set('view engine', 'pug');
app.set('views', './views')
app.get('/',function(req,res){
  res.send("wow");

//res.render(first_view.pug);
    
})



 
//var upload = multer({ storage: storage })
app.listen(8081, "localhost")
    