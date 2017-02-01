var Sequelize = require('sequelize')

var states = require('./models/usa_states')
var chance = require('chance').Chance()
var memberTypes = require('./member-types')
var cors = require('cors')
var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
var md5 = require('blueimp-md5')
var moment = require('moment')
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

var sql = new Sequelize('olweg', 'root', 'shell', {
  host: 'localhost',
  dialect: 'mariadb',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

var Member = sql.define('member', {
    type: Sequelize.STRING,
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    country: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING
},{
  classMethods: {
    associate: function (models) {
      Member.belongsToMany(models.Genre, {through: 'GenreMember'})
    }
  }
})

var Genre = sql.define('genre', {
  name: Sequelize.STRING
});

sql.sync({force: true}).then(function () {

  ['ROCK','RAP','HIPHOP','R&B','BLUES'].map(function (g) {
    Genre.create({name: g});
  })
}).then(function () {

    for (let i=1; i < 10; i++) {
      // var aid = chance.integer({min:0, max: LocationArr.length})

      Member.create({
        name: chance.first(),
        type: chance.integer({min:1,max: memberTypes.length}),
        address: chance.address(),
        country: 'USA',
        city: chance.city(),
        state: chance.state(),
        zip: chance.zip()
      })
    }

})

app.get('/states.json', function (req, res) {
  res.json(states)
})

app.get('/members.json', function (req, res) {
  Genre.findById(1).then(function (d) {
    console.log(d)
  })
  Member.findAll({include: [{genres: {attributes:['name']}}]}).then(function (r) {
    res.json(r)
  })
})

app.get('/genres.json', function (req, res) {
  Genre.findAll().then(function (r) {
    res.json(r)
  })
})

app.get('/locations.json', function (req, res) {
  Location.findAll().then(function (r) {
    res.json(r)
  })
})

var port = process.env.PORT || 3000

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port)
})
