'use strict'

const fs = require('fs')
const path = require('path')
const join = path.join
const express = require('express')

const config = require('./config/config')

const models = join(__dirname, 'app/models')
const port = process.env.PORT || 3000
const app = express()
const logger = require(path.resolve('config/logger'))
logger.level = config.logger.level || 'debug'

module.exports = app

// Bootstrap models
fs.readdirSync(models)
  .filter(file => ~file.indexOf('.js'))
.forEach(file => require(join(models, file)))

// Bootstrap configs
require('./config/routes')(app)
require('./config/express')(app)

app.listen(port)
logger.info('Express app started on port ' + port)
