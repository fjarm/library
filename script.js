const aGameOfThrones = new Book(
    "A Game of Thrones", "George R.R. Martin", "694", "Yes"
)

const theHobbit = new Book(
    "The Hobbit", "J.R.R. Tolkien", "310", "No"
)

let myLibrary = [aGameOfThrones, theHobbit];
let tempLibrary = [aGameOfThrones, theHobbit];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    const table = document.querySelector(".table-body");
    const rows = table.querySelectorAll("tr");

    tempLibrary.forEach(book => {
        let row = document.createElement('tr');

        Object.values(book).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
        tempLibrary = [];
    })
}

function toggleFormVisibility() {
    const bookForm = document.querySelector('.form-container');

    if (bookForm.style.visibility === 'hidden') {
        bookForm.style.visibility = 'visible';
        bookButton.textContent = 'Hide';
    } else {
        bookForm.style.visibility = 'hidden';
        bookButton.textContent = 'New Book';
    }
}

addBookToLibrary();

const bookButton = document.querySelector('.new-book-button');

bookButton.addEventListener('click', () => {
    toggleFormVisibility();
})

const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', () => {
    let newTitle = document.getElementById("title").value;
    let newAuthor = document.getElementById("author").value;
    let newPages = document.getElementById("pages").value;
    let newRead = document.getElementById("read").checked;
    if (newRead === true) {
        newRead = "Yes"
    } else {
        newRead = "No"
    }

    let newBook = new Book(
        newTitle, newAuthor, newPages, newRead
    )

    myLibrary.push(newBook);
    tempLibrary.push(newBook);
    addBookToLibrary();
    
    toggleFormVisibility();
    document.getElementById("new-book-form").reset();
})