const Sequelize = require('sequelize');
const mysql = require('mysql2')
const dotenv = require('dotenv') 

dotenv.config({path:".env"});

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    dialect:"mysql",
    host:process.env.DB_HOST
})



module.exports =sequelize;
