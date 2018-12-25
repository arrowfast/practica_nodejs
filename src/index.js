const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// Initializations (inicialización) 
const app = express();

//Settings (Configuraciones)
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir : path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require ('./lib/handlebars')
}));
app.set('view engine','.hbs');

// Middlewares
app.use(morgan('dev'));

// Global Variables (Variables Globales)


//Routes (rutas)
app.use(require('./routes'));

// Public (Publica)

// Starting the server (Inicializacion del servidor)
app.listen(app.get('port'),() => {
    console.log('Server on port', app.get('port'));
});
