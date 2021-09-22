const Sequelize = require('sequelize');
const db = require('../config/db');

const Users = db.define('user', {
    id : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey:true,
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    //fechaCreacion: Sequelize.DATE,
    //calificacion: Sequelize.INTEGER
});

module.exports = Users;