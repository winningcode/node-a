const fs=require('fs')
const stream=require('stream')

var fread=fs.createReadStream('demo.js');
var content='';
fread.on('data',function(chunk){
  content=content+chunk;
})

fread.on('end',function(){
    console.log(content);
})
fread.on('error',function(){
    console.log('error in reading a file');
})

