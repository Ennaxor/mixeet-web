var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3120;

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2('927674196118-l6i2kvibbp67g63hf0unvcu40552cntq.apps.googleusercontent.com', '49tddGVHoBgsf_rQ1ETgJlLg', 'http://localhost:3000/users/signin');


//DEFINE LA CARPETA DESDE LA CUAL SE SIRVEN ARCHIVOS ESTATICOS (CSS, JS, IMGS, etc...)
//var static = express();
//app.use('/static', static);
//static.use(express.static('public')); 
app.use("/", express.static(__dirname+"/public"));

app.use(require('cookie-parser')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


http.listen(port, function(){
  console.log('listening on *:'+port);
});
