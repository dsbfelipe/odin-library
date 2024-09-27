const booksContainer = document.querySelector("#books-container");
const readStatus = document.querySelector(".status");
const newButton = document.querySelector(".add-button");
const modal = document.querySelector("#modal");
const darken = document.querySelector(".darken");
const closeModal = document.querySelector(".modal-header > button");
const coverImages = document.querySelectorAll(".book-cover");
const filters = document.querySelector("#filter-select");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pagesInput = document.querySelector(".pages-input");
const urlInput = document.querySelector(".url-input");
const readInput = document.querySelector(".read-input");
const addBookButton = document.querySelector(".add-book");
const library = [
  {
    title: "Secrets of the JavaScript Ninja",
    author: "John Resig",
    pages: 392,
    read: false,
    url: "https://m.media-amazon.com/images/I/711+-FJC3sL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Don't Make Me Think, Revisited",
    author: "Masashi Kishimoto",
    pages: 216,
    read: true,
    url: "https://m.media-amazon.com/images/I/617rPny7-LL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    read: false,
    url: "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Naruto Gold Vol. 27",
    author: "Masashi Kishimoto",
    pages: 192,
    read: true,
    url: "https://m.media-amazon.com/images/I/91qf9wFcEsL._SL1500_.jpg",
  },
  {
    title: "O guia do mochileiro das galáxias",
    author: "Douglas Adams",
    pages: 208,
    read: true,
    url: "https://m.media-amazon.com/images/I/81eMrK+qVCL._SL1500_.jpg",
  },
  {
    title: "Grokking Algorithms",
    author: "Aditya Bhargava",
    pages: 256,
    read: true,
    url: "https://m.media-amazon.com/images/I/81HwgKQ39lS._SL1500_.jpg",
  },
  {
    title: "The Creative Act: A Way of Being",
    author: "Rick Rubin",
    pages: 432,
    read: true,
    url: "https://m.media-amazon.com/images/I/918EkrTDaRL._SL1500_.jpg",
  },
  {
    title: "O Estranho Misterioso",
    author: "Mark Twain",
    pages: 214,
    read: true,
    url: "https://m.media-amazon.com/images/I/71ixBb6jqLL._SL1000_.jpg",
  },
];

function Book(title, author, pages, read, url) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.url = url;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "Already read" : "Not read yet"
    }`;
  };
}

function addBookToLibrary(title, author, pages, read, url) {
  library.push(new Book(title, author, pages, read, url));
}

addBookButton.addEventListener("click", () => {
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.checked;
  const url = urlInput.value;
  addBookToLibrary(title, author, pages, read, url);
  closeModalFunction();
  displayBooks(library);
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;
  urlInput.value = "";
});

function filterByRead(array) {
  return array.filter((book) => book.read);
}

function filterByNotRead(array) {
  return array.filter((book) => book.read === false);
}

function clearContainer() {
  booksContainer.innerHTML = "";
}

function displayBooks(array) {
  clearContainer();
  array.forEach((book, index) => {
    booksContainer.innerHTML += `
    <div class="book" data-attribute="${index}">
      <img class="book-cover" src="${book.url}" />
      <div class="status-container">
        <p class="status">${book.read ? "Already read" : "Not read yet"}</p>
        <button class="delete-button" data-attribute="${index}"><img class="trash-icon" src="assets/trash.svg">Delete</button>
      </div>
      <div class="book-info">
        <div class="title-pages">
          <h1 class="book-title">${book.title}</h1>
          <div class="pages-container">
          <img src="assets/pages.svg">
            <div class="pages-info">
              <p class="book-pages">${book.pages}</p>
              <p class="book-pages-text">pages</p>
            </div>
          <div>
        </div>
        </div>
    </div>
    <h2 class="book-author">${book.author}</h2>
    `;
    library.forEach((book, index) => {
      setTimeout(() => {
        const covers = document.querySelectorAll(".book-cover");
        const currentCover = covers[index]; // Select the current cover using the index
        currentCover.style.opacity = "1";
      }, 100 * index);
    });
  });

  const deleteBookButtons = document.querySelectorAll(".delete-button");
  deleteBookButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const targetElement = event.target.closest(".delete-button");
      const index = targetElement.dataset.attribute;
      console.log(index);
      library.splice(index, 1);
      displayBooks(library);
    });
  });
}

filters.addEventListener("change", () => {
  const selectedValue = filters.value;
  if (selectedValue === "read") {
    displayBooks(filterByRead(library));
  } else if (selectedValue === "not-read") {
    displayBooks(filterByNotRead(library));
  } else {
    displayBooks(library);
  }
});

newButton.addEventListener("click", () => {
  modal.style.display = "flex";
  setTimeout(() => {
    modal.style.opacity = "1";
  }, 100);
  darken.style.display = "flex";
  setTimeout(() => {
    darken.style.opacity = "1";
  }, 100);
  console.log("oi");
});

closeModal.addEventListener("click", closeModalFunction);

function closeModalFunction() {
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
  }, 200);
  darken.style.opacity = "0";
  setTimeout(() => {
    darken.style.display = "none";
  }, 200);
}

displayBooks(library);
