import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')  // Changed to http
      .then((response) => {
        setJokes(response.data)
      })
      console.log(jokes)
      .catch((error) => {
        console.log('Error:', error)
      })
  }, [])

  return (
    <>
      <h1>Hello-Fullstack</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App
