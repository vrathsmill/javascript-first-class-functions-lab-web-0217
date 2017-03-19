function countdown (callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue){
  return function(value){
    return value * multiplierValue;
  };
}

function multiplier(multiplierValue, value){
  multiplierValue * value
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(2);
var triplerWithBind = multiplier.bind(3);
