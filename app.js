const express = require('express');
const app = express();
const routes = require('./routes.js');
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use('/', routes);
app.use(express.static('./assets/'))

app.listen(PORT, function () {
    console.log('Server listening on port 3001');
});
