var async=require('async');
async.parallel([function(callback){
  setTimeout(function(){
    console.log("This is 1 sec function");
  },1000);
},function(callback){
  setTimeout(function(){
   console.log("This is 2 sec function")
  },3000);
}]);
/*
This is 1 sec function
This is 2 sec function*/