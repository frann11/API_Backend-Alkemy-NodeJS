// const db = require("../config/db");
const Movies = require('../models/Movies')
const Characters = require('../models/Characters')
const Genres = require('../models/Genres');
const moviesRoutes = require('../routes/moviesRoutes');
// const Tutorial = db.tutorial;
// const Tag = db.tag;

//// agregar pelicula -----> con o sin personajes
//// agregar personajes a pelicula
/// editar pelicula
/// re-hacer pelicula
/// borrar pelicula



exports.nuevaPeli = async (req, res) => {
    // const usuarioId = res.locals.usuario.id;
    // const proyectos = await Proyectos.findAll({where : { usuarioId }})
    //    res.send('Enviaste el Formulario');
    // Enviar a la consola lo que el usuario escriba
    //    console.log(req.body)

    // validar que tengamos algo en el input
    const {titulo, genero, personaje} = req.body;

    // let errores = [];
    // //console.log(nombre)
    // if(!titulo){
    //      errores.push({'texto' : 'Agrega un titulo al Proyecto'})
    // }
    // si hay errores
    // if(errores.length > 0){
    //      res.json({'error':errores.texto})
    //      } else {
    //const genre = await Genres.create({nombre: genero}) // //////// GENERO YA TIENE QUE ESTAR CREADO Y DEFINIDO EN UNA LISTA
    try {
    const genre = await Genres.findByPk(genero)
    var characters =  await Characters.findByPk(personaje) || null
    console.log(characters)
    var agregar = false
    // if (characters) {console.log(characters.length)} else{
    //     'no'
    
  //  console.log(verificar)
    // }
    if (characters === null) {
        console.log('no entro')
        characters = await Characters.create({'nombre': personaje})
        agregar = true
    }
   
    // chequea si existe characters

    //si no existe:
  //  const characters = await Characters.create({'nombre': personaje}) ////// esta creando algo que ya existe
    // ////// busca si existe personaje
    // //// hacer relacion , si no existe ------> crear personaje con datos vacios
    // ///// poder pasar varios personajes a la peli
    
    var peli = await Movies.create({titulo})
    var id =  await Movies.findByPk(titulo)
    if (agregar){ peli.addCharacter(characters.id,id)}
    //  else{
    //     peli.setCharacter([characters]) 
    //     characters.setMovie(peli)
    // }
    ///// agrega personaje a pelicula y pelicula a personaje

    res.json(peli)
} catch(err){
    console.log(err)
}
   
    // ///// agrega relacion con el personaje
    // ////// se agrega genero -> tira error si el genero no se encuentra
    //genre.addMovie(titulo)
    //peli.addGenre(genero)
    //const genero = await Genres.findByPk(genero)
    //console.log(generoA)
    //peli.setGenre([generoA])

    // movies.addCharacters()
    //
}
// }
