const express = require("express")
const connectDB = require("./config/db")
const { errorHandler } = require("./middlewares/errorMiddleware")
require("dotenv/config")
connectDB()
const port = process.env.PORT || 3001
const app = express()
app.use(express.json())
app.use("/api/todos",require("./routes/todoRoutes"))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})