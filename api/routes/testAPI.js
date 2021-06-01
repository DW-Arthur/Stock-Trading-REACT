/*
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

//the router needs to be exported in order for Express to idenify the ports


module.exports = router;
*/


var express = require('express');
var app = express.Router();

app.get('/', function(req, res,next) {
  res.send('Backend is working');
});

let port = process.env.PORT;
if(port == null || port == "") {
 port = 3001;
}
module.exports = app

/*
app.listen(port, function() {
 console.log("Server started successfully");
});
*/
