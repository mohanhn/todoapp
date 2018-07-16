const express = require('express')
const app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost/pradeep_todolist')

app.use(express.static('public'))
app.use(require('./server/todo-routes'))

app.listen(80, () => {
  console.log('Server is listening on port 80...')
})
