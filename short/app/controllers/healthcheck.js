'use strict'

const mongoose = require('mongoose')

exports.check = function (req, res, next) {
  require('api-health-check')({
    mongoose: function () {
      return {mongoose: mongoose.connection.readyState};
    }
  })(req, res, next)
}