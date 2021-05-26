const CHANGE_FILTER = 'CHANGE_FILTER';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      return { 
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
