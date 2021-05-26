const CHANGE_FILTER = 'CHANGE_FILTER';

const filterReducer = (filterState = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      return { ...filterState };
    }
    default:
      return filterState;
  }
};

export default filterReducer;
