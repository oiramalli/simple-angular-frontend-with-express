const express = require('express');
var request = require('request');

const app = express();
const port = 3000;

app.use(express.static('dist/frontend'));

app.get('/db-status', (req, res) => {
    var opts = {
        uri: 'http://estado-bd',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(opts, function (error, response) {
        if (error) { return res.send({ status: 'error', details: error }); }
        console.log(error, response.body);
        return res.send(response.body);
    });
});
app.all('/*', function (req, res, next) {
    ``
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('./dist/frontend/index.html', { root: __dirname });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})