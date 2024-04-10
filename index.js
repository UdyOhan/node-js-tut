
var fs = require("fs");
const { createServer } = require('node:http');



fs.readFile("pages/index.html", (err, inputD) => {
  console.log(inputD.toString());
  txt = inputD.toString();
})
const hostname = 'localhost';
const port = 8080;
const server = createServer((req, res) => {
  res.statusCode = 200;
  var url = req.url;

  
  if(url == "/"){
    fs.readFile("pages/index.html", (err, txt) => {
      console.log(txt.toString());
      res.write(txt.toString());
      res.end();
    })
  }
  else if(url == "/about"){
    fs.readFile("pages/about.html", (err,txt) => {
      console.log(txt.toString());
      res.write(txt.toString());
      res.end();
    })
  }
  else if(url == "/contact-me"){
    fs.readFile("pages/contact-me.html", (err,txt) => {
      console.log(txt.toString());
      res.write(txt.toString());
      res.end();
    })
  }
  else{
    fs.readFile("pages/404.html", (err,txt) => {
      console.log(txt.toString());
      res.write(txt.toString());
      res.end();
    })
  }

});

server.listen(port, hostname);
