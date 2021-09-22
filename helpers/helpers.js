//definir generos peliculas de disney
const Genres = require('../models/Genres');
const Characters = require('../models/Characters')

const Movies = require('../models/Movies')
const Users = require('../models/Users')
const Usuario_Calificaciones_Peliculas = require('../models/Usuario_Calificaciones_Peliculas')

exports.crearGeneros = async () => {
    var agregar = []
    var generos = [
        'Accion',
        'Drama',
        'Aventura',
        'Romance',
        'Terror',
        'Comedia',
        'Musical',
        'Ciencia Ficcion',
        'Guerra'
    ]
    for (x in generos) {
        agregar.push({'nombre': generos[x]})
    }


   await Genres.bulkCreate(agregar, {
        fields: ["nombre"],
        updateOnDuplicate: ["nombre"]
    })


}

exports.establecerRelacionesDB = () => {
Characters.belongsToMany(Movies, {through: 'movie_characters'}) // personaje puede pertenecer a varias peliculas
Movies.belongsToMany(Characters, {through: 'movie_characters'}) // peliculas tienen varios personajes
Genres.belongsToMany(Movies, {through: 'movie_genres'}) // los generos pueden pertenecer a varias peliculas
Movies.belongsToMany(Genres, {through: 'movie_genres'})
//Movies.belongsToMany(Users , {through: 'movie_genres'}) // peliculas son calificadas por varios usuarios
//Users.belongsToMany(Movies , {through: 'movie_genres'}) // usuarios pueden calificar varias peliculas

Users.belongsToMany(Characters,{through:Usuario_Calificaciones_Peliculas})
Movies.belongsToMany(Users,{through:Usuario_Calificaciones_Peliculas})
Users.hasMany(Characters)
Characters.belongsTo(Users,{as:'CreadoPorUser'})
Users.hasMany(Movies)
Movies.belongsTo(Users,{as:'CreadoPorUser'})
}
