# LEDES API OpenAPI Documentation

This is a work in progress to illustrate what is possible and does not represent the final form.

To get started

```
npm install
npm start
```

Then navigate to http://localhost:3001. Refresh to see any changes you've made to `openapi.yml`.

## Public Hosted version

A generated, static, publicly hosted version of this documentation can be found on Github Pages at https://apperio.github.io/ledes-api-docs/, which serves files in the `/docs` folder. To update this public static snapshot you will need to convert `openapi.yml` to json and commit to `docs/ledes.json`.

The conversion from yaml to json can be done by installing yamljs globally with

```
npm install -g yamljs
```

then running

```
yaml2json -p openapi.yml > docs/ledes.json
```


