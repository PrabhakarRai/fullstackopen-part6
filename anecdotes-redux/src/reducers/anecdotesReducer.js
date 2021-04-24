const initAnecdotes = [
  {
    id: 1,
    text: 'If it hurts, do it more often',
    votes: 0,
  },
  {
    id: 2,
    text: 'Adding manpower to a late software project makes it later!',
    votes: 0,
  },
  {
    id: 3,
    text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0,
  },
  {
    id: 4,
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0,
  },
  {
    id: 5,
    text: 'Premature optimization is the root of all evil.',
    votes: 0,
  },
  {
    id: 6,
    text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0,
  },
];

const generateId = () =>
  Math.floor(Math.random() * 1000000)

const anecdotesReducer = (state = initAnecdotes, action) => {
  switch (action.type) {
    case 'ADD_ANECDOTE':
      return state.concat(action.data);
    case 'VOTE_ANECDOTE':
      const anecdote = state.find((a) => {
        return a.id === action.data.id;
      });
      anecdote.votes += 1;
      return state.map((a) => a.id !== anecdote.id ? a : anecdote);
    default:
      return state;
  };
};

export const createAnecdote = (text) => ({
    data: {
      text,
      id: generateId(),
      votes: 0,
    },
    type: 'ADD_ANECDOTE',
  }
);

export const voteAnecdote = (id) => ({
    data: {
      id: id,
    },
    type: 'VOTE_ANECDOTE',
  }
);

export default anecdotesReducer;
