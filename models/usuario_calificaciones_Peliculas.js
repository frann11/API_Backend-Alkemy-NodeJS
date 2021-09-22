const Sequelize = require('sequelize');
const db = require('../config/db');
const Movies = require('./Movies')


const Usuario_Calificaciones_Peliculas = db.define('user_Movie_Scores', {
    // id : {
    //     type: Sequelize.UUID,
    //     defaultValue: Sequelize.UUIDV4,
    //     primaryKey:true,
    // },
    userId:{ type: Sequelize.INTEGER},
    movieId: Sequelize.INTEGER,
    calificacion: {type: Sequelize.INTEGER,
        default:0,
        validate:{
            min:1,
            max: 5
        }
    },  
});

Usuario_Calificaciones_Peliculas.addHook('afterSave', (Movies) => {

} )

module.exports = Usuario_Calificaciones_Peliculas;