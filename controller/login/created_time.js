const mysql = require('mysql');
const conn=require('../../config/db');

function created_time(req,res){
  conn.query(`select * from user_info`,async function(err,result,fields){
    if(err) throw err;
    data=await result;
    res.json(data);
  })
};

module.exports=created_time;
