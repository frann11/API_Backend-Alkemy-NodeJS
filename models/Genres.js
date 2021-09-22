const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../config/db');
const Movies = require('./Movies')

const Genres = db.define('genre', {
    id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
     },
    nombre: {type: Sequelize.STRING(100),
        },
    imagen: Sequelize.STRING,
   // pelicula: Sequelize.STRING(100)
    //estado: Sequelize.INTEGER(1)
});

//Genres.hasMany(model.movies)

module.exports = Genres;