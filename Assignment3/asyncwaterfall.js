var async=require('async');
async.waterfall([
  function(callback) {
    callback(null, 'Ruhi', 'Juhi');
  },
  function(a, b, callback) {
    let s = a + ' and ' + b;
    callback(null, s);
  },
  function(m, callback) {
    m += ' are sisters';
    callback(null, m);
  }
], function(err, result) {
  console.log(result);
});

/*Ruhi and Juhi are sisters*/