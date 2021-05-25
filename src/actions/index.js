const addBookAction = (book) => {
  return {
    type: 'CREATE_BOOK',
    payload: book,
  }
}

const removeBookAction = (book) => {
  return {
    type: 'REMOVE_BOOK',
    payload: book,
  }
}

export { addBookAction, removeBookAction };