'use strict'

const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const logger = require(path.resolve('config/logger'))
const express = require('express');

module.exports = function (app) {
  app.disable('x-powered-by')
  logger.info('load express config')
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.set('views', path.resolve('app/views'))
  app.set('view engine', 'pug');
  app.use(express.static(path.resolve('public')));
}
