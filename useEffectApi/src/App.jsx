import { useState, useEffect } from 'react'
import User from './components/User'


function App() {
  const [users,setUsers] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then (json => {
      console.log(json.users)
      setUsers(json.users)
    })
}, [])

  return (
    <div className="App">
      <h3>Olá React!!!</h3>
      {users.map(user => {
        return <User key={user.id} user={user}/>
      })}
    </div>
  )
}

export default App
