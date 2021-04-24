import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote, initAnecdote } from '../reducers/anecdotesReducer';
import { setNotification } from '../reducers/notificationReducer';
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
  
  useEffect(() => {
    dispatch(initAnecdote());
  }, [dispatch]);

  return (
    <div>
      {[...anecdotes].sort((a, b) => b.votes - a.votes).map((a) => (
      <Anecdote
        key={a.id}
        data={a}
        handleClick={() => {
          dispatch(voteAnecdote(a));
          dispatch(setNotification(`Upvote added: ${a.text}`));
        }}
      />)
      )}
    </div>
  )
}

export default AnecdoteList;