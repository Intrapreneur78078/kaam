const express = require("express")
const { errorHandler } = require("./middlewares/errorMiddleware")
require("dotenv/config")
const port = process.env.PORT || 3001
const app = express()
app.use(express.json())
app.use("/api/todos",require("./routes/todoRoutes"))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})