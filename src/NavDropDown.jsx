import React, { useContext } from 'react';
import { UserContext } from './context/UserProvider';

const NavDropDown = () => {

  const userContext = useContext(UserContext);

  return (
    <div>
      <h3>{userContext.user} (dropdown)</h3>
    </div>
  )
}

export default NavDropDown
