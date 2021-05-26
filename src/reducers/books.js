const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

let index = 0;

const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      index += 1;
      return {
        ...state,
        [index]: {
          id: index,
          title: action.payload.title,
          category: action.payload.category,
        },
      };
    case REMOVE_BOOK:
      return Object.values(state).map((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
