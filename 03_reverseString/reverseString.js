const reverseString = function(string) {
  const dividedString = string.split("");
  let finalString = "";
  for (let i = string.length-1; i>=0; i--){
     finalString += dividedString[i];
  }
  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
