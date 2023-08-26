const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//Express specific
app.use('/static', express.static('static')) 
app.use(express.urlencoded())//middleware helping form data to render to express

//Pug specific
app.set('view engine', 'pug') //set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //set the view directory for keeping pug

//Endpoints
app.get('/', (req, res)=>{
    const con ="Buy our subscription 50% flat/-"
    const params = {'title':"Random Gym", "content": con}
 res.status(200).render('index1.pug', params);
})
app.post('/', (req, res)=>{
    console.log(req.body)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index1.pug', params);
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
}) 