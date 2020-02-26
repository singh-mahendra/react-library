import * as actionTypes from "../actions/types";

const initialState = {
  allBooks: []
};

let idCounter = 0;
const booksReducer = (state, action) => {
  if (localStorage) {
    try {
      if (!state) {
        if (localStorage.getItem("bookState")) {
          state = JSON.parse(localStorage.getItem("bookState"));
        } else {
          state = initialState;
        }
      }
    } catch (error) {}
  }

  const newState = { ...state };

  switch (action.type) {
    case actionTypes.GET_ALL_BOOKS: {
      return { ...state, isLoading: true };
    }

    case actionTypes.ADD_BOOK: {
      const allBooks = newState.allBooks.slice(0);
      const book = action.payload.book;
      idCounter++;
      book.id = "book_" + idCounter;
      allBooks.push({ ...book });
      newState.allBooks = allBooks;
      break;
    }

    default:
      break;
  }

  if (localStorage) {
    localStorage.setItem("bookState", JSON.stringify(newState));
  }
  return newState;
};

export default booksReducer;
