const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`${C:/Users/AnaLuizaBohrer/source/repos/ContasAPagar}/dist/${nomeApp}`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${C:/Users/AnaLuizaBohrer/source/repos/ContasAPagar}/dist/${nomeApp}/index.html`));
});

app.listen(process.env.PORT || 8080);