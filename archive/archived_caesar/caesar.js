const caesar = function(letters, num) {
//creates letters of the alphabet in an array

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

    let cypherArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

//checks if given num is negative or positive
    if (num > 0) {
    //creates cypher array depending on the inputed num(number to displace the array for cypher)- works with positive numbers
        for (let i = 0; i < num; i++) {
            straggler = cypherArray.shift();
            cypherArray.push(straggler);        
        };
    } else {
    //creates cypher array depending on the inputed num(number to displace the array for cypher)- works with negative numbers
        for (let i = 0; i < -num; i++) {
            straggler = cypherArray.pop();
            cypherArray.unshift(straggler);
        };
    };

//takes the input letters and disassociates them into an array
    let lettersArray = [];
    let upperLowerArray = [];

    for (let i = 0; i < letters.length; i++) {
        lettersArray[i] = letters.toUpperCase().slice(i, i + 1);
        upperLowerArray[i] = letters.slice(i, i + 1);
    };

//changes the input  letters for their equivalent in cypher array
    let cypher = [];

    for (let i = 0; i < lettersArray.length; i++) {
        for (let o = 0; o < alphabet.length; o++) {
            if (lettersArray[i] == alphabet[o]) {
                cypher[i] = cypherArray[o];
            };
        };
    };

//checks for uppercase, lowercase letters and common diacritic signs in input phrase
    for (let i = 0; i < upperLowerArray.length; i++) {
        if (upperLowerArray[i] == " " || upperLowerArray[i] == "," || upperLowerArray[i] == "!") {
            cypher[i] = lettersArray[i];
        } else if (upperLowerArray[i] == upperLowerArray[i].toLowerCase()) {
            cypher[i] = cypher[i].toLowerCase();
        };
    };


//returns finished cypher
    let finishedCypher = "";

    finishedCypher = cypher.join("");
    return finishedCypher;
    //added for debugging
    //return letters;
};

// Do not edit below this line
module.exports = caesar;
