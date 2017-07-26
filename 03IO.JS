var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var ar_SplitLines = buffer.toString().split('\n');
console.log(ar_SplitLines.length-1);
