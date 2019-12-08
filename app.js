const express = require('express')
const exphbs  = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

require('./mongoose/mongoose')
const appRouter = require('./routers/appRouter')

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, './public')

const app = express()
app.engine('.hbs', exphbs({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.static(publicDirectoryPath))
app.use(appRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})