const express = require("express")
const path = require("path");
const fs = require("fs")
const app = express()
const port = 80

// Express specific
app.use(express.static('static'))//serving static files
app.use(express.urlencoded())

// Pug specific
app.set('view engine', 'pug')//set the template engine as pug
app.set('views', path.join(__dirname, 'views'))//set the views directory

//Endpoints
app.get('/', (req, res)=>{
    // const params = {'title':""}
 res.status(200).render('home.pug');
})
app.get('/contact', (req, res)=>{
    // const params = {'title':""}
 res.status(200).render('contact.pug');
})
// app.post('/', (req, res)=>{
//     console.log(req.body)
//     // const params = {}
//     res.status(200).render('index.pug');
// })

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
}) 