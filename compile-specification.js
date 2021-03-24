const fs = require('fs');
const refParser = require('json-schema-ref-parser');
const yaml = require('js-yaml');

const topLevelSpecification = yaml.load(fs.readFileSync('specification.yaml', 'utf8'));

refParser.dereference(topLevelSpecification, (error, fullSpecification) => {
  if (error) throw error;

  fs.writeFileSync('docs/specification.yaml', yaml.dump(fullSpecification), 'utf8');
});
