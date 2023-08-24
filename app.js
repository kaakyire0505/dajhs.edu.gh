const express = require('express')
const app = express()


// ? database
const db = require('./config/db')

// ? view engine
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)
app.set('view engine', 'ejs')

// ? body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//? session

// ? public folder
app.use(express.static('public'))

// ? routes
app.use('/', require('./routes/pages'))

// ? server config
const dotenv = require('dotenv')
dotenv.config()
const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`app runing on ${process.env.port}...`)
})
