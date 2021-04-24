import anecdoteServices from '../services/anecdotes';

const initAnecdotes = [];

const anecdotesReducer = (state = initAnecdotes, action) => {
  switch (action.type) {
    case 'ADD_ANECDOTE':
      return state.concat(action.data);
    case 'VOTE_ANECDOTE':
      // const anecdote = state.find((a) => {
      //   return a.id === action.data.id;
      // });
      // anecdote.votes += 1;
      return state.map((a) => a.id !== action.data.id ? a : action.data);
    case 'INIT_ANECDOTE':
      return action.data;
    default:
      return state;
  };
};

export const initAnecdote = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes,
    })
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteServices.createNew(content)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: anecdote,
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const votes = anecdote.votes + 1;
    const updated_anecdote = await anecdoteServices.vote(anecdote.id, votes)
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: updated_anecdote,
    })
  }
}

export default anecdotesReducer;
