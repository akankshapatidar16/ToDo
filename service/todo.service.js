const mongo = require('mongodb').MongoClient
const dburl = require('../config/database').database
const objectID = require('mongodb').ObjectID

exports.getAllToDo = async function(){
    try{
        console.log("bdurl", dburl)
        const client = await mongo.connect(dburl)
        let result = await client.db().collection("todo").find().toArray()
        console.log("check result")
        return result
    }
    catch(err){
        console.log("error found : service.js is not working")
    }
}

exports.deleteTodoByID = async function(todoId){
    try{
        console.log("dburl", dburl)
        const client = await mongo.connect(dburl)
        let query = {"_id" : objectID(todoId)}
        let result = await client.db().collection("todo").deleteOne(query);
        console.log("check result")
        return result
    }

    catch(err){
        console.log("error found: service.js is not working")
    }
}
exports.postTodo = async function (todoAdd){
    const client =await mongo.connect(dburl)
    console.log(todoAdd)
    let result = await client.db().collection("todo").insertOne(todoAdd , (err, res)=>{
        if(err)
            throw err
        console.log("todo insertde")
        return result    
        
    })
}