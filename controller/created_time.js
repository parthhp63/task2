const mysql = require('mysql');

const connection=require('../config/db');

function created_time(req,res){
  connection.connection.query(`select * from user_info`,async function(err,result,fields){
    if(err) throw err;
    data=await result;
    res.json(data);
  })
};

module.exports=created_time;
