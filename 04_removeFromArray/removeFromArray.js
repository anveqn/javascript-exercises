const removeFromArray = function(baseArray, ...toRemove){
  let itemsToRemove = toRemove;

  for (let i = 0; i < baseArray.length; i++){
    for (let j = 0; j < itemsToRemove.length; j++){
      baseArray = baseArray.filter(item => item !== itemsToRemove[j]); 
    }
  }
  return baseArray;
}

// Do not edit below this line
module.exports = removeFromArray;
