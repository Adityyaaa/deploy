require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('Hello from test!')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login!</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h1>Carry Minati!</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})