var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.starterDS;
ds.automigrate('Users', function(err) {
  if (err) throw err;

  ds.disconnect();
});
