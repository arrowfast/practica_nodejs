const express = require('express');
const morgan = require('morgan');
// Initializations (inicialización) 
const app = express();

//Settings (Configuraciones)
app.set('port', process.env.PORT || 4000);

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
