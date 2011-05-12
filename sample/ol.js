var tupalo = require('../tupalocomapi.js');

var ids = {};
var ol = function ol(offset, limit)
{
  console.log("offset "+ offset);

  tupalo.en.spots({
    latitude: 48.208174,
    longitude: 16.373819,
    radius: 1,
    offset:offset,
    limit:limit,
    includecategories: "bar,club,wine,wine-bars"
  },
    function(d)
    {
  
      try
      {
       d = JSON.parse(d);
      }
      catch(err)
      {
        console.log(d);
        console.log(err);
      }
      var z = 0;
      d.forEach(function(e)
       {
        console.log(offset + '+' + (z) +' = '+ (offset+z) +' '+ e.name +' / '+ e.spot_id);
        if(ids[e.spot_id+''])
        {
          console.log(">>> DUPLICATE");
          console.log(offset + '+' + (z) +' = '+ (offset+z) +' '+ e.name +' / '+ e.spot_id +' === '+ids[e.spot_id+'']);
          console.log("<<<");
        }
        else
        {
          //console.log(ids);
          //ids.push(e.spot_id);
          ids[e.spot_id+'']=e.name+' ('+(offset+z)+')';
        }
        z++;
       })
    }
  )
  if(offset<80)
  {
    ol(offset+limit, limit);
  }
  else
  {
    console.log(ids);
  }
}

ol(0,10);
  