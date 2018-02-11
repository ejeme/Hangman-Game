var rand = 0;
var word = "";
var numWrong = 0;
var numRight = 0;
var Fry700Length = 0;
var numChar = 0;
//create words from Fry's fifth 100 words.
var words = ["English", "finally", "correct", "quickly", "became", "shown", "minutes", "strong", "scientists", "carefully"];

// pick a random word from the array
var word = words[Math.floor(Math.random() * words.length)];

// Create a variable called answerArray and fill with underscores matching the number of letters in each word
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

// Show player the current progress.    
alert(answerArray.join(" "));

//Get the player's input
var guess = prompt("GUess a letter, or click Cancel to stop playing");

if (guess === null) {
    break;
}
//If the player enters more than a single letter, prompt to dusplay a single letter
else if (guess.length !== 1) {
    alert("Please enter a single letter");
}

else {
    //Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}
//The end of the loop
//Show the answer and congratulate the player

alert(answerArray.join(""));
alert("Great Job! The answer was " + word);                                                        
