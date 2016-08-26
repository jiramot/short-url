'use strict'

const fs = require('fs')
const path = require('path')
const join = path.join
const express = require('express')
const mongoose = require('mongoose')
const mockgoose = require('mockgoose')
const config = require('./config/config')

const models = join(__dirname, 'app/models')
const port = process.env.PORT || 3000
const app = express()
const logger = require(path.resolve('config/logger'))
logger.level = config.logger.level || 'debug'

module.exports = app

// Use native promises
mongoose.Promise = global.Promise

// Bootstrap models
fs.readdirSync(models)
  .filter(file => ~file.indexOf('.js'))
.forEach(file => require(join(models, file)))

// Bootstrap configs
require('./config/routes')(app)
require('./config/express')(app)

if (app.get('env') === 'test') {
  mockgoose(mongoose)
  mongoose.connect(config.db)
  listen()
} else {
  connect()
    .on('error', logger.error)
    .on('disconnected', connect)
    .once('open', listen)
}

function listen () {
  app.listen(port)
  logger.info('Express app started on port ' + port)
}

function connect () {
  return mongoose.connect(config.db.uri, config.db.options).connection
}
