
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

console.log(date);

const app = express();


// Use EJS documentation
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

var items = [];
var workItems = [];

app.get("/", function(req,res){
 let day  = date.getDay();

  res.render("list", {listTitle:day , newsListItems: items});

})

app.post("/", function(req, res){

  item = req.body.newItem;

  console.log(req.body);
  var title = req.body.list;
  console.log(title);
  if (req.body.list=="Work"){
    workItems.push(item)
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }




});


app.get("/work", function(req, res){


  res.render("list", {listTitle:"Work", newsListItems:workItems});
});

app.post("/work", function(req, res){
  let item = req.body.newItem;
  newItem.push(item);
  res.redirect("/work")
})


app.get("/about", function(req, res){
  res.render("about");
})




app.listen(3000, function()
{
  console.log("Server is Running");
})
