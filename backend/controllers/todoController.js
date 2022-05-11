const asyncHandler = require("express-async-handler")

const getTodos = asyncHandler(async(req,res) => {
    res.status(200).json({message:"Get All Todos"})
})
const setTodo = asyncHandler(async(req,res) => {
    if(!req.body.todo){
        res.status(400)
        throw new Error("Please add a Todo")
    }
    console.log(req.body.todo)
    res.status(200).json({message:"Set Todo"})
})
const updateTodo = asyncHandler(async(req,res) => {
    res.status(200).json({message:`Update Todo with id - ${req.params.id}`})
})
const deleteTodo = asyncHandler(async(req,res) => {
    res.status(200).json({message:`Delete Todo with id - ${req.params.id}`})
})
module.exports = { getTodos, setTodo, updateTodo, deleteTodo }