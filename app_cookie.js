var express =require('express');
var cookieParser=require('cookie-parser');
var app=express();
app.use(cookieParser());

function setMiddle(re,res,next){
    console.log("Middleware is called....")
 next();
}
//app.use('/setCookie',setMiddle);
app.get('/',function(req,res){
    res.send("Express using cookies")
});
app.get('/setCookie',setMiddle,function(req,res){
    res.cookie('name','shilpa');
    res.cookie('location','BDC8');
    res.send("cookies are stored!!!!");
});
app.get('/getCookie',function(req,res){
     res.send(req.cookies);
});
app.listen(3003);
