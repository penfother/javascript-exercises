const snakeCase = function(phrase) {

//removes all punctuation from the input string, for kebab case changes "-" for space 

    blankPhrase = phrase.replace(/[,\/#!$%\^&\*?!;:{}=`~()]/g,"").replace(/[-]/g,"_");

//for WTF case changes double dots ("..") for space (" ")

    for (i = 0; i < phrase.length; i++) {
        blankPhrase = blankPhrase.replace("..", " ");
    };

blankPhrase = blankPhrase.trim();

//defines input phrase and disassociates it into an array

    let phraseArray = [];

    for (i = 0; i < blankPhrase.length; i++) {
        phraseArray[i] = blankPhrase.slice(i, i + 1);
    };

//adds a space in front of larger letter for camelCase
    for (i = 0; i < phraseArray.length; i++) {
        if (phraseArray[i] != phraseArray[i].toLowerCase() && phraseArray[i - 1] != " " && phraseArray[i - 1] == phraseArray[i].toLowerCase()) {
            phraseArray.splice(i - 1, 0, " ");
        };
    };

//
    let snake = phraseArray.join("");

    for (let i = 0; i < snake.length; i++) {
        snake = snake.replace(" ", "_");
    };

    return snake.toLowerCase();
};

// Do not edit below this line
module.exports = snakeCase;
