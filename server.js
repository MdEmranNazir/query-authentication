const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const fruitRouter = require('./routers/fruit')
// .env
dotenv.config()

// DBC
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true },
    () => console.log('connected to Db'))

// body parse
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/furit',fruitRouter)


app.get('/',(req,res) => res.send('<h1>Hello</h1>'))


// PORT 

app.listen(258,() => console.log('Server Up and Running'))

