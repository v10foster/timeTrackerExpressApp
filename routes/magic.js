var express = require('express');
var router = express.Router();

var skillBarText = '<p>HTML</p><div class=/"container/"><div class=/"skills html/">90%</div></div>'

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('respond with magic');
  res.send(skillBarText);
});

module.exports = router;
