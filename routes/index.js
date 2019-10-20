let express = require('express');
let router = express.Router();
let fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let trackList = fs.readdirSync('./public/Audio');
  console.log(trackList);
  res.render('index', { title: 'Boomer Dance', trackList : trackList });
});


module.exports = router;
