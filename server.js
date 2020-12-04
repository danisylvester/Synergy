const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/dist/Synergy'));

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/Synergy/index.html'));
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 8080);

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });

  console.log('Server is running on port...' + 8080)