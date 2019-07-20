//Packages
const express = require('express');
const axios = require('axios');
const app = express(); 

//Helpers
const bingSuggestApi = 'https://api.bing.com/osjson.aspx?query=';
const port = 4000;

//Set Headers
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Sending request for suggestions service
app.get('/:searchTerm', async (req, res) => {
    try {
        const searchTerm = req.params.searchTerm;
        const response = await axios.get(bingSuggestApi + `${searchTerm}`);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Unexpected Error');
    }
});
//Open connection
app.listen(port, () => console.log(`Server listening on port ${port}!`));