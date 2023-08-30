const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./home.pug')
const contact = fs.readFileSync('./contact.pug')

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/pug');
 if(url == '/'){
    res.end(home);
 }
else if(url == '/contact')
res.end(contact);
else{
    res.statusCode = 404;
}
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); //use npx kill-port 3000
  }); 