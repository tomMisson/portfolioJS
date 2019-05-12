const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.static(path.join('../Frontend/', 'build')));

app.get('/api/git-projects', async function (req, res) {
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
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3001);
