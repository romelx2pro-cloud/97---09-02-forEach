// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// // Using anonymous function expression:
// numbers.forEach(function (num) {
//   console.log(num * 2);
// })

// function printTriple(n) {
//   console.log(n * 3);
// }

// // Using a pre-defined function:
// numbers.forEach(printTriple);

// // Using the index:
// numbers.forEach(function (num, idx) {
//   console.log(idx, num);
// });

// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   }
// ]

// // Printing all book titles using forEach:
// books.forEach(function (book) {
//   console.log(book.title.toUpperCase())
// })

// // Printing all book titles using for...of:
// for (let book of books) {
//   console.log(book.title.toUpperCase())
// }

// // Printing all book titles using for loop:
// for (let i = 0; i < books.length; i++) {
//   console.log(books[i].title.toUpperCase())
// }
// const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// n.forEach(function (params, i) {
//   console.log(params, i);
// });
// n.forEach(function (params) {
//   if (params % 2 === 0) {
//     // console.log(params);
//   }
// });
// function printTriple(params) {
//   // return params * 3;
//   // console.log(params * 3);
// }
// n.forEach(printTriple);
// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//   },
// ];
// // books.forEach(function (params) {
// //   console.log(params.rating);
// // });
// for (const b of books) {
//   console.log(b.title);
// }
const n = [1, 2, 3];
n.forEach(function (params, i) {
  console.log(i, params);
});
n.forEach(printTriple);
function printTriple(params) {
  // console.log(params * 3);
}
const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];
books.forEach(function (book) {
  // console.log(book.title.toUpperCase());
});
for (const b of books) {
  // console.log(b.title.toUpperCase());
}

for (let i = 0; i < books.length; i++) {
  const element = books[i];
  // console.log(element.title.toUpperCase());
}
