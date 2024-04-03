const router = require("express").Router();
const conn=require('../../config/db');
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')

// Delimeter Search... 5March..............
var q1;
var p;

router.get('/delimeter',authorization.authorization,(req,res)=>{
   q=`select * from student_master_26feb`;
   conn.query(q,(err,result)=>{
    if(err) throw err;
    res.render('delimetersearch_5march.ejs',{user:result,p:p});    
   })

})


router.post('/delimeter',(req,res)=>{
    p=req.body.id;
    console.log(p);
    // var f=JSON.stringify(p);
    // var n=p.split(/[_^$;}{]/);
    var y=p.replace(/(?=[$-/:-?{-~!"^_`\[\]])/gi,",");
    console.log(y);
    var o=y.split(',');
    console.log(o);
    let val;
   var fname=[];
   var lname=[];
   var email=[];
   var mobile=[];
   var state=[];
   var city=[];
    for(let i=1;i<o.length;i++){
        console.log(o[i]);
        if(o[i].startsWith('_')){
            val=o[i].replace('_','');
            fname.push(val);
        }
        if(o[i].startsWith('^')){
            val=o[i].replace('^','');
            lname.push(val);

        }
        if(o[i].startsWith('$')){
            val=o[i].replace('$','');
            email.push(val);
        }
        if(o[i].startsWith(';')){
            val=o[i].replace(';','');
            mobile.push(val);
        }
        if(o[i].startsWith('}')){
            val=o[i].replace('}','');
            state.push(val);
        }
        if(o[i].startsWith('{')){
            val=o[i].replace('{','');
            city.push(val);
        }
        }
        // var fname=[];
        // var lname=[];
        // var email=[];
        // var mobile=[];
        // var state=[];
        // var city=[];
     q1=`select * from student_master_26feb where ( `;
    console.log(fname);
      if(fname.length >=1){
        for(let i=0;i<fname.length;i++){
        q1 +=`fname like '%${fname[i]}%' or `;
      }
      q1=q1.slice(0, q1.length-3)+ ") and (";
    }
    // console.log(q1);

    if(lname.length >=1){
        for(let i=0;i<lname.length;i++){
        q1 +=`lname like '%${lname[i]}%' or `;
      }
      q1=q1.slice(0, q1.length-3)+ ") and (";
    }
    // console.log(q1);

    if(email.length >=1){
        for(let i=0;i<email.length;i++){
        q1 +=`email like '%${email[i]}%' or `;
      }
      q1=q1.slice(0, q1.length-3)+ ") and (";
    }
    // console.log(q1);

    if(mobile.length >=1){
        for(let i=0;i<mobile.length;i++){
        q1 +=`contact_no like '%${mobile[i]}%' or `;
      }
      q1=q1.slice(0, q1.length-3)+ ") and (";
    }
    // console.log(q1);

    if(state.length >=1){
        for(let i=0;i<state.length;i++){
        q1 +=`state like '%${state[i]}%' or `;
      }
      q1=q1.slice(0, q1.length-3)+ ") and (";
    }
    // console.log(q1);

    if(city.length >=1){
        for(let i=0;i<city.length;i++){
        q1 +=`city like '%${city[i]}%' or `;
      }
      q1=q1.slice(0, q1.length-3)+ ") and (";
    }
    // console.log(q1);

    q1=q1=q1.slice(0, q1.length-6);
    console.log(q1);

    conn.query(q1,(err,result)=>{
        if(err) throw err;
    
        res.render('delimetersearch_5march.ejs',{user:result, p : p });
     })
})

module.exports=router;