const fs=require('fs')

/* var content=fs.readFileSync('demo.js')
console.log(content.toString());
console.log('Program ended') */

fs.readFile('demo.js',function(err,content){
    if(err) console.log("Error in reading a file")
    console.log(content.toString());
})
console.log('Program ended')