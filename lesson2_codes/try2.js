
    let message =
    "I'm thinking of a number between 1 and 100.\n" +
    "Try to guess it!\n" +
    "Please enter an integer between 1 and 100.";
    let answer = 38;
    let guess;
    let guessCount = 0;
    do {
        guess = (prompt(message));
        guess = parseInt(guess);
        guessCount++;
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

    alert("number of guess: " + guessCount);