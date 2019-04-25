let MongoClient = require('mongodb').MongoClient;

module.exports.connect = function(){
    let db = MongoClient.connect("mongodb://localhost:27017/e-portfolio", { useNewUrlParser: true },  function(err, db) {
        
        if(!err) {
        console.log("We are connected");
        }
        let dbo = db.db("E-portfolio");
    });
};