var express = require('express');
var path = require('path');

var app = express();
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? (process.env.PORT) ? process.env.PORT : 8080 : 8080;
var publicPath = path.resolve(__dirname, './src');

app.use(express.static(publicPath));

// Always route the app through index.html
app.get('*', function (req, res){
  res.sendFile(publicPath + '/index.html');
})

app.listen(port, function () {
  console.log('Server running at http://localhost:' + port);
});