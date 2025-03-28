require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home',(req,res)=>{
    res.send('<h1>This is Home page</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>This is about page</h1>')
})

app.get('/contact',(req,res)=>{
    res.send('<h1>This is contact page</h1>')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})