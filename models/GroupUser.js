const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const GroupUser = sequelize.define('GroupUser', {
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

module.exports = GroupUser;