const router = require("express").Router();
const conn=require('../../config/db');
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')


router.get('/form', (req, res) => {
  res.render('form_crud1_node_7march.ejs');
})

router.post('/form', (req, res) => {
   body1=req.body;
   log(body1);
  // Basic Details Fetch
  first_name = req.body.first_name;
  last_name = req.body.last_name;
  designation_basic = req.body.designation_basic;
  address_1 = req.body.address_1;
  phone = req.body.phone;
  city = req.body.city;
  state = req.body.state;
  email = req.body.email;
  gender = req.body.gender;
  zip_code = req.body.zip_code;
  status1 = req.body.status;
  dob = req.body.dob;
  // console.log(first_name, last_name, designation, address_1, phone, city, state, email, gender, zip_code, dob, status1);

  // Education Details Fetch
  board_name = req.body.board_name;
  passing_year = req.body.passing_year;
  percentage = req.body.percentage;
  // console.log(board_name, passing_year, percentage);

  //work Experience
  company_name=req.body.company_name;
  designation=req.body.designation;
  from=req.body.from;
  to=req.body.to;


  // Langauge Known
  // lang1=req.body.lang1;
  // lang2=req.body.lang2;
  // lang3=req.body.lang3;
  lang=req.body.lang;
  console.log(lang);
  hindiop=req.body.hindi;
  engop=req.body.eng;
  gujop=req.body.guj;
  console.log('gujopppp',gujop);
  // lang_arr=[];
  lang_oparr=[];
  // lang_arr.push(lang1);
  // lang_arr.push(lang2);
  // lang_arr.push(lang3);
  lang_oparr.push(hindiop);
  lang_oparr.push(engop);
  lang_oparr.push(gujop);
  //  console.log(lang_arr,lang_oparr);
  //   console.log(lang1,hindiop,lang2,engop,lang3,gujop);

console.log('lang_oparr',lang_oparr);
  //Technologies
  tech=req.body.technology;
  // console.log('sdfgsdg',tech);
  tech_oparr=[];
  if(req.body.tech1){
    tech_op1=req.body.tech1;
    tech_oparr.push(tech_op1);
  }
  if(req.body.tech2){
    tech_op2=req.body.tech2;
    tech_oparr.push(tech_op2);
  }
  
  if(req.body.tech3){
    tech_op3=req.body.tech3;
    tech_oparr.push(tech_op3);
  }

  if(req.body.tech4){
    tech_op4=req.body.tech4;
    tech_oparr.push(tech_op4);
  }
  // console.log(tech, tech_oparr);




  //Refrences
  ref_name=req.body.ref_name;
  ref_contact=req.body.contact_number;
  relation=req.body.relation;
  // console.log('refrence',ref_name,ref_contact,relation);

  //prefrences
  prefred_location=req.body.prefred_location;
  notice_period=req.body.notice_period;
  expected_ctc=req.body.expected_ctc;
  current_ctc=req.body.current_ctc;
  department=req.body.department;
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
    console.log(q5);
  })

  //----------------------------
  // Language.
  console.log('length',lang.length);
  for(let i=0;i<lang.length;i++){
    let q6=`insert into language_known(emp_id,language_name,language_type)
    values('${result.insertId}','${lang[i]}','${lang_oparr[i]}')`

  if(lang[i]){
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
        console.log(q7);
      })
    }
  };



  })
  res.render('form_crud1_node_7march.ejss');
});



