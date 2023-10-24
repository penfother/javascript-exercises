const add = function(additor1, additor2) {
  plus = additor1 + additor2;
  return plus;	
};

const subtract = function(subtractor1, subtractor2) {
	minus = subtractor1 - subtractor2;
  return minus;
};

const sum = function(sumArray) {
	sumsValue = 0;
  for (i = 0; i < sumArray.length; i++) {
    sumsValue += sumArray[i];  
  };
  return sumsValue;
};

const multiply = function(multiplyArray) {
  firstTwo = multiplyArray[0] * multiplyArray[1];
  multiplyArray.shift();
  multiplyArray.shift();
  if (multiplyArray.length == 0){
    return firstTwo;
  } else {
    let multiplicate = 1;
    for (i = 0; i < multiplyArray.length; i++){
      multiplicate *= multiplyArray[i];
    };
    multiplicate *= firstTwo; 
    return multiplicate;
  };
};

const power = function(base, exponent) {
	powerValue = base ** exponent;
  return powerValue;
};

const factorial = function(factorNum) {
  let factorValue = 1;
  if (factorNum == 0 || factorNum == 1) {
    return factorValue;
  } else {
    for (i = 0; i < factorNum; i++) {
      factorValue = factorValue * (i + 1);
    };
    return factorValue;
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
