require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['healthlake'] = {};
AWS.HealthLake = Service.defineService('healthlake', ['2017-07-01']);
Object.defineProperty(apiLoader.services['healthlake'], '2017-07-01', {
  get: function get() {
    var model = require('../apis/healthlake-2017-07-01.min.json');
    model.paginators = require('../apis/healthlake-2017-07-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.HealthLake;
