const express = require('express')
const routes = require('./routes')
const charactersRoutes = require('./routes/charactersRoutes')
const moviesRoutes = require('./routes/moviesRoutes')
const authRoutes = require('./routes/authRoutes')
const helpers = require('./helpers/helpers.js')

const db = require('./config/db')
const app = express()

require('dotenv').config({path: 'variables.env'})

require('./config/db')


//establece relaciones en la DB
helpers.establecerRelacionesDB()

//db.sync({force:true})
db.sync()
.then(() => helpers.crearGeneros()).catch(error => console.log(error)) // ingresa generos ya definidos
.then(() => console.log('conectado al servidor')).catch(error => console.log(error))



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', routes())

// crear personaje, ver personajes, ver personaje, editar personaje, eliminar personaje
app.use('/characters', charactersRoutes())

// crear pelicula, ver personajes, ver pelicula, editar pelicula, eliminar pelicula
app.use('/movies', moviesRoutes())

// crear usuario, loguear usuario , devuelve token para operaciones CRUD
app.use('/auth', authRoutes())

 const host = '0.0.0.0'
 const port = process.env.PORT
//const port = 5000

 const server = app.listen(port,host, () => {
//const server = app.listen(port, () => {
    console.log(`el servidor esta funcionando en puerto `, port)
})

module.exports = {
    app,
    server
}
