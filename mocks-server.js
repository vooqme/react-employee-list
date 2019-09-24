var express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  http = require('http'),
  path = require('path'),
  Sequelize = require('sequelize');


sequelize = new Sequelize('sqlite://' + path.join(__dirname, 'employees.sqlite'), {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'employees.sqlite')
});

Employee = sequelize.define('employees', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  position: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  }
});

sequelize.sync()
  .then(function () {
    Employee.truncate();
  })
  .then(function () {
    Employee.create({
      firstName: "Mark",
      lastName: "Benson",
      position: "Developer",
      description: "Handsome and smart"
    });

    Employee.create({
      firstName: "Bob",
      lastName: "Smith",
      position: "Developer",
      description: "Handsome and smart"
    });

    Employee.create({
      firstName: "John",
      lastName: "Draper",
      position: "Designer",
      description: "Handsome and smart"
    });

  }).catch(function (e) {
  console.log("ERROR SYNCING WITH DB", e);
});

var app = module.exports = express();
app.set('port', process.env.PORT || 8000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// EMPLOYEES API

app.route('/api/employees')
  .get(function (req, res) {
    Employee.findAll().then(function (employees) {
      res.json(employees);
    })
  })
  .post(function (req, res) {
    var employee = Employee.build(req.body);
    employee.save().then(function (employee) {
      res.json(employee);
    });
  });

app.route('/api/employees/:employee_id')
  .get(function (req, res) {
    Employee.findById(req.params.employee_id).then(function (employee) {
      res.json(employee);
    });
  })
  .put(function (req, res) {
    console.log('----');
    console.log(req.params.employee_id, req.body);
    console.log('----');
    Employee.findById(req.params.employee_id).then(function (employee) {
      employee.update(req.body).then(function (employee) {
        res.json(employee);
      });
    });
  })
  .delete(function (req, res) {
    Employee.findById(req.params.employee_id).then(function (employee) {
      employee.destroy().then(function (employee) {
        res.json(employee);
      });
    });
  });

// PRODUCTS API

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

if (isDeveloping) {

  app.get('*', function response(req, res) {
    res.end();
  });
} else {
  //app.use(express.static(__dirname + '/public'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
}

// Starting express server
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});