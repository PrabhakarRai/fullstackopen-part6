import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdotesReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = (e) => {
    e.preventDefault();
    dispatch(createAnecdote(e.target.anecdote.value));
    e.target.anecdote.value = '';
  }
  return (
    <form onSubmit={addAnecdote}>
        <input name="anecdote" type="text" /> 
        <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm;