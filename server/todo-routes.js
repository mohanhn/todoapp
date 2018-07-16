var express = require('express')
var router = module.exports = express.Router()
const Todo = require('../models/Todo')

router.post('/add-todo', (req, res) => {
  const {content} = req.body
  console.log(req.body);
  if (!content) return res.send('Please send the content.')
  const new_todo = new Todo({content})
  new_todo.save((err, todo) => {
    if (err) return res.status(500).send(err)
    res.send({ status: 'success', todo })
  })
})

router.get('/get-todos', (req, res) => {
  Todo.find({}, (err, todos) => {
    res.send(todos)
  })
})

router.post('/delete-todo', (req, res) => {
  Todo.deleteOne({ _id: req.body._id }, function (err) {
  if (err) return res.send('error happened.')
  res.send({ status: 'success' })
  });
})
