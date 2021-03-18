const express = require('express');
const app = express();
const yaml = require('js-yaml');
const fs = require('fs');
const refParser = require('json-schema-ref-parser');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/docs/index.html');
});

app.get('/specification.yaml', function (req, res) {
  const topLevelSpecification = yaml.load(fs.readFileSync('specification.yaml', 'utf8'));

  refParser.dereference(topLevelSpecification, (error, fullSpecification) => {
    if (error) throw error

    res.set('Content-Type', 'application/x-yaml')
    res.send(
      yaml.dump(fullSpecification)
    );
  });
});

app.use(express.static(__dirname + '/docs'));

app.listen(8080, function () {
  console.log('listening on http://localhost:8080');
});
