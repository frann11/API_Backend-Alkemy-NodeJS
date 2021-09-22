const Sequelize = require('sequelize');
const db = require('../config/db');



const Movies = db.define('movie', {
    id : {
         type: Sequelize.INTEGER,
         autoIncrement:true,
         primaryKey:true,
     },
    titulo: {type: Sequelize.STRING,
        primaryKey:true,
    },
    imagen: Sequelize.STRING,
    fechaCreacion: Sequelize.DATE,
    calificacion: Sequelize.INTEGER
});


module.exports = Movies;