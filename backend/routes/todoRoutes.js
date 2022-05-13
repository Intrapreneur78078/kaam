const { getTodos, setTodo, updateTodo, deleteTodo } = require("../controllers/todoController")
const { protect } = require("../middlewares/authMiddleware")

const router = require("express").Router()


// router.get("/",getTodos)
// router.post("/",setTodo)
router.route("/").get(protect,getTodos).post(protect,setTodo)
// router.put("/:id",updateTodo)
// router.delete("/:id",deleteTodo)
router.route("/:id").put(protect,updateTodo).delete(protect,deleteTodo)

module.exports = router