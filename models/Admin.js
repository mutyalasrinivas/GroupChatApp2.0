const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Admin = sequelize.define('Admin', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
    chatGroupId : {
        type : Sequelize.INTEGER,
        allowNul : false
    },
    userId : {
        type: Sequelize.INTEGER,
        allowNul : false
    }
}, {
    timestamps: false
});

module.exports = Admin;