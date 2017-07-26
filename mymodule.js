/*
These four things are the contract that your module must follow.

  1. Export a single function that takes exactly the arguments described.
  2. Call the callback exactly once with an error or some data as described.
  3. Don't change anything else, like global variables or stdout.
  4. Handle all the errors that may occur and pass them to the callback.
*/
var fs = require('fs');
var path = require('path');

module.exports = function (folder, type, callback) {
  var data = new Array();

  fs.readdir(folder, function(err, files) {
    if (err) return callback(err);
    files.forEach(function (file) {
      if (path.extname(file) === '.'+type) {
        data.push(file);
      }
    });
    return callback(null, data);
  });
};
