require('dotenv').config()
const express = require("express")
const app = express()

// Middleware for parsing JSON bodies
app.use(express.json())

const PORT = process.env.PORT || 3000

// Routes
const usersRouter = require("./routes/getUsers")
app.use("/appointments", usersRouter)

app.get("/api/health", (req, res) => {
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})