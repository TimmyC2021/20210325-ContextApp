import React, {useContext} from 'react';
import { auth } from './firebase';
import { UserContext } from './context/UserProvider';

const Login = () => {

  const userContext = useContext(UserContext);

const handleSubmit = (e) => {


  e.preventDefault();

  console.log(e.target);
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  const email = e.target[0].value;
  const password = e.target[1].value;

  auth.signInWithEmailAndPassword(email, password).then(response => {
    userContext.setUser(response.currentUser.email);
    // alert('alert thank you for registering ' + email);
  })
}


  return (
    
    <form onSubmit={handleSubmit}>
      <input placeholder="email...."/>
      <input placeholder="password..."/>
      <button type='submit'>Login</button>
    </form>
    
  )
}

export default Login
