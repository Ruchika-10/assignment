var async=require('async');
async.series([function(callback){
  console.log("function 1");
  callback(null,'1');
},function(callback){
  console.log("function 2");
  callback(null,'2')
},function(callback)
{
  console.log("function 3");
  callback(null,'3');
}],function(err,data){
console.log(data);
}
);

/*
function 1
function 2
function 3
['1','2','3']
*/