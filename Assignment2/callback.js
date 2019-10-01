function first(a,callback)
{ 
  console.log(`welcome ${a} to first function`);
  callback();
}
first('Ruchika',function(data){
  console.log("This is callback function");
}
);

