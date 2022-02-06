var express = require ("express");
var app = express();
var mongoose = require("mongoose");

app.use(express.static(__dirname + '/public'));

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/reactdemo");
});

const port = process.env.PORT || 8080;

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://heroku_b1vf181k:57famg2vp6ge1v389b0fnc1dar@ds217548.mlab.com:17548/heroku_b1vf181k");

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

app.get("/maylandsmeadery", function(req, res){
  res.render("maylandsmeadery");
});

// app.get("/reactdemo", function(req, res){
//   // res.render("reactdemo/app");
//   res.render("/");
//   console.log("Connected to React");
//   // res.redirect("/reactdemo");
//   // res.sendFile(path.resolve(__dirname, '../reactdemo', 'app.js'));
// });

// Page not found
app.get("/:word", function(req, res){
  var word = req.params.word;
  res.render("notfound", {word: word});
})



app.listen(port);
console.log("Server started at port " + port);