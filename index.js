const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');

const timeSheetRouter = require('./routes/timeSheet');
const indexRouter = require('./routes');

const logger = require('./middleware/logger');

const app = express();

//Template engines
app.engine('hbs', hbs({extname: 'hbs'}));
app.set('view engines', 'hbs');

//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Custom Middleware
app.use(logger);
app.use('/', indexRouter);

//Routes
app.use('/apis/timeSheet', timeSheetRouter);

app.listen(3000, () => {
    console.log('Listening to port 3000');
});