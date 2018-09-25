const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const app = express()
const router = express.Router()
const url = process.env.MONGODB_URI || "mongodb://pankaj:admin1pankaj@ds111113.mlab.com:11113/metric"
try {
    mongoose.connect(url, { useNewUrlParser: true })
} catch (error) {
    console.log(error)
}

let port = 5000 || process.env.PORT

routes(router)
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
app.use('/api', router)
app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})