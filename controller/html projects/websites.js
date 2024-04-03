const router = require("express").Router();
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')


  // HTML website Tasks 9Feb website.....
  router.get('/ehyawebsite',authorization.authorization,(req,res)=>{
    res.render('ehyawebsite_9feb.ejs')
   })
 
 
   // Html website awan host 12 feb.........
   router.get('/awanhost',authorization.authorization,(req,res)=>{
     res.render('awanhost_12feb.ejs');
    })
 
   // Hirex HTML template 13feb...........
   router.get('/hirex',authorization.authorization,(req,res)=>{
     res.render('hirex_13feb.ejs')
   })
   
   // HTML Form template
   router.get('/form1',authorization.authorization,(req,res)=>{
     res.render('job_application_form1.ejs')
   })
   
   router.get('/form2',authorization.authorization,(req,res)=>{
     res.render('job_application_form2.ejs')
   })

   module.exports=router;