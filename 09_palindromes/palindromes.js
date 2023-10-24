const palindromes = function (testPalindromString) {
    
    //removes punctuation, uppercase letters
    let noShitString = testPalindromString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    noShitString = noShitString.toLowerCase();


    let backwardsArray = [];
    let backPointer = noShitString.length;

    //puts pieces of string into array in a backwards order
    for (i = 0; i < noShitString.length; i++) {
        backPointer -= 1;
        backwardsArray[i] = noShitString.slice(backPointer, backPointer + 1);
    };

    //assembles backwardsarray into string
    testArray = backwardsArray.join("");

    //removes punctuation 


    //tests if the starting string is the same as the newly assembled one
    if (testArray == noShitString) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
