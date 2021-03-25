import React, { useContext } from 'react'
import { UserContext } from './context/UserProvider'

const Home = () => {

const userContext = useContext(UserContext);

  return (
    
    <main>
      <h1>Welcome {userContext.user} </h1>
      <h3>Your home of the best meals in the world</h3>
    </main>
  )
}

export default Home
