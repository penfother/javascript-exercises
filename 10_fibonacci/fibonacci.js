const fibonacci = function(num) {
    let fibb = [0, 1];

//changes input string to integer
num = Math.round(num)

//if clause in case we want the first two numbers
    if (num == 0 || num == 1) {
        return fibb[num];

    } 
//clause to calculate if given integer is positive and larger than 1 
    else if (num > 1 && num > 0) { 

//calculates fibonacci numbers from second onwards
        for (i = 0; i < num; i++) {
            fibb[i + 2] = fibb[i + 1] + fibb[i]; 
        };
        return fibb[num];
    } else {

// error message in case of a negative integer input
        return "OOPS";
    };
};

// Do not edit below this line
module.exports = fibonacci;
