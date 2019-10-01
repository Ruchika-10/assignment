let promise = new Promise(function(resolve,reject)
{
  var a=10; // var a=60- output will be you chose wrong value
  a+=20;
  if (a>50)
  {
   reject('Rejected');
  }
  else
  {
   resolve(a);
  }
});
promise.then(function(a) 
{ console.log('so far so good,a='+a);
},function(err)
{ console.log("you chose wrong value "+err);
});
