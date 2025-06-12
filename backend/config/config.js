// Configuración para la API
const dotenv = require("dotenv")
const path = require("path")

module.exports = {
  port: process.env.PORT,
  dbConfig: {
    host: process.env.DB_HOST, 
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME 
  },
}
