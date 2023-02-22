const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


const routes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// routes
app.use(routes);

// statics files
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(app.get('port'), () => {
    console.log('Server en el puerto', app.get('port'))
});