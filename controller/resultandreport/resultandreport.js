const router = require("express").Router();
const conn=require('../../config/db');
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')
// Student Result and Report.......


var q;

router.get('/result',authorization.authorization,(req,res)=>{

     q=`select student_master_26feb.stu_id,student_master_26feb.fname,student_master_26feb.lname,sum(result_details_26feb.prac_marks) as pr, sum(result_details_26feb.theor_marks)as tr from student_master_26feb
    join result_details_26feb
    on student_master_26feb.stu_id=result_details_26feb.stu_id
    group by result_details_26feb.stu_id, result_details_26feb.exam_id limit 60  offset `;
    current=0;
    conn.query(q+"?",[current],(err,result)=>{
        if (err) throw err;
        else{
            // res.send(result);
            let currentno=(current/60)+1;
            res.render('examresult1_28feb.ejs',{data:result,currentno:currentno});


        }
     })
});

router.get('/firstp_result',authorization.authorization, (req,res)=>{
    current=0;
    conn.query(q+"?",[current],(err,result)=>{
        if (err) throw err;
        else{
            // res.send(result);
            let currentno=(current/60)+1;
            res.render('examresult1_28feb.ejs',{data:result,currentno:currentno});
        }
     })
})

router.get('/nextp_result',authorization.authorization,(req,res)=>{
    current+=60;

    conn.query(q+"?",[current],(err,result)=>{

        if(err) throw err;
        else{
            let currentno=(current/60)+1;
            res.render('examresult1_28feb.ejs',{data:result,currentno:currentno});
        }
    })
})

router.get('/lastp_result',authorization.authorization, (req,res)=>{
    current=540;

    conn.query(q+"?",[current],(err,result)=>{
        if(err) throw err;
        else{
            let currentno=(current/ 60)+1;
            res.render('examresult1_28feb.ejs',{data:result,currentno:currentno});

        }
    })
})

router.get('/previousp_result',authorization.authorization,(req,res)=>{
    current-=60;

    conn.query(q+"?",[current],(err,result)=>{

        if(err) throw err;
        else{
            let currentno=(current/60)+1;
            res.render('examresult1_28feb.ejs',{data:result,currentno:currentno});
        }
        })
})

router.get('/new/:id',authorization.authorization,(req,res)=>{
    let key=req.params.id;
    const  q= `select student_master_26feb.stu_id,student_master_26feb.fname,student_master_26feb.lname,subject_details_26feb.sub_name as sub_name,
    result_details_26feb.prac_marks as prac_marks, result_details_26feb.theor_marks as theor_marks
    from result_details_26feb
    inner join student_master_26feb on student_master_26feb.stu_id=result_details_26feb.stu_id
    inner join exam_type_26feb on exam_type_26feb.exam_id=result_details_26feb.exam_id
    inner join subject_details_26feb on subject_details_26feb.sub_id=result_details_26feb.sub_id where student_master_26feb.stu_id=${key} order by  subject_details_26feb.sub_name , exam_type_26feb.exam_id   ;`

    conn.query(q,(err,result)=>{
        if(err) throw err;
    
        else{
            
            res.render('examreport1_28feb.ejs',{data:result})
        }
    })
    
})

module.exports=router;