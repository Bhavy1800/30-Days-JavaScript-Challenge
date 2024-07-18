for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(`Sum: ${sum}`);

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

let number = 5; // You can change this value to calculate the factorial of a different number
let factorial = 1;
let i = 1;
do {
    factorial *= i;
    i++;
} while (i <= number);
console.log(`Factorial of ${number} is ${factorial}`);

// (ignore color)
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
