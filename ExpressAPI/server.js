const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/git-projects', async (req, res) => {
  let response = await axios.get('https://api.github.com/users/tomMisson/repos').catch();
    let data = response.data;

    let o = {};
    o['Projects'] = [];

    for(let i=0; i<data.length; i++)
    {
        o['Projects'].push(
        project = {
            "id": i,
            "name": data[i].name,
            "url": data[i].html_url,
            "desc": data[i].description,
            "lang": data[i].language,
            "forks": data[i].forks,
            "stars": data[i].stargazers_count
        });
    }

  res.json(o['Projects']);
});

app.get('/*', function (req, res) {
    res.send("<h1>API endpoint</h1>")
});

app.listen(3001);
