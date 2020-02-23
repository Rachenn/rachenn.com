var express = require ("express");
var app = express();
var mongoose = require("mongoose");

app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 9000;

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://heroku_b1vf181k:57famg2vp6ge1v389b0fnc1dar@ds217548.mlab.com:17548/heroku_b1vf181k");

app.set("view engine", "ejs");
app.use(express.static('styles'));
app.use(express.static('script'));
app.use(express.static("public"));

// DATABASING
var workSchema = new mongoose.Schema({
	name: String,
	image: String,
	link: String
});

var work = mongoose.model("work", workSchema);

var test = new work ({
	name: "Mrs Norris",
	image: "image.com",
	link: "google.com"
})

test.save(function(err, work){
	if(err){
		console.log("MAYDAY");
	}
	else {
		console.log("Cat saved!");
		console.log(work);
	}
});
////////////////////////////////////////////
app.get("/", function(req, res){
  res.render('index');
  });

app.get("/mooncrystals", function(req, res){
  res.render('moonstone');
});

app.get("/maylandsmeadery", function(req, res){
  res.render("maylandsmeadery");
})

app.get("/*", function(req, res){
  res.send("You lost?");
})

app.listen(port);
console.log("Server started at port " + port);