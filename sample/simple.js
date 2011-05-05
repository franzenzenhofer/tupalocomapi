var tupalo = require('../tupalocomapi.js');

tupalo.de.spots({
  origin:'yppenplatz, wien, österreich',
  radius:5
  }, function(d){
  d = JSON.parse(d);
  for(var z in d)
  {
    //console.log(d[z]);
    console.log(d[z].name);
    console.log(d[z].street);
    console.log(d[z].zip+' '+d[z].state);
    console.log(' ');
  }
  })