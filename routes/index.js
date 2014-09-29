var express = require('express');
var router = express.Router();
var db = require('orchestrate')(process.env.ORCHESTRATE_KEY);

/* GET home page. */

function Index(req, res){
  res.render('index', { title: 'Express' });
}
function Admin(req, res){
  res.render('admin', {});
}
function Display(req, res){
  res.render('display', {name:req.query.name});
}
function PageGET(req, res){
  db.list('Page')
    .then(function (result) {
      res.setHeader('Content-Type', 'application/json');
      if(result.body.count >0){
        res.send(JSON.stringify(result.body.results));
      }
      else{
        res.end();
      }
    })
    .fail(function (err) {
      console.log("There was an error "+JSON.stringify(err));
    })
}
function findByName(req, res){
  console.log("Name is"+ req.query.name);
  db.search('Page', 'pageName:"'+req.query.name+'"')
    .then(function (result) {
      console.log("Made it "+JSON.stringify(result.body));
      res.send(result.body.results[0].value.pageText);
    })
    .fail(function (err) {
      res.end();
    })
}
function PageHTML(req, res){
  res.send(findByName(req.query.name));
}
function PagePOST(req, res){
  console.log(JSON.stringify(req.body));
  db.post('Page', req.body) 
  .then(function (result) {
    console.log("Worked");
  })
  .fail(function (err) {
    console.log("Failed");
  })
}
router.get('/', Index); 
router.get('/admin', Admin);
router.get('/Page', PageGET);
router.post('/Page',PagePOST);
router.get('/HTML',findByName);
router.get('/display', Display);

module.exports = router;
