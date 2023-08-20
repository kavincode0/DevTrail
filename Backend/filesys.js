const fs = require("fs");

// Synchronous or Blocking
// text  = fs.readFileSync("new.txt", "utf-8");
//  text = text.replace("hello", "hey");
// console.log(text);

// fs.writeFileSync("new.txt", text);

// Asynchronous of Non-Blocking(callback is fired or when the function execution is completed then it runs)
let text = fs.readFile("new.txt", "utf-8", (err, data) =>{
    console.log(err, data);
});
console.log("hello world")//runs when executed
