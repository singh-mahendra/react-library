import * as actionTypes from "./types";
export const setSelectedTodo = todoId => ({
  type: actionTypes.SELECT_BOOK,
  todoId
});

export const getAllBooks = payload => ({
  type: actionTypes.GET_ALL_BOOKS,
  payload
});

export const addBook = payload => ({
  type: actionTypes.ADD_BOOK,
  payload
});
