const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
  name: "Cordeiro", 
  email: "cord@gmail.com",
  password_hash: "iouijklghj123"
})

module.exports = routes;