const routers = require("express").Router()

const servicesRouter = require("./service")

routers.use('/', servicesRouter)

module.exports = routers;