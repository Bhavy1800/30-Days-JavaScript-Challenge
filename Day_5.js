function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

// Example usage
checkEvenOrOdd(4); // Output: Even
checkEvenOrOdd(7); // Output: Odd

function square(number) {
    return number * number;
}

// Example usage
console.log(square(5)); // Output: 25

const findMax = function(a, b) {
    const max = (a > b) ? a : b;
    console.log(max);
};

// Example usage
findMax(10, 15); // Output: 15

const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

// Example usage
console.log(concatenateStrings("Hello, ", "world!")); // Output: Hello, world!

const sum = (a, b) => a + b;

// Example usage
console.log(sum(5, 10)); // Output: 15


const containsChar = (str, char) => str.includes(char);

// Example usage
console.log(containsChar("Hello", "e")); // Output: true
console.log(containsChar("Hello", "z")); // Output: false

function multiply(a, b = 1) {
    return a * b;
}

// Example usage
console.log(multiply(5)); // Output: 5 (5 * 1)
console.log(multiply(5, 3)); // Output: 15

function greet(name, age = "unknown") {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Example usage
console.log(greet("Alice")); // Output: Hello, Alice! You are unknown years old.
console.log(greet("Bob", 25)); // Output: Hello, Bob! You are 25 years old.

function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

// Example usage
repeatFunction(() => console.log("Hello!"), 3); 
// Output:
// Hello!
// Hello!
// Hello!

function composeFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}

// Example usage
const add5 = x => x + 5;
const multiplyBy2 = x => x * 2;

console.log(composeFunctions(add5, multiplyBy2, 10)); // Output: 30 ((10 + 5) * 2)

