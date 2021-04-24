import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdotesReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = (e) => {
    e.preventDefault();
    const text = e.target.anecdote.value;
    e.target.anecdote.value = '';
    dispatch(createAnecdote(text));
    dispatch(setNotification(`Added Anecdote: ${text}`));
  }
  return (
    <form onSubmit={addAnecdote}>
        <input name="anecdote" type="text" required/> 
        <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm;