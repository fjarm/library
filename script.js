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

let selectedBook = "";

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

function openBookMenu() {
    const bookEditMenu = document.querySelector('.book-edit-container')

    if (bookEditMenu.style.visibility === "hidden") {
        bookEditMenu.style.visibility = "visible";
    } else {
        bookEditMenu.style.visibility = "hidden";
    }
}

addBookToLibrary();

const bookButton = document.querySelector(".new-book-button");
const removeButton = document.querySelector(".remove-book-button");

bookButton.addEventListener('click', () => {
    toggleFormVisibility();
})

const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', () => {
    let newTitle = document.getElementById("title").value;
    let newAuthor = document.getElementById("author").value;
    let newPages = document.getElementById("pages").value;
    let newRead = document.getElementById("read").checked;
    if (newTitle === "" || newAuthor === "" || newPages === "") {
        alert("Please fill empty fields.")
        return
    }
    
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
    addRowHandlers();
    
    document.getElementById("new-book-form").reset();
    toggleFormVisibility();
})

function addRowHandlers() {
    let table = document.querySelector(".book-table");
    let rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
      let currentRow = table.rows[i];
      let createClickHandler = function(row) {
        return function() {
            if (currentRow === table.rows[0]) {
                return;
            }
            selectedBook = row;
            openBookMenu();
        };
      };
      currentRow.onclick = createClickHandler(currentRow);
    }
}

addRowHandlers();

const toggleReadButton = document.getElementById("toggle-read-button");

toggleReadButton.addEventListener('click', () => {
    let readCell = selectedBook.getElementsByTagName("td")[3];
    if (readCell.textContent === "Yes") {
        readCell.textContent = "No";
    } else {
        readCell.textContent = "Yes";
    }
});

const deleteBookButton = document.getElementById("delete-book-button");

deleteBookButton.addEventListener("click", () => {
    let selectedBookName = selectedBook.getElementsByTagName("td")[0];

    let table = document.querySelector(".book-table");
    let rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        let currentRow = table.rows[i];
        if (currentRow.getElementsByTagName("td")[0] === selectedBookName) {
            table.deleteRow(i);
            openBookMenu();
            return;
        }
    }
})

const closeBookEditButton = document.getElementById("close-book-edit-button");

closeBookEditButton.addEventListener("click", () => {
    openBookMenu();
})