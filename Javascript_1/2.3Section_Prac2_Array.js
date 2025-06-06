/*
Question 3: We are setting up our small library of books about JavaScript programming. We have three books and want to prepare a list of them.
 We will store three pieces information about each book: title, author, and number of pages:

Speaking JavaScript, Axel Rauschmayer, 460;
Programming JavaScript Applications, Eric Elliott, 254;
Understanding ECMAScript 6, Nicholas C. Zakas, 352.
Create an array of three objects representing the books. 
Each object must have the following properties: title, author, pages.



Question 4: Add a new book to the collection: Learning 
JavaScript Design Patterns, by Addy Osmani, 254 pages.
 Use the appropriate method to do this, which will attach the
  book at the end of the array. Display the length of 
the array and, in turn, all the book names in the collection.



Question 5: Use the slice 
command to copy the last two books to the new array.


Question 6: The first book from the collection is lost in
 unexplained circumstances. You have already accepted the 
 loss, so remove it from the array. Which method will you 
 use for this purpose? Display the length of the array 
and all the names of the books from the collection in turn.



Question 7: Display the sum of
 the pages of all the books from the collection.
*/ 

let books = [
    {
        title :
            "Speaking JavaScript",
        author :
            "Axel Rauschmayer",
        pages :
            460
    },
    {
        title :
            "Programming JavaScript Applications",
        author :
            "Eric Elliott",
        pages :
            254
    },
    {
        title :
            "Understanding ECMAScript 6",
        author :
            "Nicholas C. Zakas",
        pages :
            352
    }
]
let newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
};
books.push(newBook);
console.log("Total number of books: " + books.length);
console.log("Books in the collection:");    


let selectedBooks = books.slice(1, 3);
for (let book of selectedBooks) {
    console.log(book.title);
}

books.shift();
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

let sum = books[0].pages + books[1].pages + books[2].pages;
console.log("Total number of pages: " + sum);
console.log("Books in the collection after removing the first book:");