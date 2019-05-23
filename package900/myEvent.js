const MyEventEmitter=require('events').EventEmitter;

class myEmitter extends MyEventEmitter{}
var myevent=new myEmitter();
myevent.once('knock',function(){
    console.log("Door opened!!!")
});

myevent.addListener('knock',function(){
    console.log("Please come in!!!")
});
myevent.emit('knock');
myevent.emit('knock');
myevent.emit('knock');

var buff=Buffer.alloc(10);
buff.write("accenture");
console.log(buff.toString('UTF8'));
buff=buff.slice(0,5);
console.log(buff.toString('UTF8'));
