const router = require("express").Router();
const conn=require('../../config/db');
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')


//  Parameters based fetch .. 4March......

var No_of_records_ppage=20;
var current_p=1;
var pageEnd;
var offset;
var q,q3,q4;
var get_id  ,temp=0,total_l,total_l2;
var fname,lname,city,state,choice;
var message;


router.get('/home',authorization.authorization,(req,res)=>{
  
  if(temp==0){
    current_p=Number(req.query.page_no)||1;
    pageEnd=Math.ceil(10000/No_of_records_ppage);
    offset=(current_p*No_of_records_ppage)-No_of_records_ppage;
  q= q || `select * from student_details_26feb limit ? offset ?;`
  conn.query(q,[No_of_records_ppage, offset],(err,result)=>{
    if(err) throw err;
    else{
        res.render('paramater_based_4march.ejs',{user:result, current_p:current_p, pageEnd:pageEnd,message:''});
    }
  })
}

else if(temp >=1){
    current_p=Number(req.query.page_no)||1;
    pageEnd=Math.ceil(total_l/No_of_records_ppage);

    offset=(current_p*No_of_records_ppage)-No_of_records_ppage;
    q=`select * from student_details_26feb where fname like "%${fname}%" ${choice} lname like "%${lname}%" ${choice} city like  "%${city}%" ${choice} state like 
    "%${state}%" limit ? offset ?`;
    conn.query(q,[No_of_records_ppage, offset],(err,result)=>{
        if(err) throw err;
        else if(result.length==0){
            res.render('paramater_based_4march.ejs',{user:result, current_p:current_p, pageEnd:pageEnd, message:'Not valid response'});
        }
        else{
            res.render('paramater_based_4march.ejs',{user:result, current_p:current_p, pageEnd:pageEnd,message:''});
        }
    })
}
})



router.post('/home',(req,res)=>{
    get_id=req.body.id;
    if(req.body.id){
    q=`select * from student_details_26feb where stu_id in (${get_id})`;
    conn.query(q,[No_of_records_ppage, offset],(err,result)=>{
        if(err) throw err;
        else if(result.length==0){
            res.render('paramater_based_4march.ejs',{user:result, current_p:0, pageEnd:0,message:'Not Valid ID.'});
        }
        else{
            res.render('paramater_based_4march.ejs',{user:result, current_p:1, pageEnd:1,message:'' });
        }
    })
    }
    else{
        q=`select * from student_details_26feb `;

        conn.query(q,[No_of_records_ppage, offset],(err,result)=>{
            if(err) throw err;
            else if(result.length==0){
                res.render('paramater_based_4march.ejs',{user:result, current_p:0, pageEnd:0,message:'Not Valid ID.'});
            }
            else{
                res.render('paramater_based_4march.ejs',{user:result, current_p:1, pageEnd:1,message:'' });
            }
        })
    }

})

router.post('/home/showall', (req,res)=>{
    fname=req.body.fname;
    lname=req.body.lname;
    city=req.body.city;
    state=req.body.state;
    choice=req.body.choice;


    q4=`select * from student_details_26feb where fname like "%${fname}%" ${choice} lname like "%${lname}%" ${choice} city like  "%${city}%" ${choice} state like 
      "%${state}%"`
    conn.query(q4,(err,result)=>{
        total_l=result.length;

      current_p=Number(req.query.page_no)||1;

      pageEnd=Math.ceil(total_l/No_of_records_ppage);
        offset=(current_p*No_of_records_ppage)-No_of_records_ppage;

        q=`select * from student_details_26feb where fname like "%${fname}%" ${choice} lname like "%${lname}%" ${choice} city like  "%${city}%" ${choice} state like 
        "%${state}%" limit ? offset ?`;

        conn.query(q,[No_of_records_ppage, offset],(err,result)=>{
            if(err) throw err;
            else if(result.length==0){
                res.render('paramater_based_4march.ejs',{user:result, current_p:0, pageEnd:0, message:'Not Valid response'});
            }
        else{
            res.render('paramater_based_4march.ejs',{user:result, current_p:current_p, pageEnd:pageEnd,message:'' });
        }
    })
    })
    temp++;

})

module.exports=router;