const sumAll = function(startNum, endNum) {
    let startingNum = startNum;
    let endingNum = endNum;
//    if (startNum < 0 || endNum < 0) {
//        return "ERROR";
//    } else {
//        if (endNum < startNum) {
//            startingNum = endNum;
//            endingNum = startNum;
//        }
        let sum = startingNum;
        let counterNum = startingNum;
        for (let i = 0; i < endingNum - startingNum; i++) {
            counterNum += 1;
            sum += counterNum;
//        };
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
