import LibraryActionTypes from "./library.types";

export const removeBook = book => ({
  type: LibraryActionTypes.REMOVE_BOOK,
  payload: book
});

export const editBook = book => ({
  type: LibraryActionTypes.EDIT_BOOK,
  payload: book
});

export const resetLibrary  = () =>({
  type: LibraryActionTypes.RESET_LIBRARY
})