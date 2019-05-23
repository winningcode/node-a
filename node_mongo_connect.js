const mongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017';
var dbname="julydb";
mongoClient.connect(url,function(err,client){
    if(err) console.log("Unable to connect to mongodb server")
    console.log("Connected to mongodb server!!!");
    db=client.db(dbname);
    db.collection('Users').updateOne({name:'Arun'}, {$set:{age:30}},function(err,data){
        if(err) console.log('Error')
         console.log(data.result);
     });
    db.collection('Users').find().toArray(function(err,users){
        if(err) console.log(err)
        console.log(users);
    })

    /* db.createCollection('Users');
    var users=[
        {name:'Tarun',age:40},
        {name:'Arun',age:23}
        ];
    db.collection('Users').insert(users,function(err,data){
       if(err) console.log('Error')
        console.log("Inserted successfully");
    }); */
    client.close();
})