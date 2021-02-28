const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const router = require('../router')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

const templatePath = path.join(__dirname, '../views')
const env = nunjucks.configure([templatePath], {
    watch: true,
    autoescape: true,
    express: app
})

router.configure(app)

module.exports = app