
const router = require("express").Router();
const authorization=require('/home/parth-patil/Node/task2/middleware/authorization.js')

// For Logout and cookie removal process.....
   router.get('/logout',authorization.authorization,(req,res)=>{
    res.clearCookie('access_token').status(200).redirect('/login');
  })

  module.exports=router;
