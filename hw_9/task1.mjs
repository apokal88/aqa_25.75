import Book from './book.mjs';
import EBook from './ebook.mjs';


const book1 = new Book("Harry", "J. K. Rowling", 1997);
const book2 = new Book ("Harry Potter and the Chamber of Secrets", "J. K. Rowling", 1998);
const book3 = new Book("Book 3", "Some author", 1994);
book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook("Lord of the rings 2", "Tolkien", 1954, "pdf")
const ebook2 = new EBook("Lord of the rings 3", "Tolkien", 1955, "pdf")
ebook1.printInfo();
ebook2.printInfo();

console.log(Book.getOldestBook([book1, book2, book3, ebook1, ebook2]))
console.log(EBook.getEBook(book1, "pdf")); 



