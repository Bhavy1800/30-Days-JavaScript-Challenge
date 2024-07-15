let number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

let age = parseInt(prompt("Enter age:"));

if (age >= 18) {
    console.log("The person is eligible to vote.");
} else {
    console.log("The person is not eligible to vote.");
}

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let num3 = parseFloat(prompt("Enter third number:"));
let largest;

if (num1 >= num2) {
    if (num1 >= num3) {
        largest = num1;
    } else {
        largest = num3;
    }
} else {
    if (num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }
}

console.log("The largest number is", largest);

let day = parseInt(prompt("Enter a day number (1-7):"));
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("The day is", dayName);

let score = parseInt(prompt("Enter score (0-100):"));
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;
    case (score >= 80 && score < 90):
        grade = 'B';
        break;
    case (score >= 70 && score < 80):
        grade = 'C';
        break;
    case (score >= 60 && score < 70):
        grade = 'D';
        break;
    case (score >= 0 && score < 60):
        grade = 'F';
        break;
    default:
        grade = "Invalid score";
}

console.log("The grade is", grade);

let number1 = parseInt(prompt("Enter a number:"));
let result = (number1 % 2 === 0) ? "even" : "odd";
console.log("The number is", result);

let year = parseInt(prompt("Enter a year:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year, "is a leap year.");
} else {
    console.log(year, "is not a leap year.");
}

