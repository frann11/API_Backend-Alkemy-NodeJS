# Backend-Alkemy-NodeJS
Backend para challenge de Alkemy, utilizando NodeJS y Sequelize (MySQL) con operaciones CRUD

Requerimientos
-------------------
* NodeJS
* Sequelize

Modelo DB relacional
-------------------
![alt text](https://github.com/frann11/Backend-Alkemy-NodeJS/blob/main/relacionesDB.png?raw=true)

Relaciones
-------------------
* *Usuario* - Un usuario puede agregar o editar peliculas y personajes.
* *Pelicula/Serie* - Cada pelicula tiene uno o mas personajes y pertenece a uno o mas generos.
* *Personaje* - Un personaje puede aparecer en una o mas peliculas.
* *Genero* - Corresponde al genero de la pelicula, establecidas en la DB.
* *Genero_Pelicula/Series* - Tabla auxiliar relaciones M:M entre las pelicula y sus respectivos generos.
* *Personaje_Peliculas* - Tabla auxiliar relaciones M:M entre los distintos personajes y las distintas peliculas.


