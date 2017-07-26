var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var type = '.'+process.argv[3];
var typlelen = type.length;

fs.readdir(folder, function(err, files) {
  if (err) return console.error(err);

  files.forEach(function (file) {
    if (path.extname(file) === type) {
      console.log(file);
    }
  });

  /*
  My natural solution was:
  for (var i=0; i<files.length; i++) {
    var startIndex = files[i].length - typlelen;
    if (files[i].substr(startIndex, typlelen) == type) {
      console.log(files[i]);
    }
  }
  */
});
