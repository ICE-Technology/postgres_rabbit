var pg = require ('pg');

var express = require('express');

var app = express();
const PORT = process.env.PORT || 5000;
//var pgConString = "postgres://postgres:root@localhost/node_hero";
//var pgConString = "postgres://wnloxtbfrbjnae:c129f387c6659dd0f9033f00c94c24ea77af9735db7fad916dd011a95b567e30@ec2-23-21-184-181.compute-1.amazonaws.com:5432/d63icc9v8kpsii"
var pgConString=process.env.DATABASE_URL;
//pg.defaults.ssl = true;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
pg.connect(pgConString, function(err, client) {
  if(err) {
    console.log(err);
  }
  client.on('notification', function(msg) {
   console.log(msg);
   //console.log(msg.payload);
	//console.log('Shyam');
  });
  var query = client.query("LISTEN watchers");
}); 

