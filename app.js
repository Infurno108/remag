var express = require("express");
var app = express();

app.use(express.static("public"));

var server = app.listen(3000, function () {
  console.log("Initing server on port 3000");
  var host = server.address().adress;
  var port = server.address().port;
  console.log("Server is running on http://%s:%s", host, port);
});
