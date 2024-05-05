// 2. Write a JavaScript program to create object book
let book = {
  bookName: "Alice in the Wonderland",
  authorName: "Author A"
};

// 2b. Add the prototype property price
book.__proto__.price = 15;

// 2c. Display all the properties
console.log("Book Name:", book.bookName);
console.log("Author Name:", book.authorName);
console.log("Price:", book.price);

// define constructor function 'Book' as book objects with properties 'bookName' and 'authorName'
