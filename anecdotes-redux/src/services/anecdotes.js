import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (text) => {
  const data = {
    text,
    votes: 0,
  }
  const response = await axios.post(baseUrl, data)
  return response.data
}

const vote = async (id, votes) => {
  const response = await axios.patch(`${baseUrl}/${id}`, { votes })
  return response.data
}

const anecdoteServices = {
  getAll,
  createNew,
  vote,
}

export default anecdoteServices