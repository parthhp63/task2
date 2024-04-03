const router = require("express").Router();
const conn=require('../../config/db');
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')

// Student Details Pagination component......
const max_page=250;
const_record=200;


let current=0;
let limit=200;
var field_name='stu_id';

router.get("/studentpagination",authorization.authorization,(req,res)=>{
    const q=`select * from student_details_26feb order by ${field_name} limit 200 OFFSET ?`;
    current=0;

    conn.query(q,[current],(err,result)=>{
        if (err) throw err;
        let currentno=(current/200)+1;
        res.render('stu_details_pagi_26feb.ejs',{user:result, currentno:currentno});
    });

})

router.get("/previousp",authorization.authorization,(req,res)=>{

    
    current -=200;
    const q=`select * from student_details_26feb order by ${field_name} limit 200 OFFSET ?`;
    conn.query(q,[current],(err,result)=>{
        if (err) throw err;
        let currentno=(current/200)+1;
        res.render('stu_details_pagi_26feb.ejs',{user:result, currentno:currentno})
    });
})

router.get("/nextp",authorization.authorization,(req,res)=>{
    
    current +=200;
    const q=`select * from student_details_26feb order by ${field_name} limit 200 OFFSET ?`;

    conn.query(q,[current],(err,result)=>{
        if (err) throw err;
        let currentno=(current/200)+1;
        res.render('stu_details_pagi_26feb.ejs',{user:result, currentno:currentno});
    });
})


router.get("/lastp", authorization.authorization,(req,res)=>{
    current=10000;
    const q=`select * from student_details_26feb order by ${field_name} limit 200 OFFSET 9800;`;
    conn.query(q,[current],(err,result)=>{
        if (err) throw err;
        let currentno=(current/200);
        res.render('stu_details_pagi_26feb.ejs',{user:result, currentno:currentno});
    });
})

router.get("/firstp", authorization.authorization,(req,res)=>{

    const q=`select * from student_details_26feb order by ${field_name} limit 200 OFFSET ?`;
    current=0;
    conn.query(q,[current],(err,result)=>{
        if (err) throw err;
        let currentno=(current/200)+1;
        res.render('stu_details_pagi_26feb.ejs',{user:result, currentno:currentno});
    });
})

router.get("/sortby", authorization.authorization,(req,res)=>{
    field_name=req.query.field;
    const q=`select * from student_details_26feb order by ${field_name} limit 200 OFFSET ?`;
   
    current =0;
    conn.query(q,[current],(err,result)=>{
        if (err) throw err;
        let currentno=(current/200)+1;
        res.render('stu_details_pagi_26feb.ejs',{user:result, currentno:currentno});
    })

})


module.exports=router;