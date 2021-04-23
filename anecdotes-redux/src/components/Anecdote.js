import React from 'react';

const Anecdote = ({ data, handleClick }) => {
  return (
    <div>
      <span>
        <b>{data.text}</b>
      </span>
      <br></br>
      <span>has {data.votes} votes.</span>
      <button onClick={handleClick}>Vote !</button>
    </div>
  )
}

export default Anecdote;
