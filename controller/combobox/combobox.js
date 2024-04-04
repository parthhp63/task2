const router = require("express").Router();
const conn=require('../../config/db');
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')


// Combo Box design .... 6March..............
var p,name,type,v;
var query;
var result;
var msg;


router.get('/combobox',authorization.authorization,(req,res)=>{
    res.render('combobox_6march.ejs',{user:result,type:type,name:name,result:result,msg:''});
})

router.post('/combobox',(req,res)=>{
    p=req.body.id;
    v=p.split(',')
    name=v[0];
    type=v[1];

  query=`select option_master.name from select_master join option_master on select_master.select_id = option_master.select_id where 
  select_master.name ="${name}";`



  conn.query(query,(err,result,fields)=>{
    if(err) throw err;
    else if(result.length==0){
        res.render('combobox_6march.ejs',{user:result,type:type,name:name,result:result,msg:'invalid operation'});
    }
    else{
        res.render('combobox_6march.ejs',{user:result,type:type,name:name,result:result,msg:''});
    }
  })
})

module.exports=router;