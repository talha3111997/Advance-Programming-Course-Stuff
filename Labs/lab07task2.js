var express = require("express")
var bodyparser = require("body-parser");
var multer= require ("multer");

var app= express();
app.use(express.static('./'));
app.use(bodyparser.urlencoded({extended:false}));
var upload=multer();
app.post('/',function(req,res){
    res.render(index.html);
    

})

app.post('/submit',upload.single('myfile'), function(req,res){
    res.send(req.body.firstname + " Studying in : "+ req.body.uni);
    
    var file = req.file;
    res.send("\n file received" );
})
var storage = multer.diskStorage({
destination: function(req, file, cb) {
    cb(null, 'public')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname)
  }
})
 
var upload = multer({ storage: storage })
app.listen(8081, "localhost")
    