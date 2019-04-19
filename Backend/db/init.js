let MongoClient = require('mongodb').MongoClient;


let db = MongoClient.connect("mongodb://localhost:27017/e-portfolio", { useNewUrlParser: true },  function(err, db) {
    
    if(!err) {
      console.log("We are connected");
    }
    let dbo = db.db("E-portfolio");
    let Qualifications = dbo.createCollection("Qualifications");
    console.log("Qualifications collection created!");
    let Projects = dbo.createCollection("Projects");
    console.log("Projects collection created!");

    db.close();

});