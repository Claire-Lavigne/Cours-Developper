### JSON (JavaScript Object Notation)
```javascript
let myBook = {
    title: 'The Story of Tau',  // key : value
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};

// show one key of the object
console.log(myBook.title);      // 'The Story of Tau'
// also creating a variable
let bookTitle = myBook.title;
```

### CLASS
Multiple objects
```javascript
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
// I create a book
let myBook = new Book('The Story of Tau', 'Will Alexander', 250);
// Show
console.log(myBook);
```
Result in console :
```javascript
[object] {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    pages: 250
}
```
