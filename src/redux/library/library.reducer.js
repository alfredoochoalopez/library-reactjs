import LibraryActionTypes from "./library.types";
import { removeBook, editBook } from "./library.utils";
import LibraryData from "./library.data";
const INITIAL_STATE = {
  books: LibraryData
};

const libraryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LibraryActionTypes.REMOVE_BOOK:
      return {
        ...state,
        books: removeBook(state.books, action.payload)
      };
    case LibraryActionTypes.EDIT_BOOK:
      return {
        ...state,
        books: editBook(state.books, action.payload)
      };
    case LibraryActionTypes.RESET_LIBRARY:
      return {
        ...state,
        books: LibraryData
      };
    default:
      return state;
  }
};

export default libraryReducer;
