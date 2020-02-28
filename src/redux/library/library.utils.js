export const removeBook = (books, bookToRemove) => {
  return books.filter(book => book.id !== bookToRemove.id);
};
export const editBook = (books, bookToEdit) => {
  return books.map(book =>
    book.id === bookToEdit.id
      ? { ...bookToEdit}
      : book
  );
};