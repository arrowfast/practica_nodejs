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
app.use(express.urlencoded({extended: false})); // aceptar desde los formularios datos
app.use(express.json()); // aceptar datos json 

// Global Variables (Variables Globales)
app.use((req, res, next)=>{ // middleware
    next();
});

//Routes (rutas)
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
// Public (Publica)
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server (Inicializacion del servidor)
app.listen(app.get('port'),() => {
    console.log('Server on port', app.get('port'));
});
