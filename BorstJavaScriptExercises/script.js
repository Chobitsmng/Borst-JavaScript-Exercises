// Excercise One 

function ExerciseOne() {
    var userNum = parseInt(prompt("Please enter a number.", 0), 10);
    var numbers = [];
    var total = 0;

    for (i = 1; i <= userNum; i++) {
        total = total + i;

    }

console.log(total);
}

//Exercise Two

function ExerciseTwo() {
    var play = prompt("Do you want to play?", "yes or no");

    do {
        var word = prompt("Enter a word.");
        console.log(word);
        play = prompt("Do you want to play again?", "yes or no");
    }
    while (play === "yes");
}

//Exercise Three
function ExerciseThree() {
    var name = prompt("What is your name?");
    var userInput = prompt("Would you like to print your name?");
    var endString = "";
    var string = "Hello. My name is " + name;
    var newString;

    console.log(string);

    while (userInput === "yes") {
        userInput = prompt("Would you like to print your name again?");
        newString = string += "!";
        console.log(newString);
    } 
}
//Exercise 4

function Exercisefour() {
    var TimeOfDay = prompt("What time of day is it?");

    if (TimeOfDay === "morning") {
        console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
    }

    else if (TimeOfDay === "noon") {
        console.log("Since it is noon, you should be eating lunch. We suggest a salad.");
    }

    else if (TimeOfDay === "evening") {
        console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.")
    }
}

ExerciseOne();
ExerciseTwo();
ExerciseThree();
Exercisefour();
