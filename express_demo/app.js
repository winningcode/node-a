var express = require('express')
var bodyParser=require('body-parser')
var logger=require('./logger')
const mongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017';
var dbname="julydb";
var app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger)
/* app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
}) */
 
app.get('/name/:uname',function(req,res){
  res.send('Hello !!!'+req.params.uname)

})
 app.get('/login',function(req,res){
   console.log(req.query)
 if( (req.query.uname == 'shilpa' && req.query.pass == '1234') ||(req.query.uname=='system' && req.query.pass == '111')){
   res.send('Login is successfull');
 } else {
  res.send('Unauthorised user');
 }
});

 app.post('/login_post',function(req,res){
  //console.log(req.body)
  mongoClient.connect(url,function(err,client){
    if(err) console.log("Unable to connect to mongodb server")
    console.log("Connected to mongodb server!!!");
    db=client.db(dbname);
    db.collection('empData').find({name:req.body.uname,password:req.body.password}).toArray(function(err,users){
      if(err) console.log(err)
      if(users.length!=0) {
      res.send('Login is successfull');
      } else {
      res.status(401).send("<h1 style='color:red'>Unauthorised user</h1>");
      }
     })
    client.close();
   }) 
 });
app.get('/location',function (req, res) {
    var loc={
        facility:'BDC8',
        tower:'D'
    }
    res.send(loc)
  })

  app.get('/contact',function (req, res) {
    var phone_num=[43545456,9885654654];
    res.send(phone_num);
  })

  app.post('/',function (req, res) {
      res.send('Post method is called');
  })
app.listen(3000,function(){
  console.log("server is listening!!!")
})