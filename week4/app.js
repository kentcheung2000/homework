const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const cohortsRouter = require("./routes/cohorts");

const knex = require("./db/client");

const app = express();

// app.use: use this function to mount middleware
app.use(express.urlencoded({
    extended: true
}));

app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method
        return method;
    }
    // method override will set the HTTP verb to whatever is returned inside of this callback
    // We use this if we want to use the HTTP verbs DELETE, PATCH, PUT because HTML forms
    // Do not support these verbs
}))

app.use(cookieParser()); // cookie-parser middleware will look for cookies sent through the headers of
// a request and create a req.cookies object that houses the cookie data

console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));









app.set('view engine', 'ejs'); // here we are telling express to render tempaltes using ejs

app.use("/cohorts", cohortsRouter);

const PORT = 4545;
const ADDRESS = 'localhost';

app.listen(PORT, ADDRESS, () => {
    console.log(`Express Server started on ${ADDRESS}:${PORT}`);
});