import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdotesReducer';
import { addAnecdoteNotification, clearNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = (e) => {
    e.preventDefault();
    dispatch(createAnecdote(e.target.anecdote.value));
    dispatch(addAnecdoteNotification(e.target.anecdote.value));
    setTimeout(() => dispatch(clearNotification()), 5000);
    e.target.anecdote.value = '';
  }
  return (
    <form onSubmit={addAnecdote}>
        <input name="anecdote" type="text" required/> 
        <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm;