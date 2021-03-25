import React from 'react';
import { auth } from '../firebase';


const Register = () => {
  
  // 1. Put in some inputs
  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(e.target);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    const email = e.target[0].value;
    const password = e.target[1].value;
  
    auth.createUserWithEmailAndPassword(email, password).then(response => {
      // alert('alert thank you for registering ' + email);
    })
  
  
  }

  // 2. import "auth" to this component

  
  // 3. Actually need to gaher their input details

  // 4. create the user in firebase/firestore
  
  // 5. Alert the user that they are registered


  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="email...."/>
        <input placeholder="password..."/>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
