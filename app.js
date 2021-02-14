const express = require('express');
const app = express();
const path = require('path');
const api = require('./routes/api');

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public/about')));


app.use('/', api);


app.listen(8080);