let express = require('express');
let app = express();
let yaml = require('yamljs');
let fs = require('fs');
let refParser = require('json-schema-ref-parser');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/local.html');
});

app.get('/openapifile', function (req, res) {
  fs.readFile('openapi.yml', 'utf8', function (err, data) {
    if (err) throw err;
    let json = yaml.parse(data);
    refParser.dereference(json, function (err, schema) {
      if (err) {
        console.error(err);
      } else {
        res.send(schema);
      }
    });
  });
});

app.listen(3001, function () {
  console.log('listening on http://localhost:3001');
});
