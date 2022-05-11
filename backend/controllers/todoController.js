const asyncHandler = require("express-async-handler")
 const Todo = require("../models/todoModel")

const getTodos = asyncHandler(async(req,res) => {
    const todos = await Todo.find()
    res.status(200).json(todos)
})
const setTodo = asyncHandler(async(req,res) => {
    if(!req.body.todo){
        res.status(400)
        throw new Error("Please add a Todo")
    }
    // console.log(req.body.todo)
    const todo = await Todo.create({
        todo: req.body.todo,
        // user: req.user.id,
      })
    res.status(200).json(todo)
})
const updateTodo = asyncHandler(async(req,res) => {
    const todo = await Todo.findById(req.params.id)

    if (!todo) {
      res.status(400)
      throw new Error('Todo not found')
    }
  
    // // Check for user
    // if (!req.user) {
    //   res.status(401)
    //   throw new Error('User not found')
    // }
  
    // // Make sure the logged in user matches the todo user
    // if (todo.user.toString() !== req.user.id) {
    //   res.status(401)
    //   throw new Error('User not authorized')
    // }
  
    const updatedGoal = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedGoal)})
const deleteTodo = asyncHandler(async(req,res) => {
    const todo = await Todo.findById(req.params.id)

    if (!todo) {
      res.status(400)
      throw new Error('Goal not found')
    }
  
    // // Check for user
    // if (!req.user) {
    //   res.status(401)
    //   throw new Error('User not found')
    // }
  
    // // Make sure the logged in user matches the todo user
    // if (todo.user.toString() !== req.user.id) {
    //   res.status(401)
    //   throw new Error('User not authorized')
    // }
  
    await todo.remove()
  
    res.status(200).json({ id: req.params.id })})
module.exports = { getTodos, setTodo, updateTodo, deleteTodo }