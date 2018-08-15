var express = require('express')
var robotRouter = express.Router()
// Checks whether robot is outside the table
robotRouter.use('/', function (req, res, next) {
  // TODO
  console.log('Check robot if outside the table')
  next()
})

robotRouter.post('/place', function (req, res) {
  res.json({status: 200, message: 'place robot to specific position'})
})

robotRouter.post('/move', function (req, res) {
  res.json({status: 200, message: 'move robot forward'})
})

robotRouter.post('/rotate', function (req, res) {
  res.json({status: 200, message: 'rotate robot left or right'})
})

robotRouter.post('/report', function (req, res) {
  res.json({status: 200, message: 'report robot\'s current position'})
})
module.exports = robotRouter
