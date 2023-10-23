const reverseString = function(string) {
    let newString = "";
    for (let i = 0; i < string.length + 1; i++) {
        newString = newString + string.slice(string.length - i, string.length - i + 1);  
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
