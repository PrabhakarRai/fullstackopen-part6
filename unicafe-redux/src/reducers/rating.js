const initRating = {
  good: 0,
  bad: 0,
  ok: 0,
};

const ratingReducer = (state = initRating, action) => {
  switch (action.type) {
    case 'GOOD':
      return { ...state, good: state.good + 1};
    case 'OK':
      return { ...state, ok: state.ok + 1};
    case 'BAD':
      return { ...state, bad: state.bad + 1};
    case 'ZERO':
      return initRating;
    default:
      return state;
  }
}

export default ratingReducer;