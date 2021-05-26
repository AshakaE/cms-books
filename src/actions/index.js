const addBookAction = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const removeBookAction = (book) => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

const changeFilterAction = (filter) => ({
  type: 'CHANGE_FILTER',
  payload: filter,
})

export { addBookAction, removeBookAction, changeFilterAction };
