var express = require ("express");
var app = express();
// var AOS = require("aos");

// import AOS from 'aos';
// AOS.init();

app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 9000;

app.set("view engine", "ejs");
app.use(express.static('styles'));
app.use(express.static('script'));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render('index');
  });

app.get("/mooncrystals", function(req, res){
  res.render('moonstone');
});

app.listen(port);
console.log("Server started at port " + port);