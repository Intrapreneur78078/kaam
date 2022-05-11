const { getTodos, setTodo, updateTodo, deleteTodo } = require("../controllers/todoController")

const router = require("express").Router()


// router.get("/",getTodos)
// router.post("/",setTodo)
router.route("/").get(getTodos).post(setTodo)
// router.put("/:id",updateTodo)
// router.delete("/:id",deleteTodo)
router.route("/:id").put(updateTodo).delete(deleteTodo)

module.exports = router