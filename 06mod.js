var mymodule = require('./mymodule.js');

var folder = process.argv[2];
var type = process.argv[3];
var typlelen = type.length;

mymodule(folder, type, function(err, data) {
  if (err) {
    console.log('Error: '+err);
  } else {
    data.forEach( function (item) {
      console.log(item);
    });
  }
});
