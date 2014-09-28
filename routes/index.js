var express = require('express');
var router = express.Router();
var db = require('orchestrate')('5f510b8f-c3d7-4d74-b63f-2ed30a8659ce');

/* GET home page. */

function Index(req, res){
  res.render('index', { title: 'Express' });
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
router.get('/Page', PageGET);
router.post('/Page',PagePOST);
router.get('/HTML',findByName);

module.exports = router;
