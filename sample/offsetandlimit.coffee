tupalo = require('../tupalocomapi.js')
self = @
self.z = 0
self.ids = []
self.call = 0

offsetAndLimit = (offset=0, limit=10) ->
  tupalo.en.spots(
      origin:'vienna, austria'
      radius:5
      offset:offset
      limit:limit
    ,
      (d) ->
        d = JSON.parse(d)
        ids = for a in d
          console.log("#{ offset } / #{ self.z++ }: #{ a.name } / #{ a.spot_id }")
          
          if a.name in self.ids
            console.log("#{ a.name } is DUPLICATE")
          else
            self.ids.push(a.spot_id)
          a.spot_id
  )
  
  
###
  first run
###
offsetAndLimit()
offsetAndLimit(10)
offsetAndLimit(20)
offsetAndLimit(30)
offsetAndLimit(40)
offsetAndLimit(50)
offsetAndLimit(60)
