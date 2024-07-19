let array = [1, 2, 3, 4, 5];
console.log(array); // Output: [1, 2, 3, 4, 5]

console.log(array[0]); // Output: 1
console.log(array[array.length - 1]); // Output: 5

array.push(6);
console.log(array); // Output: [1, 2, 3, 4, 5, 6]

array.pop();
console.log(array); // Output: [1, 2, 3, 4, 5]

array.shift();
console.log(array); // Output: [2, 3, 4, 5]

array.unshift(1);
console.log(array); // Output: [1, 2, 3, 4, 5]

let doubledArray = array.map(num => num * 2);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]

let evenArray = array.filter(num => num % 2 === 0);
console.log(evenArray); // Output: [2, 4]

let sum = array.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// Output:
// 1
// 2
// 3
// 4
// 5

array.forEach(num => console.log(num));
// Output:
// 1
// 2
// 3
// 4
// 5

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
// Output:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

console.log(matrix[1][2]); // Output: 6