router.get('/form/:id',async(req,res)=>{

  id=req.params.id;
  // console.log(id);
  if(req.params.id){
    let query=(str)=>{
      return new Promise((resolve,reject)=>{
        conn.query(str,function(err,result){
          if(err) throw err;
          else{
            resolve(result);
          }
        })
      })
    }


    let count=await query(`select count(*) as ct from emp_basic_details where emp_id='${id}';`);
    console.log(count);

    if(count[0].ct>=1){

    let emp_details=await  query (`select * from emp_basic_details where emp_id='${id}';`);
    // console.log(emp_details);
    let education_details=await query(`select * from education_details where emp_id='${id}';`);
    // console.log(education_details);
    let work_experience=await query(`select * from work_experience where emp_id='${id}';`);
    // console.log(work_experience);
    let language=await query(`select * from language_known where emp_id='${id}';`);
    console.log('language',language);
    let technologies=await query(`select * from technologies where emp_id='${id}';`);
    // console.log(technologies);
    let refrences=await query(`select * from refrences where emp_id='${id}';`);
    // console.log(refrences);
    let prefrences=await query(`select * from prefrences where emp_id='${id}';`);
    // console.log(prefrences);
      

      //   // Languages....

      let lnar=[];
      let lnop=[];
      for(let i=0;i<language.length;i++){
          if(language[i].language_name=='hindi'){
            lnar.push('hindi');
            if(language[i].language_type.includes("read")){
              a="hindiread";
              lnop.push(a)
             }
             if(language[i].language_type.includes("write")){
              a="hindiwrite";
              lnop.push(a)
             }
             if(language[i].language_type.includes("speak")){
              a="hindispeak";
              lnop.push(a)
             }
          }

          if(language[i].language_name=='english'){
            lnar.push('english');
            if(language[i].language_type.includes("read")){
              a="englishread";
              lnop.push(a)
             }
             if(language[i].language_type.includes("write")){
              a="englishwrite";
              lnop.push(a)
             }
             if(language[i].language_type.includes("speak")){
              a="englishspeak";
              lnop.push(a)
             }
          }          
          
          if(language[i].language_name=='gujarti'){
            lnar.push('gujarti');
            if(language[i].language_type.includes("read")){
              a="gujartiread";
              lnop.push(a)
             }
             if(language[i].language_type.includes("write")){
              a="gujartiwrite";
              lnop.push(a)
             }
             if(language[i].language_type.includes("speak")){
              a="gujartispeak";
              lnop.push(a)
             }
          }
      } 
   console.log(lnop);




    let tech=[];
    let tech_op=[];
    // console.log('sdcfsd',technologies.length);
    if(technologies.length>=1){
      for(let i=0;i<technologies.length;i++){
        tech.push(technologies[i].technology_name);
      }
    }


    for(let i=0;i<technologies.length;i++){
      if(technologies[i].technology_name=='php'){
        tech_op.push(technologies[i].language_level+'php');
      }
      else if(technologies[i].technology_name=='MYSQL'){
        tech_op.push(technologies[i].language_level+'mysql');
      }
      else if(technologies[i].technology_name=='laravel'){
        tech_op.push(technologies[i].language_level+'laravel');
      }
      else if(technologies[i].technology_name=='Oracle'){
        tech_op.push(technologies[i].language_level+'oracle');
      }
    }

    res.render('form_crud2_node_7march.ejs',{emp_details:emp_details,education_details:education_details,work_experience:work_experience,language:language,technologies:technologies,refrences:refrences,prefrences:prefrences,tech:tech,tech_op:tech_op,lnar:lnar,lnop:lnop});
    
  }
  }


})

