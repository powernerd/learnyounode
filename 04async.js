var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, data) {
  var buffer = data;
  var ar_SplitLines = buffer.toString().split('\n');
  console.log(ar_SplitLines.length-1);
});
