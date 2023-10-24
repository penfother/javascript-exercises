const palindromes = function (testPalindromString) {
    
    //removes punctuation, uppercase letters, numbers from starting string
    let noShitString = testPalindromString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()1234567890]/g,"").toLowerCase();

    let backwardsArray = [];
    let noShitStringArray = [];

    //checks if the tested string has any spaces, if there are replaces them with a zero then removes them
    for (i = 0; i < noShitString.length; i++) {
        noShitStringArray[i] = noShitString.slice(i, i+1);
        if (noShitStringArray[i] == " ") {
            noShitStringArray[i] = "0";
        };         
    };

    noShitString = noShitStringArray.join("").replace(/[0]/g,"");
    
    let backPointer = noShitString.length;

    //puts pieces of string into array in a backwards order
    for (i = 0; i < noShitString.length; i++) {
        backPointer -= 1;
        backwardsArray[i] = noShitString.slice(backPointer, backPointer + 1);
    };

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
