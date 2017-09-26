'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');

var upload = multer({ dest: 'upload/'});
var type = upload.single('upfile');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', type, function (req, res, next) {
  var name = req.file.originalname;
  var size = req.file.size; 
  
  
  res.json({name, size}); 
  res.end();
})


app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
