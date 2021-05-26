const addBookAction = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const removeBookAction = (book) => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

export { addBookAction, removeBookAction, changeFilter };
