const Sequelize = require('sequelize');
const db = require('../config/database');

//define database for history table
const History = db.define("history", {
    id_history: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Unnamed Task"
    },
    timestamp: {
        type: Sequelize.INTEGER,
        allowNull : false,
        defaultValue : 0
    }
    }, 

    { 
    tableName : 'history',
    schema: 'public',
    freezeTableName: true
});

module.exports = History;