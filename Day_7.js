let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
console.log(book);
// Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }

console.log(book.title); // Output: The Great Gatsby
console.log(book.author); // Output: F. Scott Fitzgerald

book.getDetails = function() {
    return `${this.title} by ${this.author}`;
};

console.log(book.getDetails()); // Output: The Great Gatsby by F. Scott Fitzgerald

book.updateYear = function(newYear) {
    this.year = newYear;
};

book.updateYear(2024);
console.log(book);
// Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 2024, getDetails: [Function], updateYear: [Function] }

let library = {
    name: "City Library",
    books: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 }
    ]
};
console.log(library);
// Output: { name: 'City Library', books: [ { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, { title: '1984', author: 'George Orwell', year: 1949 } ] }

console.log(library.name); // Output: City Library
library.books.forEach(book => console.log(book.title));
// Output:
// The Great Gatsby
// To Kill a Mockingbird
// 1984

book.getTitleAndYear = function() {
    return `${this.title}, published in ${this.year}`;
};

console.log(book.getTitleAndYear()); // Output: The Great Gatsby, published in 2024

for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}
// Output:
// title: The Great Gatsby
// author: F. Scott Fitzgerald
// year: 2024
// getDetails: function() { ... }
// updateYear: function() { ... }
// getTitleAndYear: function() { ... }

console.log(Object.keys(book)); 
// Output: [ 'title', 'author', 'year', 'getDetails', 'updateYear', 'getTitleAndYear' ]

console.log(Object.values(book)); 
// Output: [ 'The Great Gatsby', 'F. Scott Fitzgerald', 2024, [Function], [Function], [Function] ]
