const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mysql = require('mysql');
const port = 9014;
const routers = require('./router/route');


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
var fs=require('fs');

app.use(routers);

app.listen(port,()=>{
    console.log(`Server is running at port '${port}'`);
})