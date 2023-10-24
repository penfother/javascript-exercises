const sumAll = function(startNum, endNum) {
    let startingNum = startNum;
    let endingNum = endNum;

    //checks if the larger number is written first
    if (endNum < startNum) {
        startingNum = endNum;
        endingNum = startNum;
    };
    let sum = startingNum;
    let counterNum = startingNum;
    
    //calculates the sum

    for (let i = 0; i < endingNum - startingNum; i++) {
        counterNum++;
        sum += counterNum;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
