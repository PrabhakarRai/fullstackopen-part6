const initFilter = '';

const filterReducer = (state = initFilter, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.data;
    case 'CLEAR_FILTER':
        return '';
    default:
      return state;
  }
}

export const updateFilter = (text) => ({
  data: text,
  type: 'SET_FILTER',
});

export const clearFilter = () => ({
  type: 'CLEAR_FILTER',
});

export default filterReducer;
