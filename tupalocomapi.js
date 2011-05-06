var apimaker = require("apimaker");
apimaker.enableDebug(true);
var languages = ["de", "en", "nl", "fi", "fr", "pl", "da", "sv"];
var root = "http://tupalo.com/";
var paths = {spots:"/api/easy/v1/spots", spot:"/api/easy/v1/spot", match:"/api/easy/v1/match", widget:"/api/easy/v1/review_widget"};
var paramstrings = new function() {
  var self = this;
  var all = "token=&spot_id=";
  self.spots = all + "&name=&origin=&latitude=&longitude=&radius=&excludecategories=&includecategories=&map_size=";
  self.spot = self.spots;
  self.match = all + "&phone=&website=&name=&street=&zip=&city=&countrycode=&category=&sourceurl=";
  self.widget = all
};
var createTupaloAPI = function(languages, root, paths, paramstrings) {
  var tup = {};
  for(var i = 0;i < languages.length;i++) {
    tup[languages[i]] = {};
    for(var z in paths) {
      var uri = root + languages[i] + paths[z] + "?" + paramstrings[z];
      tup[languages[i]][z] = apimaker(uri, "GET")
    }
  }
  return tup
};
var tupaloAPI = createTupaloAPI(languages, root, paths, paramstrings);
module.exports = tupaloAPI;

var setToken = function(token)
{
  if(token && typeof token === 'string' && token !== '')
  {
    for(var lang in tupaloAPI)
    {
      for(var module in tupaloAPI[lang])
      {
        tupaloAPI[lang][module].setToken(token);
      }
    }
  }
  return tupaloAPI;
}

module.exports = tupaloAPI;
module.exports.setToken = setToken; 

