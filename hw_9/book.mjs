export default class Book {
    constructor(bookName, author, publichedDate) {
        this.bookName = bookName,
        this.author = author,
        this.publichedDate = publichedDate
    }

    static getOldestBook(arrayBooks) {
        const sortedBooks = arrayBooks.sort((a, b) => a.publichedDate - b.publichedDate);
        const freshBook = sortedBooks[0];
        return freshBook
    }

    printInfo() {
        console.log(`Book name: ${this.bookName}, Author: ${this.author}, Published: ${this.publichedDate}`)
    }

    get bookName () {
        return this._bookName
    }

    get author () {
        return this._author
    }

    get publichedDate () {
        return this._publichedDate
    }

    set bookName(bookName) {
    if ((typeof bookName) != "string"){
            throw new Error ("Incorrect input")
        } else {this._bookName = bookName}
        this._bookName = bookName
    }

    set author(author) {
        if ((typeof author) != "string") throw new Error ("Incorrect input")
            this._author = author;
    }

    set publichedDate(publichedDate) {
        if (Number.isNaN(publichedDate)) throw new Error ("Incorrect input")
            this._publichedDate = publichedDate;
    }
}
