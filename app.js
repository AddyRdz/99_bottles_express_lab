const express = require('express')

const app = express()
const port = 3000

// Configuration
app.set('view engine','ejs')

// Routes
app.get('/bottles/:number_of_bottles,(req,res)=>{
    // console.log(req.params)
    res.render('index.ejs')
})





// Start the server
app.listen(port, ()=>{
    console.log('Server is running on: 3000',port)
})
