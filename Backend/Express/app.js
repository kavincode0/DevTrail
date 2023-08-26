const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//for serving static files
app.use('/static', express.static('static')) 

//set the template engine as pug
app.set('view engine', 'pug') 

//set the view directory for keeping pug
app.set('views', path.join(__dirname, 'views'))

// demo.pug endpoint for title and message
app.get("/demo", (req, res)=>{
    res.status(200).render('demo', {title:"Hey", message:'hello there'});
});
app.get("/", (req, res)=>{
    res.send("First app1 Express")
});
app.get("/about", (req, res)=>{
    res.send("This is about page of first app");
});
app.post("/about", (req, res)=>{
    res.send("This is post request about page of first app");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found");//status code is set to 404 like this
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
}) 