router.post('/form/update',async(req,res)=>{

 body1=req.body;
 console.log('body1111111');
 console.log(body1);

id=req.body.id;
 // console.log(id);
 if(req.body.id){
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
       set first_name='${req.body.first_name}', last_name='${req.body.last_name}',designation='${req.body.designation_basic}',address_1='${req.body.address_1}',phone='${req.body.phone}',city='${req.body.city}', state='${req.body.state}',email='${req.body.email}',gender='${req.body.gender}',zip_code='${req.body.zip_code}',status='${req.body.status}',dob='${req.body.dob}'
       where emp_id=${req.body.id};`
       
       await query(q1);

     

  // Education Details.

  let qr=await query(`select edu_id as edu_id from education_details where emp_id in(${req.body.id}); `);
  // console.log('pqqqq',qr[0]);
  let board_name=req.body.board_name;
  // console.log(board_name);
  for(let i=0;i<board_name.length;i++){
    if(req.body.board_name[i]){
      q2=`UPDATE education_details 
  set emp_id='${req.body.id}',board_name_course_name='${req.body.board_name[i]}',passing_year='${req.body.passing_year[i]}',percentage='${req.body.percentage[i]}'
  where emp_id='${req.body.id}' and edu_id='${qr[0].edu_id}';`
  await query(q2);
    }
  }

 // Work Experience..

 let wee= await query(`select exp_id as exp_id2 from work_experience where emp_id in (${req.body.id})`);
 console.log('weeee',wee)
 let company_name=req.body.company_name;
 for(let i=0; i<company_name.length;i++){
  if(wee[i]){
    q3=`UPDATE work_experience
    set emp_id='${req.body.id}',company_name='${req.body.company_name[i]}',designation='${req.body.designation[i]}',exp_from='${req.body.from[i]}',exp_to='${req.body.to[i]}'
    where emp_id='${req.body.id}' and exp_id='${wee[i].exp_id2}';`
    
    await  query(q3);
  }
  else{

      // console.log('length',company_name.length);
      let q4=`insert into work_experience(emp_id,company_name,designation,exp_from,exp_to)
      values('${req.body.id}','${req.body.company_name[i]}','${req.body.designation[i]}','${req.body.from[i]}','${req.body.to[i]}')`

      await  query(q4);
  }
 
}


// languages.....
let la=await query(`select lang_id as lang_id from language_known where emp_id in (${req.body.id})` );
var la_ar=[];
la_ar.push(req.body.hindi);
la_ar.push(req.body.eng);
la_ar.push(req.body.guj);
console.log('la_ar',la_ar);
let lang=req.body.lang;
// console.log(technology);
for(let i=0;i<lang.length;i++){
  if(la[i]){
    let q5=`update  language_known
    set emp_id='${req.body.id}',language_name='${req.body.lang[i]}',language_type='${la_ar[i]}'
    where emp_id='${req.body.id}' and lang_id='${la[i].lang_id}';`
    await query(q5);
  }
  else{
    let q6=`insert into language_known(emp_id,language_name,language_type)
    values('${req.body.id}','${req.body.lang[i]}','${la_ar[i]}')`
    await query(q6);
  }
}






// Technologies...
  let te=await query(`select technology_id as tech_id from technologies where emp_id in (${req.body.id})` );
  var tech_ar=[];
  tech_ar.push(req.body.tech1);
  tech_ar.push(req.body.tech2);
  tech_ar.push(req.body.tech3);
  tech_ar.push(req.body.tech4);
  console.log('teee',te);
  console.log(tech_ar);
  let technology=req.body.technology;
  console.log(technology);
  for(let i=0;i<technology.length;i++){
    if(te[i]){
      let q5=`update technologies
      set emp_id='${req.body.id}',technology_name='${req.body.technology[i]}',language_level='${tech_ar[i]}'
      where emp_id='${req.body.id}' and technology_id='${te[i].tech_id}';`
      await query(q5);
    }
    else{
      let q6=`insert into technologies(emp_id,technology_name,language_level)
      values('${req.body.id}','${req.body.technology[i]}','${tech_ar[i]}')`
      await query(q6);
    }
  }


// Refrence...
let re=await query(`select refrence_id as ref_id from refrences where emp_id in (${req.body.id})`);
// console.log('re',re);
let ref_name=req.body.ref_name;
// console.group(ref_name);
for(let i=0;i<ref_name.length;i++){


  if(re[i]){
    q7=`UPDATE  refrences
    set emp_id='${req.body.id}',ref_name='${req.body.ref_name[i]}',contact_no='${req.body.contact_number[i]}',relation='${req.body.relation[i]}'
    where emp_id='${req.body.id}' and refrence_id='${re[i].ref_id}';`
    await  query(q7);
  }
  else{
      let q8=`insert into refrences(emp_id,ref_name,contact_no,relation)
      values('${req.body.id}','${req.body.ref_name[i]}','${req.body.contact_number[i]}','${req.body.relation[i]}')`

      await  query(q8);
  }
 
} 


// Prefrences...
q9=`update prefrences 
set emp_id='${req.body.id}',prefred_location='${req.body.prefred_location}',notice_period='${req.body.notice_period}',expected_ctc='${req.body.expected_ctc}',current_ctc='${req.body.current_ctc}',department='${req.body.department}'
where emp_id='${req.body.id}';`;
await query(q9);

    }
  res.send('updated succesfully');

})

module.exports=router;