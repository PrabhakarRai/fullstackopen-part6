import React from 'react';
import AnecdoteForm from './AnecdoteForm'
import AnecdoteList from './AnecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>Add Anecdotes</h2>
      <AnecdoteForm />
    </div>
  )
};

export default App;
