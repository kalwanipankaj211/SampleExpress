var express = require('express');
var app = express();

var port = 7071;

//set 
// app.set('port', process.env.PORT || 3000)


app.get('/now', function (req, res,callback) {
    // var d  = new Date();
    // var newDate = {"date":d}
    // res.set('Content-Type', 'application/json');
    // callback(null,newDate)
	res.send("Hello World from aws!");
    // res.json(newDate);
    // res.send(d.getTime());
  })
  
app.listen(port);
// module.exports = app;
// app.listen(port);

console.log(`Running on http://localhost:${port}`);