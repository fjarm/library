let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    
}

const bookButton = document.querySelector('.new-book-button');

bookButton.addEventListener('click', () => {
    const bookForm = document.querySelector('.new-book-form');

    if (bookForm.style.display === 'none') {
        bookForm.style.display = 'block';
    } else {
        bookForm.style.display = 'none';
    }
})