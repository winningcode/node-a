var assignmentStatus= new Promise(function(resolve,reject){
    //Doing the assignment
    var isCompleted=false;
    if(isCompleted){
      resolve('completed');
    } else {
    reject('Not completed');
    }
  });
  
  assignmentStatus
  .then(function(status){
       console.log(" The Assignment is "+ status);
  }).catch(function(status){
      console.log(" The Assignment is "+ status);
  })
  