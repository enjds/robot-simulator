var robotRouter = require('./routes/robot')
var express = require('express')
var api = express()

api.use(function (req, res, next) {
  console.log(`${req.method} request for ${req.url}`)
  next()
})
// Root level
api.get('/', function (req, res) {
  res.json({status: 200, message: 'Server up and running'})
})
// Routes for robot
api.use('/robot', robotRouter)

api.listen(3000)
console.log('Server running on port 3000')
module.exports = api
