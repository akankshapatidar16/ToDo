const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const todo = require('./router/todo.router')
const app = express()
const port = 4000

app.use(bodyParser.json())
useNewUrlParser: true
app.use('/todo', todo)

app.listen(port, ()=>console.log("listeing on port 4000"))
