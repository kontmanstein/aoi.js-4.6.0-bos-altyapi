var http = require("http");
http.createServer(function(req, res) {
  res.write("Canlıyım!");
  res.end();
}).listen(PORTUNUZ);
