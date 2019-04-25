let conn = require('./db/connection');

async function findQualification(searchTerm){
    let response = dbo.collection("Qualifications").find({"Course":".*{$searchTerm}.*"})
    console.log(response);
}

findQualification("Dig");