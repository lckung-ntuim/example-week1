/**
 * @overview
 *
 * @author
 * @version 2014/04/26
 */

var http = require("http");
var port = 3000;
var request = require("request");
var url = "http://graph.facebook.com/NTU.ImWhatIM/photos?type=uploaded";

http.createServer(function (req, res) {
  res.writeHeader(200, {"Content-Type": "text/html"});
  
  var data = "<html><head><title>hello world</title></head><body>"
  request.get(url, function (err, body, response) {

    response = JSON.parse(response);
    response.data.forEach(function (val, idx) {
      data += "<img src='" + val.images[2].source + "'>";
    });
    
    data += "</body></html>";
    res.end(data);
  });

}).listen(port);

console.log("start server port: " + port);


