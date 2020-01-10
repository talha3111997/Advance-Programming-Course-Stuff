var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,  { useNewUrlParser: true },function(err,db) {

    if (err) throw err;
    //console.log("database created");

        var dbo=db.db("mydb");
        
        dbo.collection("customers").aggregate([
            {$lookup: 
            {
                from: 'products',
                localField: 'product_id',
                foreignField: '_id',
                as: 'orderdetails'

            }
            
            }
        ]).toArray(function(err,res){
            if(err) throw err;
            console.log(JSON.stringify(res));
            db.close();

        })
});



