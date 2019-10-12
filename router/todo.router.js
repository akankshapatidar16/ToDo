const express = require('express')
const todoController = require('../controller/todo.controller')
const router = express.Router()

router.get('/all', (todoController.getAllToDo))
router.delete('/:id', (todoController.deleteTodoById))
router.post('/add', (todoController.postTodo))


module.exports = router