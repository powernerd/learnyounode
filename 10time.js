var net = require('net')
var server = net.createServer(function (socket) {
  var d = new Date()
  var year = d.getFullYear()
  var month = '0'+(d.getMonth()+1).toString()
  var date = '0'+d.getDate().toString()
  var hour = '0'+d.getHours().toString()
  var minutes = '0'+d.getMinutes().toString()
  socket.end(year+'-'+month.slice(-2)+'-'+date.slice(-2)+' '+hour.slice(-2)+':'
  +minutes.slice(-2)+'\n')
})

server.listen(process.argv[2])


/* Official solutuion
var net = require('net')

 function zeroFill (i) {
   return (i < 10 ? '0' : '') + i
 }

 function now () {
   var d = new Date()
   return d.getFullYear() + '-' +
     zeroFill(d.getMonth() + 1) + '-' +
     zeroFill(d.getDate()) + ' ' +
     zeroFill(d.getHours()) + ':' +
     zeroFill(d.getMinutes())
 }

 var server = net.createServer(function (socket) {
   socket.end(now() + '\n')
 })

 server.listen(Number(process.argv[2]))

*/
