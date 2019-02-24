const routes = require('express').Router();

routes.use('/', () => {
  console.log("routes working");  
})

module.exports = routes;