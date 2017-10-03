var express = require('express');
var router = express.Router();
var ProtoneCTRL = require('..//controllers/prservice.controller.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Post new Customer page
router.post('/newCust', function(req, res) {
  return ProtoneCTRL.create(req,res);
});

// Get a new customer
router.get('/getCust', function(req, res) {
  var account_no1 = req.query.account_no;
  console.log(account_no1);
  return ProtoneCTRL.getaCust(req,res,account_no1);
});

module.exports = router;
