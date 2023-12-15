// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.


const books = [
        {
        title: "Psychology of Money",
        author: "Morgan",
        year: 2023
        },
        {
        title: "Abc Book",
        author: "ukuk",
        year: 2022
        },
        {
        title: "Rich dad poor dad",
        author: "Robert",
        year: 2020
        },
        {
        title: "Psychology of Money",
        author: "cSDsd",
        year: 2020
        },
        {
        title: "Entruepreneurs",
        author: "Asdvs",
        year: 2021
        },

]
    
function  logTitles(titles) {
    titles.sort();
    console.log(titles.join(","));
}

function extractTitles(books, callback) {
    const titles = books.map((book) => book.title);
    callback(titles) 
}

extractTitles(books, logTitles)





