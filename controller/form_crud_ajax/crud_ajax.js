const router = require("express").Router();
const conn=require('../../config/db');
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')

  // Crud Operation of form via ajax.......



  router.get('/ajaxform',authorization.authorization,(req,res)=>{
    res.render("crud_form_ajax.ejs")
});



router.post('/submit', (req, res) => {
   var formData=req.body;
    var p=formData.email;
    console.log(p);
  console.log(formData);
// Basic Details Fetch
first_name = formData.first_name;
console.log('fname',first_name);
last_name = formData.last_name;
designation_basic = formData.designation_basic;
address_1 = formData.address_1;
phone = formData.phone;
city = formData.city;
state = formData.state;
email = formData.email;
gender = formData.gender;
zip_code = formData.zip_code;
status1 = formData.status;
dob = formData.dob;
// console.log(first_name, last_name, designation, address_1, phone, city, state, email, gender, zip_code, dob, status1);

// Education Details Fetch
board_name = formData.board_name;
passing_year = formData.passing_year;
percentage = formData.percentage;
// console.log(board_name, passing_year, percentage);

//work Experience
company_name=formData.company_name;
designation=formData.designation;
from=formData.from;
to=formData.to;


// Langauge Known
lang1=formData.lang1;
lang2=formData.lang2;
lang3=formData.lang3;
hindiop=formData.hindi;
engop=formData.eng;
gujop=formData.guj;
lang_arr=[];
lang_oparr=[];
lang_arr.push(lang1);
lang_arr.push(lang2);
lang_arr.push(lang3);
lang_oparr.push(hindiop);
lang_oparr.push(engop);
lang_oparr.push(gujop);
//  console.log(lang_arr,lang_oparr);
//   console.log(lang1,hindiop,lang2,engop,lang3,gujop);


//Technologies
tech=formData.technology;
// console.log('sdfgsdg',tech);
tech_oparr=[];
if(formData.tech1){
  tech_op1=formData.tech1;
  tech_oparr.push(tech_op1);
}
if(formData.tech2){
  tech_op2=formData.tech2;
  tech_oparr.push(tech_op2);
}

if(formData.tech3){
  tech_op3=formData.tech3;
  tech_oparr.push(tech_op3);
}

if(formData.tech4){
  tech_op4=formData.tech4;
  tech_oparr.push(tech_op4);
}
// console.log(tech, tech_oparr);




//Refrences
ref_name=formData.ref_name;
ref_contact=formData.contact_number;
relation=formData.relation;
// console.log('refrence',ref_name,ref_contact,relation);

//prefrences
prefred_location=formData.prefred_location;
notice_period=formData.notice_period;
expected_ctc=formData.expected_ctc;
current_ctc=formData.current_ctc;
department=formData.department;
// console.log('prefrences',prefred_location,notice_period,expected_ctc,current_ctc,department);









// basic detail query.
var q = `insert into emp_basic_details(first_name,last_name,designation,address_1,phone,city,state,email,gender,zip_code,status,dob)
  values('${first_name}','${last_name}','${designation_basic}','${address_1}','${phone}','${city}','${state}','${email}','${gender}','${zip_code}','${status1}','${dob}');`;

conn.query(q, (err, result) => {
  // console.log(q);
  if (err) throw err;

//--------------------------------------------------------------
 // education details query.
 for(let i=0;i<4;i++){
  let q2= `insert into education_details(emp_id,board_name_course_name,passing_year,percentage)
  values('${result.insertId}', '${board_name[i]}','${passing_year[i]}','${percentage[i]}');`;
  if(board_name[i]){
    conn.query(q2,(err,result)=>{
      // console.log(result);
    })
  }
};

//-----------------------------------------------------------------------
// Work Experience Query.
var work1=typeof(company_name);
// console.log('work1',work1);
if(work1=='string'){
  let q3=`insert into work_experience(emp_id,company_name,designation,exp_from,exp_to)
  values('${result.insertId}','${company_name}','${designation}','${from}','${to}')`
    conn.query(q3,(err,result)=>{
        console.log(q3);
      })
}
else{
for(let i=0;i<company_name.length;i++){
  // console.log('length',company_name.length);
  let q3=`insert into work_experience(emp_id,company_name,designation,exp_from,exp_to)
  values('${result.insertId}','${company_name[i]}','${designation[i]}','${from[i]}','${to[i]}')`

if(company_name[i]){
  conn.query(q3,(err,result)=>{
      console.log(q3);
    })
  }
}};

// -------------------------------------------------------------------------------------
// Refrence Query.

// console.log('typeof',typeof(company_name),'sdfsdf',company_name);
// console.log(company_name,designation,from,to);
var ref1=typeof(ref_name);
console.log('ref1',ref1);
if(ref1=='string'){
 let q4=`insert into refrences(emp_id,ref_name,contact_no,relation)
  values('${result.insertId}','${ref_name}','${ref_contact}','${relation}')`
    conn.query(q4,(err,result)=>{
        console.log(q4);
      })
}
else{

for(let i=0;i<ref_name.length;i++){
  console.log('length',ref_name.length);
  console.log('last inserted',result.insertId);
  console.log(ref_name[i],ref_contact[i], relation[i]);
  let q4=`insert into refrences(emp_id,ref_name,contact_no,relation)
  values('${result.insertId}','${ref_name[i]}','${ref_contact[i]}','${relation[i]}')`
  // console.log(q4);

if(ref_name[i]){
  conn.query(q4,(err,result)=>{
      // console.log(q4);
    })
  }
};
}

//---------------------------------------------------------------------
// Prefrences Query. 

var q5 = `insert into prefrences(emp_id,prefred_location,notice_period,expected_ctc,current_ctc,department)
values('${result.insertId}','${prefred_location}','${notice_period}','${expected_ctc}','${current_ctc}','${department}');`;

conn.query(q5,(err,result)=>{
  // console.log(q5);
})

//----------------------------
// Language.       
for(let i=0;i<lang_arr.length;i++){
  console.log('length',lang_arr.length);
  let q6=`insert into language_known(emp_id,language_name,language_type)
  values('${result.insertId}','${lang_arr[i]}','${lang_oparr[i]}')`

if(lang_arr[i]){
  conn.query(q6,(err,result)=>{
      console.log(q6);
    })
  }
};

//--------------------------------------
// Technology.
// console.log('sdfgsdgsdfgs')
  //  console.log('asdfsafsdaf',tech_oparr.length);
  for(let i=0;i<tech_oparr.length;i++){
  // console.log('length',tech.length);
  let q7=`insert into technologies(emp_id,technology_name,language_level)
  values('${result.insertId}','${tech[i]}','${tech_oparr[i]}')`

if(tech[i]){
  conn.query(q7,(err,result)=>{
      // console.log(q7);
    })
  }
};
})
});


