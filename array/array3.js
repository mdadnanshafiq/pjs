let books = ['Harry Potter', 'Zero to One', 'Eloquent Javascript'];

function bookFinder(bookName) {
    if (books.includes(bookName)) {
        return 'The book is available';
    } else {
        return 'The book is not available';
    }
}

console.log(bookFinder('Eloquent Javascript'));