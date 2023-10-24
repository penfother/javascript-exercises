const palindromes = function (testPalindromString) {
    
    //removes punctuation, uppercase letters, numbers
    let noShitString = testPalindromString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()1234567890]/g,"").toLowerCase();

    let backwardsArray = [];
    let backPointer = noShitString.length;

    //puts pieces of string into array in a backwards order
    for (i = 0; i < noShitString.length; i++) {
        backPointer -= 1;
        backwardsArray[i] = noShitString.slice(backPointer, backPointer + 1);
    };

    //removes spaces from backwardsArray

    //assembles backwardsArray into string WITHOUT SPACES INBETWEEN WORDS
    testArray = backwardsArray.join("");

    //tests if the starting string is the same as the newly assembled one
    if (testArray == noShitString) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
