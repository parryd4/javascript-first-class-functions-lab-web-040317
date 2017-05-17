function countdown(callback){
  window.setTimeout(callback,2000)
}

function createMultiplier(multiplierValue){
  return function(argument){
    return argument * multiplierValue
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


function multiplier(x,y){
    return x * y
}

var doublerWithBind = multiplier.bind(2, null)
var triplerWithBind = multiplier.bind(3, null)
