const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const {db} = require('./models');

const app = express();

//configuration middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '..', 'public')));

//SP application routing
app.get('/', (req, res, next) => {
    res.render('index.html');
})


//error-handling middleware
app.use((req,res, next) => {
    var err = new Error('not found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send(err.message || 'Oh no! Internal server Error');
});

//listening 
let port = 3000;

app.listen(port, () => {
    console.log('listening on port 3000');
    db.sync()
    .then(() => {
        console.log('Synchronated the database');
    })
    .catch((err) => {
        console.error('Trouble right here in River City', err, err.stack);
    });
});