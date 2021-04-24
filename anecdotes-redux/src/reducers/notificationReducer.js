const initNotification = '';

const notificationReducer = (state = initNotification, action) => {
  switch (action.type) {
    case 'UPDATE_NOTIFI':
      return action.data;
    case 'CLEAR_NOTIFI':
        return '';
    default:
      return state;
  }
}

export const upvoteNotification = (text) => ({
  data: `Added upvote the anecdote: ${text}`,
  type: 'UPDATE_NOTIFI',
});

export const addAnecdoteNotification = (text) => ({
  data: `Anecdote Added: ${text}`,
  type: 'UPDATE_NOTIFI',
});

export const clearNotification = () => ({
  type: 'CLEAR_NOTIFI',
});

export default notificationReducer;
