var express = require('express');
var app = express();
var cors=require('cors');
var fs=require('fs');
app.use(cors());
app.get('/:long/:lat', function(req, res) {
  fs.appendFile('log.txt', 'New Longitude -'+ req.params.lat +' and New Latitude -'+ req.params.long +' at '+new Date()+"\r\n", function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});
app.listen(5000);