router.get('/showdata',authorization.authorization, async (req, res) => {
  try {
    const  id=req.query.id ;
    console.log(id)

    if (!id) {
      return res.status(400).json({ error: 'No ID provided' });
    }

    // Function to execute SQL queries
    const query = (str) => {
      return new Promise((resolve, reject) => {
        conn.query(str, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };

    // Fetch data from different tables based on the provided ID
    const emp_det = await query(`select * from emp_basic_details where emp_id='${id}';`);
    const edu_det = await query(`select * from education_details where emp_id='${id}';`);
    const work_exp = await query(`select * from work_experience where emp_id='${id}';`);
    const lang_know = await query(`select * from language_known where emp_id='${id}';`);
    const tech_know = await query(`select * from technologies where emp_id='${id}';`);
    const reference = await query(`select * from refrences where emp_id='${id}';`);
    const preference = await query(`select * from prefrences where emp_id='${id}';`);

    // Construct the response object
    const response = {
      basic_det: emp_det,
      edu_det: edu_det,
      work_exp: work_exp,
      lang_know: lang_know,
      tech_know: tech_know,
      reference: reference,
      preference: preference
    };


    // Send the response
    res.json(response);
    // res.redirect("index.ejs")
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get("/update",authorization.authorization,(req,res)=>{
    res.render("crud_form_ajax.ejs");
})



router.post('/update/:id',async(req,res)=>{

  formData=req.body;
  console.log(formData);
  
 
 id=req.params.id;
  console.log('iiddddd',id);
  if(req.params.id){
    let query=(str)=>{
      return new Promise((resolve,reject)=>{
        conn.query(str,function(err,result){
          if(err) throw err;
          else{
            resolve(result);
            console.log(str);
          }
        })
      })
    }
 
 // basic details.
  q1= `UPDATE emp_basic_details
        set first_name='${formData.first_name}', last_name='${formData.last_name}',designation='${formData.designation_basic}',address_1='${formData.address_1}',phone='${formData.phone}',city='${formData.city}', state='${formData.state}',email='${formData.email}',gender='${formData.gender}',zip_code='${formData.zip_code}',status='${formData.status}',dob='${formData.dob}'
        where emp_id=${id};`
        
        await query(q1);
 
   // Education Details.
 
   let qr=await query(`select edu_id as edu_id from education_details where emp_id in(${req.params.id}); `);
   // console.log('pqqqq',qr[0]);
   let board_name=formData.board_name;
   // console.log(board_name);
   for(let i=0;i<board_name.length;i++){
     if(formData.board_name[i]){
       q2=`UPDATE education_details 
   set emp_id='${req.params.id}',board_name_course_name='${formData.board_name[i]}',passing_year='${formData.passing_year[i]}',percentage='${formData.percentage[i]}'
   where emp_id='${req.params.id}' and edu_id='${qr[i].edu_id}';`
   await query(q2);
     }
   }
 
  // Work Experience..
 
  let wee= await query(`select exp_id as exp_id2 from work_experience where emp_id in (${req.params.id})`);
  console.log('weeee',wee)
  let company_name=formData.company_name;
 //  console.log(company_name);
   // console.log(company_name.length==wee.length)
  for(let i=0; i<company_name.length;i++){
    console.log('company_name.length',company_name.length)
    if(wee[i]){
   if(formData.company_name[i]!=''){
     q3=`UPDATE work_experience
     set emp_id='${req.params.id}',company_name='${formData.company_name[i]}',designation='${formData.designation[i]}',exp_from='${formData.from[i]}',exp_to='${formData.to[i]}'
     where emp_id='${req.params.id}' and exp_id='${wee[i].exp_id2}';`
     
     await  query(q3);
   }}
   else{
    if(formData.company_name[i]!=''){
       // console.log('length',company_name.length);
       let q4=`insert into work_experience(emp_id,company_name,designation,exp_from,exp_to)
       values('${req.params.id}','${formData.company_name[i]}','${formData.designation[i]}','${formData.from[i]}','${formData.to[i]}')`
 
       await  query(q4);
      }
      }
  
 }

 
 // Prefrences...
 q9=`update prefrences 
 set emp_id='${req.params.id}',prefred_location='${formData.prefred_location}',notice_period='${formData.notice_period}',expected_ctc='${formData.expected_ctc}',current_ctc='${formData.current_ctc}',department='${formData.department}'
 where emp_id='${req.params.id}';`;
 await query(q9);
 
     }
   res.send('updated succesfully');
 
 })

module.exports=router;