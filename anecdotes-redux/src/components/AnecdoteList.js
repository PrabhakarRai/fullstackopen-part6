import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdotesReducer';
import Anecdote from './Anecdote'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div>
      {[...anecdotes].sort((a, b) => b.votes - a.votes).map((a) => (
      <Anecdote
        key={a.id}
        data={a}
        handleClick={() => dispatch(voteAnecdote(a.id))}
      />)
      )}
    </div>
  )
}

export default AnecdoteList;