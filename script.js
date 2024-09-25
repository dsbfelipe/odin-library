const booksContainer = document.getElementById("books-container");
const readStatus = document.querySelector(".status");
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

console.log(library[0].read);

function addBookToLibrary(title, author, pages, read, url) {
  library.push(new Book(title, author, pages, read, url));
}

function displayBooks() {
  library.forEach((book) => {
    booksContainer.innerHTML += `
    <div class="book">
      <img class="book-cover" src="${book.url}" />
      <p class="status">${book.read ? "Already read" : "Not read yet"}</p>
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
  });
}

console.log(library);
displayBooks();
