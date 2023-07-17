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
    const bookForm = document.querySelector('.form-container');

    if (bookForm.style.visibility === 'hidden') {
        bookForm.style.visibility = 'visible';
        bookButton.textContent = 'Hide';
    } else {
        bookForm.style.visibility = 'hidden';
        bookButton.textContent = 'New Book';
    }
})