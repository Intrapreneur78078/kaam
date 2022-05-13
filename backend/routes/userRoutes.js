const { registerUser, loginUser, getUser } = require("../controllers/userController")
const { protect } = require("../middlewares/authMiddleware")
const router = require("express").Router()

router.post("/",registerUser)
router.post("/login",loginUser)
router.get("/me",protect,getUser)

module.exports = router 