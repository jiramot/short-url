'use strict'

const path = require('path')
const logger = require(path.resolve('config/logger'))
const redisConfig = require(path.resolve('config/config')).redis
const _ = require('underscore')
const redis = require("redis")
const uuid = require('node-uuid');
const bluebird = require('bluebird');

let client = redis.createClient(redisConfig)
bluebird.promisifyAll(redis.RedisClient.prototype);

exports.index = function (req, res, next) {
  let url = req.query.url
  res.json(req.query)
}

let generateShort = function(url){
  client.getAsync(url)
    .then(function(data){

    })
    .err
}