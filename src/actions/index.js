const addBookAction = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const removeBookAction = (book) => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

export { addBookAction, removeBookAction };
