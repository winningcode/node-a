const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/julydb',function(err){
    if(err) console.log(err)
    console.log("Connected successfully!!!")
    var Scheme=mongoose.Schema;

    var bookSchema=new Scheme({
        book_id:Number,
        name:String,
        rating:Number,
        author:Array
    });

    var books=mongoose.model('Books101',bookSchema);

    /*  var mybook=new books();
    mybook.book_id=105;
    mybook.name="C++ learning";
    mybook.rating=4;
    mybook.author=['Ken'];
    mybook.save();

    var yourbook=new books({book_id:104,name:'Nodejs in action',rating:4.6,author:['Ryan dalh']});
    yourbook.save(function(err){
        if(err) console.log(err)
        console.log("Book record saved sucessfully")
        mongoose.disconnect();
    });  */
    var empSchema=new Scheme({
        name:String,
        project:String,
        location:String,
        exp:Number
    });
    var emp=mongoose.model('Emp',empSchema);
    emp.find({},function(err,employees){
        if(err) console.log(err)
        console.log(employees)
        mongoose.disconnect();
     }) 

})