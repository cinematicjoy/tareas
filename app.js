"use strict"
//console.log("hola")

//declarar los paquetes con los que vamos a trabajar
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const indexRoutes = require('./routes/index')

//Inicializa el servidor
const app = express()

//Nos conectamos a la base de datos
mongoose.connect('mongodb+srv://NewJoyDB:JXQ4SGwqxD4dm5oM@clusterprueba-iay1m.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
//NewJoyDB pss: JXQ4SGwqxD4dm5oM
//mongoose.connect('mongodb+srv://Joyjoy:f4Ggx1bSFb6USK1G@cluster0-xnj1t.mongodb.net/MisCosas', { useNewUrlParser: true })

        .then(db => console.log("Base de datos conectada"))
        .catch(err => console.err(err))

//Config y especificaciones del servidor
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//permite posiciones post
app.use(express.urlencoded({extended: false}))

//Proporciona una ruta de inicio al servidor
app.use('/', indexRoutes)

//Arranca el servidor express + HTTP / express
app.listen(app.get('port'), function(){
    console.log(`El servidor en puerto ${app.get('port')}`)
})
