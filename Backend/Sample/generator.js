'use strict';

// Ponerlo en la raiz del proyecto

var fs = require('fs');
var app = require(__dirname + '/server/server');
var dataSource = app.dataSources.postgres;
var schema = 'public';

function makePromise(f, parent) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      f.call(parent, ...args, (err, ...data) => {
        if (err) return reject(err);
        resolve(data.length === 1 ? data[0] : data);
      });
    });
  };
}

var readFile = makePromise(fs.readFile, fs);
var writeFile = makePromise(fs.writeFile, fs);

function writeTables(tables, ds) {

  var dbName = ds.settings.name;

  // Crear cada archivo json
  return Promise.all(tables.map(data => {
    var table = data[Object.keys(data)[0]];
    console.log(JSON.stringify(table));
    console.log(table.name);
    table.properties = changeProperties(table.properties);
    return writeFile('./common/models/' + table.name + '.json', JSON.stringify(table, null, '\t'));
  }))

    // Editar archivo y agregar cada modelo
    .then(() => readFile('./server/model-config.json'))
    .then(JSON.parse)
    .then(conf => {
      for (let table of tables)
        conf[table[Object.keys(table)[0]].name] = { 'dataSource': dbName };
      return conf;
    })
    .then(conf => writeFile('server/model-config.json', JSON.stringify(conf, null, '\t')));
}

function changeProperties(properties) {
  let propertieFixed = {}
  Object.keys(properties).forEach(property => {
    propertieFixed[properties[property]["postgresql"]["columnName"]] = properties[property];
  });
  return propertieFixed;
}

// Consultar metadata
function getSchemas(ds) {
  var discoverSchemas = makePromise(ds.discoverSchemas, ds);
  console.log('Getting schemas');
  var dbName = ds.settings.database;
  console.log(dbName);

  return makePromise(ds.discoverModelDefinitions, ds)({ schema: schema })
    .then(tables => Promise.all(tables.map(t => discoverSchemas(t.name, { relations: true }))))
    .then(data => { ds.disconnect(); return data; });
}

Promise.resolve(dataSource)
  .then(ds => getSchemas(ds))
  .then(tables => writeTables(tables, dataSource))
  .catch(err => console.log(err));
