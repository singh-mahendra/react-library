import React from "react";

const BookList = props => {
  return (
    <ul>
      {props.books && props.books.length
        ? props.books.map(book => {
            return (
              <li key={book.id}>
                Book:
                <span>
                  {book.name} by {book.author}
                </span>
              </li>
            );
          })
        : "Add some books."}
    </ul>
  );
};

export default BookList;
