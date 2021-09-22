const Sequelize = require('sequelize');
const db = require('../config/db');
const Movies = require('./Movies')

const Characters = db.define('character', {
    id: {
         type: Sequelize.INTEGER(11),
         autoIncrement: true,
         primaryKey: true
     },
    imagen: Sequelize.STRING,
    nombre: Sequelize.STRING(100),
    edad:Sequelize.INTEGER,
    historia: Sequelize.TEXT,
});



module.exports = Characters;