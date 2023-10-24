const leapYears = function(testYear) {
    let test = false;

    //tests if the year can even be considered for a leap year
    if (testYear % 4 == 0) {
        test = true;
    };

    //tests if the year is divisible by 100
    if (testYear % 100 == 0) {
        test = false;
    };

    //tests if the year is divisible by 100 and 400
    if (testYear % 100 == 0 && testYear % 400 == 0) {
        test = true;
    };

    return test;
};

// Do not edit below this line
module.exports = leapYears;
