var express = require('express');
var app = express();
var nomeApp = process.env.npm_package_name;
app.use(express.static('./dist/'+ nomeApp));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/' + nomeApp + '/'});});

app.listen(process.env.PORT || 8080);

