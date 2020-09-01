var express       = require("express");
var router        = express.Router();




/*                                            Mongoose Schema                            */
var Corporate = require("../models/Corporate");
var Programs = require("../models/Programs");
var Volunteer = require("../models/Volunteer");
var General = require("../models/General");
var Newsletter = require("../models/Newsletter");


function model(type) {
  switch (type){
    case 'corporate':
      return Corporate;
      break;
    case 'programs':
      return Programs;
      break;
    case 'volunteer':
      return Volunteer;
      break;
    case 'general':
      return General;
      break;
    case 'newsletter':
      return Newsletter;
      break;
  }
}

router.get('/api/:type', function (req, res) {
  model(req.params.type).find({}, (err, found) => {
    if (err) {
      console.log(err)
    } else {
      res.send(JSON.stringify(found, null, 4));
    }
  })
})



router.get('/api/delete/:type/:id', function (req, res) {
  model(req.params.type).findByIdAndDelete(req.params.id, (err, deleted) => {
    if (err) {
      console.log(err);
    } else {
      res.send("deleted");
    }
  })
})



router.post('/api/:type', function (req, res) {
  var body = req.body;
  var incomplete = [];

  for (var keys in body) { //Checking for missing fields
    if (body[keys] == undefined || body[keys] == '') {
      incomplete.push(keys);
    }
  }

  if(!incomplete){
    model(req.params.type).create(body, (err, created) => {
      if (err) {
        console.log(err);
      } else {
        res.send('success');
      }
    })
  } else {
    res.send('Error: '+ incomplete.join(', ') +' are missing!')
  }

})




module.exports = router;
