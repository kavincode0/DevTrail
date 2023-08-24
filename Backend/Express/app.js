const express = require("express");
const app = express();
const port = 80;

app.use('/static', express.static('static'))
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