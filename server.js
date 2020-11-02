var express = require('express');
var app = express();
const path = require("path");
var nomeApp = process.env.npm_package_name;
app.use(express.static('./dist/ContasAPagar'));
const favicon = require("serve-favicon");

app.use(favicon(path.join(__dirname, 'src', 'favicon.ico')))
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/ContasAPagar/'});});

app.listen(process.env.PORT || 8080);

