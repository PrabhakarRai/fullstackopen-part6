import React from 'react';
import AnecdoteForm from './AnecdoteForm'
import AnecdoteList from './AnecdoteList'
import Notificaton from './Notification';
import Filter from './Filter';

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notificaton />
      <Filter />
      <AnecdoteList />
      <h2>Add Anecdotes</h2>
      <AnecdoteForm />
    </div>
  )
};

export default App;
