function numberGuessGame() {
    let message =
    "I'm thinking of a number between 1 and 100.\n" +
    "Try to guess it!\n" +
    "Please enter an integer between 1 and 100.";
    let answer = 38;
    let guess;
    do {
        guess = parseInt(prompt(message));
        if (guess < answer) {
        message = guess +
        " is too low. Please enter another integer.";
        }
        
        
        else if (guess > answer) {
            message = guess +
            " is too high. Please enter another integer.";
            }
    } while (guess != answer);
    message = guess + " is correct!";
    alert(message);
    } 

    console.log(numberGuessGame(message));
        