const prompt = require("prompt-sync")();
let person_status = prompt("please enter a person status: ");
let num_of_books_kept = prompt("Please enter the number of books kept past the due date: ");
person_status = person_status.toLowerCase();
let loan_duration;

if (person_status === "student"){
    if (num_of_books_kept == 0)
        loan_duration = 6;
    else if(num_of_books_kept < 3)
        loan_duration = 4;
    else
        loan_duration = 2;


}else if (person_status === "faculty"){
    if (num_of_books_kept == 0)
    loan_duration = 16;
    else if(num_of_books_kept < 3)
    loan_duration = 12;
    else
    loan_duration = 8;
}else if (person_status === "other"){
    if (num_of_books_kept == 0)
    loan_duration = 4;
    else if(num_of_books_kept < 3)
    loan_duration = 3;
    else
    loan_duration = 2;

}else{
    loan_duration = 0;
}

console.log("The book loan duration is " + loan_duration + "days.");