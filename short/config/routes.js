'use strict'

const path = require('path')

const redisOptions = require(path.resolve('config/config')).redis
const healthcheck = require(path.resolve('app/controllers/healthcheck'))
const short = require(path.resolve('app/controllers/short'))
const express = require('express')

module.exports = function (app) {
  app.get('/', short.index)
  app.get('/healthcheck', healthcheck.check)
}
