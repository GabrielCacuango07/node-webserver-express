//library express for generate the server 
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');
// set the server port at the moment it will upload to heroku or set normally default 3000
const port = process.env.PORT || 3000;

// use __dirname for forget and adapte the path in other  computer
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
//data for render the title of page and the name for capitalisize
    res.render('home', {
        nombre: 'GabRiEl cAcUaNGO'
    });
});

app.get('/about', (req, res) => {
//data for render the page only the title the year use javascript in /helpers
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});