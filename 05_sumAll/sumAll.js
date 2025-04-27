const sumAll = function(firstNumber, secondNumber) {
  let sum = 0;
  if(firstNumber < 0 || secondNumber < 0){
    return "ERROR";
  } else if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
    return "ERROR";
  } else if (typeof firstNumber !== "number" || typeof secondNumber !== "number"){
    return "ERROR";
  } else {
    if (firstNumber < secondNumber){
      for (let i = firstNumber; i<=secondNumber; i++){
        sum += i;
      }
    } else {
      for (let i = secondNumber; i<=firstNumber; i++){
        sum += i;
      }
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
