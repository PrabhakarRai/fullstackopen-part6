import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdotesReducer';
import { upvoteNotification, clearNotification } from '../reducers/notificationReducer';
import Anecdote from './Anecdote'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter === '') {
      return state.anecdotes;
    };
    return state.anecdotes.filter((a) => {
      return a.text.toLowerCase().search(state.filter.toLowerCase()) >= 0 ? true : false;
    });
  })
  const dispatch = useDispatch()
  return (
    <div>
      {[...anecdotes].sort((a, b) => b.votes - a.votes).map((a) => (
      <Anecdote
        key={a.id}
        data={a}
        handleClick={() => {
          dispatch(voteAnecdote(a.id));
          dispatch(upvoteNotification(a.text));
          setTimeout(() => dispatch(clearNotification()), 5000);
        }}
      />)
      )}
    </div>
  )
}

export default AnecdoteList;