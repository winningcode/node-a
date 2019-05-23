module.exports=function(req,res,next){
    var reqTime=new Date();
    console.log(req.method+' '+req.url + 'request at '+reqTime)
    next();
}