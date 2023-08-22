const http = require('http')
const fs = require('fs')
const htmlcontent = fs.readFileSync('vi.html'); //define path of a file outside the folder

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(htmlcontent)
})

server.listen(80, '127.0.0.1', () =>{ //open local server to see content of html file(vi.html)
    console.log("listening on port 80")
})
function avg(arr){
    sum = 0;
    arr.forEach(element =>{
        sum += element;
    });
    return sum/arr.length;
}
// module.exports = { //modeule.exports is object
//     avg: avg,
//     name: "k", 
//     repo: "GitHub"
// }
// module.exports = avg; (change the name of required file to this function name)
// module.exports.name = "kav";(servinghtml.name)