import Book from './book.mjs';

export default class EBook extends Book { 
    constructor(bookName, author, publichedDate, fileFormat) {
        super(bookName, author, publichedDate)
        this.fileFormat = fileFormat
    }

    static getEBook(book, fileFormat) {
        return new EBook(book.bookName, book.author, book.publichedDate, fileFormat)
    }

    printInfo () {
        console.log(`Book name: ${this.bookName}, Author: ${this.author}, Published: ${this.publichedDate}, File format: ${this.fileFormat}`)
    }

    get fileFormat () {
        return this._fileFormat
    }

    set fileFormat(fileFormat) {
        if ((typeof fileFormat) != "string"){
                throw new Error ("Incorrect input")
            } else {this._fileFormat = fileFormat}
            this._fileFormat = fileFormat
        }
}

