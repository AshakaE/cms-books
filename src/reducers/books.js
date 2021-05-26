const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

let index = 0;

const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      index += 1;
      return {
        ...state,
        books: {
          ...state.books,
          [index]: {
            id: index,
            title: action.payload.title,
            category: action.payload.category,
          }
        },
      };
    case REMOVE_BOOK: {
      const arrObj = Object.values(state.books).filter(
        (book) => book.id !== action.payload.id,
      );
      return { 
        ...state,
        books: { ...arrObj }
      };
    }
    default:
      return state;
  }
};

export default bookReducer;