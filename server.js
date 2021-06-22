var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var timerRoutes = require("./router/timerRoutes")
//requiring db credentials
require("./db")


//using bodyparser for client-side requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//setting headers for cors
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Method','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Header','Content-Type, Authorization');
    next();
})

//calling timerroutes
app.use("/admin", timerRoutes)



//starting server
app.listen("3001", () => {
    console.log("backend working");
    console.log("server started")
})
