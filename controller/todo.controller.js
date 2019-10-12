const todoService = require('../service/todo.service')

exports.getAllToDo =async function(req, res){
    console.log("controller.js is working")
    let result = await todoService.getAllToDo()
    res.send(result)
}

exports.deleteTodoById = async function(req, res){
    console.log("controller.ja is working")
    let result= await todoService.deleteTodoByID(req.params.id)
    console.log(req.params.id)
    res.send(result)
}
exports.postTodo = async function(req, res){
    console.log("controller.js is working")
    console.log("req.body=", req.body)
    let result = await todoService.postTodo(req.body)
    res.send(result)
}