var express = require('./config/express');
var app = express(__dirname);

// start server
app.get('models').sequelize
  //.sync({ force: true})
  .sync()
  .then(() => {
      
    // start server
		var server = app.listen(process.env.PORT || 8080, () => {
		  var host = server.address().address;
		  var host = '127.0.0.1';
		  var port = server.address().port;
		
		  console.log('App listening at http://%s:%s', host, port);
		});	

});