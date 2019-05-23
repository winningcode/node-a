const http=require('http')
var server=http.createServer(function(request,response){
   response.write("<h1 style='color:blue'>Hello from Http server</h1>");
   response.end();
});

server.listen(4000);
console.log("server is listening at 4000")
