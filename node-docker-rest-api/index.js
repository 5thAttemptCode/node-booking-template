const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()
app.use(bodyParser.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// Define a simple model
const Item = mongoose.model('Item', new mongoose.Schema({
  name: String,
  quantity: Number,
}))

// CRUD operations
app.get('/items', async (req, res) => {
  const items = await Item.find()
  res.json(items)
})

app.post('/items', async (req, res) => {
  const newItem = new Item(req.body)
  await newItem.save()
  res.status(201).json(newItem)
})

app.get('/items/:id', async (req, res) => {
  const item = await Item.findById(req.params.id)
  res.json(item)
})

app.put('/items/:id', async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(updatedItem)
})

app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})