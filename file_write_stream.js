const fs=require('fs')
const stream=require('stream')

var fwrite=fs.createWriteStream('sample.txt')
fwrite.write('Helll world\n\r');
fwrite.write('Second text');
fwrite.end();
