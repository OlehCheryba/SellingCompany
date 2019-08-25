const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const http       = require('http');
const app        = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, './')));



app.listen(3000, '0.0.0.0');