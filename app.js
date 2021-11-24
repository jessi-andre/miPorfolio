const express = require('express');
const app = express();

const path = require('path')

const port = 3030;

//Rutas
const mainRouter = require('./routes/main');

//Recursos estaticos
app.use(express.static('public'));

/* configura del motor de plantillas */
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/', mainRouter);

//Servidor
app.listen(port, ()=>console.log('Servidor: http://localhost:'+port+'/'));