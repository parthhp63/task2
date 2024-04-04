const router = require("express").Router();
const conn=require('../../config/db');
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')


// Student Percentage 27feb ........

let month;
let year;

var q;

router.get('/percentage',authorization.authorization,(req,res)=>{

  if((req.query.months, req.query.Year)){
    year=req.query.Year;
    month=req.query.months;
  }else{
    month=12;
    year=2023;
  }


q=`select student_details_26feb.stu_id,student_details_26feb.fname,
YEAR(attendance_26feb.date)as year,
month(attendance_26feb.date)as month,
count(if(attendance_26feb.attendance='B' or attendance_26feb.attendance='P' , attendance_26feb.date,null))as present,
count( if(attendance_26feb.attendance='B' or attendance_26feb.attendance='P',attendance_26feb.date,null))*100/30 as percentage from student_details_26feb
 join attendance_26feb on student_details_26feb.stu_id=attendance_26feb.stu_id where YEAR(attendance_26feb.date)=${year} and MONTH(attendance_26feb.date)=${month} group by student_details_26feb.stu_id,year,month limit 20 offset `

  current=0; 
  conn.query(q+"?", [current],(err,result)=>{
    if (err) throw err;
    else{
    let currentno=(current/20)+1;
    res.render('stu_percentage_27feb.ejs',{user:result,currentno:currentno, Year:year, months:month});}
  });
  });


router.get('/firstp_stu_per',authorization.authorization,(req,res)=>{
  

  if((req.query.months || req.query.Year)){
    year=req.query.Year;
    month=req.query.months;
  }

  current=0;
  

  
  conn.query(q+"?",[current],(err,result)=>{
    if (err) throw err;
    else{
    let currentno=(current/20)+1;
    res.render('stu_percentage_27feb.ejs',{user:result,currentno:currentno,  Year:year, months:month});}
  });});


router.get('/previousp_stu_per',authorization.authorization,(req,res)=>{
 
  if((req.query.months || req.query.Year)){
    year=req.query.Year;
    month=req.query.months;
  }

    current -=20;

    conn.query(q+"?",[current],(err,result)=>{
    if (err) throw err;
    else{
    let currentno=(current/20)+1;
    res.render('stu_percentage_27feb.ejs',{user:result,currentno:currentno, Year:year, months:month});}
});
})

router.get('/nextp_stu_per',authorization.authorization,(req,res)=>{
  
  if((req.query.months || req.query.Year)){
    year=req.query.Year;
    month=req.query.months;
  }
  current +=20;

  
  conn.query(q+"?",[current],(err,result)=>{
    if (err) throw err;
    else{
    let currentno=(current/20)+1;
    res.render('stu_percentage_27feb.ejs',{user:result,currentno:currentno, Year:year, months:month});}
  });});


router.get('/lastp_stu_per',authorization.authorization,(req,res)=>{

  if((req.query.months || req.query.Year)){
    year=req.query.Year;
    month=req.query.months;
  }
   current=180;
  


   conn.query(q+"?",[current],(err,result)=>{
    if (err) throw err;
    else{
    let currentno=(current/20)+1;
    res.render('stu_percentage_27feb.ejs',{user:result, currentno:currentno,  Year:year, months:month});}
  });
});

module.exports=router;