// ------ Requerimos express 
const express = require('express');
const app = express();
const path = require('path')

// ------ Rutas
const mainRouter = require('./routes/main');



const port = 3030;



// ------- Recurso estáticos
app.use(express.static('public'));

/* configura el motor de plantillas */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', mainRouter);

// ------- Servidor corriendo 
app.listen(3000, () => console.log('Server runnig'));
//app.listen(port, ()=>console.log('Servidor: http://localhost:'+port+'/'));