var express = require('express')
var app = express()
var Users = require('./users.js')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/user', function (req, res) {
  Users.find(function (err, users) {
    if (err) {
      console.error(err)
    }
    else{
      console.log(users)
    }
  })
})

app.delete('/delete/user/:id', function (req, res) {
  var id = req.params.id
  Users.find({id: id}).remove(function (err) {
    if (err) console.error(err)
  })
})

app.post('/newuser', function (req, res) {
  var user = new Users({id: req.body.id, username: req.body.username, name: req.body.name, position: req.body.position})

  user.save(function (err) {
    if (err) console.error(err)
  })
})

app.get('/user/:id', function (req, res) {
  var id = req.params.id
  Users.findOne({id: id}, function (err, user) {
    if (err) {
      console.error(err)
    }
    else {
      console.log(user)
    }
  })
})

var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Start => http://%s:%s', host, port)
})
