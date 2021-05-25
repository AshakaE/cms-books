const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const index = 0;

const bookReducer = (state = {}, action) => {
  switch(action.type){
    case CREATE_BOOK:
      return {
        ...state,
        newBook: {
          id: ++index,
          title: action.payload.title,
          category: action.payload.category,
        }
      }
      break;
    case REMOVE_BOOK:
      return state.map(book => { book.id != action.payload.id })
      break;
    default:
      return state
      break;
  }
}