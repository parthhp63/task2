const router = require("express").Router();
const conn=require('../../config/db');
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')
// Dyanamic Query search 29feb...


var q;
var total_records;
var limit_dynamicquery =40;
var quer;
var field_name;
var quer2;


var q2;


router.get('/dynamicquery',authorization.authorization,(req,res)=>{
    res.render('dynamicquery1.ejs');
});

router.post('/dynamicquery',(req,res)=>{
     q=req.body.qr;  
      q2=`${q}`;
      console.log(q2);
      
    console.log(q);
    quer=`${q} limit  ?, ?`
    
    current=0;
    conn.query(q2,(err,result)=>{
      if(err){
        res.render('dynamicqueryerror.ejs');
      }
      else{
       total_records=result.length;
       console.log(total_records);
      }
    })
    conn.query(quer,[current,limit_dynamicquery],function(err,result,fields) {
       if(err){
         res.render('dynamicqueryerror.ejs');
       }
       else{
    let currentno=(current/60)+1;
     res.render('dynamicquery2.ejs',{result,fields,currentno:currentno,total_records:total_records});
    }
   });
 
})

router.get('/firstp_dynamicquery',authorization.authorization,(req,res)=>{
 
    // console.log(q);
    quer=`${q} limit ?, ?`
    
    current=0;
    conn.query(quer,[current,limit_dynamicquery],function(err,result,fields) {
       if(err) {
        res.render('dynamicqueryerror.ejs');
      }
       else{
    let currentno=(current/40)+1;
    console.log(quer);
     res.render('dynamicquery2.ejs',{result,fields,currentno:currentno,total_records:total_records});
    }
   });
    })


router.get('/nextp_dynamicquery', authorization.authorization,(req,res)=>{
    current+=40;
    quer=`${q} limit ?, ?`
    conn.query(quer,[current,limit_dynamicquery],function(err,result,fields){
        if(err) {
          res.render('dynamicqueryerror.ejs');
        }
        else{
            let currentno=(current/40)+1;
            console.log(quer);
     res.render('dynamicquery2.ejs',{result,fields,currentno:currentno,total_records:total_records});
        }
    })

})


router.get('/previousp_dynamicquery',authorization.authorization, (req,res)=>{
    current-=40;
    quer=`${q} limit ?, ?`
    conn.query(quer,[current,limit_dynamicquery],function(err,result,fields){
        if(err){
          res.render('dynamicqueryerror.ejs');
        }
        else{
            let currentno=(current/40)+1;
            console.log(quer);
     res.render('dynamicquery2.ejs',{result,fields,currentno:currentno,total_records:total_records});
        }
    })
})

router.get('/lastp_dynamicquery',authorization.authorization, (req,res)=>{
    total_records;
    if(total_records<=  40){
    quer=`${q} limit ?`
    conn.query(quer,[limit_dynamicquery],function(err,result,fields){
        if(err) {
          res.render('dynamicqueryerror.ejs');
        }
        else{
            let currentno=1;
            console.log(quer);
     res.render('dynamicquery2.ejs',{result,fields,currentno:currentno,total_records:total_records});
        }
    })
    }
    else{
    current=total_records-40;
    console.log(total_records);
    console.log(limit);
    quer=`${q} limit ?, ?`
    conn.query(quer,[current,limit_dynamicquery],function(err,result,fields){
        if(err) {
          res.render('dynamicqueryerror.ejs');
        }

        else{
            let currentno=(total_records/40);
            console.log(currentno);
            console.log(quer);
     res.render('dynamicquery2.ejs',{result,fields,currentno:currentno,total_records:total_records});
        }
    })
}
})

module.exports=router;