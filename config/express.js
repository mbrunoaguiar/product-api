var express         = require('express');
var helmet          = require('helmet');
var load            = require('express-load');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var db			    = require('./../app/models');

module.exports = (rootDirectory) => {
    
    var app = express();
    
    // variável de ambiente
    app.set('port', 3000);
    app.set('models', db);
    app.set('root', rootDirectory + '/');
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept');

        next();
    });
    
    // header accept
    app.use((req, res, next) => {
        if (req.accepts('application/json')) {
            next();
        } else {
            res.sendStatus(415);
        }
    });
    
    // middleware
    app.use(helmet());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    
    // load modules
    load('controllers', {cwd: 'app'})
        .then('routes')
        .into(app);
    
    return app;
    
};