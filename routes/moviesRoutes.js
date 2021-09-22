const express = require('express')
const router = express.Router();
const moviesController = require('../controllers/moviesController')

module.exports = () =>{
    router.get('/',moviesController.nuevaPeli)
    return router
}

