let http = require("http");
let uc = require("upper-case");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(uc.upperCase("Hello World !"));
    res.end();
  })
  .listen(8080);

// console.log("saluttt");
