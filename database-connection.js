const environment = "development"
const configs = require("./knexfile.js")
const dbConfig = configs[environment]
const knex = require("knex")

module.exports = knex(dbConfig)
