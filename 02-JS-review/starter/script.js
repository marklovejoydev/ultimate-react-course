const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring

const book = getBook(2);

book;

// const title = book.title;
// title;

// const author = book.author;
// author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title);

console.log(genres);

// const priGenre = genres[0];
// const secGenre = genres[1];
//rest operator
const [priGenre, secGenre, ...otherGenre] = genres;

console.log(priGenre, secGenre, otherGenre);
// ...genres takes every item out of the arr and spreads them out
//spread operator
const newGenre = [...genres, "epic fantasy"];

console.log(newGenre);

//objects
// spreads and updates can add and override existing property
const updateBook = {
  ...book,
  //add new
  moviePublicationDate: "2001-12-19",
  // override
  pages: 1210,
};

updateBook;
const getYear = (str) => str.split("-")[0];
//template literals

const summary = `${title} is a book with ${pages}-pages, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary;

//Ternary

const pagesRange = pages > 1000 ? "over a thousand" : "less than one thousand";
pagesRange;
console.log(`the book has ${pagesRange} pages.`);

//normal functions
// function getYear(str) {
//   return str.split("-")[0];
// }

//arrow functions
//single line use
// const getYear = (str) => str.split("-")[0];

// for multiple lines and code will req return
const getYearAlt = (str) => {
  return str.split("-")[0];
};

console.log(getYear(publicationDate));

//short circuiting -- operator can imediatly return first value
// not short circuit
console.log(true && "Some string");
// short circuit
console.log(false && "Some string");

console.log(hasMovieAdaptation && "This book has a movie");
// falsy: 0, '', null, undefined
// if used false value will exit and not read second value if true will use both
console.log("jonas" && "this is a truth value showing second value");
console.log(0 && "this is a false value not showing second value");

// or statements short circuiting works in the sam eway but oposite
console.log(true || "Some String");
console.log(false || "Some String");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// nullish coillesing operator works similar to or and short circuits with null or undefenied will return second value

const count = book.reviews.librarything?.reviewsCount ?? "no data";
console.log(count);
// optional chaining using ? for optional incase a part is undefined
// use if your not sure all the values exist
const getTotalReviewCount = (book) => {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
};

console.log(getTotalReviewCount(book));

//array map method
//loop over an array create a copy of a new array of same length and do something to each el
/*
const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;
const getTotalReviewCount = (book) => {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
};

const essential = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essential;

// ( ) forces a return

//filter method
// loops over an array and filter out based on a condition
//can chain filters
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

//reduce
// reduce an array to one value/number
// the 0 at the end is the starting point
//acc is the current value of the final value that you want to get
const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
totalPages;

//sort method
const xx = [3, 6, 1, 7, 9];
const sorted = xx.slice().sort((a, b) => a - b);
// a - b will sort it in assending order
// a and b are always the current value and the next value
// b - a will be decending
sorted;
xx;
// will mutate original array
// make a shallow copy with .slice()

const sortedByPagesDesc = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPagesDesc;

const sortedByPagesAsc = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPagesAsc;

//immutable arrays
//add delete and update an array with out changing the original

// 1) add a book obj to an arr
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K.Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//2 delete a book obj from arr
const bookAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
bookAfterDelete;

//update

const bookAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 6 ? {...book, pages:375} : book
);
bookAfterUpdate
*/

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// // cl is shown before the res of the fetch as js has continued before the res has arrived
// console.log("showing position");

// async function getTodos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await res.json();
//   console.log(data);
//   return data;
// }

// getTodos();
