const hbs = require('hbs');


// helpers

//user a helper to get the year actual
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
// user a helper for capitalize a string recibed how parameter for example GabRIEL = Gabriel 
hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});