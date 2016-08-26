'use strict'

const path = require('path')

const redisOptions = require(path.resolve('config/config')).redis
const short = require(path.resolve('app/controllers/short'))
const express = require('express')

module.exports = function (app) {
  app.get('/', short.index)
  app.use('/healthcheck', require('api-health-check')())
}
