var express = require("express");
const e = require("express");
var app = express();
var port = 3000;
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var users = [
  { task: 1, work: "Cooking rice" },
  { task: 2, work: "Learing code" },
  { task: 3, work: "Workout" }
];
app.get("/todos", (req, res) =>
  res.render("index", {
    users: users
  })
);
app.get("/todos/task", function(req, res) {
  var q = req.query.q;
  var findKey = users.filter(function(user) {
    return user.work.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render("index", {
    users: findKey,
    valued: q
  });
});
app.get("/todos/create",function(req,res){
  res.render('create')
})
app.post("/todos/create",function(req,res){
  users.push(req.body)
  res.redirect("/todos")
})
app.listen(port, function() {
  console.log("Server listening on port " + port);
});
