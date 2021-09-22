const Movies = require('../models/Movies')
const Characters = require('../models/Characters')
const Genres = require('../models/Genres');
const moviesRoutes = require('../routes/moviesRoutes');

// Generos tienen ID -> pasar numero de ID del genero
// si se pasa un genero se mapea el ID 
// ------> me ahorra hacer una busqueda en la BD



//// agregar personaje
//// agregar pelicula a personaje
/// editar personaje
/// re-inscribir personaje
/// borrar personaje


exports.nuevaPeli = async (req, res) => {
    // const usuarioId = res.locals.usuario.id;
    // const proyectos = await Proyectos.findAll({where : { usuarioId }})
    //    res.send('Enviaste el Formulario');
    // Enviar a la consola lo que el usuario escriba
    //    console.log(req.body)

    // validar que tengamos algo en el input
    const {pelicula, genero, nombre} = req.body;

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
    //const genre = await Genres.findByPk(genero)
    var movie =  await Movies.findByPk({'titulo':pelicula}) || null
        var agregar = false
    // if (characters) {console.log(characters.length)} else{
    //     'no'
    
  //  console.log(verificar)
    // }
    if (!movie) {
        characters = await movie.create({'titulo':pelicula})
        agregar = true
    }
   
    // chequea si existe characters

    //si no existe:
  //  const characters = await Characters.create({'nombre': personaje}) ////// esta creando algo que ya existe
    // ////// busca si existe personaje
    // //// hacer relacion , si no existe ------> crear personaje con datos vacios
    // ///// poder pasar varios personajes a la peli
    const character = await Characters.create({nombre})
    if (agregar){ character.addMovie()} else{
        peli.setCharacter(characters)
    }

    res.json(peli)
} catch(err){
    console.log(err)
}
}