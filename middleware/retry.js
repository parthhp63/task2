const dotenv=require("dotenv");
const jwt=require("jsonwebtoken");

dotenv.config();

exports.retry=(req,res,next)=>{
    const token=req.cookies.access_token;
    console.log(token);
    if(!token){
        console.log('Has not Token');
       return next();
    }
    else{
        try{
            console.log('Has token');
            const data=jwt.verify(token,"hi");
            res.redirect("/first");

        }
        catch{
             return  res.sendStatus(403);
        }
    }
}