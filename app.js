var express = require ("express");
var app = express();

var port = 3000;

app.use(express.static(__dirname + '/public'));

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
  
const PORT = process.env.PORT || port;

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

// Page not found
app.get("/:word", function(req, res){
  var word = req.params.word;
  res.render("notfound", {word: word});
})



app.listen(port);
console.log("Server started at port " + port);