import React, { createContext, useState } from 'react';
import NavBar from '../NavBar.jsx';
import Login from '../Login.jsx';
import Home from '../Home.jsx';
import Register from '../components/Register';

// 2. We need to create a context
export const UserContext = createContext({});

const UserProvider = () => {

  const [user, setUser] = useState("")

  const data ={ 
    user: user,
    setUser: setUser

  }

// 1. This is the data we want to be shARED THROUGHOUT THE APP.. hOW DO WE DO THIS

// 3. We nedd to provide the data to our descendants like below
  return (
    <UserContext.Provider value={data}>
      <NavBar />
      <Home />
      <Login />
      <Register />
    </UserContext.Provider>
  )
}

export default UserProvider;
