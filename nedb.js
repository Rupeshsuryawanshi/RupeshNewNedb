const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
var Datastore=require('nedb');
var dataBase2= new Datastore('dataBase2.db');
dataBase2.loadDatabase();
app.post('/insert', (req, res) => {
    let user = req.body;
    dataBase2.insert({name:user.name,salary:user.salary},function (err, docs) {
        res.send({stetus:true,msg:"successfully"});
        })  })
app.post('/searchVal',(req,res)=>{
    dataBase2.find({ name: req.body.name }, function (err, docs) {
        res.send({stetus:true,msg:"successfully",data:docs});
      })
})
app.post('/del',(req,res)=>{
    dataBase2.remove({ name: req.body.name }, {}, function (err, numRemoved) {
    res.send({stetus:true,msg:"successfully"});
      });
})
 app.post('/update',(req,res)=>{
    dataBase2.update({ id: req.body.id }, { name: req.body.name}, {}, function (err, numReplaced) {
        res.send({stetus:true,msg:"successfully update"});
    })
 })
app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));