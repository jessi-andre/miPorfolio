const express = require ('express');
const path = require ('path');
const app = express();


app.use(express.static('public'));

/* configura del motor de plantillas */
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.listen(3030, () => console.log('server running') )
