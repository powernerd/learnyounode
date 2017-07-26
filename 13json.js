var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res) {
  if (req.method !== 'GET') {
    return res.end('send me a GET\n')
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })

  var requestURL = url.parse(req.url, true)
  var d = new Date(requestURL['query']['iso'])
  var obj = new Object()

  switch(requestURL['pathname']) {
    case '/api/parsetime':
      obj['hour'] = d.getHours()
      obj['minute'] = d.getMinutes()
      obj['second'] = d.getSeconds()
      break
    case '/api/unixtime':
      obj['unixtime'] = d.getTime()
      break
  }
  res.end(JSON.stringify(obj))

})

server.listen(process.argv[2])


/* Official

var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))

*/
