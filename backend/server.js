//Imports
const express = require("express")
const connectDB = require("./config/db")
const { errorHandler } = require("./middlewares/errorMiddleware")
//Initialization
require("dotenv/config")
connectDB()
const app = express()
//Middlewares
app.use(express.json())
app.use("/api/todos",require("./routes/todoRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
app.use(errorHandler)
//Listening...
const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})