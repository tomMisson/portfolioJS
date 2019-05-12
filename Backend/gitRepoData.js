let axios = require('axios');

async function getData()
{
    let response = await axios.get('https://api.github.com/users/tomMisson/repos').catch();
    response = response.data;
    return response;
} 

async function tableData()
{
    let data = await getData();

    let o = {};
    o["Projects"] = [];

    for(let i=0; i<data.length; i++)
    {
        o["Projects"].push(
        project = {
            "id": i,
            "name": data[i].name,
            "url": data[i].url,
            "desc": data[i].description,
            "lang": data[i].language,
            "forks": data[i].forks,
            "stars": data[i].stargazers_count
        });
    }

    return o;
}

tableData();
